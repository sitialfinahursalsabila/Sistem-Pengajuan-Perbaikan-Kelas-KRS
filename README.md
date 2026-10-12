# Sistem Pengajuan Perbaikan Kelas KRS

Prototipe antarmuka (HTML + CSS murni, tanpa JavaScript) untuk tugas Manajemen Proyek Minggu 1.
Program Studi Teknik Informatika, UIN Maulana Malik Ibrahim Malang.

## Struktur folder
```
index.html              hasil gabungan (file yang dibuka browser / di-deploy)
build.mjs               skrip penggabung src/ menjadi index.html
css/
  01-base.css           variabel warna, reset, input tersembunyi
  02-header.css         header biru
  03-layout.css         kerangka halaman, sidebar, pergantian halaman
  04-components.css     kartu, form, tombol, notifikasi
  05-tables.css         tabel dan badge status
  06-widgets.css        akordeon, timeline, grafik, saklar
  07-roles.css          tampilan sesuai peran
  08-login.css          halaman login
  09-identity.css       nama dan NIM
  10-access.css         pembatasan hak akses halaman
  11-footer.css         footer
  99-responsive.css     tampilan layar kecil (harus paling akhir)
src/
  index.template.html   kerangka, memanggil partial
  partials/
    state.html          pengatur status (peran, halaman, login)
    header.html  login.html  sidebar.html  banner.html  footer.html
    pages/
      deny.html  beranda.html  form-pengajuan.html  status.html
      verifikasi.html  rekap.html  periode.html  panduan.html
```

## Cara mengedit
- Gaya: edit file di css/ (urutan nomor jangan diubah).
- Isi halaman: edit file di src/partials/, lalu jalankan `node build.mjs` agar index.html ikut diperbarui.
- Tanpa Node.js, index.html tetap bisa diedit langsung, tetapi perubahan itu akan tertimpa saat build dijalankan.

## Menjalankan di VS Code
Buka folder di VS Code, pasang ekstensi "Live Server", klik kanan index.html, pilih "Open with Live Server".

## Deploy ke Vercel
1. Pastikan index.html sudah dibuild (`node build.mjs`), lalu push folder ke GitHub.
2. Di vercel.com pilih Add New > Project, import repository. Framework Preset: Other. Build Command dan Output Directory dikosongkan.
3. Atau lewat CLI: `npm i -g vercel`, lalu `vercel` di folder ini.

## Akun demo (simulasi, tidak divalidasi)
| Peran | Username | Kata sandi |
|---|---|---|
| Mahasiswa | 240605110144 | krs2026 |
| Dosen PA | dosen.pa | dosenpa2026 |
| Admin Prodi | admin.prodi | admin2026 |

Catatan: pembatasan hak akses pada prototipe ini hanya pada tampilan. Pada sistem sungguhan, validasi login dan hak akses dilakukan di sisi server.
"# Sistem-Pengajuan-Perbaikan-Kelas-KRS" 
