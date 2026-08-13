export const SITE = {
  title: 'Chew Jetty (Jeti Chew) | Panduan Pelancong George Town, Pulau Pinang',
  name: 'Chew Jetty',
  shortTitle: 'Chew Jetty',
  description:
    'Ketahui segalanya tentang Chew Jetty (Jeti Chew), jambatan kampung atas air warisan di George Town, Pulau Pinang. Maklumat pengangkutan, makanan berhampiran, galeri foto, soalan lazim & senarai perjalanan.',
  locale: 'ms',
  lang: 'ms',
  country: 'MY',
  mapsUrl: 'https://maps.app.goo.gl/fa5EV5aNcFuW1jhL8',
  ga4Id: 'G-HXM22WWPKP',
} as const;

export const KEY_INFO = [
  { label: 'Alamat', value: 'Pengkalan Weld, 10300 George Town, Pulau Pinang' },
  { label: 'Waktu Operasi', value: 'Setiap hari 09:00 – 21:00' },
  { label: 'Yuran Masuk', value: 'Percuma' },
  { label: 'Tempoh Cadangan', value: '1 – 2 jam' },
  { label: 'Penilaian Google Maps', value: '4.1 / 5' },
  { label: 'Koordinat', value: '5.4127° N, 100.3398° E' },
] as const;

export const TICKET_INFO = {
  title: 'Tiket & Yuran',
  intro:
    'Chew Jetty ialah kawasan kejiranan hidup yang terbuka untuk umum. Anda boleh berjalan di sepanjang jambatan kayu dan menikmati suasana tepi laut tanpa sebarang yuran masuk.',
  items: [
    { label: 'Kemasukan ke jeti', price: 'Percuma', note: 'Akses 24 jam ke laluan utama; kedai buka 09:00–21:00' },
    { label: 'Lawatan kendiri', price: 'Percuma', note: 'Tiada pakej lawatan berpandu rasmi di jeti' },
    { label: 'Fotografi', price: 'Percuma', note: 'Ambil gambar pemandangan, perahu dan rumah palafit' },
    { label: 'Tandas awam', price: 'Percuma / sedikit sumbangan', note: 'Bergantung kepada kemudahan tempatan' },
  ],
} as const;

export const PARKING_INFO = {
  title: 'Maklumat Tempat Letak Kereta',
  intro:
    'George Town sentiasa sesak. Parkir berhampiran Chew Jetty adalah terhad, jadi rancang awal atau gunakan pengangkutan awam.',
  options: [
    {
      name: 'Letak kereta tepi jalan',
      detail: 'Boleh didapati di sepanjang Jalan Pantai / Weld Quay. Tempat adalah terhad dan biasanya memerlukan kupon parking (RM0.60–RM2.00 sejam pada hari bekerja).',
    },
    {
      name: 'Tempat letak kereta berbayar berhampiran',
      detail: 'Terdapat beberapa lot persendirian dalam lingkungan 5–10 minit berjalan kaki. Yuran biasanya RM3–RM5 untuk tempoh singkat.',
    },
    {
      name: 'Garis bas CAT Percuma',
      detail: 'Bas CAT (Central Area Transit) Rapid Penang yang percuma mempunyai perhentian berhampiran. Ini adalah pilihan terbaik untuk mengelakkan tekanan memandu.',
    },
  ],
  tips: [
    'Elakkan memandu ke George Town pada hujung minggu dan cuti umum jika boleh.',
    'Jika anda datang dari Butterworth, feri ke George Town lebih mudah daripada memandu merentasi jambatan.',
  ],
} as const;

