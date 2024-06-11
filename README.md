## Instalasi
1. Clone repositori:
  ```sh
  git clone https://github.com/wpao/api-01.git
  cd /api-01
  npm install
  ```
2. jangan lupa jalankna postgersql, nodemon
   jalankan printah berikut untuk run
  ```sh 
  nodemon
  ```

3. migrade db
   ```sh
   npx prisma migrate dev
   ```
## Keterangan
api sederhana yang dibuat menggunakan express prisma postgresql@15
