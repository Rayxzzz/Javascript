SeleksiNilai = (nilaiawal,nilaiakhir, data) =>{
    
    if(nilaiawal > nilaiakhir){
        console.log("nilai akhir harus lebih besar dari nilai awal")
    } else if(Array.isArray(data) == false){
        console.log('plesae input array')
    } else if(data.length <= 5){
        console.log("Jumlah angka dalam dataArray tidak ada")
    }else {
        const hasil = data.filter(function(a){
            return nilaiawal < a && a < nilaiakhir
        })
        hasil.sort(function(a, b){return a-b});
        
        if(hasil.length == 0){
            console.log("data tidak ada")
        }else{
            console.log(hasil)
        }
        
        
    }
    
  
}

SeleksiNilai(2,40,[3,4,5,6])
