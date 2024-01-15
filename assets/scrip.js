function tampilkanTanggalWaktu() {
    var tanggal = new Date();
    var bulan = tanggal.getMonth() + 1;
    var tahun = tanggal.getFullYear();
    var jam = tanggal.getHours();
    var menit = tanggal.getMinutes();
    var detik = tanggal.getSeconds();
  
    var tglWaktu = tanggal + "/" + bulan + "/" + tahun + ", " + jam + ":" + menit + ":" + detik;
  
    document.getElementById("tanggalWaktu").innerHTML = tglWaktu;
  }
  
  // Untuk mengatur ukuran gambar latar belakang pada bagian hero
  function aturUkuranGambarLatarBelakang() {
    var gambarLatarBelakang = document.querySelector("image.jpeg");
    var tinggiLayar = window.innerHeight;
  
    gambarLatarBelakang.height = tinggiLayar;
  }
  
  // Menjalankan fungsi saat halaman dimuat
  window.onload = function() {
    tampilkanTanggalWaktu();
    aturUkuranGambarLatarBelakang();
  };