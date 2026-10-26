import Asparagus_7 from '../assets/products/Asparagus_7.jpg';
import Bawang_Merah_4 from '../assets/products/Bawang_Merah_4.jpg';
import Bayam_Hijau_6 from '../assets/products/Bayam_Hijau_6.jpg';
import Brokoli_2 from '../assets/products/Brokoli_2.jpg';
import Cabai_Merah_4 from '../assets/products/Cabai_Merah_4.jpg';
import Daun_Kelor_10 from '../assets/products/Daun_Kelor_10.jpg';
import Jagung_1 from '../assets/products/Jagung_1.jpg';
import Jahe_1 from '../assets/products/Jahe_1.jpg';
import Jamur_Tiram_7 from '../assets/products/Jamur_Tiram_7.jpg';
import Kacang_Panjang_10 from '../assets/products/Kacang_Panjang_10.jpg';
import Kale_1 from '../assets/products/Kale_1.jpg';
import Kangkung_2 from '../assets/products/Kangkung_2.jpg';
import Kentang_2 from '../assets/products/Kentang_2.jpg';
import Labu_Siam_4 from '../assets/products/Labu_Siam_4.jpg';
import Okra_1 from '../assets/products/Okra_1.jpg';
import Pakcoy_10 from '../assets/products/Pakcoy_10.jpg';
import Paprika_6 from '../assets/products/Paprika_6.jpg';
import Selada_3 from '../assets/products/Selada_3.jpg';
import Tomat_10 from '../assets/products/Tomat_10.jpg';
import Wortel_10 from '../assets/products/Wortel_10.jpg';

