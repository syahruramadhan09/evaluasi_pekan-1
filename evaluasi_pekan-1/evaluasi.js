// Soal Evaluasi Essay JavaScript

// 1. Tipe Data
// Jelaskan perbedaan antara tipe data number, string, dan boolean dalam JavaScript. Berikan contoh untuk masing-masing tipe data tersebut.

// --number adalah tipe data yg berbentuk angka--
var number = 5
var bilanganPecahan = 0.5
// dilarang mengkasih koma pada bilangan pecahan ( , )

// tipe ata number bisa dua bisa berbentuk bilangan utuh dan bisa dibilangan pecahan

// -- tipe data string adalah tipe data yg berbentuk " "  yg di dalam nya bisa berupa angka atau huruf--
var namahewan = "ular"
console.log("ular")

var angka = "9"
console.log("9")

// --tipe data boolean adalah tipe data yg berupa nilai true dan false / nilai benar atau nilai salah--
var boolean1 = true
var boolean2 = false
console.log(boolean1)
console.log(boolean2)


// 2. Variabel
// Apa itu variabel dalam JavaScript? Jelaskan perbedaan antara var, let, dan const beserta contoh penggunaan masing-masing.

// --variabel adalah wadah suatu data atau bisa di sebut tipe data dan variabel tidak bisa di lihat akan 
// tetapi data nya bisa di lihat--

//--var adalah singkatan dari variabel daalam pemogramaan.
// * scope: var memiliki fungsi function scope, arti nya hanya terlihat di dalam fungsi tempat ia dideklarasikan. jika dideklarasiakan di luar fungsi, var nya bersifat global
// * hoisting: variabel yg di deklarasikan dengan var akan di hoist le atas dalam kenteks nya, sehingga bisa di gunakan sebelum deklarasikan 
// * re-deklarasikan:kita bisa mendeklarasikan ulang variabel yg sama tanpa error.

function contohVar() {
    console.log(x); // undefined (hoisting)
    var x = 10;
    console.log(x); // 10
}
contohVar();


//--let adalah sebuah keyword dalam javascript yg di gunakan untuk mendeklrasikan variabel.
//* scope: let memiliki block scope, artinya hanya terlihat di dalam block kode (seperti di dalam {}).
//* hoisting:mirip dengan var, tetapi tidak bisa di akses sebelum deklarasi (menimbulkan referecnce error)
//*re-deklarasi:tidak bisa mendeklarasikan ulang variabel yang sama di dalam scope yang sama.

function contohLet() {
    // console.log(y); // ReferenceError
    let y = 20;
    console.log(y); // 20
}
contohLet();

//--const  adalah adalah sebuah keyword dalam JavaScript yang digunakan untuk mendeklarasikan variabel yang nilai-nya tidak dapat diubah setelah dideklarasikan
//* scope: juga memiliki block scope seperti let
//* hoisting:sama dengan let,tidak bisa diakses sebelum deklarasi
//* re-deklarasi:tidak bisa mendeklarasikan ulang variabel yang sama 
//*nilai konstan: nilai yang di simpan dalam variabel const tidak bisa di ubah setelah deklarasi (kecuali untuk objek dan array, yang bisa dimodifikasi isi-nya).

function contohConst() {
    const z = 30;
    // z = 40; // TypeError
    console.log(z); // 30
}
contohConst();


// 3. Operator Aritmatika
// Buatlah kode JavaScript yang melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka yang ditentukan dalam variabel. Jelaskan hasil dari setiap operasi.
var nilai1 = 2
var nilai2 = 2
// tipe data yg di gunakan operator aritmatika adalah number di sini nilai nya yg nilai1 adalah 2 dan nilai2 daalah 2 
// cara kita menghitungnya, dengan kita satukan nilai1 dan nilai2 contoh di bawah ini 

var penjumlahan = nilai1 + nilai2
var pengurangan = nilai1 - nilai2
var perkalian = nilai1 * nilai2
var pembagian = nilai1 / nilai2
 
// dancara agar kita bisa melihat hasil hitungan nya dengan kita memerintahka / menulis syintax    console.log()    agar bisa meihat nya di consol browser

console.log(penjumlahan)
console.log(pengurangan)
console.log(perkalian)
console.log(pembagian)


