
    
    let URL1="https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json"
    let URL2="https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml"

    let loadProducts=(myURL1,myURL2)=>{
        const boton = document.querySelector("#filter");
        let element_2=document.getElementById("text");

        const cuandoSeHaceClick = function (evento) {
            // Recuerda, this es el elemento
            console.log("El texto que tiene es: ", this.innerText);
    
        }
        
        boton.addEventListener("click", function(evento){

            let valores= element_2.value
            console.log(valores);
            let indice=1;

            fetch(myURL1)
            .then(response=> response.json())
            .then(products=>{
                for (i = 0; i < products.length; i++){

                    let name=document.getElementById("name"+(i+1));
                        name.innerHTML="" ;

                        let type=document.getElementById("type"+(i+1));
                        type.innerHTML="";
                        
                        let price=document.getElementById("price"+(i+1));
                        price.innerHTML="";

                        document.getElementById("img"+(i+1)).src="";

                    console.log(products[i]["type"]);
                    if (products[i]["type"] === valores){
                        console.log(products[i]);
                        
                        let name=document.getElementById("name"+(indice));
                        name.innerHTML=products[i]['name'] ;

                        let type=document.getElementById("type"+(indice));
                        type.innerHTML=products[i]['type'];
                        
                        let price=document.getElementById("price"+(indice));
                        price.innerHTML=products[i]["price"];

                        document.getElementById("img"+(indice)).src=products[i]["src"];
                        indice+=1;
                    }
                }  
            })
            .catch(error => {
                console.log(error);
            });


            fetch(myURL2)
            .then(response=> response.text())
            .then(result=>{
                for (i = 0; i < result.length; i++){

                    console.log(products[i]["type"]);
                    if (products[i]["type"] === valores){
                        console.log(products[i]);
                        
                        let name=document.getElementById("name"+(i+1));
                        name.innerHTML=products[i]['name'] ;

                        let type=document.getElementById("type"+(i+1));
                        type.innerHTML=products[i]['type'];
                        
                        let price=document.getElementById("price"+(i+1));
                        price.innerHTML=products[i]["price"];

                        document.getElementById("img"+(i+1)).src=products[i]["src"];
                    }
                }  


            })
            .catch(error => {
                console.log(error);
            });

        });


        boton.addEventListener("click", cuandoSeHaceClick);
    
    }

loadProducts(URL1,URL2);
