/*
================
Fruit & Vegetables Checker
================
[INSTRUCTIONS]
FVChecker adalah sebuah function yang menerima satu parameter berupa array of string.
function tersebut akan menghitung jumlah buah (F) dan sayur (V)
dan function akan mereturn jumlah masing2 buah dan sayur serta harga jual keseluruhan.
Adapun ketentuan harganya:
Fruits (F) = 1000
Vegetables (V) = 500
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
FVChecker(['F','V','F'])
output: jumlah Buah: 2, jumlah Sayur: 1. totalnya menjadi Rp. 2500
*/

function FVChecker(array) {
    let buah = 0;
    let sayur = 0;
    
    for(let i = 0; i < array.length; i++) {
      if(array[i] === 'F') {
        buah += 1
      } else if(array[i] === 'V') {
        sayur += 1
      }
    }
    return 'jumlah buah; ' + buah + ', jumlah sayur: ' + sayur + '. totalnya menjadi Rp. ' + (buah * 1000 + sayur * 500)
  }
  
  console.log(FVChecker(['F','V','F']));
  // jumlah Buah: 2, jumlah Sayur: 1. totalnya menjadi Rp. 2500
  console.log(FVChecker(['V','V','F','F','V']));
  // jumlah Buah: 2, jumlah Sayur: 3. totalnya menjadi Rp. 3500
  console.log(FVChecker(['V','F','F','F','F']));
  // jumlah Buah: 4, jumlah Sayur: 1. totalnya menjadi Rp. 4500
  console.log(FVChecker(['F','F']));
  // jumlah Buah: 2, jumlah Sayur: 0. totalnya menjadi Rp. 2000
  console.log(FVChecker(['V','V','V','V']));
  // jumlah Buah: 0, jumlah Sayur: 4. totalnya menjadi Rp. 2000
  
  // 1. buat variable buah dengan sayur dengan isi 0
  // 2. buat looping untuk array dari depan sampai belakang
  // 3. jika index array ke-i sama dengan 'F' maka variable buah ditambahkan 1
  // 4. jika index array ke-i sama dengan 'V' maka variable sayur ditambahkan 1
  // 5. kembalikan/tampilkan string berupa jumlah buah: (variable buah), jumlah sayur: (variable sayur). totalnya menjadi (buah dikalikan 1000 ditambahkan sayur dikalikan 500)