export type Stat = { label: string; value: string };
export type DiagramStep = { title: string; desc: string };
export type Diagram = { title: string; steps: DiagramStep[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: ImageMetadata;
  stats: Stat[];
  diagram?: Diagram;
  content: string;
};

export const articles: Article[] = [
  {
    slug: 'cara-memilih-wortel-berkualitas-untuk-restoran',
    title: 'Cara Memilih Wortel Berkualitas untuk Pasokan Restoran',
    excerpt: 'Wortel Grade A punya warna oranye pekat, tekstur padat, dan tidak mudah patah. Simak panduan sortir untuk dapur profesional.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-01-05',
    readTime: 7,
    image: Wortel_10,
    stats: [
      { label: 'Diameter ideal', value: '2–3 cm' },
      { label: 'Suhu simpan', value: '0–4°C' },
      { label: 'Beta-karoten', value: '±8.3 mg/100g' },
      { label: 'Kelembapan', value: '90–95%' },
    ],
    diagram: {
      title: 'Alur Sortir Wortel Grade A',
      steps: [
        { title: 'Panen pagi', desc: 'Dipanen sebelum matahari terik untuk menjaga kadar air.' },
        { title: 'Cuci & sortir', desc: 'Sortir manual: buang yang retak, pucat, atau bengkok.' },
        { title: 'Pre-cooling', desc: 'Suhu diturunkan ke 4°C dalam 2 jam setelah panen.' },
        { title: 'Packing', desc: 'Dikemas dalam krat berpori agar sirkulasi udara lancar.' },
        { title: 'Delivery', desc: 'Dikirim hari sama dengan kendaraan berpendingin.' },
      ],
    },
    content: `
Wortel adalah salah satu komoditas paling sering dipesan oleh restoran, hotel, dan katering. Namun tidak semua wortel layak masuk dapur profesional. Perbedaan kualitas bisa memengaruhi rasa, tekstur, hingga konsistensi plating. Artikel ini merangkum kriteria yang dipakai tim QC kami saat menyortir wortel sebelum dikirim ke mitra B2B, mulai dari warna, tekstur, ukuran, hingga tips penyimpanan di chiller. Panduan ini kami susun berdasarkan pengalaman bertahun-tahun menyuplai dapur hotel dan restoran di Jabodetabek, sehingga setiap poin benar-benar aplikatif di lapangan, bukan hanya teori.

## Warna Oranye Pekat Merata
Wortel Grade A memiliki warna oranye cerah yang merata dari pangkal hingga ujung. Warna pucat biasanya menandakan kandungan beta-karoten rendah dan kemungkinan dipanen terlalu muda. Untuk restoran, warna yang konsisten memudahkan plating dan memberi kesan segar di piring tamu. Warna oranye pekat juga menjadi indikator bahwa wortel ditanam di tanah dengan paparan sinar matahari cukup dan dipanen pada usia optimal, biasanya 70–80 hari setelah tanam, tergantung varietas.

## Tekstur Padat dan Tidak Mudah Patah
Pegang wortel dan tekan perlahan. Wortel segar terasa keras dan padat. Jika terasa lembek atau mudah bengkok, berarti kadar air sudah turun atau penyimpanan terlalu lama. Wortel seperti ini sebaiknya tidak dipakai untuk menu yang menonjolkan tekstur, seperti salad atau sticks. Dalam pengujian sederhana, wortel Grade A akan "patah" dengan bunyi renyah saat dibengkokkan, sedangkan wortel yang sudah lama akan bengkok tanpa patah karena seratnya sudah kehilangan elastisitas alami.

## Ukuran Seragam
Untuk kebutuhan restoran, ukuran seragam (biasanya diameter 2–3 cm) memudahkan proses potong dan menghasilkan yield lebih konsisten. Ukuran yang seragam juga mempermudah porsi per piring, terutama untuk menu fine dining yang butuh presisi. Untuk kebutuhan katering massal, ukuran seragam memungkinkan penggunaan mesin potong otomatis sehingga proses produksi jauh lebih cepat dan hasilnya konsisten antar batch.

## Bebas Retak dan Luka
Retakan pada permukaan wortel membuka jalan masuk bakteri dan mempercepat pembusukan. Hindari wortel dengan luka gores atau lubang bekas hama. Sortir manual tetap yang paling akurat untuk mendeteksi cacat kecil, karena mesin sortir sering melewatkan retakan halus yang baru terlihat setelah beberapa hari penyimpanan. Retakan tipis yang tidak terlihat di awal bisa menyebabkan busuk dalam 3–5 hari.

## Daun Hijau Segar (Jika Masih Menempel)
Daun yang masih hijau dan tegak menandakan wortel baru dipanen. Jika daun sudah layu atau menguning, wortel sudah lama disimpan dan kesegarannya menurun. Untuk pengiriman jarak jauh, daun biasanya sudah dipotong untuk mengurangi penguapan dan memperpanjang umur simpan, tetapi bagian pangkal daun yang masih segar tetap menjadi indikator penting.

## Tips Penyimpanan
Simpan wortel di chiller bersuhu 0–4°C dengan kelembapan tinggi. Jangan dicuci sebelum disimpan karena kelembapan berlebih memicu jamur. Jika ingin disimpan lebih lama, wortel bisa di-blanch lalu dibekukan. Untuk pemakaian harian, wortel sebaiknya disimpan dalam kantong plastik berlubang atau kontainer berpori agar tetap "bernafas" dan tidak berkeringat.

## Kesimpulan
Wortel Grade A bukan sekadar soal penampilan, tetapi kombinasi warna, tekstur, ukuran, dan kesegaran yang berdampak langsung ke kualitas menu. Dengan memahami enam kriteria di atas, tim purchasing dan chef bisa memilih wortel yang benar-benar layak untuk dapur profesional. CV Green Fresh Cipanas menyortir wortel secara manual sebelum dikirim, memastikan hanya Grade A yang sampai ke dapur Anda.
    `,
  },
  {
    slug: 'manfaat-brokoli-untuk-menu-sehat',
    title: 'Manfaat Brokoli untuk Menu Sehat Hotel & Restoran',
    excerpt: 'Brokoli kaya serat, vitamin C, dan senyawa antioksidan. Cocok jadi menu andalan untuk tamu yang peduli kesehatan.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-08',
    readTime: 6,
    image: Brokoli_2,
    stats: [
      { label: 'Vitamin C', value: '89 mg/100g' },
      { label: 'Serat', value: '2.6 g/100g' },
      { label: 'Kalori', value: '34 kkal/100g' },
      { label: 'Sulforaphane', value: 'Tinggi' },
    ],
    diagram: {
      title: 'Cara Blanch Brokoli yang Benar',
      steps: [
        { title: 'Cuci bersih', desc: 'Rendam air garam 5 menit untuk membunuh ulat kecil.' },
        { title: 'Didihkan air', desc: 'Air + garam 1%, api besar.' },
        { title: 'Blanch 2–3 menit', desc: 'Jangan lebih, agar warna tetap hijau.' },
        { title: 'Ice bath', desc: 'Rendam air es 2 menit untuk hentikan proses masak.' },
        { title: 'Tiriskan', desc: 'Siap diolah atau disimpan di chiller.' },
      ],
    },
    content: `
Brokoli telah lama menjadi primadona di menu sehat. Bagi hotel dan restoran, komoditas ini bukan hanya soal gizi, tetapi juga soal daya tarik visual di piring. Warna hijau cerahnya membuat menu terlihat lebih segar dan menggugah selera. Artikel ini membahas kandungan gizi brokoli, alasan restoran menyukainya, teknik memasak yang tepat, cara penyimpanan, hingga beberapa menu populer yang bisa dikembangkan menjadi signature dish.

## Kandungan Gizi Brokoli
Brokoli kaya vitamin C, serat larut, folat, dan vitamin K. Senyawa sulforaphane yang terkandung di dalamnya dikenal sebagai antioksidan kuat. Tidak heran brokoli sering masuk daftar superfood yang direkomendasikan untuk menu sehat. Dalam 100 gram brokoli segar, kandungan vitamin C-nya hampir setara dengan jeruk, sementara kalorinya sangat rendah, sehingga cocok untuk menu diet dan menu detoks.

## Kenapa Restoran Menyukainya
Brokoli mempertahankan warna hijau cerah setelah di-blanch, sehingga plating terlihat segar. Teksturnya renyah dan mudah dipadukan dengan protein apa pun, mulai dari ayam, ikan, hingga daging sapi. Selain itu, brokoli mudah dibentuk menjadi menu vegetarian yang tetap terlihat premium. Untuk hotel berbintang, brokoli sering menjadi pilihan aman untuk menu buffet karena tahan lama di chafing dish tanpa kehilangan tekstur secara drastis.

## Cara Memasak yang Tepat
Blanch 2–3 menit di air mendidih bergaram, lalu langsung ke ice bath. Cara ini menjaga warna dan kerenyahan tanpa kehilangan nutrisi. Hindari merebus terlalu lama karena brokoli akan kehilangan warna dan teksturnya menjadi lembek. Untuk menumis, gunakan api besar dan waktu singkat, tambahkan sedikit air di akhir agar brokoli matang merata tanpa gosong.

## Penyimpanan
Brokoli cepat menguning jika disimpan terbuka. Bungkus dengan plastik perforasi di chiller 0–4°C dan gunakan dalam 3–4 hari. Jangan mencuci sebelum disimpan karena kelembapan berlebih memicu jamur. Jika brokoli mulai menguning, sebaiknya segera diolah menjadi sup krim, di mana warna kuningnya tidak terlalu terlihat.

## Menu Populer
Brokoli sering muncul di menu sup krim, tumis bawang putih, hingga steak sayur. Untuk buffet hotel, brokoli kukus dengan saus keju atau olive oil menjadi pilihan aman yang disukai banyak tamu. Untuk menu fine dining, brokoli bisa dipanggang dengan parmesan dan almond slice untuk memberi tekstur dan rasa gurih yang lebih kompleks.

## Kesimpulan
Brokoli adalah komoditas serba guna yang bernilai tinggi di dapur profesional. Dengan teknik blanching yang tepat dan penyimpanan yang benar, brokoli bisa menjadi menu andalan yang sekaligus menyehatkan dan memikat secara visual. Pasokan brokoli Grade A dari kebun dataran tinggi Cipanas memiliki kepala rapat dan warna hijau tua yang konsisten, cocok untuk kebutuhan dapur profesional.
    `,
  },
  {
    slug: 'mengapa-sayur-cipanas-lebih-segar',
    title: 'Mengapa Sayur dari Cipanas & Puncak Lebih Segar?',
    excerpt: 'Faktor ketinggian, suhu, dan tanah vulkanik membuat sayur Cipanas punya rasa dan tekstur khas yang sulit ditiru.',
    category: 'Edukasi Pertanian',
    author: 'Tim Green Fresh',
    date: '2025-01-10',
    readTime: 8,
    image: Selada_3,
    stats: [
      { label: 'Ketinggian', value: '1.100–1.500 m' },
      { label: 'Suhu harian', value: '15–22°C' },
      { label: 'Jenis tanah', value: 'Vulkanik' },
      { label: 'Waktu panen–kirim', value: '< 12 jam' },
    ],
    diagram: {
      title: 'Rantai Pasok Sayur Cipanas',
      steps: [
        { title: 'Panen subuh', desc: 'Pukul 04.00–06.00, sebelum matahari terik.' },
        { title: 'Pre-cooling', desc: 'Suhu diturunkan ke 4–8°C dalam 1 jam.' },
        { title: 'Sortir & packing', desc: 'Dipisahkan berdasarkan grade, dikemas berpori.' },
        { title: 'Pengiriman', desc: 'Kendaraan berpendingin menuju Jabodetabek.' },
        { title: 'Terima di dapur', desc: 'Masih dalam kondisi chilled, siap diolah.' },
      ],
    },
    content: `
Cipanas dan Puncak dikenal sebagai sentra sayur dataran tinggi di Jawa Barat. Banyak chef bersikeras memakai sayur dari sini. Ada alasan ilmiah dan agronomis di baliknya yang membuat sayur Cipanas terasa berbeda. Artikel ini membahas lima faktor utama yang membuat sayur Cipanas lebih segar dan lebih enak, serta bagaimana rantai pasok yang pendek menjaga kualitas tersebut sampai ke dapur profesional.

## Suhu Ideal untuk Sayur Daun
Ketinggian 1.100–1.500 meter dengan suhu 15–22°C memperlambat proses pematangan, sehingga sayuran daun tumbuh perlahan dan renyah. Suhu dingin alami ini membuat sayur tidak cepat bolting dan menjaga tekstur tetap padat. Sebagai perbandingan, sayur yang ditanam di dataran rendah pada suhu 28–32°C cenderung tumbuh cepat tetapi bertekstur lembek dan lebih cepat layu setelah dipanen.

## Tanah Vulkanik yang Subur
Tanah vulkanik kaya mineral menghasilkan rasa sayur yang lebih pekat. Wortel dan selada dari Cipanas dikenal lebih manis alami. Kandungan mineral seperti kalium dan magnesium membantu pembentukan rasa dan warna sayur. Tanah vulkanik juga memiliki drainase yang baik, sehingga akar sayur tidak mudah busuk meskipun musim hujan.

## Jarak Panen ke Pengiriman Pendek
Karena dipanen pagi dan dikirim hari yang sama, sayur Cipanas masuk dapur dalam kondisi paling segar. Waktu dari panen ke pengiriman yang singkat menjaga kadar air dan mengurangi penyusutan. Sayur yang dikirim dari luar pulau atau gudang penyimpanan besar biasanya sudah melewati 2–3 hari sebelum sampai ke dapur, sehingga kesegarannya berkurang drastis.

## Air Gunung untuk Irigasi
Irigasi dari mata air pegunungan menjaga kadar air sayur optimal dan bersih. Air yang bersih juga menurunkan risiko kontaminasi bakteri pada sayur daun. Kandungan mineral alami dalam air gunung turut menyumbang rasa sayur yang lebih "manis dan segar" dibanding sayur yang diairi dari sumur bor.

## Budidaya Turun-Temurun
Petani lokal Cipanas sudah bertani lintas generasi, tahu persis waktu panen terbaik per komoditas. Pengetahuan lokal ini tidak bisa digantikan oleh teknologi saja, terutama untuk menentukan tingkat kematangan saat panen. Misalnya, wortel dipanen saat diameter mencapai 2,5 cm, selada saat daun ke-8 sudah terbentuk, dan brokoli saat kepala masih rapat sebelum bunga mekar.

## Kesimpulan
Kombinasi iklim, tanah, air, dan pengetahuan petani membuat sayur Cipanas sulit ditiru. Untuk dapur profesional, konsistensi rasa dan tekstur adalah alasan utama memilih pemasok dari dataran tinggi. Green Fresh Cipanas bermitra langsung dengan petani ini untuk menjaga rantai pasok tetap pendek dan segar, memastikan setiap komoditas tiba di dapur mitra dalam kondisi optimal.
    `,
  },
  {
    slug: 'strategi-mengelola-stok-sayur-untuk-katering',
    title: 'Strategi Mengelola Stok Sayur untuk Katering Pabrik',
    excerpt: 'Katering dengan ribuan porsi harian butuh pasokan stabil. Ini strategi stok dan jadwal pengiriman yang aman.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-12',
    readTime: 9,
    image: Bawang_Merah_4,
    stats: [
      { label: 'Yield sayur daun', value: '70–80%' },
      { label: 'Buffer aman', value: '10–15%' },
      { label: 'Target waste', value: '<5%' },
      { label: 'Siklus pesan', value: '2 hari' },
    ],
    diagram: {
      title: 'Alur Stok Katering Pabrik',
      steps: [
        { title: 'Forecast menu', desc: 'Hitung porsi dari jadwal produksi mingguan.' },
        { title: 'Konversi yield', desc: 'Ubah berat bersih → berat kotor (÷ 0,75).' },
        { title: 'Pesan ke supplier', desc: 'Pesan harian, komoditas cepat rusak siklus 2 hari.' },
        { title: 'Terima & QC', desc: 'Cek suhu, berat, dan kondisi fisik saat tiba.' },
        { title: 'FIFO', desc: 'Label tanggal, gunakan stok terlama lebih dulu.' },
      ],
    },
    content: `
Katering pabrik menuntut konsistensi volume dan jadwal. Salah hitung stok bisa berarti menu tidak sesuai rencana, waste menumpuk, dan biaya membengkak. Berikut strategi yang terbukti membantu mitra kami menekan risiko dan menjaga margin tetap sehat meskipun melayani ribuan porsi setiap hari.

## Hitung Yield, Bukan Berat Kotor
Sayur daun menyusut 20–30% setelah dibersihkan. Gunakan angka yield realistis saat memesan. Jika menu butuh 10 kg bayam bersih, pesan 13–14 kg bayam kotor. Angka ini harus masuk ke sistem perencanaan stok agar tidak terjadi kekurangan. Untuk komoditas seperti wortel dan kentang, yield lebih tinggi (85–90%), sedangkan untuk bayam dan kangkung bisa serendah 65–70% karena banyak bagian yang dibuang.

## Gunakan Sistem FIFO
First In First Out wajib. Label tanggal terima dan susun berdasarkan kedatangan. Staf gudang harus disiplin mengambil stok paling lama lebih dulu, bukan yang paling mudah dijangkau. Tanpa FIFO, sayur lama akan terus tertumpuk di belakang dan baru ditemukan saat sudah rusak. Evaluasi mingguan sederhana bisa mengungkap pola pemborosan yang tidak terlihat.

## Pesan Komoditas Cepat Rusak dalam Siklus 2 Hari
Sayur daun hijau seperti kangkung dan bayam paling cepat rusak. Pesan dalam jumlah kecil dan sering. Untuk katering besar, pengiriman harian lebih aman meskipun sedikit menambah biaya logistik. Untuk komoditas yang lebih tahan lama (wortel, kentang, labu siam), siklus pemesanan bisa 3–5 hari.

## Manfaatkan Termin 7 Hari untuk Cash Flow
Termin pembayaran B2B membantu katering menjaga arus kas sambil tetap mendapat pasokan harian. Ini penting terutama saat ada lonjakan pesanan yang membutuhkan modal kerja lebih besar. Dengan termin yang wajar, katering bisa mengalokasikan dana ke bahan lain tanpa harus menahan pembayaran ke supplier.

## Siapkan Buffer 10–15%
Selalu sediakan cadangan untuk lonjakan pesanan mendadak atau pembatalan panen. Buffer ini sebaiknya komoditas yang tahan lama, seperti wortel, kentang, atau labu siam, sehingga tidak cepat rusak jika tidak terpakai. Buffer sayur daun sebaiknya tidak lebih dari 5% karena risiko waste tinggi.

## Evaluasi Mingguan
Catat komoditas yang sering tersisa, lalu sesuaikan jumlah pesanan minggu berikutnya. Data sederhana ini lama-lama membentuk pola yang sangat akurat. Dengan disiplin pencatatan, banyak katering berhasil menekan waste dari 15% menjadi di bawah 5% dalam 2–3 bulan.

## Kesimpulan
Mengelola stok sayur bukan soal feeling, tetapi soal sistem. Kombinasi perhitungan yield, FIFO, buffer, dan evaluasi mingguan akan membuat operasional katering jauh lebih stabil dan menguntungkan. Dengan strategi ini, katering pabrik bisa menekan waste hingga di bawah 5% dan menjaga kepuasan klien.
    `,
  },
  {
    slug: 'panduan-penyimpanan-sayur-di-chiller',
    title: 'Panduan Penyimpanan Sayur di Chiller Agar Tahan Lebih Lama',
    excerpt: 'Suhu, kelembapan, dan pemisahan jenis sayur adalah kunci. Simak panduan lengkap penyimpanan di chiller dapur.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-15',
    readTime: 7,
    image: Pakcoy_10,
    stats: [
      { label: 'Sayur daun', value: '0–2°C' },
      { label: 'Umbi-umbian', value: '4–8°C' },
      { label: 'Jamur', value: '2–4°C' },
      { label: 'Tomat', value: '10–12°C' },
    ],
    diagram: {
      title: 'Zonasi Chiller Ideal',
      steps: [
        { title: 'Zona Atas (0–2°C)', desc: 'Sayur daun: selada, bayam, kangkung, pakcoy.' },
        { title: 'Zona Tengah (2–4°C)', desc: 'Jamur, brokoli, kembang kol, jagung.' },
        { title: 'Zona Bawah (4–8°C)', desc: 'Umbi: wortel, kentang, bawang, labu siam.' },
        { title: 'Zona Khusus (10–12°C)', desc: 'Tomat, terong, paprika — jauh dari daun.' },
        { title: 'Area etilen', desc: 'Pisahkan apel & tomat dari sayur daun.' },
      ],
    },
    content: `
Penyimpanan yang salah bisa membuat sayur Grade A rusak dalam 24 jam. Padahal, biaya sayur di dapur profesional tidak kecil. Berikut panduan praktis yang bisa langsung diterapkan, mulai dari suhu ideal per jenis sayur, pemisahan etilen, hingga rotasi harian yang disiplin.

## Suhu Ideal per Jenis
Sayur daun paling baik disimpan pada 0–2°C dengan kelembapan 95%. Umbi-umbian seperti kentang dan wortel lebih cocok di 4–8°C dan harus dihindari dari lembap berlebih. Jamur sebaiknya disimpan di 2–4°C dalam kantong kertas. Tomat jangan disimpan terlalu dingin; suhu 10–12°C lebih ideal. Menyimpan tomat di chiller terlalu dingin menyebabkan teksturnya menjadi bertepung dan rasanya hambar.

## Pisahkan Etilen
Tomat dan apel menghasilkan etilen yang mempercepat kematangan sayur lain. Simpan terpisah. Sayur daun yang terpapar etilen akan cepat menguning dan layu. Selain tomat dan apel, alpukat, pisang, dan melon juga menghasilkan etilen dalam jumlah cukup tinggi dan harus dijauhkan dari sayur daun.

## Jangan Cuci Sebelum Simpan
Kelembapan berlebih memicu jamur. Cuci saat akan dipakai. Jika terpaksa mencuci, keringkan benar-benar sebelum disimpan. Untuk sayur daun, cara terbaik adalah menyimpannya dalam keadaan kering lalu membungkus dengan tisu dapur yang akan menyerap kelembapan berlebih.

## Gunakan Kontainer Berlubang
Sirkulasi udara penting untuk sayur daun. Jangan tutup rapat. Plastik perforasi atau kontainer berlubang adalah pilihan terbaik. Sayur daun yang disimpan dalam plastik tertutup rapat akan "berkeringat", dan kelembapan inilah yang memicu pertumbuhan jamur serta pembusukan dalam hitungan jam.

## Rotasi Harian
Cek stok setiap pagi dan pindahkan yang mulai layu ke area pemakaian prioritas. Staf yang bertanggung jawab harus mencatat temuan agar bisa dievaluasi. Rotasi harian sederhana ini bisa memperpanjang umur simpan rata-rata 1–2 hari per komoditas, yang berdampak besar pada waste bulanan.

## Labeling Tanggal
Tempel label tanggal terima di setiap kontainer. Ini membantu penerapan FIFO dan memudahkan audit stok. Untuk dapur besar dengan banyak staf, label tanggal adalah "bahasa universal" yang tidak bisa diabaikan. Tanpa label, FIFO hanya akan menjadi teori.

## Kesimpulan
Penyimpanan yang benar bisa memperpanjang umur simpan sayur hingga 2x lebih lama. Dengan zonasi suhu yang tepat, pemisahan etilen, dan disiplin rotasi harian, dapur profesional bisa menekan waste sayur secara signifikan. Panduan ini membantu dapur profesional menjaga kualitas hingga ke piring tamu.
    `,
  },
  {
    slug: 'jamur-tiram-peluang-menu-vegetarian',
    title: 'Jamur Tiram: Peluang Menu Vegetarian yang Menguntungkan',
    excerpt: 'Jamur tiram punya tekstur mirip daging, murah, dan mudah diolah. Cocok jadi menu vegetarian berkelas.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-18',
    readTime: 6,
    image: Jamur_Tiram_7,
    stats: [
      { label: 'Protein', value: '3.3 g/100g' },
      { label: 'Kalori', value: '33 kkal/100g' },
      { label: 'Serat', value: '2.3 g/100g' },
      { label: 'Harga/porsi', value: '±40% daging' },
    ],
    diagram: {
      title: 'Proses Jamur Tiram jadi "Mock Meat"',
      steps: [
        { title: 'Suwir', desc: 'Suwir memanjang mengikuti serat jamur.' },
        { title: 'Press', desc: 'Tekan dengan tisu dapur untuk keluarkan air.' },
        { title: 'Marinasi', desc: 'Kecap, bawang putih, merica, 15 menit.' },
        { title: 'Sear', desc: 'Api besar hingga kecokelatan, jangan diaduk terus.' },
        { title: 'Saus', desc: 'Tambahkan saus sesuai menu, masak 1 menit.' },
      ],
    },
    content: `
Permintaan menu vegetarian di hotel dan restoran terus naik. Jamur tiram adalah jawaban bagi chef yang ingin menu nabati bertekstur, tanpa harga bahan yang mahal. Artikel ini membahas mengapa jamur tiram cocok untuk menu vegetarian, kandungan gizinya, teknik mengolah agar menyerupai daging, hingga tips penyimpanan yang benar.

## Tekstur Mirip Daging
Jamur tiram bisa disuwir dan ditumis hingga menyerupai tekstur ayam. Banyak restoran memakainya untuk menu "mock meat". Dengan bumbu yang tepat, tamu sering tidak menyadari bahwa hidangan tersebut sepenuhnya nabati. Kunci utamanya adalah memeras air sebelum dimarinasi, lalu memanggang atau menumis dengan api besar agar teksturnya kenyal, bukan lembek.

## Harga Bersahabat
Dibanding daging, jamur tiram jauh lebih murah per porsi, membuat margin menu lebih sehat. Ini penting karena menu vegetarian sering dianggap mahal oleh tamu. Dengan harga bahan yang rendah namun plating yang tetap premium, restoran bisa menawarkan menu vegetarian dengan harga kompetitif tanpa mengorbankan margin.

## Kandungan Gizi
Jamur tiram mengandung protein nabati, serat beta-glukan, vitamin B kompleks, dan rendah kalori. Kombinasi ini cocok untuk tamu yang peduli kesehatan tanpa ingin mengorbankan rasa. Kandungan beta-glukan dalam jamur tiram juga dikenal baik untuk sistem imun dan pencernaan.

## Olahan Populer
Jamur tiram crispy, tumis jamur saus tiram, jamur isi bumbu, hingga sup jamur. Untuk menu fine dining, jamur tiram bisa dipanggang dengan olive oil dan herbs. Di kafe modern, jamur tiram sering dijadikan isian sandwich atau topping pizza untuk memberi tekstur "daging" pada menu vegetarian.

## Penyimpanan
Simpan di kantong kertas dalam chiller, gunakan dalam 3 hari. Jangan dicuci sebelum diolah karena jamur menyerap air dan teksturnya berubah. Jika ingin disimpan lebih lama, jamur bisa di-blanch sebentar lalu dibekukan, meskipun teksturnya akan sedikit berbeda setelah dicairkan.

## Tips Memasak
Masak dengan api besar dan jangan terlalu lama agar jamur tidak berair. Tambahkan sedikit garam di akhir agar tekstur tetap kenyal. Untuk mendapatkan tekstur yang lebih "daging", jamur bisa di-marinasi dengan kecap dan rempah selama 15–30 menit sebelum dimasak.

## Kesimpulan
Jamur tiram adalah peluang besar bagi restoran yang ingin mengembangkan menu vegetarian berkelas dengan biaya bahan yang rendah. Dengan teknik pengolahan yang tepat, jamur tiram bisa menjadi menu signature yang menguntungkan secara bisnis. Green Fresh Cipanas memasok jamur tiram segar harian dari petani mitra.
    `,
  },
  {
    slug: 'standar-grade-a-sayur-untuk-hotel',
    title: 'Standar Grade A: Apa yang Dicari Hotel dari Supplier Sayur?',
    excerpt: 'Hotel bintang lima punya standar sortir ketat. Ini kriteria Grade A yang wajib dipenuhi supplier.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-01-20',
    readTime: 8,
    image: Paprika_6,
    stats: [
      { label: 'Toleransi cacat', value: '<2%' },
      { label: 'Suhu terima', value: '<8°C' },
      { label: 'Keseragaman ukuran', value: '±10%' },
      { label: 'Garansi retur', value: 'Ya' },
    ],
    diagram: {
      title: '7 Kriteria QC Hotel Bintang 5',
      steps: [
        { title: '1. Ukuran seragam', desc: 'Deviasi maksimal 10% antar item.' },
        { title: '2. Bebas cacat', desc: 'Tidak ada luka, goresan, atau bekas hama.' },
        { title: '3. Warna standar', desc: 'Sesuai spesifikasi komoditas.' },
        { title: '4. Kesegaran', desc: 'Daun tegak, batang tidak layu.' },
        { title: '5. Suhu chilled', desc: 'Tiba dalam kondisi <8°C.' },
        { title: '6. Dokumentasi QC', desc: 'Batch, tanggal panen, tim QC.' },
        { title: '7. Garansi retur', desc: 'Retur gratis untuk barang tidak sesuai.' },
      ],
    },
    content: `
Hotel besar tidak asal terima sayur. Ada standar sortir yang harus dipenuhi supplier, terutama hotel bintang lima yang plating-nya menjadi bagian pengalaman tamu. Berikut kriteria utama yang biasa diminta, disusun dari pengalaman kami mensuplai puluhan hotel dan restoran fine dining di Jakarta dan sekitarnya.

## Keseragaman Ukuran
Menu hotel butuh plating konsisten. Ukuran seragam memudahkan porsi. Untuk paprika, ukuran yang seragam memudahkan stuffing; untuk wortel, memudahkan proses potong. Di dapur hotel besar dengan puluhan chef, keseragaman ukuran adalah kunci untuk menjaga konsistensi antar shift dan antar hari.

## Bebas Cacat Visual
Tidak ada luka, goresan, atau bekas hama yang terlihat. Cacat kecil sering dianggap sepele, tetapi di dapur hotel bisa membuat satu porsi harus dibuang. Untuk hotel bintang lima, standar toleransi cacat biasanya di bawah 2% dari total berat yang dikirim.

## Warna Sesuai Standar Komoditas
Paprika merah harus merah merata, bukan belang. Selada harus hijau cerah. Warna yang tidak konsisten membuat plating terlihat tidak rapi. Untuk fotografi menu, warna sayur juga berpengaruh besar terhadap daya tarik visual menu di website dan media sosial hotel.

## Kesegaran Daun dan Batang
Daun tegak, batang tidak layu, dan tidak ada tanda kuning. Untuk sayur daun, kesegaran visual adalah hal pertama yang dinilai. Sayur daun yang layu meskipun hanya sedikit akan langsung terlihat di piring dan menurunkan persepsi kualitas tamu.

## Suhu Saat Terima
Sayur harus tiba dalam kondisi dingin (chilled), bukan suhu ruang. Pengiriman harus memakai kendaraan berpendingin atau es. Suhu ideal saat diterima adalah di bawah 8°C untuk sayur daun, dan di bawah 10°C untuk umbi-umbian.

## Dokumentasi QC
Supplier profesional menyertakan catatan QC dan tanggal panen. Dokumentasi ini penting untuk audit internal hotel dan traceability. Jika terjadi masalah dengan tamu, hotel bisa melacak asal sayur dan batch pengiriman dengan cepat.

## Garansi Retur
Supplier yang berani memberi garansi retur menunjukkan keyakinan pada kualitas produknya. Ini juga melindungi hotel dari risiko kerugian. Dalam praktiknya, garansi retur juga mendorong supplier untuk lebih disiplin dalam proses sortir sebelum pengiriman.

## Kesimpulan
Memenuhi standar hotel bukan soal satu kriteria, tetapi kombinasi dari tujuh poin di atas. Dengan SOP QC yang jelas dan konsisten, supplier bisa menjadi mitra jangka panjang yang diandalkan hotel bintang lima. Green Fresh Cipanas menjalankan QC Grade A manual sebelum pengiriman, memastikan standar hotel terpenuhi.
    `,
  },
  {
    slug: 'cara-mengurangi-waste-sayur-di-restoran',
    title: 'Cara Mengurangi Waste Sayur di Restoran hingga 40%',
    excerpt: 'Waste sayur menggerus margin. Ini langkah praktis menekan pemborosan dari penerimaan sampai plating.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-22',
    readTime: 7,
    image: Kangkung_2,
    stats: [
      { label: 'Waste rata-rata', value: '15–25%' },
      { label: 'Target realistis', value: '<10%' },
      { label: 'Penghematan', value: 'Hingga 40%' },
      { label: 'Waktu evaluasi', value: 'Mingguan' },
    ],
    diagram: {
      title: '6 Titik Kontrol Waste Sayur',
      steps: [
        { title: '1. Penerimaan', desc: 'Tolak barang tidak standar saat tiba.' },
        { title: '2. Penyimpanan', desc: 'Suhu & kelembapan sesuai komoditas.' },
        { title: '3. Persiapan', desc: 'Teknik potong yang efisien (yield +15%).' },
        { title: '4. Menu harian', desc: 'Spesial berbasis stok cepat rusak.' },
        { title: '5. Sisa olahan', desc: 'Daun wortel → pesto, batang → sup.' },
        { title: '6. Data waste', desc: 'Catat mingguan, cari pola.' },
      ],
    },
    content: `
Waste sayur di restoran bisa mencapai 30–40% jika tidak dikelola. Angka ini sangat besar dan langsung menggerus margin. Berikut cara menekannya secara sistematis, dari titik penerimaan hingga plating, berdasarkan pengalaman kami mendampingi restoran dan katering yang berhasil memangkas waste hingga 40% dalam 3 bulan.

## Terima dengan Pengecekan Ketat
Tolak atau catat sayur yang tidak sesuai standar saat penerimaan. Jangan biarkan masuk stok. Sekali sayur buruk masuk gudang, waste hampir pasti terjadi. Buat checklist sederhana: suhu, warna, tekstur, ukuran, dan bau. Staf penerimaan harus punya otoritas untuk menolak barang yang tidak layak tanpa harus menunggu approval manajer.

## Menu Harian Berbasis Stok
Susun menu spesial berdasarkan komoditas yang paling cepat rusak. Ini adalah cara cerdas mengubah potensi waste menjadi pendapatan. Misalnya, jika stok bayam menumpuk, buat menu "sup bayam krim" atau "bayam saus keju" sebagai menu harian yang dijual dengan harga menarik.

## Pelatihan Staf Potong
Teknik potong yang benar meningkatkan yield. Wortel yang dipotong salah bisa kehilangan 15% daging. Pelatihan singkat namun rutin memberi dampak besar. Staf potong yang terlatih juga lebih sadar mana bagian sayur yang masih bisa dipakai dan mana yang harus dibuang.

## Manfaatkan Bagian Sisa
Daun wortel bisa jadi pesto, batang brokoli bisa jadi sup krim, dan kulit kentang bisa jadi keripik. Kreativitas chef sangat berperan di sini. Beberapa restoran bahkan menjadikan "zero waste menu" sebagai daya tarik tersendiri yang diminati tamu peduli lingkungan.

## Data Waste Mingguan
Catat jenis dan volume waste tiap minggu, lalu cari pola. Data ini membantu menentukan komoditas mana yang perlu dipesan lebih sedikit. Cukup dengan spreadsheet sederhana: tanggal, komoditas, berat waste, dan penyebab (rusak, sisa potong, tidak terjual).

## Pilih Supplier dengan Garansi Retur
Supplier yang berani garansi retur membantu restoran mengurangi risiko. Ini juga mendorong supplier untuk lebih disiplin dalam QC. Dalam jangka panjang, hubungan dengan supplier yang berkualitas akan menurunkan frekuensi masalah dan meningkatkan stabilitas pasokan.

## Kesimpulan
Mengurangi waste bukan soal mengurangi porsi, tetapi soal disiplin operasional. Dengan langkah di atas, banyak dapur memangkas waste hingga 40% dan meningkatkan margin secara signifikan. Waste yang dikelola dengan baik juga mencerminkan profesionalisme dapur di mata tamu dan mitra bisnis.
    `,
  },
  {
    slug: 'tomat-segar-untuk-saus-dan-salad',
    title: 'Tomat Segar untuk Saus dan Salad: Panduan Memilih',
    excerpt: 'Tomat untuk saus berbeda dengan tomat untuk salad. Kenali jenis dan tingkat kematangan yang tepat.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-01-25',
    readTime: 6,
    image: Tomat_10,
    stats: [
      { label: 'Suhu simpan', value: '10–12°C' },
      { label: 'Kadar air (saus)', value: 'Rendah' },
      { label: 'Brix ideal', value: '5–7°Bx' },
      { label: 'Umur simpan', value: '5–7 hari' },
    ],
    diagram: {
      title: 'Peta Kematangan Tomat',
      steps: [
        { title: 'Hijau', desc: 'Untuk acar, tumis, atau diolah jadi saus hijau.' },
        { title: 'Setengah matang', desc: 'Untuk salad, sandwich, dan plating.' },
        { title: 'Matang penuh', desc: 'Untuk saus, sup, dan pasta.' },
        { title: 'Terlalu matang', desc: 'Untuk saus cepat atau dikeringkan (sun-dried).' },
        { title: 'Busuk', desc: 'Buang, jangan dicampur dengan yang lain.' },
      ],
    },
    content: `
Tomat adalah bahan serba guna, tetapi tidak semua tomat cocok untuk semua olahan. Memilih tomat yang tepat bisa membuat saus lebih kental dan salad lebih segar. Artikel ini membahas jenis tomat untuk saus, untuk salad, tingkat kematangan yang ideal, cara penyimpanan, hingga ciri tomat segar yang berkualitas.

## Tomat untuk Saus
Pilih tomat yang matang penuh, berdaging tebal, dan kadar air sedang. Varietas plum atau roma ideal karena sedikit biji. Tomat seperti ini menghasilkan saus yang lebih kental tanpa perlu banyak pengental tambahan. Kadar air yang terlalu tinggi akan membuat saus encer dan butuh waktu reduksi lebih lama, yang berarti konsumsi energi lebih besar.

## Tomat untuk Salad
Pilih tomat yang masih sedikit keras, warna cerah, dan tidak terlalu berair agar tidak membuat salad lembek. Tomat cherry atau tomat beefsteak muda sering jadi pilihan untuk salad premium. Untuk plating, potongan tomat yang rapi dan warna seragam sangat memengaruhi persepsi kualitas hidangan.

## Tingkat Kematangan
Tomat hijau cocok untuk acar atau tumis. Setengah matang ideal untuk salad. Matang penuh untuk saus dan sup. Mengenali tingkat kematangan membantu dapur memesan sesuai kebutuhan. Untuk kebutuhan restoran, sebaiknya pesan tomat setengah matang lalu "matangkan" di dapur sesuai kebutuhan harian.

## Penyimpanan
Jangan simpan tomat di chiller di bawah 10°C karena merusak tekstur. Simpan di suhu ruang sampai matang, lalu gunakan. Tomat yang disimpan terlalu dingin menjadi bertepung dan kehilangan rasa. Jika ingin memperlambat kematangan, simpan di tempat sejuk (15–18°C) dengan sirkulasi udara baik.

## Ciri Tomat Segar
Kulit mengkilap, tidak keriput, dan berat terasa padat saat dipegang. Aroma pangkal tomat yang khas juga menandakan tomat segar. Hindari tomat dengan bercak cokelat, retak, atau bagian yang lembek, karena biasanya sudah mulai membusuk dari dalam.

## Kesimpulan
Memilih tomat yang tepat untuk saus dan salad bukan soal preferensi, tetapi soal hasil akhir di piring. Dengan memahami jenis, tingkat kematangan, dan penyimpanan yang benar, dapur bisa menghasilkan saus yang kental dan salad yang segar secara konsisten. Green Fresh Cipanas memasok tomat merah Grade A dengan tingkat kematangan sesuai kebutuhan dapur.
    `,
  },
  {
    slug: 'kale-sayuran-premium-yang-naik-daun',
    title: 'Kale: Sayuran Premium yang Naik Daun di Menu Sehat',
    excerpt: 'Kale kaya serat dan antioksidan. Simak cara mengolah dan memilih kale segar untuk menu premium.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-28',
    readTime: 6,
    image: Kale_1,
    stats: [
      { label: 'Vitamin K', value: '±700 µg/100g' },
      { label: 'Vitamin C', value: '120 mg/100g' },
      { label: 'Serat', value: '4.1 g/100g' },
      { label: 'Kalori', value: '49 kkal/100g' },
    ],
    diagram: {
      title: 'Dari Kale Pahit ke Kale Salad',
      steps: [
        { title: 'Cuci & keringkan', desc: 'Gunakan salad spinner, jangan basah.' },
        { title: 'Buang batang', desc: 'Batang tebal pahit, buang atau pakai untuk sup.' },
        { title: 'Massage', desc: 'Minyak zaitun + garam, remas 1–2 menit.' },
        { title: 'Diamkan 5 menit', desc: 'Serat melunak, rasa pahit berkurang.' },
        { title: 'Dressing', desc: 'Lemon, madu, mustard — siap disajikan.' },
      ],
    },
    content: `
Kale dikenal sebagai superfood dan kini banyak muncul di menu restoran sehat dan hotel. Popularitasnya naik seiring meningkatnya kesadaran tamu akan pola makan sehat. Artikel ini membahas kandungan gizi kale, cara memilih, olahan populer, teknik mengurangi rasa pahit, hingga tips penyimpanan untuk dapur profesional.

## Kandungan Gizi
Kale tinggi vitamin K, vitamin A, dan vitamin C. Kandungan serat dan antioksidannya juga tinggi, sementara kalorinya rendah. Kombinasi ini membuat kale sering dipakai di menu diet dan menu detoks. Dalam 100 gram kale segar, kandungan vitamin K-nya bahkan mencapai lebih dari 600% kebutuhan harian, menjadikannya salah satu sayuran dengan kepadatan gizi tertinggi.

## Cara Memilih Kale Segar
Pilih daun hijau tua, keriting rapat, dan batang tidak terlalu tebal. Hindari daun menguning atau berlubang. Daun yang terlalu tipis biasanya lebih cepat layu setelah dipanen. Untuk kebutuhan restoran, kale dengan daun lebar dan tebal lebih disukai karena yield-nya lebih tinggi setelah batang dibuang.

## Olahan Populer
Kale chips (dipanggang), kale salad dengan dressing lemon, smoothie hijau, dan tumis kale dengan bawang putih. Untuk menu premium, kale sering dipadukan dengan quinoa atau salmon. Kale chips juga bisa menjadi alternatif snack sehat yang dijual di retail atau disajikan sebagai amuse-bouche di restoran fine dining.

## Teknik Mengurangi Rasa Pahit
Massage daun kale dengan minyak zaitun dan garam selama 1–2 menit sebelum diolah. Rasa pahit berkurang, tekstur lebih lembut. Teknik ini sering dipakai chef untuk salad kale mentah. Massage membantu memecah serat kasar dan mengeluarkan sebagian senyawa pahit, sehingga kale lebih nyaman dikonsumsi mentah.

## Penyimpanan
Bungkus dalam plastik perforasi di chiller, gunakan dalam 4 hari. Jangan mencuci sebelum disimpan agar tidak lembap. Kale yang sudah dipisahkan dari batangnya biasanya lebih cepat layu, jadi sebaiknya batang dibuang saat akan diolah.

## Kesimpulan
Kale adalah sayuran premium yang menawarkan nilai gizi tinggi dan fleksibilitas olahan. Dengan teknik massage yang tepat, kale bisa menjadi menu sehat yang lezat dan tetap terlihat premium di piring. Kale premium dari kebun dataran tinggi Cipanas memiliki daun keriting tebal dan warna hijau pekat, cocok untuk menu sehat berkelas.
    `,
  },
  {
    slug: 'cabai-merah-pedas-pasokan-stabil',
    title: 'Cabai Merah: Menjaga Pasokan Stabil Saat Harga Naik',
    excerpt: 'Fluktuasi harga cabai merah sering mengganggu dapur. Ini strategi menjaga pasokan tetap stabil.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-02-01',
    readTime: 7,
    image: Cabai_Merah_4,
    stats: [
      { label: 'Fluktuasi harga', value: '±200%' },
      { label: 'Puncak mahal', value: 'Des–Feb' },
      { label: 'Umur simpan beku', value: '6 bulan' },
      { label: 'Kadar air kering', value: '<12%' },
    ],
    diagram: {
      title: 'Siklus Harga Cabai Merah',
      steps: [
        { title: 'Jan–Feb', desc: 'Musim hujan, panen turun, harga naik.' },
        { title: 'Mar–Mei', desc: 'Panen raya, harga turun — waktu stok.' },
        { title: 'Jun–Agu', desc: 'Harga stabil, pasokan normal.' },
        { title: 'Sep–Nov', desc: 'Menjelang akhir tahun, harga mulai naik.' },
        { title: 'Des', desc: 'Puncak permintaan hari raya, harga tinggi.' },
      ],
    },
    content: `
Cabai merah adalah komoditas paling fluktuatif. Harga bisa melonjak drastis saat musim hujan atau menjelang hari raya. Dapur yang tidak punya strategi akan kesulitan menjaga biaya bahan baku. Artikel ini membahas strategi praktis menjaga pasokan cabai merah tetap stabil, dari hubungan dengan supplier hingga penyimpanan jangka panjang.

## Bangun Hubungan Jangka Panjang dengan Supplier
Supplier yang punya akses langsung ke petani bisa memberi harga lebih stabil dibanding pasar. Hubungan jangka panjang juga memudahkan negosiasi saat harga sedang tinggi. Supplier yang mengenal kebutuhan dapur Anda akan lebih proaktif memberi informasi jika ada potensi kenaikan harga atau gangguan pasokan.

## Simpan Cabai Kering atau Beku
Saat harga rendah, beli lebih banyak lalu keringkan atau bekukan untuk cadangan. Cabai beku tetap bisa dipakai untuk menu tumis dan sambal. Cabai kering bisa dijadikan bubuk, sedangkan cabai beku sebaiknya disimpan dalam vacuum bag agar tidak freezer burn dan tetap segar hingga 6 bulan.

## Gunakan Cabai Bubuk untuk Menu Tertentu
Menu yang tidak menonjolkan cabai segar bisa memakai cabai bubuk berkualitas. Ini membantu mengurangi ketergantungan pada cabai segar saat harga melonjak. Cabai bubuk dengan kadar air di bawah 12% bisa disimpan hingga 1 tahun dalam wadah kedap udara, dan rasanya tetap konsisten.

## Pantau Pola Musim
Harga cabai merah biasanya naik saat musim hujan (Desember–Februari) dan hari besar keagamaan. Perencanaan pembelian bisa disesuaikan dengan pola ini. Dengan memahami siklus musiman, dapur bisa "menimbun" saat harga murah dan mengurangi pembelian saat harga memuncak.

## Kontrak Pasokan
Untuk kebutuhan besar, kontrak pasokan jangka pendek dengan harga tetap bisa membantu. Kontrak memberi kepastian volume dan harga untuk periode tertentu. Kontrak biasanya berdurasi 1–3 bulan dan cocok untuk katering atau restoran dengan volume besar yang butuh kepastian biaya bahan baku.

## Kesimpulan
Stabilitas pasokan cabai merah bukan soal menebak harga, tetapi soal membangun sistem. Dengan strategi di atas, dapur profesional bisa tetap tenang saat pasar bergejolak. Green Fresh Cipanas membantu mitra B2B menjaga pasokan cabai merah tetap stabil dengan jaringan petani mitra.
    `,
  },
  {
    slug: 'resep-tumis-pakcoy-bawang-putih',
    title: 'Resep Tumis Pakcoy Bawang Putih ala Restoran',
    excerpt: 'Menu sederhana dengan rasa premium. Resep tumis pakcoy bawang putih yang cocok untuk menu harian hotel.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-04',
    readTime: 5,
    image: Pakcoy_10,
    stats: [
      { label: 'Waktu masak', value: '5 menit' },
      { label: 'Porsi', value: '2 porsi' },
      { label: 'Kalori', value: '80 kkal/porsi' },
      { label: 'Tingkat kesulitan', value: 'Mudah' },
    ],
    diagram: {
      title: '5 Langkah Tumis Pakcoy Sempurna',
      steps: [
        { title: 'Prep', desc: 'Cuci, potong, cincang bawang putih.' },
        { title: 'Panaskan wajan', desc: 'Api besar, minyak hingga berasap ringan.' },
        { title: 'Tumis bawang', desc: '30 detik, jangan sampai gosong.' },
        { title: 'Masukkan pakcoy', desc: 'Aduk cepat, 2 menit saja.' },
        { title: 'Seasoning & plating', desc: 'Saus tiram, minyak wijen, sajikan.' },
      ],
    },
    content: `
Pakcoy adalah sayur serba guna yang cepat matang. Berikut resep tumis pakcoy bawang putih ala restoran yang bisa langsung diterapkan di dapur profesional. Artikel ini membahas bahan, cara membuat, tips dari chef, variasi menu, hingga teknik penyajian agar hasilnya konsisten dan menggugah selera.

## Bahan (2 porsi)
300 gram pakcoy segar, 4 siung bawang putih cincang, 1 sdm saus tiram, ½ sdt garam, ½ sdt gula, 1 sdm minyak wijen, dan 100 ml air. Bahan-bahan ini sederhana dan mudah ditemukan. Untuk hasil terbaik, pilih pakcoy dengan batang tebal dan daun hijau cerah, karena teksturnya lebih renyah setelah ditumis.

## Cara Membuat
Cuci pakcoy dan potong sesuai selera. Panaskan minyak, tumis bawang putih hingga harum. Masukkan pakcoy dan aduk cepat. Tambahkan saus tiram, garam, gula, dan air. Masak 2 menit, jangan terlalu lama agar tetap renyah. Angkat dan sajikan dengan minyak wijen. Untuk porsi besar, masak dalam batch kecil agar suhu wajan tetap tinggi dan pakcoy tidak berair.

## Tips dari Chef
Gunakan api besar dan waktu masak singkat untuk menjaga warna hijau cerah dan tekstur renyah. Jangan menutup wajan saat memasak karena uap membuat pakcoy lembek. Jika ingin menambahkan protein, masukkan ayam atau udang yang sudah dimarinasi lebih dulu, lalu baru pakcoy di akhir.

## Variasi Menu
Untuk menu hotel, pakcoy bisa ditambahkan jamur shiitake atau potongan ayam. Untuk menu vegetarian, ganti saus tiram dengan saus jamur. Untuk menu fine dining, pakcoy bisa di-blanch lalu ditumis dengan butter dan bawang putih, disajikan dengan saus krim sebagai pendamping steak.

## Penyajian
Sajikan pakcoy di piring putih agar warna hijau terlihat kontras. Tambahkan wijen sangrai di atasnya untuk sentuhan visual. Untuk plating restoran, susun pakcoy dengan batang menghadap ke dalam dan daun menghadap ke luar, lalu tuang saus di atasnya.

## Kesimpulan
Tumis pakcoy bawang putih adalah menu sederhana yang bisa terlihat premium dengan teknik yang tepat. Api besar, waktu singkat, dan plating yang rapi adalah kunci utamanya. Pakcoy Grade A dari Cipanas memiliki batang tebal dan daun hijau cerah, cocok untuk menu ini.
    `,
  },
  {
    slug: 'jahe-segar-untuk-minuman-dan-bumbu',
    title: 'Jahe Segar: Dari Bumbu Dapur hingga Minuman Kekinian',
    excerpt: 'Jahe segar punya aroma khas dan manfaat kesehatan. Simak cara memilih dan mengolahnya.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-07',
    readTime: 6,
    image: Jahe_1,
    stats: [
      { label: 'Gingerol', value: 'Tinggi' },
      { label: 'Umur simpan', value: '3–4 minggu' },
      { label: 'Suhu simpan', value: 'Ruangan kering' },
      { label: 'Aroma', value: 'Tajam' },
    ],
    diagram: {
      title: 'Dari Jahe Segar ke Minuman Signature',
      steps: [
        { title: 'Pilih jahe', desc: 'Kulit mengkilap, tidak keriput, aroma tajam.' },
        { title: 'Kupas', desc: 'Gunakan sendok untuk meminimalkan daging terbuang.' },
        { title: 'Geprek/iris', desc: 'Geprek untuk minuman, iris untuk tumis.' },
        { title: 'Ekstrak', desc: 'Rebus 10 menit atau blender untuk juice.' },
        { title: 'Kombinasi', desc: 'Lemon, madu, serai, atau susu oat.' },
      ],
    },
    content: `
Jahe adalah bumbu wajib di dapur profesional, sekaligus bahan minuman sehat yang sedang naik daun. Aromanya yang khas membuat jahe sulit digantikan bahan lain. Artikel ini membahas cara memilih jahe segar, manfaat kesehatan, olahan populer, penyimpanan, dan tips mengolah untuk dapur profesional.

## Cara Memilih Jahe Segar
Pilih jahe dengan kulit mengkilap dan tidak keriput. Aroma tajam saat dipotong menandakan jahe masih segar. Teksturnya harus padat dan tidak berair. Hindari jahe dengan tanda jamur atau bercak hitam. Jahe tua biasanya memiliki aroma lebih tajam dibanding jahe muda, sehingga lebih cocok untuk minuman.

## Manfaat Kesehatan
Jahe dikenal dapat meredakan mual, menghangatkan tubuh, dan bersifat anti-inflamasi alami. Jahe juga membantu pencernaan, sehingga sering dipakai di minuman setelah makan. Kandungan gingerol dalam jahe adalah senyawa aktif utama yang memberikan rasa pedas khas dan manfaat anti-inflamasi.

## Olahan Populer
Wedang jahe, jahe lemon madu, bumbu dasar tumis, dan marinasi daging. Di kafe modern, jahe sering dipadukan dengan lemon, serai, atau madu untuk minuman signature. Untuk menu fine dining, jahe bisa dijadikan foam atau gel sebagai elemen plating modern.

## Penyimpanan
Simpan jahe di tempat kering bersuhu ruang, atau bekukan dalam bentuk irisan untuk pemakaian cepat. Jahe beku tetap mempertahankan aroma saat dimasak. Untuk penyimpanan jangka panjang, jahe bisa diiris tipis lalu dikeringkan, kemudian disimpan dalam wadah kedap udara.

## Tips Mengolah
Kupas jahe dengan sendok agar tidak banyak terbuang. Untuk minuman, geprek jahe agar aromanya keluar maksimal. Saat menumis, masukkan jahe di awal bersama bawang putih agar aromanya keluar sebelum bahan lain ditambahkan.

## Kesimpulan
Jahe adalah bahan serba guna yang bernilai tinggi di dapur profesional, dari bumbu dasar hingga minuman signature. Dengan pemilihan dan penyimpanan yang tepat, jahe bisa menjadi komoditas andalan yang memberi nilai tambah pada setiap menu. Green Fresh Cipanas memasok jahe segar dari kebun dataran tinggi dengan aroma tajam khas.
    `,
  },
  {
    slug: 'selada-keriting-untuk-burger-dan-salad',
    title: 'Selada Keriting untuk Burger dan Salad: Tips Memilih',
    excerpt: 'Selada keriting adalah tulang punggung burger dan salad. Kenali ciri selada segar berkualitas.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-02-10',
    readTime: 6,
    image: Selada_3,
    stats: [
      { label: 'Suhu simpan', value: '0–2°C' },
      { label: 'Umur simpan', value: '3–4 hari' },
      { label: 'Kalori', value: '15 kkal/100g' },
      { label: 'Kadar air', value: '95%' },
    ],
    diagram: {
      title: 'Proses Cuci Selada yang Benar',
      steps: [
        { title: 'Pisahkan daun', desc: 'Lepas satu per satu, buang yang rusak.' },
        { title: 'Cuci mengalir', desc: 'Air dingin mengalir, jangan direndam lama.' },
        { title: 'Rendam air es', desc: '5 menit agar daun renyah kembali.' },
        { title: 'Spinner', desc: 'Keringkan dengan salad spinner.' },
        { title: 'Simpan', desc: 'Bungkus tisu + plastik perforasi, 0–2°C.' },
      ],
    },
    content: `
Selada keriting sering jadi penentu kualitas burger dan salad. Daun yang lembek bisa merusak pengalaman makan, sedangkan daun yang renyah membuat hidangan terasa lebih segar. Artikel ini membahas ciri selada segar, penyimpanan, teknik mencuci, penggunaan untuk burger dan salad, hingga kesimpulan praktis untuk dapur profesional.

## Ciri Selada Segar
Pilih selada dengan daun hijau cerah dan keriting rapat. Batang tidak boleh berlendir, dan tidak ada bercak cokelat di tepi daun. Beratnya harus terasa padat saat dipegang. Selada yang terlalu ringan biasanya sudah kehilangan kadar air dan akan cepat layu setelah dipakai.

## Penyimpanan
Bungkus dengan tisu dapur dan plastik perforasi, simpan di chiller 0–2°C. Tisu membantu menyerap kelembapan berlebih yang memicu pembusukan. Untuk dapur profesional, sebaiknya selada disimpan dalam kontainer berpori dengan alas tisu yang diganti setiap hari.

## Teknik Mencuci
Cuci dengan air dingin mengalir, lalu rendam air es 5 menit agar daun renyah. Keringkan dengan salad spinner. Selada yang masih basah akan cepat layu saat disimpan. Untuk hasil terbaik, cuci selada dalam batch kecil agar air tetap dingin dan proses pencucian tidak merusak daun.

## Untuk Burger
Gunakan daun bagian dalam yang lebih lembut. Daun ini lebih mudah dilipat dan tidak mudah sobek saat burger disusun. Untuk burger premium, selada bisa "dikeringkan" dengan tisu dapur sebelum disusun, agar tidak membuat roti burger menjadi lembek.

## Untuk Salad
Potong dengan tangan, bukan pisau, agar tidak cepat layu. Pisau logam mempercepat oksidasi pada tepi daun. Untuk salad yang disajikan beberapa jam kemudian, sebaiknya dressing ditambahkan saat akan disajikan agar daun tidak layu.

## Kesimpulan
Selada keriting adalah komponen kecil yang berdampak besar pada pengalaman makan. Dengan pemilihan, pencucian, dan penyimpanan yang tepat, selada bisa tampil prima di setiap hidangan. Selada keriting dari Cipanas punya daun tebal dan warna hijau cerah yang tahan lama, cocok untuk burger premium maupun salad harian.
    `,
  },
  {
    slug: 'kentang-dieng-untuk-menu-fries',
    title: 'Kentang Dieng untuk Menu Fries: Kenapa Berbeda?',
    excerpt: 'Kentang Dieng punya kadar air rendah dan tekstur tepung yang ideal untuk fries renyah.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-02-13',
    readTime: 6,
    image: Kentang_2,
    stats: [
      { label: 'Kadar air', value: 'Rendah' },
      { label: 'Kadar pati', value: 'Tinggi' },
      { label: 'Suhu goreng 1', value: '160°C' },
      { label: 'Suhu goreng 2', value: '190°C' },
    ],
    diagram: {
      title: 'Double Frying Kentang Dieng',
      steps: [
        { title: 'Potong', desc: 'Ketebalan 8–10 mm, seragam.' },
        { title: 'Rendam', desc: 'Air dingin 30 menit untuk buang pati permukaan.' },
        { title: 'Blanch', desc: 'Air 80°C selama 3 menit, lalu keringkan.' },
        { title: 'Freeze', desc: 'Bekukan 2 jam untuk tekstur optimal.' },
        { title: 'Fry 1', desc: '160°C selama 3 menit (matangkan dalam).' },
        { title: 'Fry 2', desc: '190°C selama 2 menit (kecokelatan luar).' },
      ],
    },
    content: `
Kentang Dieng dikenal sebagai salah satu kentang terbaik untuk fries. Ada alasan agronomis di baliknya, bukan sekadar klaim pasar. Artikel ini membahas mengapa kentang Dieng berbeda, cara memasak fries sempurna, penyimpanan, hingga tips dari dapur profesional yang sudah lama menggunakan kentang Dieng sebagai bahan utama.

## Kadar Air Rendah
Kentang Dieng tumbuh di dataran tinggi dengan suhu dingin, menghasilkan kadar air lebih rendah. Ini membuat fries lebih renyah dan tidak lembek setelah digoreng. Kadar air yang rendah juga berarti minyak goreng tidak cepat rusak karena kandungan air yang keluar dari kentang lebih sedikit.

## Tekstur Tepung
Kandungan pati yang tinggi memberi tekstur tepung di dalam dan renyah di luar. Tekstur inilah yang dicari untuk french fries dan wedges. Kentang dengan pati tinggi juga lebih mudah dibentuk menjadi mashed potato yang lembut, sehingga serba guna untuk berbagai menu.

## Warna Kuning Alami
Tidak perlu pewarna, fries dari kentang Dieng sudah kuning keemasan alami. Warna ini membuat plating terlihat lebih premium. Warna kuning alami juga menandakan kandungan beta-karoten yang cukup, yang baik untuk kesehatan mata dan kulit.

## Cara Memasak Fries Sempurna
Potong memanjang dan rendam air dingin 30 menit. Blanch 3 menit di air 80°C. Keringkan dan bekukan 2 jam. Goreng dua kali: 160°C lalu 190°C. Teknik double frying adalah kunci kerenyahan. Pastikan minyak selalu bersih dan suhu stabil, karena fluktuasi suhu bisa membuat fries berminyak.

## Penyimpanan
Simpan di tempat gelap, sejuk, dan berventilasi. Jangan di chiller karena pati berubah jadi gula dan fries akan cepat gosong. Kentang yang terpapar cahaya juga bisa berubah hijau dan menghasilkan solanin, yang berbahaya untuk dikonsumsi.

## Kesimpulan
Kentang Dieng adalah pilihan terbaik untuk fries premium dengan tekstur renyah dan warna kuning alami. Dengan teknik double frying yang benar, hasilnya konsisten dan siap bersaing dengan restoran cepat saji besar. Green Fresh Cipanas memasok kentang Dieng Grade A dengan ukuran seragam untuk kebutuhan fries.
    `,
  },
  {
    slug: 'okra-hijau-sayuran-premium-kaya-serat',
    title: 'Okra Hijau: Sayuran Premium Kaya Serat untuk Menu Sehat',
    excerpt: 'Okra hijau kaya lendir alami yang bermanfaat untuk pencernaan. Simak cara mengolahnya agar tidak berlendir berlebihan.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-16',
    readTime: 6,
    image: Okra_1,
    stats: [
      { label: 'Serat larut', value: 'Tinggi' },
      { label: 'Kalori', value: '33 kkal/100g' },
      { label: 'Vitamin C', value: '23 mg/100g' },
      { label: 'Umur simpan', value: '3 hari' },
    ],
    diagram: {
      title: '4 Cara Mengurangi Lendir Okra',
      steps: [
        { title: 'Panggang', desc: 'Potong memanjang, panggang 200°C 15 menit.' },
        { title: 'Tumis api besar', desc: 'Jangan diaduk terlalu sering, biarkan karamelisasi.' },
        { title: 'Tambahkan asam', desc: 'Cuka atau lemon menekan lendir.' },
        { title: 'Blanch utuh', desc: 'Rebus utuh, potong setelah setengah matang.' },
      ],
    },
    content: `
Okra hijau adalah sayuran premium yang kaya serat dan sering muncul di menu sehat dan menu internasional. Bentuknya unik dan mudah dikenali di piring. Artikel ini membahas kandungan gizi, ciri okra segar, cara mengurangi lendir, olahan populer, dan tips penyimpanan untuk dapur profesional.

## Kandungan Gizi
Okra mengandung serat larut tinggi, vitamin C, vitamin K, dan antioksidan. Kalorinya rendah sehingga cocok untuk menu diet. Serat larut dalam okra membantu menjaga kadar gula darah dan memberi rasa kenyang lebih lama, menjadikannya pilihan populer untuk menu sehat dan menu diabetes-friendly.

## Ciri Okra Segar
Warna hijau cerah, tekstur padat, dan ujung tidak menghitam. Ukuran kecil hingga sedang lebih lembut dibanding okra besar yang cenderung berserat kasar. Okra yang terlalu besar biasanya sudah melewati masa panen optimal dan akan lebih keras setelah dimasak.

## Mengurangi Lendir
Lendir alami okra bermanfaat, tetapi jika tidak disukai, potong memanjang dan panggang. Tumis dengan api besar juga mengurangi lendir. Tambahkan sedikit cuka atau lemon untuk menekan lendir. Untuk menu yang menonjolkan tekstur okra, seperti okra crispy, sebaiknya okra dipotong utuh atau dibelah dua memanjang saja, bukan dipotong kecil-kecil.

## Olahan Populer
Okra tumis bawang putih, okra panggang, okra dalam kari, dan okra crispy. Di menu Timur Tengah, okra sering dimasak dengan tomat. Di restoran modern, okra juga sering dijadikan garnish atau topping untuk salad hangat.

## Penyimpanan
Simpan dalam kantong kertas di chiller, gunakan dalam 3 hari. Jangan mencuci sebelum disimpan. Okra yang sudah lembek sebaiknya tidak disimpan lama, karena lendirnya akan semakin banyak dan teksturnya berubah.

## Kesimpulan
Okra hijau adalah sayuran premium yang menawarkan nilai gizi dan fleksibilitas olahan. Dengan teknik pengolahan yang tepat, okra bisa menjadi menu sehat yang lezat dan tetap terlihat menarik di piring. Okra hijau Grade A dari Cipanas dipanen muda untuk tekstur terbaik.
    `,
  },
  {
    slug: 'daun-kelor-superfood-lokal',
    title: 'Daun Kelor: Superfood Lokal yang Mendunia',
    excerpt: 'Daun kelor kaya nutrisi dan mudah diolah. Simak cara memilih dan mengolah kelor untuk menu sehat.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-19',
    readTime: 6,
    image: Daun_Kelor_10,
    stats: [
      { label: 'Vitamin A', value: '±4x wortel' },
      { label: 'Kalsium', value: '±4x susu' },
      { label: 'Protein', value: '±9x yoghurt' },
      { label: 'Zat besi', value: 'Tinggi' },
    ],
    diagram: {
      title: 'Kelor: dari Kebun ke Menu',
      steps: [
        { title: 'Panen pagi', desc: 'Daun muda dipetik sebelum matahari terik.' },
        { title: 'Pisahkan daun', desc: 'Dari tangkai, cuci air mengalir.' },
        { title: 'Masak cepat', desc: '2–3 menit, jangan terlalu lama.' },
        { title: 'Alternatif kering', desc: 'Keringkan di suhu <50°C, jadikan bubuk.' },
        { title: 'Simpan', desc: 'Plastik perforasi, 2–3 hari di chiller.' },
      ],
    },
    content: `
Daun kelor disebut sebagai superfood karena kandungan nutrisinya yang luar biasa. Tanaman ini mudah tumbuh di Indonesia, tetapi khasiatnya diakui hingga mancanegara. Artikel ini membahas kandungan gizi, ciri kelor segar, olahan populer, tips mengolah, dan penyimpanan untuk dapur profesional.

## Kandungan Gizi
Daun kelor tinggi vitamin A, vitamin C, kalsium, dan zat besi. Kandungan protein nabatinya juga cukup tinggi dibanding sayuran daun lain. Antioksidannya membantu melindungi sel dari kerusakan. Dalam bentuk bubuk, kelor sering dijadikan suplemen alami karena kepadatan gizinya yang tinggi.

## Ciri Kelor Segar
Daun kecil hijau cerah, tangkai mudah dipatahkan, dan tidak ada daun menguning. Aroma segar khas menandakan kelor baru dipanen. Daun kelor yang sudah menguning biasanya sudah kehilangan sebagian besar kandungan vitamin dan tidak cocok untuk menu premium.

## Olahan Populer
Sayur bening kelor, tumis kelor, kelor krispi, dan smoothie hijau. Daun kelor juga bisa dikeringkan dan dijadikan bubuk untuk campuran makanan. Di kafe sehat, kelor sering dijadikan bahan utama smoothie bowl atau energy bar.

## Tips Mengolah
Masak kelor sebentar saja (2–3 menit) untuk menjaga nutrisi dan warna. Daun muda lebih lembut dan tidak pahit. Hindari memasak terlalu lama karena daun akan hancur. Untuk sup, masukkan kelor di akhir proses memasak agar teksturnya tetap lembut dan warnanya tetap hijau cerah.

## Penyimpanan
Simpan dalam plastik perforasi di chiller, gunakan dalam 2–3 hari. Bisa juga dikeringkan untuk cadangan. Pengeringan sebaiknya dilakukan di suhu di bawah 50°C untuk menjaga kandungan vitamin, lalu disimpan dalam wadah kedap udara.

## Kesimpulan
Daun kelor adalah superfood lokal yang bernilai tinggi dan mudah diolah. Dengan pengolahan yang tepat, kelor bisa menjadi menu sehat yang lezat dan bergizi untuk semua kalangan. Green Fresh Cipanas memasok daun kelor segar dari kebun mitra di dataran tinggi.
    `,
  },
  {
    slug: 'kacang-panjang-menu-harian-hemat',
    title: 'Kacang Panjang: Menu Harian Hemat dengan Gizi Tinggi',
    excerpt: 'Kacang panjang murah, mudah diolah, dan kaya serat. Cocok jadi menu harian katering dan restoran.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-22',
    readTime: 5,
    image: Kacang_Panjang_10,
    stats: [
      { label: 'Kalori', value: '47 kkal/100g' },
      { label: 'Serat', value: '2.7 g/100g' },
      { label: 'Waktu masak', value: '3–5 menit' },
      { label: 'Yield', value: '90%' },
    ],
    diagram: {
      title: 'Alur Kacang Panjang di Katering',
      steps: [
        { title: 'Terima', desc: 'Cek warna hijau cerah & tekstur renyah.' },
        { title: 'Cuci', desc: 'Air mengalir, potong ujung.' },
        { title: 'Potong', desc: 'Panjang 4–5 cm, seragam untuk plating.' },
        { title: 'Masak', desc: 'Api besar, 3–5 menit, jangan terlalu lama.' },
        { title: 'Sajikan', desc: 'Segera, jangan didiamkan lama di bain-marie.' },
      ],
    },
    content: `
Kacang panjang adalah sayur andalan dapur Indonesia. Harganya bersahabat, gizinya tinggi, dan mudah diolah. Tidak heran komoditas ini selalu ada di menu harian katering. Artikel ini membahas kandungan gizi, ciri kacang panjang segar, olahan populer, tips memasak, dan penyimpanan yang benar.

## Kandungan Gizi
Kacang panjang tinggi serat, vitamin A, vitamin C, vitamin K, dan folat. Kandungan protein nabatinya juga cukup untuk menu vegetarian sederhana. Dengan harga yang relatif rendah, kacang panjang menjadi salah satu sayur paling efisien untuk memenuhi kebutuhan gizi harian dalam jumlah besar.

## Ciri Kacang Panjang Segar
Warna hijau cerah, tekstur renyah saat dipatahkan, tidak ada bercak cokelat, dan ukuran seragam. Kacang panjang yang lembek biasanya sudah lama disimpan. Untuk katering, pilih kacang panjang yang tidak terlalu tua agar teksturnya tetap lembut setelah dimasak.

## Olahan Populer
Tumis kacang panjang tempe, kacang panjang lodeh, pecel, dan kacang panjang crispy. Untuk menu katering, tumis kacang panjang tempe adalah pilihan hemat yang disukai banyak orang. Kacang panjang juga bisa dijadikan isian omelet atau campuran sayur capcay.

## Tips Memasak
Potong pendek dan masak cepat dengan api besar agar tetap renyah. Jangan terlalu lama agar warna tetap hijau. Menambahkan sedikit baking soda saat merebus bisa membantu menjaga warna. Untuk katering massal, masak dalam batch kecil agar suhu wajan tetap tinggi dan hasilnya konsisten.

## Penyimpanan
Simpan dalam kantong plastik berlubang di chiller, gunakan dalam 3–4 hari. Kacang panjang yang sudah dipotong sebaiknya segera dimasak, karena permukaan potongan cepat kehilangan kelembapan dan menjadi lembek.

## Kesimpulan
Kacang panjang adalah sayur hemat dengan gizi tinggi yang cocok untuk menu harian katering dan restoran. Dengan teknik memasak yang tepat, kacang panjang bisa tampil menarik dan tetap renyah di piring. Kacang panjang Grade A dari Cipanas dipanen muda untuk tekstur renyah optimal.
    `,
  },
  {
    slug: 'jagung-manis-untuk-menu-sarapan',
    title: 'Jagung Manis untuk Menu Sarapan Hotel',
    excerpt: 'Jagung manis segar punya rasa alami yang manis dan tekstur lembut. Cocok untuk menu sarapan buffet.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-25',
    readTime: 5,
    image: Jagung_1,
    stats: [
      { label: 'Gula alami', value: '6 g/100g' },
      { label: 'Waktu rebus', value: '5–7 menit' },
      { label: 'Kalori', value: '86 kkal/100g' },
      { label: 'Umur simpan', value: '2–3 hari' },
    ],
    diagram: {
      title: 'Dari Kelobot ke Piring Buffet',
      steps: [
        { title: 'Pilih', desc: 'Kelobot hijau, rambut lembap, biji padat.' },
        { title: 'Kupas', desc: 'Sisakan sedikit kelobot untuk rebus.' },
        { title: 'Rebus', desc: 'Air + gula + garam, 5–7 menit.' },
        { title: 'Potong', desc: 'Potong 3–4 cm untuk buffet.' },
        { title: 'Sajikan', desc: 'Dengan mentega, herbs, atau saus keju.' },
      ],
    },
    content: `
Jagung manis adalah komoditas serba guna untuk menu sarapan hotel, dari buffet hingga à la carte. Rasanya yang manis alami disukai hampir semua tamu. Artikel ini membahas ciri jagung manis segar, olahan sarapan populer, tips memasak, penyimpanan, dan nilai tambah untuk hotel.

## Ciri Jagung Manis Segar
Kelobot hijau segar, rambut jagung masih lembap, biji kuning cerah dan padat, serta tidak ada biji keriput. Jagung yang terlalu lama disimpan akan kehilangan rasa manis. Untuk hotel, sebaiknya jagung dipilih dengan tongkol seragam agar plating terlihat rapi.

## Olahan Sarapan Populer
Jagung rebus, jagung bakar, jagung susu keju, jagung creamy soup, dan pancake jagung. Untuk buffet, jagung rebus potong kecil mudah disajikan dan disukai anak-anak. Untuk à la carte, jagung manis bisa dijadikan topping untuk omelet, salad, atau bubur ayam premium.

## Tips Memasak
Rebus jagung dengan sedikit gula dan garam selama 5–7 menit untuk rasa manis maksimal. Jangan terlalu lama agar biji tidak keras. Setelah matang, segera angkat dan tiriskan. Untuk jagung bakar, olesi dengan mentega dan panggang sebentar agar aroma smoky keluar.

## Penyimpanan
Simpan dengan kelobot di chiller, gunakan dalam 2–3 hari. Jagung cepat kehilangan rasa manis setelah dipanen karena gula berubah menjadi pati. Untuk penyimpanan lebih lama, jagung bisa di-blanch lalu dibekukan, meskipun teksturnya akan sedikit berubah.

## Nilai Tambah untuk Hotel
Jagung manis bisa menjadi menu khas sarapan yang membedakan hotel dari kompetitor. Penyajian dengan mentega dan herbs memberi kesan premium. Untuk buffet, jagung manis juga bisa disajikan sebagai bagian dari live cooking station, di mana tamu bisa memilih sendiri topping-nya.

## Kesimpulan
Jagung manis adalah komoditas serba guna yang cocok untuk menu sarapan hotel, dari buffet hingga à la carte. Dengan pemilihan dan pengolahan yang tepat, jagung manis bisa menjadi menu yang disukai semua kalangan. Green Fresh Cipanas memasok jagung manis segar harian dari kebun dataran tinggi.
    `,
  },
  {
    slug: 'bayam-hijau-pasokan-harian-dapur',
    title: 'Bayam Hijau: Menjaga Pasokan Harian untuk Dapur Profesional',
    excerpt: 'Bayam cepat layu, tetapi paling sering dipesan. Ini cara menjaga pasokan harian tetap segar.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-02-28',
    readTime: 6,
    image: Bayam_Hijau_6,
    stats: [
      { label: 'Yield bersih', value: '70%' },
      { label: 'Umur simpan', value: '1–2 hari' },
      { label: 'Suhu simpan', value: '0–2°C' },
      { label: 'Buffer ideal', value: '10%' },
    ],
    diagram: {
      title: 'Siklus Harian Bayam',
      steps: [
        { title: 'Pesan pagi', desc: 'Jumlah kecil, kirim hari sama.' },
        { title: 'Terima', desc: 'Cek suhu & kondisi daun saat tiba.' },
        { title: 'Simpan', desc: 'Chiller 0–2°C, plastik perforasi.' },
        { title: 'Gunakan', desc: 'Dalam 24–48 jam, FIFO wajib.' },
        { title: 'Buffer', desc: 'Siapkan 10% untuk lonjakan pesanan.' },
      ],
    },
    content: `
Bayam hijau adalah sayur paling sering dipesan dapur profesional, tetapi juga paling cepat layu. Tanpa pengelolaan yang benar, bayam bisa rusak dalam hitungan jam. Artikel ini membahas ciri bayam segar, tantangan pasokan, strategi pasokan, olahan populer, dan tips memasak untuk dapur profesional.

## Ciri Bayam Segar
Daun hijau cerah dan tegak, batang tidak lembek, tidak ada daun menguning, dan akar masih segar jika ada. Bayam yang layu biasanya berubah warna menjadi gelap dan batangnya lemas. Untuk dapur hotel, bayam dengan daun kecil dan batang tipis biasanya lebih disukai karena teksturnya lebih lembut setelah dimasak.

## Tantangan Pasokan
Bayam menyusut hingga 30% setelah dibersihkan dan cepat layu di suhu ruang. Ini membuat perencanaan stok kritis. Kesalahan kecil dalam penyimpanan bisa berujung pada waste. Untuk katering besar, kesalahan 1 kg bisa berarti 10 porsi menu tidak bisa disajikan.

## Strategi Pasokan
Pesan harian dalam jumlah kecil. Terima dalam kondisi chilled. Simpan di chiller 0–2°C dengan plastik perforasi. Gunakan dalam 24–48 jam. Siapkan buffer 10% untuk lonjakan pesanan. Untuk dapur besar, buat jadwal penerimaan bayam di pagi hari agar bisa langsung digunakan untuk menu siang.

## Olahan Populer
Sayur bening bayam, tumis bayam bawang putih, bayam creamy, dan sup bayam. Bayam juga bisa dijadikan smoothie hijau untuk menu sehat. Di kafe modern, bayam sering dijadikan bahan utama untuk green juice atau smoothie bowl yang kaya nutrisi.

## Tips Memasak
Masak bayam sebentar (2–3 menit) untuk menjaga warna dan nutrisi. Jangan menutup panci saat memasak agar warna tetap hijau. Untuk sup, masukkan bayam di akhir proses memasak agar teksturnya tetap lembut dan tidak hancur.

## Kesimpulan
Bayam hijau adalah komoditas penting dengan tantangan pasokan yang unik. Dengan strategi pasokan yang tepat, dapur profesional bisa menjaga kualitas bayam hingga ke piring tamu. Green Fresh Cipanas mengirim bayam hijau harian dari kebun mitra, memastikan kesegaran maksimal.
    `,
  },
  {
    slug: 'labu-siam-menu-rendah-kalori',
    title: 'Labu Siam: Menu Rendah Kalori yang Ramah Biaya',
    excerpt: 'Labu siam murah, rendah kalori, dan mudah diolah. Cocok untuk menu diet dan katering massal.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-03-03',
    readTime: 5,
    image: Labu_Siam_4,
    stats: [
      { label: 'Kalori', value: '19 kkal/100g' },
      { label: 'Serat', value: '1.7 g/100g' },
      { label: 'Air', value: '94%' },
      { label: 'Umur simpan', value: '7 hari' },
    ],
    diagram: {
      title: 'Dari Labu Siam ke Menu Diet',
      steps: [
        { title: 'Kupas', desc: 'Buang getah dengan rendam air garam.' },
        { title: 'Potong', desc: 'Sesuai menu: batang, dadu, atau serut.' },
        { title: 'Rendam', desc: 'Air garam 10 menit untuk kurangi getah.' },
        { title: 'Masak', desc: 'Tumis atau lodeh, jangan terlalu lama.' },
        { title: 'Sajikan', desc: 'Sebagai pengganti nasi atau kentang.' },
      ],
    },
    content: `
Labu siam adalah sayur andalan untuk menu rendah kalori. Harganya bersahabat dan mudah diolah, sehingga cocok untuk katering massal maupun menu diet restoran. Artikel ini membahas kandungan gizi, ciri labu siam segar, olahan populer, tips mengolah, dan penyimpanan yang benar.

## Kandungan Gizi
Labu siam rendah kalori, tinggi serat, mengandung vitamin C dan kalium. Kandungan airnya tinggi sehingga memberi rasa kenyang tanpa banyak kalori. Untuk menu diet, labu siam sering dijadikan pengganti kentang atau nasi karena kalorinya yang sangat rendah namun tetap memberi volume pada piring.

## Ciri Labu Siam Segar
Kulit hijau muda cerah, tekstur padat, tidak lembek, tidak ada bercak cokelat, dan ukuran seragam. Labu siam yang terlalu tua memiliki serat kasar dan rasa kurang manis. Untuk katering, pilih labu siam dengan ukuran seragam agar proses pengupasan dan pemotongan lebih efisien.

## Olahan Populer
Tumis labu siam, sayur lodeh labu siam, labu siam krispi, dan labu siam isi. Untuk menu diet, labu siam sering dijadikan pengganti kentang atau nasi. Labu siam juga bisa dijadikan bahan utama untuk menu "nasi sayur" yang rendah karbohidrat dan tinggi serat.

## Tips Mengolah
Kupas dan potong, lalu rendam air garam sebentar untuk mengurangi getah. Masak hingga empuk tetapi tidak hancur. Menambahkan sedikit asam (tomat atau jeruk) membantu mengurangi getah. Untuk labu siam isi, sebaiknya pilih labu siam yang masih muda agar teksturnya lembut saat dipanggang.

## Penyimpanan
Simpan di tempat sejuk dan kering. Labu siam tahan hingga 1 minggu di suhu ruang. Untuk penyimpanan lebih lama, labu siam bisa disimpan di chiller, meskipun teksturnya akan sedikit berubah. Hindari menyimpan labu siam di tempat lembap karena mudah berjamur.

## Kesimpulan
Labu siam adalah sayur rendah kalori yang ramah biaya dan mudah diolah. Dengan pengolahan yang tepat, labu siam bisa menjadi menu diet yang lezat dan mengenyangkan. Labu siam Grade A dari Cipanas dipanen muda untuk tekstur lembut dan rasa manis alami.
    `,
  },
];