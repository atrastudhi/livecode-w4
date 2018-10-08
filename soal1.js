/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases

RULES:
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
  - DILARAANG MENGGUNAKAN BUILT IN FUNCTION APAPUN (HANYA PERLU MENGGUNAKAN LOOP DAN CONDITION)
*/

function numberLetters (str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
      if(str[i] === '1') {
        result += 'i'; 
      } else if(str[i] === '4') {
        result += 'a';
      } else if(str[i] === '3') {
        result += 'e';
      } else if(str[i] === '7') {
        result += 'u';
      } else if(str[i] === '0') {
        result += 'o'
      } else {
        result += str[i]
      }
    }
    return result
  }
  
  // Test cases
  console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
  console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
  console.log(numberLetters('j1nk4z4m4')); // jinkazama
  console.log(numberLetters('s7m3t4l')); // sumetal
  console.log(numberLetters('m04m3t4l')); // moametal
  console.log(numberLetters('')); //
  
  // 1. buat variable result dengan isi string kosong
  // 2. looping variable str secara urut depan sampai belakang
  // 3. buat conditional jika index str ke-i sama dengan '1' maka store result dengan 'i'
  // 4. jika index str ke-i sama dengan '4' maka store result dengan 'a'
  // 5. jika index str ke-i sama dengan '7' maka store result dengan 'u'
  // 6. jika index str ke-i sama dengan 'o' maka store result dengan 'o'
  // 7. jika selain itu maka store result dengan index ke-i
  // 8. kembalikan/tampilkan result