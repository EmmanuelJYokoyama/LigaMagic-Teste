function init(){
    mostraCarta();
    init_component();
    var cardPosicao = document.getElementById('card-index');

    for(let x=0;x<=2;x++){
        var imagem = document.createElement("img");
        imagem.src = "./images/counter-magic"+ (x+1) +".jpg"; 
        imagem.alt = `Imagem ${x}`;
        imagem.id = `imagem-${x}`;
        imagem.classList.add(`imagem-${x}`);
        cardPosicao.appendChild(imagem);
    }

    
    
    const carta1_Select = document.getElementById("imagem-0");
    carta1_Select.addEventListener("click", function(){
        mostraCarta(0);
        card_highlight(carta1_Select);
    })


    const carta2_Select = document.getElementById("imagem-1");
    carta2_Select.addEventListener("click", function(){
        mostraCarta(1);
        card_highlight(carta2_Select);
    })

    const carta3_Select = document.getElementById("imagem-2");
    carta3_Select.addEventListener("click", function(){
        card_highlight(carta3_Select);
        mostraCarta(2);
        
    })


}

// --------------- PRINCIPAL ---------------

function mostraCarta(index=0){
    var local = document.getElementById('card-display');
    var imagem = document.createElement("img");

    // cartaSelecao();

    switch(index){
        case 0:
            limpaImg(imagem);
            imagem.src = "./images/counter-magic1.jpg";
            return local.appendChild(imagem);
            
        case 1:
            limpaImg(imagem);
            imagem.src = "./images/counter-magic2.jpg";
            return local.appendChild(imagem);

        case 2:
            limpaImg(imagem);
            imagem.src = "./images/counter-magic3.jpg";
            return local.appendChild(imagem);

    }

    
}


function limpaImg(img){
    img = document.getElementById('card-display').innerHTML='';
}


// --------------- CARD PAGINATOR ---------------


function init_component(){
    let indice = 0;

    var arrow_R = document.getElementById("arrow_R-click");

        arrow_R.addEventListener("click", function(){
            indice++;
            if(indice == 3)
                indice = 0;

            return mostraCarta(indice);

        })


    var arrow_L = document.getElementById("arrow_L-click");
        arrow_L.addEventListener("click", function(){
            indice--;
            if(indice < 0)
                indice = 2;

            return mostraCarta(indice);

            
        })
}

// --------------- CARD SELECTION ---------------

function card_highlight(varIn){
    $(varIn).click(function(){
        $('.selected').removeClass('selected'); // removes the previous selected class
        $(this).addClass('selected'); // adds the class to the clicked image
     });
}