// 4. Operator Penugasan
// Apa yang dimaksud dengan operator penugasan dalam JavaScript? Berikan contoh kode yang menggunakan operator penugasan untuk mengupdate nilai variabel.
// operator penugasana adalah menugas kan sebuah variabel
var nilai3 = 3
nilai3 += 3
nilai3 -= 3
nilai3 *= 3
nilai3 /= 3

console.log(nilai3)

//cara penghitungan yg benar adalah kukabataku 3*3(3+3-3)/3
// hati hati jika melakukan operasi matematika secara bersamaan 3+3*3-3

//Knp karena yg di sebut urutan oprasi matematika / operator precedence dimn ada oprator yg akan di kerjakan terlebih dahulu terlepas kita menempatkan sdalam sebua ekspresi urutanya seperti ini
//KUKABATAKU
// ( ), *, /, +, -


// 5.Operator Logika
// Jelaskan bagaimana operator logika bekerja dalam JavaScript. Berikan contoh penggunaan operator logika AND, OR, dan NOT dalam pernyataan.
// operator logika adalah sistem oprasi yg berupa logika pemogramaan || && !

// || / or atau bisa i bilang pay pay 
// || adalah jika salaha satu  ya bernilai true maka hasil nya true 
console.log(true || true)
console.log(true || false )
// jika salah satu nya tidak bernilai true maka hasil nya juga bukan true
console.log(false || false)
//jika di atas ini salah satu nya tidak ada true maka hasil nya pasti false 


// && / and / dan dan
// jika salah satu nya bernilai false maka hasil nya false
console.log(false && false)
console.log(false && true)
//jika di atas ini salah satu nya tidak ada false maka hasil nya pasti true

// ! / not / tidak
// kebalikan lawan kata dari nilai nya
console.log(!true)
console.log(!false) 

// 6.Pengkondisian (if, else if, else)
// Tulis kode JavaScript menggunakan struktur pengkondisian if, else if, dan else untuk mengecek apakah sebuah angka adalah genap atau ganjil. Jelaskan alur logika yang digunakan.

// 7.Pengkondisian (switch)
// Buatlah contoh penggunaan pernyataan switch untuk menentukan nama hari berdasarkan nomor hari (1-7). Misalnya, 1 adalah "Senin", 2 adalah "Selasa", dan seterusnya.

// 8.Perulangan (for)
// Tulis kode JavaScript menggunakan perulangan for untuk mencetak angka dari 1 sampai 10 ke konsol. Jelaskan bagaimana perulangan tersebut bekerja.

// 9.Operator Perbandingan
// Jelaskan perbedaan antara operator perbandingan == dan === dalam JavaScript. Berikan contoh situasi di mana masing-masing operator dapat memberikan hasil yang berbeda.
// == adalah jika kita menuliskan string maka hasil nya tidak mengpengaruhi data 
// === adalah jika kita menuliskan string maka hasil mengpengaruhi data yang ada bisa di bilang sebagai penguat (strict) atau untuk memperkuat akurasi
//contoh ==
var nilai1 = 20
var nilai2 = "20"

console.log(nilai1 == nilai2)
// hasil nya tidak mempengaruhi data nya maka tetap true

//contoh === 
var nilai4 = 20
var nilai5 = "20"

console.log(nilai4 === nilai5)
// nilai nya mempengaruhi data yg ada maka jadi string maka hasil nya false karena ada stringnya

// 10.Kombinasi Tipe Data dan Operator
// Buatlah kode JavaScript yang menggabungkan string dan angka, kemudian jelaskan hasilnya. Apa yang terjadi ketika Anda mencoba menggabungkan tipe data yang berbeda?
var nomorDepan = 6
var nomorBelakang = "9"

var nomorLengkap = nomorDepan + nomorBelakang
console.log(nomorLengkap) // maka hasil nya 69 karena tidak mempenggaruhi jika tidak ada string

// tapi jika kita ganti yg tadi nya + jadi % 

var nomorDepan = "5"
var nomorBelakang = "5"

var nomorLengkap = nomorDepan % nomorBelakang
console.log(nomorLengkap) // hasil nya 0 karena aritmatika yg tidak menghasilkan cuman + 
// selain + maka menghasilkan