export const BEST_TIME = {
  title: 'Masa Terbaik & Cadangan Lawatan',
  intro:
    'Chew Jetty menawarkan suasana yang berbeza sepanjang hari. Pagi sesuai untuk gambar yang tenang, petang pula menawarkan cahaya matahari terbenam yang cantik.',
  periods: [
    {
      time: 'Pagi (09:00 – 11:00)',
      description: 'Ketika sesak pelancong masih rendah, sesuai untuk gambar jambatan kayu tanpa orang ramai. Cuaca juga lebih selesa.',
      rating: 'Sangat disyorkan',
    },
    {
      time: 'Tengah hari (12:00 – 15:00)',
      description: 'Kedai dan gerai makanan sibuk, tetapi cuaca mungkin panas. Pastikan anda memakai topi dan tabir surya.',
      rating: 'Padat',
    },
    {
      time: 'Petang (17:00 – 19:30)',
      description: 'Cahaya lembut, kedai hidangan ringan buka, dan anda boleh melihat matahari terbenam di atas air.',
      rating: 'Sangat disyorkan',
    },
  ],
  duration: '1 – 2 jam mencukupi untuk berjalan santai, ambil gambar, dan minum petang di tepi air.',
} as const;

export const FOOD_SPOTS = [
  {
    name: 'Penang Asam Laksa',
    description: 'Laksa masam berperisa ikan yang merupakan hidangan ikonik Pulau Pinang. Boleh didapati di gerai berhampiran jeti dan Jalan Balik Pulau.',
    tags: ['Makanan ikonik', 'Berhampiran'],
  },
  {
    name: 'Char Koay Teow',
    description: 'Mee kicap goreng dengan taugeh, udang, kerang dan telur, dimasak dengan api senggang untuk rasa "wok hei".',
    tags: ['Wajib cuba', 'Jalanan'],
  },
  {
    name: 'Cendol Pulau Pinang',
    description: 'Pencuci mulut sejuk dengan cendol hijau, santan, gula Melaka dan ais kacang — penawar cuaca panas.',
    tags: ['Pencuci mulut', 'Segar'],
  },
  {
    name: 'Hainanese Chicken Rice',
    description: 'Nasi ayam Hainan yang ringkas tetapi lazat, mudah didapati di kedai kopi sekitar George Town.',
    tags: ['Kedai kopi', 'Santai'],
  },
  {
    name: 'Nyonya Kuih',
    description: 'Pelbagai kuih tradisional berwarna-warni yang mencerminkan warisan Baba Nyonya Pulau Pinang.',
    tags: ['Tradisional', 'Snek'],
  },
  {
    name: 'Wantan Mee',
    description: 'Mee kuning dengan sayur-sayuran, wantan, dan daging babi panggang atau ayam.',
    tags: ['Mee', 'Tempatan'],
  },
] as const;

export const TRANSPORT = [
  {
    mode: 'Dari Lapangan Terbang Antarabangsa Pulau Pinang (PEN)',
    icon: 'plane',
    summary: 'Jarak kira-kira 20 km; perjalanan 30–45 minit bergantung pada trafik.',
    options: [
      'Grab / Teksi: Paling mudah, kos kira-kira RM25–RM40.',
      'Bas Rapid Penang 401E: Dari lapangan terbang ke George Town; turun berhampiran Pengkalan Weld, kemudian berjalan kaki.',
    ],
  },
  {
    mode: 'Bas Rapid Penang',
    icon: 'bus',
    summary: 'Pelbagai laluan menghubungkan George Town. Berhenti berhampiran Weld Quay dan berjalan kaki 5 minit.',
    options: [
      'CAT Percuma: Bas perkhidmatan percuma di pusat bandar dengan perhentian berhampiran jeti.',
      'Laluan 10, 11, 12, 101, 102, 103, 104, 201, 202, 203, 204, 301, 302, 303, 401, 401E, 502.',
    ],
  },
  {
    mode: 'Feri Pulau Pinang',
    icon: 'ferry',
    summary: 'Dari Butterworth ke George Town melalui Feri Pulau Pinang. Sesuai untuk pelancong dari tanah besar.',
    options: [
      'Berjalan kaki dari Jeti Swettenham ke Pengkalan Weld (10–15 minit).',
      'Sambung dengan bas CAT Percuma untuk perjalanan percuma ke jeti.',
    ],
  },
  {
    mode: 'Grab / Teksi',
    icon: 'taxi',
    summary: 'Paling selesa terutama pada waktu malam atau dengan keluarga.',
    options: [
      'Tetapkan destinasi "Chew Jetty, Pengkalan Weld, George Town".',
      'Perkhidmatan teksi juga boleh ditempah di hotel atau di tepi jalan.',
    ],
  },
] as const;

