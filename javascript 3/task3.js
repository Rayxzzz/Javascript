// Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1


const waktuShalat = (nama) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const shalat ={
                subuh : "4:30",
                dzuhur : "12:50",
                ashr : "15:59",
                maghrib : "18:07",
                isya : "19:21"
            }
            if(typeof shalat[nama] == 'string'){
                resolve(shalat[nama])
            } else{
                reject(new Error('Data tidak ditemukan'))
            }

        }, 3000)
    })

    .then(res => console.log(res))
    .catch(res => console.log(res))
}

waktuShalat("jumat")



const todolist = (nama) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const shalat ={
                senin : "Persentasi",
                selasa : "Materi Teknikal",
                rabu : "Materi Soft Skill",
                kamis : "Follow Up",
            }
            if(typeof shalat[nama] == 'string'){
                resolve(shalat[nama])
            } else{
                reject(new Error('Liburrr'))
            }

        }, 3000)
    })

    .then(res => console.log(res))
    .catch(res => console.log(res))
}

todolist("kamis")



