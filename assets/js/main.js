    
    let offset = 0;
    let limit = 6;
    let $ = document.createElement.bind(document);
    let principal = document.querySelector('.principal');

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
 

     
     fetch(url)
         .then((response) => response.json())
         .then((jsonBody) => jsonBody.results)

         .then((list)=>list.map((item)=>
            fetch(item.url)
                .then((resp)=> resp.json())
                .then((data)=> data)
                .then((details) => Promise.all([details]))
                .then((pokemonsDetails) =>pokemonsDetails.map((valor)=>{

           
            let secao = $('section');
            let indice = $('p');
            let imagem = $('img');
            let nome = $('p');
            let peso = $('p');

            principal.appendChild(secao);
            secao.appendChild(indice);
            secao.appendChild(imagem);
            secao.appendChild(nome);
            secao.appendChild(peso);

            secao.classList.add('card');
            indice.classList.add('card_indice');
            imagem.classList.add('card_img');
            nome.classList.add('card_titulo');
            peso.classList.add('card_titulo');

            indice.textContent = `#0${valor.id}`;       
            imagem.src= valor.sprites.other.dream_world.front_default;
            nome.textContent = valor.name;
            peso.textContent = `peso: ${valor.weight}lbs`;
           
         }
           
            ))))
           
         
       

 
 




    



    




    






    
    




   


        
       
    
    
    
   

    
    

