export const NEARBY_ATTRACTIONS = [
  {
    name: 'Street Art Lebuh Armenian',
    distance: '5 minit berjalan kaki',
    description: 'Mural ikonik Ernest Zacharevic dan suasana lorong-lorong warisan George Town.',
  },
  {
    name: 'Khoo Kongsi (Leong San Tong)',
    distance: '10 minit berjalan kaki',
    description: 'Rumah ibu kaum Cina yang dihiasi ukiran kayu dan seni bina Cina yang megah.',
  },
  {
    name: 'Kubu Cornwallis',
    distance: '12 minit berjalan kaki',
    description: 'Kubu abad ke-18 dengan mercu tanda bertembakan meriam dan taman bersejarah.',
  },
  {
    name: 'Masjid Kapitan Keling',
    distance: '12 minit berjalan kaki',
    description: 'Masjid Mughal yang indah, salah satu mercu tanda agama bersejarah George Town.',
  },
  {
    name: 'Little India',
    distance: '10 minit berjalan kaki',
    description: 'Kedai rempah, perhiasan, makanan India, dan kuil berwarna-warni.',
  },
  {
    name: 'Jeti-Jeti Puak (Clan Jetties) Lain',
    distance: 'Bersebelahan',
    description: 'Jelajahi Tan Jetty, Lee Jetty dan Lim Jetty untuk perspektif berbeza kampung atas air.',
  },
] as const;

export const FAQS = [
  {
    question: 'Adakah Chew Jetty dibuka kepada orang ramai?',
    answer:
      'Ya, Chew Jetty ialah komuniti kediaman hidup yang dibuka kepada pelancong. Laluan utama boleh dilalui pada bila masa, tetapi kedai dan gerai biasanya beroperasi dari 09:00 hingga 21:00.',
  },
  {
    question: 'Berapa kos tiket masuk ke Chew Jetty?',
    answer:
      'Tiada yuran masuk. Chew Jetty percuma untuk dilawati. Anda hanya perlu membayar jika membeli makanan, minuman, atau cenderamata di kedai tempatan.',
  },
  {
    question: 'Berapa lama masa yang disyorkan untuk melawat Chew Jetty?',
    answer:
      'Kebanyakan pelancong menghabiskan 1 hingga 2 jam. Masa tambahan diperlukan jika anda mahu berehat di kafe tepi air atau mengambil banyak gambar.',
  },
  {
    question: 'Adakah tempat letak kereta berhampiran Chew Jetty?',
    answer:
      'Terdapat letak kereta tepi jalan dan beberapa lot persendirian berhampiran. Walau bagaimanapun, tempat adalah terhad; bas CAT Percuma atau Grab adalah pilihan yang lebih mudah.',
  },
  {
    question: 'Bagaimana untuk ke Chew Jetty dari lapangan terbang Pulau Pinang?',
    answer:
      'Pilihan termasuk Grab/teksi (30–45 minit), atau bas Rapid Penang 401E ke George Town diikuti dengan berjalan kaki singkat.',
  },
  {
    question: 'Bolehkah saya melihat matahari terbenam di Chew Jetty?',
    answer:
      'Ya, bahagian hujung jeti menawarkan pemandangan air terbuka dan adalah lokasi yang popular untuk menikmati matahari terbenam.',
  },
] as const;

export const ITINERARY_ITEMS = [
  { id: 'walk-jetty', title: 'Berjalan di sepanjang jambatan kayu' },
  { id: 'visit-shrine', title: 'Lihat tokong di hujung jeti' },
  { id: 'try-laksa', title: 'Rasa Asam Laksa Pulau Pinang' },
  { id: 'char-koay-teow', title: 'Makan Char Koay Teow' },
  { id: 'sunset-photo', title: 'Ambil gambar matahari terbenam' },
  { id: 'clan-jetties', title: 'Lawat Tan Jetty & Lee Jetty bersebelahan' },
  { id: 'street-art', title: 'Jelajahi Street Art Lebuh Armenian' },
  { id: 'khoo-kongsi', title: 'Lihat Khoo Kongsi' },
] as const;

