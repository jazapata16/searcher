
    let loadProducts=()=>{
        fetch('https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json')
        .then(response=> response.json())
        .then(products=>{

        })
        fetch('https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml')
        .then(response=> response.text())
        .then(result=>{
            
        })
    }

loadProducts();
