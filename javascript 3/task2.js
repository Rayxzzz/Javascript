// Buat program menggunakan callback function untuk melanjutkan dan menampilkan semua bulan menggunakan
// method map


const getMonth = (callback) => {
    setTimeout(() =>{
        let error = true;
        let month = [ "January", "February", "March", "April", "Mei", "June", "July", "August", "September", "October", "November", "Desember"];
        if(!error){
            callback(null,month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const showAll = (x,y) => {
    if(x == null){
        const map = y.map(z => z)
        console.log(map) 
    }else if(y == undefined){
        console.log(x)
    }
}

getMonth(showAll)