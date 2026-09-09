/* =========================================================
   config.js — PENGATURAN UJIAN EKONOMI KELAS XII
   =========================================================
   Materi mengikuti cakupan pada sampul buku:
   1. Pertumbuhan Ekonomi dan Pembangunan Ekonomi
   2. Ekonomi Digital
   3. APBN dan APBD
   4. Perpajakan
   5. Ekonomi Internasional
   ========================================================= */

const EXAM_DURATION_MINUTES = 20;
const WARNING_THRESHOLD_SECONDS = 60;

const CLASS_OPTIONS = [
  "XII.1", "XII.2", "XII.3", "XII.4", "XII.5",
  "XII.6", "XII.7", "XII.8", "XII.9", "XII.10", "XII.11"
];

const questions = [
  {
    q: "Suatu negara mengalami kenaikan produksi barang dan jasa secara terus-menerus yang ditunjukkan oleh meningkatnya PDB riil. Kondisi tersebut merupakan...",
    options: ["Pembangunan ekonomi", "Pertumbuhan ekonomi", "Pemerataan pendapatan", "Stabilitas ekonomi", "Modernisasi ekonomi"],
    answer: 1
  },
  {
    q: "Perhatikan indikator berikut: peningkatan kualitas pendidikan, perbaikan layanan kesehatan, dan meningkatnya kesempatan kerja. Indikator tersebut lebih tepat digunakan untuk menilai...",
    options: ["Pertumbuhan ekonomi semata", "Perdagangan internasional", "Pembangunan ekonomi", "Kebijakan moneter", "Neraca perdagangan"],
    answer: 2
  },
  {
    q: "Kebijakan pembangunan dikatakan semakin inklusif apabila pertumbuhan ekonomi disertai dengan...",
    options: ["Kenaikan harga barang secara umum", "Peningkatan ketimpangan pendapatan", "Pemerataan kesempatan dan peningkatan kesejahteraan masyarakat", "Penurunan produksi nasional", "Pembatasan kegiatan ekonomi masyarakat"],
    answer: 2
  },
  {
    q: "Contoh kegiatan yang paling mencerminkan penerapan ekonomi digital adalah...",
    options: ["Barter antarpedagang di pasar tradisional", "Pembayaran dan transaksi jual beli melalui platform digital", "Penggunaan uang logam untuk semua transaksi", "Pencatatan usaha hanya dalam buku tulis", "Distribusi barang tanpa menggunakan teknologi"],
    answer: 1
  },
  {
    q: "Salah satu manfaat utama digitalisasi dalam kegiatan ekonomi bagi pelaku usaha adalah...",
    options: ["Mempersempit jangkauan pasar", "Menghilangkan seluruh risiko usaha", "Meningkatkan efisiensi dan memperluas akses pasar", "Menghapus kebutuhan akan inovasi", "Membatasi informasi bagi konsumen"],
    answer: 2
  },
  {
    q: "Pemerintah menggunakan APBN untuk membangun sekolah, rumah sakit, dan jalan di daerah yang membutuhkan. Tindakan tersebut terutama menunjukkan fungsi APBN sebagai fungsi...",
    options: ["Distribusi", "Alokasi", "Stabilisasi", "Pengawasan", "Perdagangan"],
    answer: 1
  },
  {
    q: "APBD ditetapkan melalui persetujuan bersama antara pemerintah daerah dengan...",
    options: ["DPR RI", "Bank Indonesia", "DPRD", "BPK", "Kementerian Keuangan"],
    answer: 2
  },
  {
    q: "Pajak memiliki fungsi regulerend, yaitu fungsi untuk...",
    options: ["Membiayai seluruh kegiatan ekspor", "Mengatur atau memengaruhi kegiatan ekonomi masyarakat", "Menentukan jumlah uang kartal", "Membiayai perusahaan swasta secara langsung", "Menghapus seluruh kewajiban masyarakat"],
    answer: 1
  },
  {
    q: "Manakah pasangan yang tepat antara jenis pajak dan contohnya?",
    options: ["Pajak langsung — PPN", "Pajak tidak langsung — PPh orang pribadi", "Pajak langsung — PPh", "Pajak daerah — Bea Masuk", "Pajak pusat — Pajak Hotel dan Restoran"],
    answer: 2
  },
  {
    q: "Pajak berbeda dari pungutan yang memberikan imbalan langsung kepada pembayar karena pajak pada dasarnya...",
    options: ["Bersifat sukarela", "Dipungut berdasarkan kesepakatan antarperusahaan", "Tidak memberikan kontraprestasi langsung kepada pembayar", "Hanya dibayar oleh perusahaan besar", "Hanya digunakan untuk kegiatan perdagangan"],
    answer: 2
  },
  {
    q: "Suatu negara mengekspor kopi karena mampu memproduksinya dengan biaya relatif lebih rendah dibandingkan negara lain. Prinsip yang menjelaskan manfaat perdagangan tersebut adalah...",
    options: ["Keunggulan komparatif", "Proteksi absolut", "Politik dumping", "Kuota impor", "Devaluasi"],
    answer: 0
  },
  {
    q: "Salah satu manfaat kegiatan ekspor bagi perekonomian suatu negara adalah...",
    options: ["Mengurangi penerimaan devisa", "Mempersempit pasar produk dalam negeri", "Menambah penerimaan devisa dan memperluas pasar", "Menghilangkan seluruh impor", "Menurunkan kapasitas produksi nasional"],
    answer: 2
  },
  {
    q: "Jika nilai rupiah menguat terhadap dolar AS, dengan faktor lain tetap, dampak yang cenderung terjadi adalah...",
    options: ["Barang impor menjadi relatif lebih murah bagi konsumen Indonesia", "Barang impor menjadi lebih mahal", "Ekspor Indonesia pasti meningkat", "Nilai devisa hasil ekspor pasti menjadi nol", "Perdagangan internasional berhenti"],
    answer: 0
  },
  {
    q: "Neraca perdagangan suatu negara mengalami surplus apabila...",
    options: ["Nilai impor lebih besar daripada nilai ekspor", "Nilai ekspor lebih besar daripada nilai impor", "Ekspor dan impor sama-sama nol", "Pendapatan pajak lebih besar daripada belanja negara", "Investasi asing lebih kecil daripada investasi domestik"],
    answer: 1
  },
  {
    q: "Pemerintah mengenakan tarif impor terhadap suatu barang untuk melindungi produsen dalam negeri. Kebijakan tersebut merupakan bentuk...",
    options: ["Liberalisasi perdagangan", "Proteksi perdagangan", "Deregulasi pajak", "Subsidi ekspor", "Devaluasi mata uang"],
    answer: 1
  }
];
