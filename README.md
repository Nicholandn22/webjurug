# 🌾 Website Profil Desa Jurug

Website ini dibangun untuk mendukung digitalisasi informasi dan dokumentasi kegiatan di **Desa Jurug**. Website ini menyajikan informasi profil desa, budaya lokal, galeri kegiatan, serta sistem unggah konten oleh admin atau pengelola.

## 🔥 Demo
📍 *Masukkan link website jika sudah online, atau gunakan localhost*

---

## ✨ Fitur Utama

- 🏡 **Profil Desa** — Menampilkan sejarah, visi-misi, dan informasi dasar desa.
- 🎭 **Budaya Lokal** — Menampilkan budaya khas Desa Jurug.
- 🖼️ **Galeri Kegiatan** — Admin bisa mengunggah foto kegiatan dengan caption.
- 📅 **Agenda dan Kegiatan** — Menampilkan acara atau kegiatan desa yang akan datang.
- 🔒 **Login Admin** *(opsional)* — Untuk mengelola konten secara dinamis.

---

## ⚙️ Teknologi yang Digunakan

### Frontend
- ✅ React.js
- ✅ Axios
- ✅ TailwindCSS / CSS Modules *(jika digunakan)*

### Backend
- ✅ Node.js
- ✅ Express.js
- ✅ MongoDB + Mongoose
- ✅ Multer (untuk upload gambar)

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repo

```bash
git clone https://github.com/Nicholandn22/webjurug.git
cd webjurug
````

### 2. Setup dan Jalankan Backend

```bash
cd server
npm install
```

Buat file `.env` di folder `server`:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/webjurug?retryWrites=true&w=majority
PORT=5000
```

Lalu jalankan backend:

```bash
npm start
```

### 3. Setup dan Jalankan Frontend

```bash
cd ../client
npm install
npm start
```

---

## 📁 Struktur Folder

```
webjurug/
├── client/       # React frontend
│   └── src/
│       ├── pages/
│       ├── components/
│       └── ...
├── server/       # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
└── README.md
```

---

## 📸 Cuplikan

*Tambahkan tangkapan layar website jika ada.*

---

## 📌 Catatan Pengembangan

* Pastikan MongoDB Atlas sudah aktif dan URI sudah benar.
* Pastikan port backend (misalnya `5000`) tidak bentrok.
* Untuk upload gambar, file akan tersimpan di folder `server/uploads`.

---

## 📝 Lisensi

Proyek ini bersifat open-source dan bebas digunakan untuk keperluan desa, edukasi, dan non-komersial.

---

## 🤝 Kontribusi

Pull request sangat terbuka! Jika kamu memiliki ide pengembangan atau perbaikan bug, silakan kirim PR atau buat issue.

```

---

Kalau kamu ingin saya tambahkan **cara deploy ke Render.com / Railway / Vercel**, atau membuat **badge GitHub**, tinggal bilang ya!
```
