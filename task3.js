function triangle(a){
    let n = a; 
    let string = "";
    if(typeof(a) !== 'number'){
      console.log('please input number')
  } else{
      for (let i = 0; i < n; i++) {
        for (let j = 0; j <=  i; j++) {
          string += '*';
        }
        string += '\n';
        
      }
      console.log(string);      
  }
}
    
triangle(6)