export const GALLERY: ReadonlyArray<{ src: string; alt: string }> = Array.from({ length: 19 }, (_, i) => ({
  src: `/gallery/chew-jetty-${i + 1}.jpg`,
  alt: `Gambar Chew Jetty, George Town (${i + 1})`,
}));

export const HISTORY_TIMELINE = [
  {
    year: 'Pertengahan abad ke-19',
    title: 'Penghijrahan orang Hokkien dari Fujian',
    text: 'Nenek moyang keluarga Chew berhijrah dari Kampung Xinglingshe, Daerah TongAn, Quanzhou, Fujian, China ke George Town. Mereka bekerja sebagai kuli pelabuhan, nelayan dan peniaga kecil di sepanjang Pengkalan Weld.',
  },
  {
    year: 'Akhir abad ke-19',
    title: 'Pembinaan jeti puak — "satu nama keluarga, satu jeti"',
    text: 'Kerabat daripada nama keluarga yang sama membina jambatan kayu memanjang ke laut dan mendirikan rumah palafit di kedua-dua belahnya. Konsep sebegini dianggap antara yang terakhir seumpamanya di dunia; dahulunya terdapat beberapa buah jeti puak, kini enam yang kekal termasuk Chew Jetty.',
  },
  {
    year: 'Abad ke-20',
    title: 'Kehidupan turun-temurun di atas air',
    text: 'Berpuluh-puluh keluarga membesarkan anak di atas jeti. Kampung atas air ini lengkap dengan tokong, kedai runcit dan tempat berlabuh bot nelayan. Sebahagian jeti lain dibongkar dari semasa ke semasa bagi memberi laluan kepada pembangunan bandar.',
  },
  {
    year: '7 Julai 2008',
    title: 'Pengiktirafan Tapak Warisan Dunia UNESCO',
    text: 'George Town, bersama-sama dengan Melaka, diiktiraf sebagai Tapak Warisan Dunia UNESCO ("Historic Cities of the Straits of Malacca"). Jeti-jeti puak termasuk Chew Jetty diiktiraf sebagai warisan hidup yang dilindungi di bawah zon teras tapak warisan.',
  },
  {
    year: 'Hari ini',
    title: 'Komuniti hidup di tengah-tengah pelancongan',
    text: 'Kira-kira 75 unit rumah masih didiami. Penduduk meneruskan rutin harian — mencuci, menjemur pakaian, membaiki bot — sambil berkongsi ruang jeti dengan pelancong dari seluruh dunia.',
  },
] as const;

export const FOLK_FAITH = {
  title: 'Kepercayaan & Pesta Tradisi',
  intro:
    'Kehidupan penduduk jeti berakar pada kepercayaan masyarakat Hokkien. Beberapa perayaan dan amalan masih diamalkan secara turun-temurun sehingga kini.',
  items: [
    {
      title: 'Pai Thian Kong (拜天公) — Hari jadi Maharaja Jade',
      text: 'Pada malam sebelum hari ke-9 Tahun Baru Cina, masyarakat Hokkien meraikan hari jadi Thian Kong (Maharaja Jade) dengan upacara besar. Di hadapan Chew Jetty, satu meja panjang disusun penuh dengan korban — babi panggang yang disalut kertas merah, buah-buahan, dulang hadiah dan kertas sembahyang. Upacara kolektif ini dianggap antara perayaan paling meriah di Pulau Pinang.',
    },
    {
      title: 'Tokong di hujung jeti',
      text: 'Di hujung jeti terdapat tokong kecil yang didedikasikan kepada dewa laut seperti Mazu (Mak Co), dewi pelindung nelayan. Penduduk dan nelayan berdoa di sini sebelum memulakan perjalanan ke laut — sebuah amalan yang berusia lebih satu abad.',
    },
    {
      title: 'Pesta Hantu Lapar (Zhong Yuan)',
      text: 'Pada bulan ke-7 kalendar Cina, penduduk mengadakan upacara menghormati roh nenek moyang: membakar kertas sembahyang, menyediakan hidangan korban, dan kadangkala menganjurkan persembahan opera atau wayang di kawasan jeti.',
    },
    {
      title: 'Tahun Baru Cina & Chap Goh Meh',
      text: 'Semasa Tahun Baru Cina, jeti dihiasi lampu dan sepanduk merah. Pada Chap Goh Meh (malam ke-15), perayaan besar dengan pertunjukan bunga api dan perarakan diadakan di sepanjang Weld Quay, menarik ribuan pengunjung.',
    },
  ],
} as const;

