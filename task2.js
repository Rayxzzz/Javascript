const mtk = 40
const bahasaIndonesia = 80
const bahasaInggris = 80
const ipa = 70

const nilaiUn = (mtk,bind,bing,ipa) => {
    let x = mtk + bind + bing + ipa
    let y = x / 4 
    if(isNaN(y)){
        console.log("Masukan semua nilai")
    }else{
    console.log(y)
    }
    
    if(isNaN(y)){
        console.log("Nilai belum lengkap")
    }else if(90 <= y <= 100){
        console.log("A")
    }else if (80 <= y <= 89) {
        console.log("B")
    }else if (70 <= y <= 79) {
        console.log("C")
    }else if (60 <= y <= 69) {
        console.log("D")
    }else if (0 <= y <= 59) {
        console.log("E")
    }
}

nilaiUn(80,80,80,90)
