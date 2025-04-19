# 🚀 Cara Menjalankan Proyek React & Laravel dari Repository GitHub

Repositori ini terdiri dari dua bagian Utama:
- frontend/ → Aplikasi React
- backend/ → Aplikasi Laravel

---

## 🛠 Persyaratan

Pastikan software berikut sudah terpasang di computer kamu:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (disarankan versi LTS)
- [Composer](https://getcomposer.org/)
- [PHP](https://www.php.net/) (minimal versi 8.1)
- [MySQL](https://www.mysql.com/) atau [MariaDB](https://mariadb.org/)

---

## 📥 Clone Repository

1. Buka terminal / command prompt
2. Jalankan perintah berikut untuk clone repository:

bash
git clone https://github.com/SkyzofrnDev/DBS-Tourism-Revolutioncd nama-project


---

## 💻 Menjalankan Laravel (Backend)

1. Masuk ke folder backend:

bash
cd backend


2. Install semua dependency Laravel:

bash
composer install


3. Salin file konfigurasi .env:

bash
cp .env.example .env


4. Generate application key:

bash
php artisan key:generate


5. Sesuaikan konfigurasi database di .env sesuai dengan setting local:

dotenv
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=


6. Jalankan migrasi database:

bash
php artisan migrate


7. Jalankan server Laravel:

bash
php artisan serve


Akses API melalui: http://127.0.0.1:8000

---

## ⚛ Menjalankan React (Frontend)

1. Masuk ke folder frontend:

bash
cd ../frontend


2. Install semua dependency React:

bash
npm install


3. Salin dan sesuaikan file .env jika ada:

dotenv
REACT_APP_API_URL=http://127.0.0.1:8000/api


4. Jalankan development server React:

bash
npm start


Aplikasi React bisa diakses via: http://localhost:3000

---

## 🏁 Build React untuk Production

Jika ingin deploy ke production, lakukan build React:

bash
npm run build


Output akan tersimpan di folder frontend/build/.

---

## ⚡ Tips Tambahan

- Gunakan php artisan serve --host=0.0.0.0 untuk akses via jaringan local.
- Pastikan .env diatur dengan benar sesuai environment.
- Gunakan tools seperti [Laravel Valet](https://laravel.com/docs/valet) atau Docker untuk manajemen server yang lebih fleksibel.

---

## 🤝 Kontribusi

Jangan ragu untuk membuat Pull Request atau Issue jika ingin berkontribusi atau menemukan bug! 🚀

---

Terima kasih telah menggunakan proyek ini! Semoga lancer pengembangannya! 😎