export const ARCHITECTURE = {
  title: 'Seni Bina Rumah Palafit',
  intro:
    'Bentuk seni bina Chew Jetty lahir daripada keperluan hidup di muara laut — sederhana tetapi penuh kebijaksanaan adaptasi.',
  features: [
    {
      title: 'Tiang kayu ke dasar laut',
      text: 'Rumah-rumah didirikan di atas tiang kayu yang ditanam terus ke dasar laut. Ketika air pasang, paras air boleh naik hingga hampir ke lantai rumah.',
    },
    {
      title: 'Laluan kayu berjalin',
      text: 'Jambatan utama terdiri daripada papan kayu berjalin yang memanjang lebih 300 meter. Sebahagian laluan telah diperluas dan diberi bumbung bagi keselesaan penduduk dan peniaga.',
    },
    {
      title: 'Ruang komuniti yang lengkap',
      text: 'Di atas jeti wujud tokong, gerai, tempat menjemur pakaian, tempat mandi, serta pangkalan bot — sebuah kampung lengkap yang terapung di atas air.',
    },
    {
      title: 'Pemeliharaan warisan',
      text: 'Sebagai sebahagian Tapak Warisan Dunia, sebarang pengubahsuaian dan pembaikan tertakluk kepada garis panduan pemuliharaan George Town World Heritage Incorporated untuk mengekalkan ciri asalnya.',
    },
  ],
} as const;

export const FILM_SITES = [
  {
    title: 'Ice Kacang Puppy Love (初恋红豆冰, 2010)',
    text: 'Filem tempatan ikonik arahan Aniu yang dirakam sebahagian besarnya di Chew Jetty. Rumah penyanyi Eric Moo (巫启贤) di 59A Chew Jetty menjadi antara lokasi penggambaran. Kejayaan filem ini memperkenalkan jeti kepada khalayak yang lebih luas.',
  },
  {
    title: 'Penggambaran filem, drama & iklan',
    text: 'Suasana unik kampung atas air menjadikan Chew Jetty pilihan penggambaran pelbagai filem, drama televisyen, video muzik dan iklan daripada produksi tempatan dan luar negara sepanjang tahun.',
  },
] as const;

export const VISITOR_ETIQUETTE = {
  title: 'Etika Pelawat',
  intro:
    'Chew Jetty ialah rumah kepada kira-kira 75 keluarga. Ia bukan taman tema — penduduk benar-benar tinggal di sini. Hormati ruang mereka supaya hubungan harmoni antara penduduk dan pelancong dapat dikekalkan.',
  items: [
    'Layanlah jeti sebagai kejiranan kediaman; kekalkan suasana tenang, terutamanya awal pagi dan lewat petang.',
    'Jangan mengambil gambar penduduk secara peribadi, bahagian dalam rumah, atau barang peribadi tanpa kebenaran.',
    'Jangan memasuki rumah atau halaman peribadi penduduk; kekal di laluan awam.',
    'Buang sampah ke dalam tong yang disediakan dan bawa pulang sampah anda sendiri.',
    'Laluan kayu boleh menjadi licin selepas hujan — berjalan dengan berhati-hati dan pakai kasut yang sesuai.',
    'Di tokong, elakkan bising dan ikuti amalan serta pantang larang tempatan.',
  ],
} as const;

export const SOURCES = [
  {
    label: 'UNESCO World Heritage Centre',
    url: 'https://whc.unesco.org/en/list/1223/',
    note: 'Melaka and George Town: Historic Cities of the Straits of Malacca',
  },
  {
    label: 'George Town World Heritage Incorporated (GTWHI)',
    url: 'https://gtwhi.com.my/',
    note: 'Penerbitan rasmi mengenai sejarah dan pemuliharaan jeti-jeti puak George Town',
  },
  {
    label: 'Google Maps',
    url: SITE.mapsUrl,
    note: 'Maklumat lokasi, waktu operasi dan ulasan pengunjung',
  },
] as const;
