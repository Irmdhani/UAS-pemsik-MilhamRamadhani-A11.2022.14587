-- Membuat database dan menggunakan database tersebut
CREATE DATABASE articles;
USE articles;

-- Membuat tabel articles
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    DESCRIPTION TEXT,
    content TEXT NOT NULL,
    category VARCHAR(50),
    DATE DATE,
    author VARCHAR(100),
    location VARCHAR(255)
);

-- Menampilkan tabel yang ada
SHOW TABLES;

-- Menampilkan semua data dari tabel articles
SELECT * FROM articles;

-- Menambahkan contoh data ke tabel articles
INSERT INTO articles (title, DESCRIPTION, content, category, DATE, author, location) VALUES
    ('Mitigasi Bencana Tanah Longsor', 'Panduan mitigasi untuk menghadapi tanah longsor', 'Artikel ini membahas langkah-langkah mitigasi seperti reboisasi, penguatan struktur tanah, dan pemetaan wilayah rawan bencana.', 'Mitigasi', '2025-01-12', 'Ahmad Saputra', 'Bandung'),
('Dampak Lingkungan Tanah Longsor', 'Analisis dampak lingkungan akibat tanah longsor', 'Tanah longsor tidak hanya merusak infrastruktur tetapi juga mempengaruhi ekosistem sekitar, termasuk kualitas air dan keanekaragaman hayati.', 'Lingkungan', '2025-01-10', 'Dewi Kartika', 'Yogyakarta'),
('Teknologi Peringatan Dini Longsor', 'Sistem teknologi modern untuk mendeteksi tanah longsor', 'Membahas bagaimana teknologi seperti sensor tanah, IoT, dan AI digunakan untuk mendeteksi potensi tanah longsor lebih awal.', 'Teknologi', '2025-01-08', 'Rizki Rahmatullah', 'Jakarta'),
('Studi Kasus Tanah Longsor di Jawa Barat', 'Studi kasus tentang peristiwa tanah longsor di Jawa Barat', 'Artikel ini mengulas penyebab dan dampak dari tanah longsor yang terjadi di kawasan Sukabumi pada tahun 2024.', 'Studi Kasus', '2025-01-05', 'Nina Suryani', 'Sukabumi'),
('Edukasi Masyarakat untuk Pencegahan Longsor', 'Pentingnya edukasi masyarakat tentang bahaya tanah longsor', 'Berbagai cara meningkatkan kesadaran masyarakat seperti pelatihan tanggap bencana dan penyuluhan tentang tanda-tanda longsor.', 'Edukasi', '2025-01-03', 'Budi Santoso', 'Surabaya'),
('Perubahan Iklim dan Longsor', 'Hubungan antara perubahan iklim dan peningkatan risiko tanah longsor', 'Perubahan pola curah hujan dan degradasi lingkungan akibat perubahan iklim memengaruhi frekuensi tanah longsor.', 'Lingkungan', '2025-01-02', 'Lestari Wulandari', 'Bali'),
('Strategi Pemerintah Mengatasi Longsor', 'Kebijakan pemerintah dalam mitigasi tanah longsor', 'Diskusi tentang rencana dan program pemerintah seperti pembangunan bendungan penahan dan relokasi warga di area rawan.', 'Kebijakan', '2024-12-30', 'Hendra Pratama', 'Semarang');

-- Menampilkan semua data dari tabel articles setelah penambahan data
SELECT * FROM articles;

-- Menambahkan kolom link_img ke tabel articles
ALTER TABLE articles ADD link_img TEXT;
