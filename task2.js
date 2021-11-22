const mtk = 40
const bahasaIndonesia = 80
const bahasaInggris = 80
const ipa = 70

const nilaiUn = (mtk,bind,bing,ipa) => {
    let x = mtk + bind + bing + ipa
    let y = x / 4 

    if(isNaN(y)){
        console.log("Nilai belum lengkap")
    }else if(y <= 100 && y >= 90){
        console.log(y)
        console.log("A")
    }else if (y <= 89 && y >= 80) {
        console.log(y)
        console.log("B")
    }else if (y <= 79 && y >= 70) {
        console.log(y)
        console.log("C")
    }else if (y <= 79 && y >= 60) {
        console.log(y)
        console.log("D")
    }else if (y <= 69 && y >= 60) {
        console.log(y)
        console.log("E")
    }
}

nilaiUn(mtk,bahasaIndonesia,bahasaInggris)
