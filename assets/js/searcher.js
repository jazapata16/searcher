
    
    let URL1="https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json"
    let URL2="https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml"

    let loadProducts=(myURL1,myURL2)=>{
        const boton = document.querySelector("#filter");
        let element_2=document.getElementById("text");

        fetch(myURL1)
            .then(response=> response.json())
            .then(products=>{
        let name=document.getElementById("name1");
        name.innerHTML=products[0]['name'] ;
        let type=document.getElementById("type1");
        type.innerHTML=products[0]['type'];                      
        let price=document.getElementById("price1");
        price.innerHTML=products[0]['price'];
        document.getElementById("img1").src=products[0]['src'];

        let name2=document.getElementById("name2");
        name2.innerHTML=products[1]['name'] ;
        let type2=document.getElementById("type2");
        type2.innerHTML=products[1]['type'];                      
        let price2=document.getElementById("price2");
        price2.innerHTML=products[1]['price'];
        document.getElementById("img2").src=products[1]['src'];
        
        let name3=document.getElementById("name3");
        name3.innerHTML=products[2]['name'] ;
        let type3=document.getElementById("type3");
        type3.innerHTML=products[2]['type'];                      
        let price3=document.getElementById("price3");
        price3.innerHTML=products[2]['price'];
        document.getElementById("img3").src=products[2]['src'];

        let name4=document.getElementById("name4");
        name4.innerHTML=products[3]['name'] ;
        let type4=document.getElementById("type4");
        type4.innerHTML=products[3]['type'];                      
        let price4=document.getElementById("price4");
        price4.innerHTML=products[3]['price'];
        document.getElementById("img4").src=products[3]['src'];

        let name5=document.getElementById("name5");
        name5.innerHTML=products[4]['name'] ;
        let type5=document.getElementById("type5");
        type5.innerHTML=products[4]['type'];                      
        let price5=document.getElementById("price5");
        price5.innerHTML=products[4]['price'];
        document.getElementById("img5").src=products[4]['src'];

        let name6=document.getElementById("name6");
        name6.innerHTML=products[5]['name'] ;
        let type6=document.getElementById("type6");
        type6.innerHTML=products[5]['type'];                      
        let price6=document.getElementById("price6");
        price6.innerHTML=products[5]['price'];
        document.getElementById("img6").src=products[5]['src'];
        })
        .catch(error => {
            console.log(error);
        });


        fetch(myURL2)
            .then(response=> response.text())
            .then(result=>{
                let xml = (new DOMParser()).parseFromString(result, 'application/xml');
                let arrProducts = xml.getElementsByTagName("product")           
                console.log(arrProducts)
                console.log(arrProducts[0].childNodes[5].innerHTML)
                console.log(arrProducts[0].getElementsByTagName("name")[0].innerHTML);
                console.log(arrProducts[0].getElementsByTagName("type")[0].innerHTML);
                console.log(arrProducts[0].getElementsByTagName("price")[0].innerHTML);
                console.log(arrProducts[0].getElementsByTagName("scr"));

                let name7=document.getElementById("name7");
                name7.innerHTML=arrProducts[0].getElementsByTagName("name")[0].innerHTML;
                let type7=document.getElementById("type7");
                type7.innerHTML=arrProducts[0].getElementsByTagName("type")[0].innerHTML;                      
                let price7=document.getElementById("price7");
                price7.innerHTML=arrProducts[0].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img7").src=arrProducts[0].childNodes[5].innerHTML; 

                let name8=document.getElementById("name8");
                name8.innerHTML=arrProducts[1].getElementsByTagName("name")[0].innerHTML;
                let type8=document.getElementById("type8");
                type8.innerHTML=arrProducts[1].getElementsByTagName("type")[0].innerHTML;                      
                let price8=document.getElementById("price8");
                price8.innerHTML=arrProducts[1].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img8").src=arrProducts[1].childNodes[5].innerHTML; 

                let name9=document.getElementById("name9");
                name9.innerHTML=arrProducts[2].getElementsByTagName("name")[0].innerHTML;
                let type9=document.getElementById("type9");
                type8.innerHTML=arrProducts[2].getElementsByTagName("type")[0].innerHTML;                      
                let price9=document.getElementById("price9");
                price9.innerHTML=arrProducts[2].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img9").src=arrProducts[2].childNodes[5].innerHTML; 

                let name10=document.getElementById("name10");
                name10.innerHTML=arrProducts[3].getElementsByTagName("name")[0].innerHTML;
                let type10=document.getElementById("type10");
                type10.innerHTML=arrProducts[3].getElementsByTagName("type")[0].innerHTML;                      
                let price10=document.getElementById("price10");
                price10.innerHTML=arrProducts[3].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img10").src=arrProducts[3].childNodes[5].innerHTML; 

                let name11=document.getElementById("name11");
                name11.innerHTML=arrProducts[4].getElementsByTagName("name")[0].innerHTML;
                let type11=document.getElementById("type11");
                type11.innerHTML=arrProducts[4].getElementsByTagName("type")[0].innerHTML;                      
                let price11=document.getElementById("price11");
                price11.innerHTML=arrProducts[4].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img11").src=arrProducts[4].childNodes[5].innerHTML; 

                let name12=document.getElementById("name12");
                name12.innerHTML=arrProducts[5].getElementsByTagName("name")[0].innerHTML;
                let type12=document.getElementById("type12");
                type12.innerHTML=arrProducts[5].getElementsByTagName("type")[0].innerHTML;                      
                let price12=document.getElementById("price12");
                price12.innerHTML=arrProducts[5].getElementsByTagName("price")[0].innerHTML;
                document.getElementById("img12").src=arrProducts[5].childNodes[5].innerHTML; 



            })
            .catch(error => {
                console.log(error);
            });


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

                    if (products[i]["type"] === valores){  
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
                let xml = (new DOMParser()).parseFromString(result, 'application/xml');
                let arrProducts = xml.getElementsByTagName("product") 
                console.log(arrProducts);
                
                for (i = 0; i < arrProducts.length; i++){
                    
                    let name7=document.getElementById("name"+(i+7));
                    name7.innerHTML="" ;
                    let type7=document.getElementById("type"+(i+7));
                    type7.innerHTML="";                      
                    let price7=document.getElementById("price"+(i+7));
                    price7.innerHTML="";
                    document.getElementById("img"+(i+7)).src="";
                    
                    if (arrProducts[i].getElementsByTagName("type")[0].innerHTML === valores){
                        
                        
                        let name7=document.getElementById("name"+(indice));
                        name7.innerHTML=arrProducts[i].getElementsByTagName("name")[0].innerHTML ;
                        let type7=document.getElementById("type"+(indice));
                        type7.innerHTML=arrProducts[i].getElementsByTagName("type")[0].innerHTML;                      
                        let price7=document.getElementById("price"+(indice));
                        price7.innerHTML=arrProducts[i].getElementsByTagName("price")[0].innerHTML;
                        document.getElementById("img"+(indice)).src=arrProducts[i].childNodes[5].innerHTML; 
                        indice+=1

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
