'use strict';

window.addEventListener("load", () =>{
    var btn = document.querySelector(".showme");
    console.log(btn);
    
    var first = document.querySelector("#pillado");
    console.log(first);

    var showParagraph = document.querySelectorAll("p");
    console.log(showParagraph);

    var pokemon = document.querySelectorAll(".pokemon");
    console.log(pokemon);

    var atribute = document.querySelectorAll('[data-function="testMe"]');
    for(var i = 0; i <= atribute.length; i++){
        console.log(atribute[i]);
    }
    
    console.log(atribute[2]);
})
