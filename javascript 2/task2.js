
const name = ['Abigail', 'Alexandra', 'Alison', 'Angela','Amanda', 
            'Bella','Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana',
            'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

            


const numMax = (num, contain) =>{
        if(isNaN(num)){
                console.log(contain)
        }else{
                const newArray = []
                
                for(let i = 0; i < num  ; i++ ){
                        newArray.push(contain[i]);
                        const x =  newArray.every(y => typeof y == 'string');
                        if(x == false){
                                newArray.pop()
                        }
                }
                newArray.sort()
 
                console.log(newArray)
        
        }

}


const Searchname = (word,max,callback) => {

        const containName = [] 
        for(let i = 0; i < name.length; i++){
                if(name[i].toLowerCase().includes(word.toLowerCase())){
                containName.push(name[i]);
                }
                
        }
        return callback(max,containName)
        
}


Searchname("an", 4, numMax)
