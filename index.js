let k1 = document.querySelector("[name='elements']");
let k2 = document.querySelector("[name='texts']");
let k3 = document.querySelector("[name='type']");
let k4 = document.querySelector("[name='create']");
let k5 = document.querySelector(".res12");
k4.onclick =function(e){
    e.preventDefault();
    if(k5.innerHTML ===""){
        
        for (let i=0; i<k1.value;i++) {
            
            var newk1 = document.createElement(k3.value);
            newk1.setAttribute("title","element");
            newk1.setAttribute("class","newg");
            newk1.setAttribute("id",`id-${i}`)
            var newk11 = document.createTextNode(k2.value);
            newk1.appendChild(newk11);
            k5.appendChild(newk1);
           
        }
        
        
        
        
    }else{
        k5.innerHTML = " ";
    }
    
    
    
}

