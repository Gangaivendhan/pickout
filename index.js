let cars=["benz","AaudiA","swift","Alto","ambassadorA","asia"]

for(let i = 0;i <= cars.length;i++){
     one=cars[i].slice(0,1).toLowerCase();
    two=cars[i].slice(-1).toLowerCase();

    if( one ==="a" && two ==="a"){
        document.getElementById("class1").innerHTML += cars[i] + "<br>";
    }
    

}