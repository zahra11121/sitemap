// src/data/articles.ts
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

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: any;
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
    readTime: 6,
    image: Wortel_10,
    content: `Wortel adalah salah satu komoditas paling sering dipesan oleh restoran, hotel, dan katering. Namun tidak semua wortel layak masuk dapur profesional. Perbedaan kualitas bisa memengaruhi rasa, tekstur, hingga konsistensi plating di atas piring tamu. Bagi chef dan purchasing manager, kemampuan memilih wortel Grade A adalah keterampilan dasar yang wajib dikuasai.

Kriteria pertama adalah warna. Wortel Grade A memiliki warna oranye pekat yang merata dari pangkal hingga ujung. Warna pucat biasanya menandakan kandungan beta-karoten rendah dan kemungkinan dipanen terlalu muda. Untuk kebutuhan restoran fine dining, warna oranye seragam sangat penting karena memengaruhi tampilan hidangan.

Kriteria kedua adalah tekstur. Pegang wortel dan tekan perlahan. Wortel segar terasa keras dan padat. Jika terasa lembek atau mudah bengkok, berarti kadar air sudah turun atau penyimpanan terlalu lama. Wortel dengan tekstur lembek tidak cocok untuk menu yang membutuhkan kerenyahan seperti salad atau garnish.

Kriteria ketiga adalah ukuran seragam. Untuk kebutuhan restoran, ukuran seragam biasanya berdiameter dua sampai tiga sentimeter. Ukuran seragam memudahkan proses potong, menghasilkan yield lebih konsisten, dan mempermudah perhitungan porsi. Ini penting terutama untuk katering massal yang memproduksi ribuan porsi setiap hari.

Kriteria keempat adalah bebas retak dan luka. Retakan pada permukaan wortel membuka jalan masuk bakteri dan mempercepat pembusukan. Hindari wortel dengan luka gores, lubang bekas hama, atau bercak hitam. Wortel yang rusak tidak hanya berisiko cepat busuk, tetapi juga memperpendek masa simpan stok dapur.

Kriteria kelima adalah kondisi daun. Jika daun wortel masih menempel, pilih yang masih hijau dan tegak. Daun yang masih hijau menandakan wortel baru dipanen dan memiliki kesegaran optimal. Jika daun sudah layu atau menguning, wortel sudah lama disimpan dan kualitasnya menurun.

Setelah diterima, simpan wortel di chiller bersuhu nol sampai empat derajat Celsius dengan kelembapan tinggi. Jangan mencuci wortel sebelum disimpan karena kelembapan berlebih memicu pertumbuhan jamur. Jika ingin disimpan lebih lama, wortel bisa dimasukkan ke kantong plastik perforasi agar tetap mendapatkan sirkulasi udara.

CV Green Fresh Cipanas menyortir wortel secara manual sebelum pengiriman. Setiap batch melewati pemeriksaan warna, tekstur, ukuran, dan kebersihan, memastikan hanya Grade A yang sampai ke dapur Anda. Dengan standar ini, mitra hotel, restoran, dan katering dapat mempertahankan kualitas menu sekaligus mengurangi pemborosan bahan baku.`,
  },
  {
    slug: 'manfaat-brokoli-untuk-menu-sehat',
    title: 'Manfaat Brokoli untuk Menu Sehat Hotel & Restoran',
    excerpt: 'Brokoli kaya serat, vitamin C, dan senyawa antioksidan. Cocok jadi menu andalan untuk tamu yang peduli kesehatan.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-08',
    readTime: 5,
    image: Brokoli_2,
    content: `Brokoli telah lama menjadi primadona di menu sehat. Bagi hotel dan restoran, komoditas ini bukan hanya soal gizi, tetapi juga soal daya tarik visual di piring dan konsistensi setelah dimasak. Memahami karakter brokoli membantu dapur menyajikannya secara optimal.

Dari sisi gizi, brokoli mengandung vitamin C tinggi yang mendekati kandungan jeruk, serat larut untuk pencernaan, folat, vitamin K, serta senyawa sulforaphane yang berperan sebagai antioksidan. Kandungan ini menjadikan brokoli pilihan populer untuk menu diet, menu vegetarian, dan program makan sehat perusahaan.

Restoran menyukai brokoli karena mempertahankan warna hijau cerah setelah di-blanch. Warna yang cerah membuat plating terlihat segar dan menggugah selera. Teksturnya renyah dan mudah dipadukan dengan protein apa pun, mulai dari daging sapi, ayam, ikan, hingga tahu dan tempe untuk menu nabati.

Cara memasak yang tepat sangat penting. Blanch brokoli selama dua sampai tiga menit di air mendidih yang diberi sedikit garam, lalu langsung pindahkan ke ice bath. Cara ini menjaga warna hijau, kerenyahan, dan mengurangi kehilangan nutrisi. Jika brokoli dimasak terlalu lama, warnanya berubah kekuningan dan teksturnya lembek, sehingga tidak layak tampil di menu premium.

Untuk menu hotel, brokoli sering disajikan sebagai side dish, campuran salad, atau bahan sup krim. Banyak chef juga memanfaatkan batang brokoli yang dipotong tipis sebagai garnish atau campuran tumis, sehingga yield lebih tinggi dan waste lebih kecil.

Penyimpanan brokoli juga perlu perhatian. Brokoli cepat menguning jika disimpan terbuka di suhu ruang. Simpan di chiller bersuhu nol sampai empat derajat Celsius, bungkus dengan plastik perforasi, dan gunakan dalam tiga sampai empat hari. Jangan mencuci brokoli sebelum disimpan karena kelembapan berlebih memicu jamur.

Pasokan brokoli Grade A dari kebun dataran tinggi Cipanas memiliki kepala rapat, warna hijau tua konsisten, dan batang padat. Kualitas ini diperoleh karena suhu dingin dataran tinggi memperlambat pematangan sehingga brokoli tumbuh perlahan dengan tekstur lebih padat. CV Green Fresh Cipanas memasok brokoli segar harian ke hotel, restoran, dan katering dengan standar penyortiran manual, memastikan setiap kepala brokoli memenuhi ekspektasi dapur profesional.`,
  },
  {
    slug: 'mengapa-sayur-cipanas-lebih-segar',
    title: 'Mengapa Sayur dari Cipanas & Puncak Lebih Segar?',
    excerpt: 'Faktor ketinggian, suhu, dan tanah vulkanik membuat sayur Cipanas punya rasa dan tekstur khas yang sulit ditiru.',
    category: 'Edukasi Pertanian',
    author: 'Tim Green Fresh',
    date: '2025-01-10',
    readTime: 7,
    image: Selada_3,
    content: `Cipanas dan Puncak dikenal sebagai sentra sayur dataran tinggi di Jawa Barat. Banyak chef bersikeras memakai sayur dari sini karena rasa dan teksturnya berbeda. Ada alasan ilmiah dan agronomis di balik reputasi tersebut.

Faktor pertama adalah suhu ideal untuk sayur daun. Ketinggian seribu seratus sampai seribu lima ratus meter dengan suhu lima belas sampai dua puluh dua derajat Celsius memperlambat proses pematangan. Sayuran daun tumbuh perlahan sehingga jaringan daun lebih padat dan renyah. Sayur yang tumbuh cepat di dataran rendah cenderung lebih berair dan cepat layu.

Faktor kedua adalah tanah vulkanik yang subur. Tanah vulkanik kaya mineral menghasilkan rasa sayur yang lebih pekat. Wortel dan selada dari Cipanas dikenal lebih manis alami karena kandungan mineral dan bahan organik tanah yang tinggi. Petani di kawasan ini juga menerapkan rotasi tanaman yang menjaga kesuburan tanah.

Faktor ketiga adalah jarak panen ke pengiriman yang pendek. Karena dipanen pagi dan dikirim hari yang sama, sayur Cipanas masuk dapur dalam kondisi paling segar. Rantai pasok pendek mengurangi waktu transit dan paparan suhu ruang, sehingga kesegaran tetap terjaga.

Faktor keempat adalah irigasi dari mata air pegunungan. Air gunung yang bersih menjaga kadar air sayur optimal dan mengurangi risiko kontaminasi. Irigasi yang baik juga membantu sayur tumbuh dengan warna dan bentuk seragam.

Faktor kelima adalah budidaya turun-temurun. Petani lokal Cipanas sudah bertani lintas generasi dan tahu persis waktu panen terbaik per komoditas. Pengetahuan ini sulit ditiru dan menjadi keunggulan kualitas yang konsisten.

Green Fresh Cipanas bermitra langsung dengan petani di kawasan ini untuk menjaga rantai pasok tetap pendek dan segar. Setiap komoditas dipanen sesuai jadwal, disortir manual, dan dikirim dengan armada berpendingin agar kualitas Grade A sampai di dapur mitra. Dengan pendekatan ini, hotel, restoran, katering, dan supermarket dapat menikmati sayur Cipanas dengan standar kesegaran yang konsisten sepanjang tahun.`,
  },
  {
    slug: 'strategi-mengelola-stok-sayur-untuk-katering',
    title: 'Strategi Mengelola Stok Sayur untuk Katering Pabrik',
    excerpt: 'Katering dengan ribuan porsi harian butuh pasokan stabil. Ini strategi stok dan jadwal pengiriman yang aman.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-12',
    readTime: 8,
    image: Bawang_Merah_4,
    content: `Katering pabrik menuntut konsistensi volume dan jadwal. Salah hitung stok bisa berarti menu tidak sesuai rencana, biaya membengkak, atau bahkan keterlambatan penyajian yang merusak reputasi. Mengelola stok sayur untuk katering massal memerlukan pendekatan yang lebih ketat dibanding restoran biasa.

Langkah pertama adalah menghitung yield, bukan berat kotor. Sayur daun menyusut dua puluh sampai tiga puluh persen setelah dibersihkan. Wortel kehilangan sebagian berat setelah dikupas. Gunakan angka yield realistis saat memesan agar jumlah bersih yang tersedia sesuai kebutuhan menu. Banyak katering membuat kesalahan dengan memesan berdasarkan berat kotor, sehingga kekurangan bahan saat produksi.

Langkah kedua adalah menerapkan sistem FIFO, First In First Out. Setiap karung atau kontainer sayur diberi label tanggal terima, lalu disusun berdasarkan kedatangan. Stok lama dipakai lebih dulu. Sistem ini mencegah sayur menumpuk di belakang dan membusuk karena terlewat.

Langkah ketiga adalah memesan komoditas cepat rusak dalam siklus dua hari. Sayur daun hijau seperti kangkung, bayam, dan sawi paling cepat rusak. Pesan dalam jumlah kecil dan sering agar stok selalu segar. Untuk komoditas yang lebih tahan lama seperti umbi-umbian, siklus pemesanan bisa lebih panjang.

Langkah keempat adalah memanfaatkan termin pembayaran tujuh hari untuk menjaga arus kas. Termin pembayaran B2B membantu katering menjaga cash flow sambil tetap mendapat pasokan harian. Dengan termin ini, katering bisa mengatur pembayaran sesuai siklus penagihan ke klien, tanpa mengorbankan kesegaran pasokan.

Langkah kelima adalah menyiapkan buffer sepuluh sampai lima belas persen. Selalu sediakan cadangan untuk lonjakan pesanan mendadak atau pembatalan panen dari supplier. Buffer ini menyelamatkan operasional saat permintaan naik tanpa rencana.

Langkah keenam adalah evaluasi mingguan. Catat komoditas yang sering tersisa, lalu sesuaikan jumlah pesanan minggu berikutnya. Evaluasi rutin membantu menemukan pola konsumsi dan mengurangi waste secara bertahap.

Dengan strategi ini, katering pabrik bisa menekan waste hingga di bawah lima persen, menjaga biaya bahan baku tetap terkendali, dan memastikan menu harian selalu tersedia sesuai jadwal. CV Green Fresh Cipanas mendukung mitra katering dengan pengiriman harian, sortir Grade A, dan termin tujuh hari agar operasional dapur berjalan lancar.`,
  },
  {
    slug: 'panduan-penyimpanan-sayur-di-chiller',
    title: 'Panduan Penyimpanan Sayur di Chiller Agar Tahan Lebih Lama',
    excerpt: 'Suhu, kelembapan, dan pemisahan jenis sayur adalah kunci. Simak panduan lengkap penyimpanan di chiller dapur.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-15',
    readTime: 6,
    image: Pakcoy_10,
    content: `Penyimpanan yang salah bisa membuat sayur Grade A rusak dalam dua puluh empat jam. Bagi dapur profesional, chiller adalah aset utama yang menentukan masa simpan sayur. Memahami cara menyimpan setiap jenis sayur di chiller akan menghemat biaya dan menjaga kualitas menu.

Suhu ideal berbeda untuk setiap jenis sayur. Sayur daun seperti selada, bayam, dan pakcoy paling baik disimpan pada suhu nol sampai dua derajat Celsius dengan kelembapan sekitar sembilan puluh lima persen. Umbi-umbian seperti kentang dan wortel lebih cocok pada suhu empat sampai delapan derajat Celsius dan harus dihindari dari kelembapan berlebih. Jamur sebaiknya disimpan pada suhu dua sampai empat derajat Celsius di kantong kertas. Tomat sebaiknya tidak disimpan di chiller terlalu dingin, cukup pada suhu sepuluh sampai dua belas derajat Celsius.

Pemisahan berdasarkan etilen juga penting. Tomat dan apel menghasilkan gas etilen yang mempercepat kematangan sayur lain. Simpan tomat dan buah-buahan penghasil etilen terpisah dari sayur daun agar sayur tidak cepat menguning.

Jangan mencuci sayur sebelum disimpan. Kelembapan berlebih memicu pertumbuhan jamur dan mempercepat pembusukan. Cuci sayur saat akan dipakai, bukan sebelum masuk chiller. Jika sayur sudah terlanjur dicuci, keringkan dengan salad spinner atau tisu dapur sebelum disimpan.

Gunakan kontainer berlubang atau plastik perforasi. Sirkulasi udara penting untuk sayur daun. Jangan menutup rapat dengan plastik tanpa lubang karena uap air akan terperangkap dan memicu jamur. Kontainer berlubang membantu menjaga kelembapan sekaligus memberi ventilasi.

Lakukan rotasi harian. Cek stok setiap pagi dan pindahkan sayur yang mulai layu ke area pemakaian prioritas. Sayur yang menunjukkan tanda-tanda kerusakan segera dipisahkan agar tidak menular ke stok lain. Rotasi harian juga membantu tim dapur mengetahui stok riil dan merencanakan menu berikutnya.

Dengan disiplin penyimpanan ini, dapur profesional dapat memperpanjang masa simpan sayur hingga dua kali lipat, menekan waste, dan menjaga kualitas hingga ke piring tamu. CV Green Fresh Cipanas mengirim sayur dalam kondisi chilled dengan sortir Grade A, sehingga mitra dapat langsung menyimpannya sesuai panduan ini.`,
  },
  {
    slug: 'jamur-tiram-peluang-menu-vegetarian',
    title: 'Jamur Tiram: Peluang Menu Vegetarian yang Menguntungkan',
    excerpt: 'Jamur tiram punya tekstur mirip daging, murah, dan mudah diolah. Cocok jadi menu vegetarian berkelas.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-18',
    readTime: 5,
    image: Jamur_Tiram_7,
    content: `Permintaan menu vegetarian di hotel dan restoran terus naik. Jamur tiram adalah jawaban bagi chef yang ingin menghadirkan menu nabati bertekstur tanpa harga mahal. Komoditas ini mudah diolah, fleksibel, dan punya margin sehat.

Tekstur jamur tiram mirip daging. Jamur tiram bisa disuwir dan ditumis hingga menyerupai tekstur ayam. Banyak restoran memakainya untuk menu mock meat, seperti ayam geprek jamur, sate jamur, atau rendang jamur. Tekstur berserat membuat jamur tiram diterima baik oleh tamu vegetarian maupun non-vegetarian.

Dari sisi harga, jamur tiram jauh lebih murah per porsi dibanding daging, membuat margin menu lebih sehat. Restoran bisa menawarkan menu premium dengan biaya bahan baku rendah, sehingga keuntungan meningkat tanpa mengorbankan kualitas rasa.

Kandungan gizi jamur tiram juga mendukung tren makan sehat. Jamur tiram mengandung protein nabati, serat beta-glukan, vitamin B kompleks, dan rendah kalori. Kombinasi ini cocok untuk menu diet, menu atlet, dan program makan sehat perusahaan.

Olahan jamur tiram sangat beragam. Jamur tiram crispy bisa menjadi camilan atau lauk. Tumis jamur saus tiram cocok untuk menu harian. Jamur isi bumbu bisa menjadi hidangan pembuka. Sup jamur menjadi pilihan untuk menu hangat. Fleksibilitas ini memudahkan dapur membuat variasi menu tanpa menambah jenis bahan baku.

Penyimpanan jamur tiram perlu perhatian. Simpan di kantong kertas dalam chiller bersuhu dua sampai empat derajat Celsius, dan gunakan dalam tiga hari. Jangan mencuci jamur sebelum diolah karena kelembapan berlebih mempercepat kerusakan. Bersihkan dengan kuas atau tisu lembap sebelum dimasak.

Green Fresh Cipanas memasok jamur tiram segar harian dari petani mitra. Setiap batch disortir untuk memastikan kepala jamur utuh, warna cerah, dan tidak berlendir. Dengan pasokan yang konsisten dan harga bersahabat, jamur tiram menjadi peluang menu vegetarian yang menguntungkan bagi hotel, restoran, dan katering.`,
  },
  {
    slug: 'standar-grade-a-sayur-untuk-hotel',
    title: 'Standar Grade A: Apa yang Dicari Hotel dari Supplier Sayur?',
    excerpt: 'Hotel bintang lima punya standar sortir ketat. Ini kriteria Grade A yang wajib dipenuhi supplier.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-01-20',
    readTime: 7,
    image: Paprika_6,
    content: `Hotel besar tidak asal terima sayur. Ada standar sortir yang harus dipenuhi supplier agar kualitas menu dan pengalaman tamu tetap terjaga. Memahami standar ini penting bagi supplier yang ingin menjadi mitra jangka panjang hotel.

Kriteria pertama adalah keseragaman ukuran. Menu hotel butuh plating konsisten. Ukuran seragam memudahkan porsi dan mempercepat proses produksi. Paprika dengan ukuran seragam, misalnya, memudahkan chef memotong dan menata garnish dengan rapi.

Kriteria kedua adalah bebas cacat visual. Tidak boleh ada luka, goresan, atau bekas hama yang terlihat. Cacat visual tidak hanya memengaruhi tampilan, tetapi juga memperpendek masa simpan dan berisiko menular ke sayur lain di chiller.

Kriteria ketiga adalah warna sesuai standar komoditas. Paprika merah harus merah merata, bukan belang. Selada harus hijau cerah. Wortel harus oranye pekat. Warna yang tidak konsisten menandakan kualitas panen atau penanganan yang kurang optimal.

Kriteria keempat adalah kesegaran daun dan batang. Daun tegak, batang tidak layu, dan tidak ada tanda kuning. Sayur yang layu tidak layak masuk menu premium dan mempercepat pembusukan di chiller.

Kriteria kelima adalah suhu saat terima. Sayur harus tiba dalam kondisi dingin, bukan suhu ruang. Rantai dingin yang terjaga memastikan sayur tidak mengalami stres panas selama perjalanan. Hotel biasanya memiliki prosedur pemeriksaan suhu saat penerimaan.

Kriteria keenam adalah dokumentasi QC. Supplier profesional menyertakan catatan QC dan tanggal panen. Dokumentasi ini membantu hotel melacak kualitas dan mengevaluasi supplier secara objektif.

Green Fresh Cipanas menjalankan QC Grade A manual sebelum pengiriman, memastikan standar hotel terpenuhi. Setiap komoditas diperiksa warna, ukuran, tekstur, dan kebersihan sebelum dikirim dengan armada berpendingin. Dengan standar ini, hotel dapat mempertahankan kualitas menu dan kepuasan tamu secara konsisten.`,
  },
  {
    slug: 'cara-mengurangi-waste-sayur-di-restoran',
    title: 'Cara Mengurangi Waste Sayur di Restoran hingga 40%',
    excerpt: 'Waste sayur menggerus margin. Ini langkah praktis menekan pemborosan dari penerimaan sampai plating.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-01-22',
    readTime: 6,
    image: Kangkung_2,
    content: `Waste sayur di restoran bisa mencapai tiga puluh sampai empat puluh persen jika tidak dikelola. Pemborosan ini menggerus margin dan meningkatkan biaya bahan baku. Mengurangi waste memerlukan pendekatan sistematis dari penerimaan hingga plating.

Langkah pertama adalah menerima dengan pengecekan ketat. Tolak atau catat sayur yang tidak sesuai standar saat penerimaan. Jangan biarkan sayur cacat masuk stok karena akan menular ke komoditas lain dan mempercepat pembusukan. Pengecekan meliputi warna, tekstur, ukuran, dan suhu.

Langkah kedua adalah menyusun menu harian berbasis stok. Susun menu spesial berdasarkan komoditas yang paling cepat rusak. Misalnya, jika stok bayam dan kangkung melimpah, jadikan sayur bening atau tumis sebagai menu spesial hari itu. Pendekatan ini membantu menghabiskan stok sebelum rusak.

Langkah ketiga adalah pelatihan staf potong. Teknik potong yang benar meningkatkan yield. Wortel yang dipotong salah bisa kehilangan lima belas persen daging. Pelatihan rutin dan standar potong tertulis membantu staf bekerja konsisten.

Langkah keempat adalah memanfaatkan bagian sisa. Daun wortel bisa dijadikan pesto. Batang brokoli bisa dijadikan sup krim. Kulit kentang bisa dijadikan keripik. Kreativitas dapur dalam memanfaatkan bagian sisa mengurangi waste sekaligus menambah variasi menu.

Langkah kelima adalah mencatat data waste mingguan. Catat jenis dan volume waste setiap minggu, lalu cari pola. Apakah waste tinggi pada komoditas tertentu? Apakah terjadi pada hari tertentu? Data ini menjadi dasar perbaikan.

Langkah keenam adalah memilih supplier dengan garansi retur. Supplier yang berani garansi retur membantu restoran mengurangi risiko. Jika sayur tidak segar saat diterima, restoran bisa mengajukan klaim dan mengganti komoditas tanpa kerugian.

Dengan disiplin ini, banyak dapur memangkas waste hingga empat puluh persen, meningkatkan margin, dan menjaga kualitas menu. CV Green Fresh Cipanas mendukung mitra restoran dengan sortir Grade A, pengiriman chilled, dan garansi retur maksimal dua puluh empat jam setelah penerimaan.`,
  },
  {
    slug: 'tomat-segar-untuk-saus-dan-salad',
    title: 'Tomat Segar untuk Saus dan Salad: Panduan Memilih',
    excerpt: 'Tomat untuk saus berbeda dengan tomat untuk salad. Kenali jenis dan tingkat kematangan yang tepat.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-01-25',
    readTime: 5,
    image: Tomat_10,
    content: `Tomat adalah bahan serba guna, tetapi tidak semua tomat cocok untuk semua olahan. Memilih tomat yang tepat untuk saus dan salad akan meningkatkan rasa dan tampilan hidangan secara signifikan.

Untuk saus, pilih tomat yang matang penuh, berdaging tebal, dan kadar air sedang. Varietas plum atau roma ideal karena sedikit biji dan dagingnya padat. Tomat seperti ini menghasilkan saus yang kental dan kaya rasa tanpa perlu banyak pengental tambahan. Hindari tomat yang terlalu berair karena saus menjadi encer dan butuh waktu lama untuk mengurangi kadar air.

Untuk salad, pilih tomat yang masih sedikit keras, warna cerah, dan tidak terlalu berair agar tidak membuat salad lembek. Tomat ceri atau tomat beefsteak muda bisa menjadi pilihan. Potong tepat sebelum disajikan agar tekstur tetap renyah dan tidak mengeluarkan terlalu banyak air.

Tingkat kematangan juga menentukan penggunaan. Tomat hijau cocok untuk acar atau tumis. Tomat setengah matang cocok untuk salad. Tomat matang penuh cocok untuk saus dan sup. Memahami tingkat kematangan membantu dapur memesan tomat sesuai kebutuhan menu.

Penyimpanan tomat perlu perhatian khusus. Jangan simpan tomat di chiller di bawah sepuluh derajat Celsius karena merusak tekstur dan mengurangi rasa manis alami. Simpan di suhu ruang sampai matang, lalu gunakan. Jika harus disimpan di chiller, keluarkan beberapa saat sebelum disajikan agar kembali ke suhu ruang.

Ciri tomat segar adalah kulit mengkilap, tidak keriput, dan berat terasa padat saat dipegang. Hindari tomat dengan bercak cokelat, retak, atau bagian lembek. Tomat yang rusak cepat menular ke tomat lain dalam satu wadah.

Green Fresh Cipanas memasok tomat merah Grade A dengan tingkat kematangan sesuai kebutuhan dapur. Setiap batch disortir untuk memastikan warna merata, tekstur padat, dan bebas cacat. Dengan pasokan yang konsisten, hotel, restoran, dan katering dapat menyajikan saus dan salad dengan kualitas terbaik.`,
  },
  {
    slug: 'kale-sayuran-premium-yang-naik-daun',
    title: 'Kale: Sayuran Premium yang Naik Daun di Menu Sehat',
    excerpt: 'Kale kaya serat dan antioksidan. Simak cara mengolah dan memilih kale segar untuk menu premium.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-01-28',
    readTime: 5,
    image: Kale_1,
    content: `Kale dikenal sebagai superfood dan kini banyak muncul di menu restoran sehat dan hotel. Daunnya bertekstur tebal, kaya nutrisi, dan fleksibel diolah menjadi berbagai hidangan premium.

Dari sisi gizi, kale mengandung vitamin K tinggi, vitamin A dan C, serat, dan antioksidan. Kandungan ini menjadikan kale pilihan populer untuk menu diet, menu detoks, dan program makan sehat. Restoran sehat sering menempatkan kale sebagai bahan utama salad atau smoothie.

Cara memilih kale segar sangat penting. Pilih daun hijau tua, keriting rapat, dan batang tidak terlalu tebal. Hindari daun menguning atau berlubang. Daun yang tebal dan keriting menandakan kale tumbuh di lingkungan ideal, biasanya dataran tinggi dengan suhu dingin.

Olahan kale sangat beragam. Kale chips yang dipanggang menjadi camilan sehat. Kale salad dengan dressing lemon cocok untuk menu pembuka. Smoothie hijau menjadi pilihan menu sarapan sehat. Tumis kale dengan bawang putih menjadi side dish yang mudah disiapkan.

Teknik mengurangi rasa pahit kale adalah dengan massage. Massage daun kale dengan minyak zaitun dan garam selama satu sampai dua menit sebelum diolah. Rasa pahit berkurang, tekstur lebih lembut, dan daun lebih mudah menyerap dressing. Teknik ini umum digunakan di restoran sehat.

Penyimpanan kale juga perlu perhatian. Bungkus dalam plastik perforasi di chiller bersuhu nol sampai dua derajat Celsius, gunakan dalam empat hari. Jangan mencuci sebelum disimpan. Jika daun mulai layu, rendam air es beberapa menit untuk menyegarkan kembali.

Kale premium dari kebun dataran tinggi Cipanas memiliki daun keriting tebal dan warna hijau pekat. Suhu dingin dataran tinggi membuat kale tumbuh perlahan dengan tekstur lebih padat. CV Green Fresh Cipanas memasok kale segar dengan sortir Grade A, memastikan setiap daun memenuhi standar menu premium hotel dan restoran.`,
  },
  {
    slug: 'cabai-merah-pedas-pasokan-stabil',
    title: 'Cabai Merah: Menjaga Pasokan Stabil Saat Harga Naik',
    excerpt: 'Fluktuasi harga cabai merah sering mengganggu dapur. Ini strategi menjaga pasokan tetap stabil.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-02-01',
    readTime: 6,
    image: Cabai_Merah_4,
    content: `Cabai merah adalah komoditas paling fluktuatif. Harga bisa melonjak drastis saat musim hujan atau menjelang hari raya. Bagi dapur profesional, fluktuasi ini mengganggu perencanaan menu dan biaya bahan baku. Menjaga pasokan tetap stabil memerlukan strategi berlapis.

Strategi pertama adalah membangun hubungan jangka panjang dengan supplier. Supplier yang punya akses langsung ke petani bisa memberi harga lebih stabil dibanding pasar. Hubungan jangka panjang juga memudahkan negosiasi saat harga naik dan memastikan prioritas pasokan saat stok terbatas.

Strategi kedua adalah menyimpan cabai kering atau beku. Saat harga rendah, beli lebih banyak lalu keringkan atau bekukan untuk cadangan. Cabai kering bisa disimpan berbulan-bulan dan digunakan untuk menu yang tidak menonjolkan cabai segar. Cabai beku bisa dipakai untuk tumis dan sambal.

Strategi ketiga adalah menggunakan cabai bubuk untuk menu tertentu. Menu yang tidak menonjolkan cabai segar bisa memakai cabai bubuk berkualitas. Ini membantu mengurangi ketergantungan pada cabai segar saat harga sedang tinggi.

Strategi keempat adalah memantau pola musim. Harga cabai merah biasanya naik saat musim hujan Desember sampai Februari dan hari besar keagamaan. Dengan memahami pola ini, dapur bisa merencanakan pembelian lebih awal dan menyimpan cadangan sebelum harga naik.

Strategi kelima adalah kontrak pasokan. Untuk kebutuhan besar, kontrak pasokan jangka pendek dengan harga tetap bisa membantu. Kontrak ini memberi kepastian harga dan volume, meskipun biasanya memerlukan komitmen pembelian minimal.

Selain strategi pasokan, kualitas cabai juga perlu dijaga. Pilih cabai merah dengan warna cerah merata, tekstur padat, dan tidak keriput. Hindari cabai dengan bercak hitam atau bagian lembek. Simpan cabai di chiller dengan plastik perforasi dan gunakan dalam satu minggu.

Green Fresh Cipanas membantu mitra B2B menjaga pasokan cabai merah tetap stabil dengan jaringan petani mitra. Sortir Grade A memastikan setiap cabai memenuhi standar warna dan tekstur. Dengan pasokan yang stabil, dapur dapat merencanakan menu dan biaya lebih baik sepanjang tahun.`,
  },
  {
    slug: 'resep-tumis-pakcoy-bawang-putih',
    title: 'Resep Tumis Pakcoy Bawang Putih ala Restoran',
    excerpt: 'Menu sederhana dengan rasa premium. Resep tumis pakcoy bawang putih yang cocok untuk menu harian hotel.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-04',
    readTime: 4,
    image: Pakcoy_10,
    content: `Pakcoy adalah sayur serba guna yang cepat matang. Menu tumis pakcoy bawang putih menjadi andalan banyak restoran karena sederhana, cepat, dan disukai hampir semua tamu. Berikut resep ala restoran yang bisa diterapkan di dapur hotel maupun katering.

Bahan untuk dua porsi: tiga ratus gram pakcoy segar, empat siung bawang putih cincang, satu sendok makan saus tiram, setengah sendok teh garam, setengah sendok teh gula, satu sendok makan minyak wijen, dan seratus mililiter air.

Cara membuat: cuci pakcoy lalu potong sesuai selera. Panaskan minyak, tumis bawang putih hingga harum. Masukkan pakcoy, aduk cepat. Tambahkan saus tiram, garam, gula, dan air. Masak dua menit, jangan terlalu lama agar tetap renyah. Angkat, sajikan dengan minyak wijen.

Tips penting: gunakan api besar dan waktu masak singkat untuk menjaga warna hijau cerah dan tekstur renyah. Jangan menutup wajan terlalu lama karena uap akan membuat pakcoy lembek. Jika ingin lebih premium, tambahkan jamur tiram atau potongan ayam.

Pakcoy Grade A dari Cipanas memiliki batang tebal dan daun hijau cerah, cocok untuk menu ini. Suhu dingin dataran tinggi membuat pakcoy tumbuh perlahan sehingga teksturnya lebih renyah dan rasanya lebih manis alami.

Penyimpanan pakcoy sebelum dimasak: simpan di chiller nol sampai dua derajat Celsius dengan plastik perforasi, gunakan dalam tiga hari. Cuci saat akan dimasak, bukan sebelum disimpan.

CV Green Fresh Cipanas memasok pakcoy segar harian dengan sortir Grade A, memastikan setiap batang tebal dan daun hijau cerah. Dengan bahan baku berkualitas, resep sederhana ini bisa menjadi menu andalan yang menguntungkan.`,
  },
  {
    slug: 'jahe-segar-untuk-minuman-dan-bumbu',
    title: 'Jahe Segar: Dari Bumbu Dapur hingga Minuman Kekinian',
    excerpt: 'Jahe segar punya aroma khas dan manfaat kesehatan. Simak cara memilih dan mengolahnya.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-07',
    readTime: 5,
    image: Jahe_1,
    content: `Jahe adalah bumbu wajib di dapur profesional, sekaligus bahan minuman sehat yang sedang naik daun. Aroma tajam dan manfaat kesehatannya membuat jahe tetap relevan di menu modern.

Cara memilih jahe segar sangat menentukan kualitas olahan. Pilih jahe dengan kulit mengkilap dan tidak keriput. Aroma harus tajam saat dipotong. Tekstur padat, tidak berair, dan tidak ada tanda jamur atau bercak hitam. Jahe yang keriput biasanya sudah lama disimpan dan kadar airnya berkurang.

Manfaat kesehatan jahe sudah dikenal luas. Jahe meredakan mual, menghangatkan tubuh, bersifat anti-inflamasi alami, dan membantu pencernaan. Karena itu jahe sering menjadi bahan utama minuman sehat, jamu, dan menu herbal di hotel dan restoran sehat.

Olahan jahe sangat beragam. Wedang jahe menjadi minuman hangat klasik. Jahe lemon madu menjadi minuman kekinian yang populer. Jahe juga menjadi bumbu dasar tumis, marinasi daging, dan campuran sup. Fleksibilitas ini membuat jahe selalu ada di daftar belanja dapur profesional.

Penyimpanan jahe perlu perhatian. Simpan jahe di tempat kering bersuhu ruang untuk pemakaian jangka pendek. Untuk pemakaian cepat, jahe bisa diiris dan dibekukan. Jahe beku mudah digunakan langsung tanpa perlu dicairkan. Hindari menyimpan jahe di chiller dalam kondisi lembap karena mudah berjamur.

Untuk minuman, jahe segar lebih baik daripada jahe bubuk karena aroma dan rasa lebih tajam. Geprek atau iris jahe sebelum direbus agar sari aktifnya keluar maksimal. Tambahkan madu atau lemon untuk menyeimbangkan rasa pedas.

Green Fresh Cipanas memasok jahe segar dari kebun dataran tinggi dengan aroma tajam khas. Sortir Grade A memastikan setiap rimpang padat, bersih, dan bebas jamur. Dengan pasokan yang konsisten, hotel, restoran, dan katering dapat menyajikan minuman dan menu berbasis jahe dengan kualitas terbaik.`,
  },
  {
    slug: 'selada-keriting-untuk-burger-dan-salad',
    title: 'Selada Keriting untuk Burger dan Salad: Tips Memilih',
    excerpt: 'Selada keriting adalah tulang punggung burger dan salad. Kenali ciri selada segar berkualitas.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-02-10',
    readTime: 5,
    image: Selada_3,
    content: `Selada keriting sering jadi penentu kualitas burger dan salad. Daun yang lembek bisa merusak pengalaman makan, sementara daun yang renyah dan segar meningkatkan nilai hidangan secara signifikan.

Ciri selada segar adalah daun hijau cerah dan keriting rapat, batang tidak berlendir, tidak ada bercak cokelat di tepi daun, dan berat terasa padat saat dipegang. Selada yang lembek atau berlendir menandakan sudah lama disimpan atau terkena kelembapan berlebih.

Penyimpanan selada perlu perhatian khusus. Bungkus dengan tisu dapur dan plastik perforasi, simpan di chiller nol sampai dua derajat Celsius. Tisu dapur menyerap kelembapan berlebih sehingga selada tidak cepat berlendir. Ganti tisu jika sudah lembap.

Teknik mencuci selada juga menentukan kualitas. Cuci dengan air dingin mengalir, lalu rendam air es lima menit agar daun renyah. Keringkan dengan salad spinner atau tisu dapur. Selada yang masih basah saat disajikan akan membuat burger atau salad berair.

Untuk burger, gunakan daun bagian dalam yang lebih lembut. Daun bagian dalam lebih mudah dilipat dan tidak terlalu tebal, sehingga tidak mengalahkan rasa patty. Untuk salad, campur daun dalam dan luar agar tekstur bervariasi.

Untuk salad, potong dengan tangan, bukan pisau. Memotong dengan tangan mencegah tepi daun teroksidasi dan cepat layu. Pisau logam mempercepat proses oksidasi yang membuat tepi daun berwarna cokelat.

Selada keriting dari Cipanas punya daun tebal dan warna hijau cerah yang tahan lama. Suhu dingin dataran tinggi membuat selada tumbuh perlahan dengan tekstur lebih renyah. CV Green Fresh Cipanas memasok selada keriting Grade A dengan sortir manual, memastikan setiap kepala selada memenuhi standar burger dan salad premium.`,
  },
  {
    slug: 'kentang-dieng-untuk-menu-fries',
    title: 'Kentang Dieng untuk Menu Fries: Kenapa Berbeda?',
    excerpt: 'Kentang Dieng punya kadar air rendah dan tekstur tepung yang ideal untuk fries renyah.',
    category: 'Panduan Kualitas',
    author: 'Tim Green Fresh',
    date: '2025-02-13',
    readTime: 5,
    image: Kentang_2,
    content: `Kentang Dieng dikenal sebagai salah satu kentang terbaik untuk fries. Ada alasan agronomis di balik reputasi tersebut, dan memahami alasan ini membantu dapur memilih kentang yang tepat.

Alasan pertama adalah kadar air rendah. Kentang Dieng tumbuh di dataran tinggi dengan suhu dingin, menghasilkan kadar air lebih rendah dibanding kentang dataran rendah. Kadar air rendah membuat fries lebih renyah dan tidak lembek setelah digoreng.

Alasan kedua adalah tekstur tepung. Kandungan pati yang tinggi memberi tekstur tepung di dalam dan renyah di luar. Tekstur ini adalah standar fries premium yang disukai tamu hotel dan restoran cepat saji.

Alasan ketiga adalah warna kuning alami. Tidak perlu pewarna, fries dari kentang Dieng sudah kuning keemasan alami. Warna ini berasal dari kandungan karotenoid dan kondisi tumbuh yang optimal.

Cara memasak fries sempurna dari kentang Dieng: potong memanjang, rendam air dingin tiga puluh menit untuk menghilangkan pati permukaan. Blanch tiga menit di air delapan puluh derajat Celsius. Keringkan, bekukan dua jam. Goreng dua kali: pertama di seratus enam puluh derajat Celsius, lalu di seratus sembilan puluh derajat Celsius hingga keemasan.

Penyimpanan kentang perlu perhatian. Simpan di tempat gelap, sejuk, dan berventilasi. Jangan simpan di chiller karena pati berubah menjadi gula, membuat fries lebih cepat cokelat saat digoreng. Hindari paparan cahaya karena memicu penghijauan yang menghasilkan solanin.

Kentang Dieng Grade A memiliki ukuran seragam dan permukaan mulus. Ukuran seragam memudahkan proses potong dan menghasilkan fries dengan panjang konsisten. CV Green Fresh Cipanas memasok kentang Dieng Grade A dengan sortir manual, memastikan setiap kentang memenuhi standar menu fries hotel dan restoran.`,
  },
  {
    slug: 'okra-hijau-sayuran-premium-kaya-serat',
    title: 'Okra Hijau: Sayuran Premium Kaya Serat untuk Menu Sehat',
    excerpt: 'Okra hijau kaya lendir alami yang bermanfaat untuk pencernaan. Simak cara mengolahnya agar tidak berlendir berlebihan.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-16',
    readTime: 5,
    image: Okra_1,
    content: `Okra hijau adalah sayuran premium yang kaya serat dan sering muncul di menu sehat dan menu internasional. Teksturnya unik, rasanya lembut, dan manfaatnya banyak.

Kandungan gizi okra meliputi serat larut tinggi, vitamin C dan K, antioksidan, dan rendah kalori. Lendir alami okra mengandung musilago yang bermanfaat untuk pencernaan dan membantu mengontrol gula darah. Karena itu okra sering direkomendasikan untuk menu diet dan menu sehat.

Ciri okra segar adalah warna hijau cerah, tekstur padat tidak lembek, ujung tidak menghitam, dan ukuran kecil hingga sedang lebih lembut. Okra yang terlalu besar biasanya berserat kasar dan kurang enak. Pilih okra dengan panjang sekitar tujuh sampai sepuluh sentimeter.

Lendir alami okra bermanfaat, tetapi jika tidak disukai ada beberapa cara menguranginya. Potong memanjang dan panggang, tumis dengan api besar, atau tambahkan sedikit cuka atau lemon saat memasak. Memasak dengan api besar dan waktu singkat mengurangi lendir tanpa menghilangkan nutrisi.

Olahan okra populer antara lain okra tumis bawang putih, okra panggang, okra dalam kari, dan okra crispy. Okra juga bisa ditambahkan ke sup untuk memberi tekstur kental alami tanpa pengental tambahan.

Penyimpanan okra perlu perhatian. Simpan dalam kantong kertas di chiller bersuhu dua sampai empat derajat Celsius, gunakan dalam tiga hari. Jangan mencuci sebelum disimpan karena kelembapan berlebih mempercepat kerusakan. Okra cepat menghitam jika terkena air terlalu lama.

Okra hijau Grade A dari Cipanas dipanen muda untuk tekstur terbaik. Suhu dingin dataran tinggi membuat okra tumbuh perlahan dengan tekstur lebih lembut. CV Green Fresh Cipanas memasok okra segar dengan sortir Grade A, memastikan setiap buah memenuhi standar menu sehat hotel dan restoran.`,
  },
  {
    slug: 'daun-kelor-superfood-lokal',
    title: 'Daun Kelor: Superfood Lokal yang Mendunia',
    excerpt: 'Daun kelor kaya nutrisi dan mudah diolah. Simak cara memilih dan mengolah kelor untuk menu sehat.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-02-19',
    readTime: 5,
    image: Daun_Kelor_10,
    content: `Daun kelor disebut sebagai superfood karena kandungan nutrisinya yang luar biasa. Tanaman ini mudah tumbuh di Indonesia dan kini banyak muncul di menu sehat hotel, restoran, dan katering.

Kandungan gizi daun kelor meliputi vitamin A dan C tinggi, kalsium dan zat besi, protein nabati, dan antioksidan. Kombinasi ini menjadikan kelor pilihan populer untuk menu sehat, menu ibu hamil, dan program pencegahan stunting.

Ciri kelor segar adalah daun kecil hijau cerah, tangkai mudah dipatahkan, tidak ada daun menguning, dan aroma segar khas. Daun muda lebih lembut dan tidak pahit. Hindari daun yang sudah menguning atau berlubang karena kualitasnya menurun.

Olahan kelor sangat beragam. Sayur bening kelor menjadi menu klasik yang mudah disiapkan. Tumis kelor cocok untuk menu harian. Kelor krispi menjadi camilan sehat. Smoothie hijau menjadi pilihan menu sarapan sehat. Kelor juga bisa dikeringkan dan dijadikan bubuk untuk campuran makanan.

Tips mengolah kelor: masak sebentar saja dua sampai tiga menit untuk menjaga nutrisi dan warna. Daun muda lebih lembut dan tidak pahit. Jika ingin mengurangi rasa pahit, rebus sebentar lalu buang air rebusan pertama sebelum diolah lebih lanjut.

Penyimpanan kelor perlu perhatian. Simpan dalam plastik perforasi di chiller, gunakan dalam dua sampai tiga hari. Kelor bisa juga dikeringkan untuk cadangan jangka panjang. Daun kering disimpan di wadah kedap udara dan digunakan untuk bubuk atau teh.

Green Fresh Cipanas memasok daun kelor segar dari kebun mitra di dataran tinggi. Sortir Grade A memastikan setiap daun hijau cerah, lembut, dan bebas cacat. Dengan pasokan yang konsisten, hotel dan restoran dapat menyajikan menu berbasis kelor dengan kualitas terbaik.`,
  },
  {
    slug: 'kacang-panjang-menu-harian-hemat',
    title: 'Kacang Panjang: Menu Harian Hemat dengan Gizi Tinggi',
    excerpt: 'Kacang panjang murah, mudah diolah, dan kaya serat. Cocok jadi menu harian katering dan restoran.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-22',
    readTime: 4,
    image: Kacang_Panjang_10,
    content: `Kacang panjang adalah sayur andalan dapur Indonesia. Harganya bersahabat, gizinya tinggi, dan mudah diolah menjadi berbagai menu. Bagi katering dan restoran, kacang panjang adalah pilihan hemat yang tetap bergizi.

Kandungan gizi kacang panjang meliputi serat tinggi, vitamin A, C, dan K, folat, dan protein nabati. Kombinasi ini menjadikan kacang panjang pilihan baik untuk menu harian, menu diet, dan menu vegetarian.

Ciri kacang panjang segar adalah warna hijau cerah, tekstur renyah saat dipatahkan, tidak ada bercak cokelat, dan ukuran seragam. Kacang panjang yang lembek atau berubah warna sudah tidak segar dan sebaiknya tidak digunakan.

Olahan kacang panjang sangat beragam. Tumis kacang panjang tempe menjadi menu klasik yang murah dan bergizi. Kacang panjang lodeh cocok untuk menu berkuah. Pecel kacang panjang menjadi pilihan menu sehat. Kacang panjang crispy menjadi camilan atau lauk tambahan.

Tips memasak kacang panjang: potong pendek dan masak cepat dengan api besar agar tetap renyah. Jangan terlalu lama agar warna tetap hijau. Untuk lodeh, masukkan kacang panjang terakhir agar tidak terlalu empuk.

Penyimpanan kacang panjang perlu perhatian. Simpan dalam kantong plastik berlubang di chiller, gunakan dalam tiga sampai empat hari. Jangan mencuci sebelum disimpan karena kelembapan berlebih mempercepat pembusukan.

Kacang panjang Grade A dari Cipanas dipanen muda untuk tekstur renyah optimal. Suhu dingin dataran tinggi membuat kacang panjang tumbuh perlahan dengan tekstur lebih padat. CV Green Fresh Cipanas memasok kacang panjang segar dengan sortir Grade A, memastikan setiap ikat memenuhi standar menu harian katering dan restoran.`,
  },
  {
    slug: 'jagung-manis-untuk-menu-sarapan',
    title: 'Jagung Manis untuk Menu Sarapan Hotel',
    excerpt: 'Jagung manis segar punya rasa alami yang manis dan tekstur lembut. Cocok untuk menu sarapan buffet.',
    category: 'Resep & Olahan',
    author: 'Tim Green Fresh',
    date: '2025-02-25',
    readTime: 4,
    image: Jagung_1,
    content: `Jagung manis adalah komoditas serba guna untuk menu sarapan hotel, dari buffet hingga à la carte. Rasanya manis alami, teksturnya lembut, dan mudah dipadukan dengan berbagai bahan.

Ciri jagung manis segar adalah kelobot hijau segar, rambut jagung masih lembap, biji kuning cerah dan padat, dan tidak ada biji keriput. Jagung yang sudah lama dipanen kehilangan rasa manis karena gula berubah menjadi pati. Karena itu jagung manis sebaiknya digunakan dalam dua sampai tiga hari setelah panen.

Olahan sarapan populer dari jagung manis antara lain jagung rebus, jagung bakar, jagung susu keju, jagung creamy soup, dan pancake jagung. Untuk buffet hotel, jagung rebus dan jagung susu keju menjadi pilihan favorit karena mudah disiapkan dalam jumlah besar.

Tips memasak jagung manis: rebus jagung dengan sedikit gula dan garam selama lima sampai tujuh menit untuk rasa manis maksimal. Jangan terlalu lama agar biji tidak keras. Untuk jagung bakar, olesi mentega dan panggang hingga sedikit kecokelatan.

Penyimpanan jagung manis perlu perhatian. Simpan dengan kelobot di chiller, gunakan dalam dua sampai tiga hari. Jagung cepat kehilangan rasa manis setelah dipanen, jadi semakin cepat digunakan semakin baik. Jika ingin disimpan lebih lama, rebus dulu lalu bekukan.

Green Fresh Cipanas memasok jagung manis segar harian dari kebun dataran tinggi. Sortir Grade A memastikan setiap tongkol memiliki biji kuning cerah, padat, dan rasa manis alami. Dengan pasokan harian, hotel dapat menyajikan menu sarapan berbasis jagung dengan kualitas terbaik.`,
  },
  {
    slug: 'bayam-hijau-pasokan-harian-dapur',
    title: 'Bayam Hijau: Menjaga Pasokan Harian untuk Dapur Profesional',
    excerpt: 'Bayam cepat layu, tetapi paling sering dipesan. Ini cara menjaga pasokan harian tetap segar.',
    category: 'Manajemen Dapur',
    author: 'Tim Green Fresh',
    date: '2025-02-28',
    readTime: 5,
    image: Bayam_Hijau_6,
    content: `Bayam hijau adalah sayur paling sering dipesan dapur profesional, tetapi juga paling cepat layu. Menjaga pasokan harian bayam tetap segar memerlukan perencanaan dan penanganan yang tepat.

Ciri bayam segar adalah daun hijau cerah dan tegak, batang tidak lembek, tidak ada daun menguning, dan akar masih segar jika ada. Bayam yang lembek atau berubah warna sudah tidak segar dan sebaiknya tidak digunakan.

Tantangan pasokan bayam adalah penyusutan dan pelayuan cepat. Bayam menyusut hingga tiga puluh persen setelah dibersihkan dan cepat layu di suhu ruang. Ini membuat perencanaan stok kritis. Kekurangan bayam bisa mengganggu menu, sementara kelebihan bayam berakhir sebagai waste.

Strategi pasokan bayam: pesan harian dalam jumlah kecil. Terima dalam kondisi chilled. Simpan di chiller nol sampai dua derajat Celsius dengan plastik perforasi. Gunakan dalam dua puluh empat sampai empat puluh delapan jam. Siapkan buffer sepuluh persen untuk lonjakan pesanan.

Olahan bayam populer antara lain sayur bening bayam, tumis bayam bawang putih, bayam creamy, dan sup bayam. Untuk menu hotel, bayam sering disajikan sebagai side dish atau campuran salad. Bayam juga bisa dijadikan bahan smoothie hijau untuk menu sehat.

Tips memasak bayam: masak sebentar dua sampai tiga menit untuk menjaga warna dan nutrisi. Jangan terlalu lama agar tidak lembek dan kehilangan warna hijau. Tambahkan sedikit garam dan bawang putih untuk rasa yang lebih kaya.

Green Fresh Cipanas mengirim bayam hijau harian dari kebun mitra, memastikan kesegaran maksimal. Sortir Grade A memastikan setiap ikat bayam memiliki daun hijau cerah dan batang tegak. Dengan pasokan harian, dapur profesional dapat menyajikan menu berbasis bayam dengan kualitas konsisten.`,
  },
  {
    slug: 'labu-siam-menu-rendah-kalori',
    title: 'Labu Siam: Menu Rendah Kalori yang Ramah Biaya',
    excerpt: 'Labu siam murah, rendah kalori, dan mudah diolah. Cocok untuk menu diet dan katering massal.',
    category: 'Nutrisi & Kesehatan',
    author: 'Tim Green Fresh',
    date: '2025-03-03',
    readTime: 4,
    image: Labu_Siam_4,
    content: `Labu siam adalah sayur andalan untuk menu rendah kalori. Harganya bersahabat dan mudah diolah, menjadikannya pilihan hemat untuk menu diet dan katering massal.

Kandungan gizi labu siam meliputi rendah kalori, serat tinggi, vitamin C, dan kalium. Kombinasi ini menjadikan labu siam pilihan baik untuk menu diet, menu sehat, dan menu vegetarian.

Ciri labu siam segar adalah kulit hijau muda cerah, tekstur padat tidak lembek, tidak ada bercak cokelat, dan ukuran seragam. Labu siam yang lembek atau berubah warna sudah tidak segar dan sebaiknya tidak digunakan.

Olahan labu siam sangat beragam. Tumis labu siam menjadi menu harian yang mudah disiapkan. Sayur lodeh labu siam cocok untuk menu berkuah. Labu siam krispi menjadi camilan sehat. Labu siam isi menjadi hidangan pembuka yang menarik.

Tips mengolah labu siam: kupas dan potong, lalu rendam air garam sebentar untuk mengurangi getah. Masak hingga empuk tetapi tidak hancur. Untuk tumis, gunakan api besar dan waktu singkat agar tekstur tetap renyah.

Penyimpanan labu siam perlu perhatian. Simpan di tempat sejuk dan kering. Labu siam tahan hingga satu minggu di suhu ruang. Hindari menyimpan di chiller terlalu lama karena teksturnya bisa berubah.

Labu siam Grade A dari Cipanas dipanen muda untuk tekstur lembut dan rasa manis alami. Suhu dingin dataran tinggi membuat labu siam tumbuh perlahan dengan tekstur lebih padat. CV Green Fresh Cipanas memasok labu siam segar dengan sortir Grade A, memastikan setiap buah memenuhi standar menu rendah kalori hotel dan katering.`,
  },
];

export const categories = ['Semua', ...new Set(articles.map((a) => a.category))];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string, limit = 3) => {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
};