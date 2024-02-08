const counter = document.getElementById('counter');
const addBtn = document.querySelector('.add-val');
const removeBtn = document.querySelector('.remove-val');
const addTolist = document.querySelector('add-lista');


addBtn.addEventListener('click', function() {
    counter.innerText = parseInt(counter.innerText) + 1;
});

removeBtn.addEventListener('click', function() {
    const currentValue = parseInt(counter.innerText);
    if (currentValue > 1) {
        counter.innerText = currentValue - 1;
    }
});



var x = 0

$(document).ready(function(){
    $('.add-lista').click(function(){
        x++;
        if(x == 1){
            $('.add-lista i').removeClass('far fa-plus-square').addClass('fa-regular fa-square-check');
            $('.list-adding').text('ADICIONADO');
            
        }else{
            $('.add-lista i').removeClass('fa-regular fa-square-check').addClass('far fa-plus-square');
            $('.list-adding').text('ADICIONAR A LISTA');
            x = 0;
        }
           
    });
});





$(document).ready(function(){
    $('.card-type').click(function(){
        x++;
        if(x == 1){
            $('.card-type i').removeClass('fa-regular fa-heart').addClass('fa-solid fa-heart');
            
        }else{
            $('.card-type i').removeClass('fa-solid fa-heart').addClass('fa-regular fa-heart');
            x = 0;
        }
           
    });
});
