book = false
let getBooks = new Promise((resolve, reject) =>{
    if(book){
        resolve(["ipa","mtk", "ips"])
    } else{
        reject('buku tidak ada')
    }
})

getBooks    
    .then(res => console.log(res))
    .catch(err => console.log(err))