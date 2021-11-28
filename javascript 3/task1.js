// Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari kode
// Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di
// bawahnya:




const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) =>{
                return item === day
            })   
            if(cek){
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
    .thn(res => console.log( res + " hari ini adalah hari kerja"))
    .catch(res => console.log(res))
    // then(sukses) catch(gagal) utk mengelola hasil sukses dan gagal dari sebuah funsi promise
  
}

try {
    cekHariKerja("senin") 
    
} catch (error) {
    console.error("function error")
}

// try catch utk mengelola sebuah blok kode yg akan diuji yg mana jika error maka kita bisa membuat sebuah code dari error tersebut di catch 