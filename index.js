function Imprimir(){

    for (let index = 1; index <= 20; index++) {
    
    var listItem = document.createElement("li");
    
    if(index % 2===0){
        console.log(index + " Par");   
        listItem.innerHTML =  index + "_Par";
             
        listItem.style.backgroundColor = "#2cbc7b";
        
        console.log(index + " Par");   

    }else{
        console.log(index + " Impar");
        listItem.innerHTML =  index + "_Impar";
            
        listItem.style.backgroundColor = "#bc2c2c";
        
        console.log(index + " Impar");
    }
    document.getElementById("historial").appendChild(listItem);
}

}