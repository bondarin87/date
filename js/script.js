let inp = document.querySelector('#elem');
let temp ='';
inp.addEventListener('blur',function func() {
    let arr = inp.value.split('.'); 
   
    for (let i=arr.length-1; i>=0; i--) {
       
        temp = temp + (arr[i] + '-');
   
    } 
     inp.value = temp.substring(0,temp.length-1) 
    this.removeEventListener('blur',func);
})
