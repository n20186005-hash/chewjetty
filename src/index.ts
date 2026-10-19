interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const isProductionHost = url.hostname === 'chewjetty.org' || url.hostname === 'www.chewjetty.org';
    if (isProductionHost && (url.protocol !== 'https:' || url.hostname !== 'chewjetty.org')) {
      url.protocol = 'https:';
      url.hostname = 'chewjetty.org';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(response.body, { status: 404, headers });
  },
};
