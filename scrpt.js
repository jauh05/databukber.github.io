
// Mengambil elemen kolom keempat (harga)
var hargaElems = document.querySelectorAll('td:nth-child(4)');

// Inisialisasi variabel total harga
var totalHarga = 0;

// Loop melalui setiap elemen harga dan menambahkan nilainya ke total harga
for (var i = 0; i < hargaElems.length; i++) {
  var harga = parseInt(hargaElems[i].textContent);
  if (!isNaN(harga)) {
    totalHarga += harga;
  }
}

// Menampilkan total harga pada kolom "totalHarga"
document.getElementById('totalHarga').textContent = totalHarga;