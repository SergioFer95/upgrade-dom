'use strict';

window.addEventListener("load", () =>{

    // 2.1 Inserta dinamicamente en el html un div vacio con javascript. RESUELTO!!!

    const newDiv= document.createElement("div");

    newDiv.classList.add("firstDiv");

    document.body.appendChild(newDiv);


    // 2.2 Inserta dinamicamente en el html un div que contenga una p con javascript. RESUELTO!!!

    const secondNewDiv= document.createElement("div");
    secondNewDiv.classList.add("secondDiv")

    const newParagrahp = document.createElement("p");
    secondNewDiv.appendChild(newParagrahp);

    document.body.appendChild(secondNewDiv)


    // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. RESUELTO!!!

    const thirdNewDiv = document.createElement("div");
    thirdNewDiv.classList.add("thirdDiv");

    var createDivs = (() => {
        for (var i = 1; i <= 6; i++) {
            const paragraphs = document.createElement("p");
            thirdNewDiv.appendChild(paragraphs);
        }

    });

    document.body.appendChild(thirdNewDiv);
    createDivs(thirdNewDiv);
    

    // 2.4 Inserta dinamicamente con javascript en html una p con el texto 'Soy dinámico!'. RESUELTO!!!

    thirdNewDiv.innerHTML= `<p>¡Soy dinámico!</p>`;


    // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. RESUELTO!!!

    const header = document.querySelector(".fn-insert-here");
    header.innerHTML = `Wubba Lubba dub dub`;


    // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. RESUELTO!!!
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    const newList = document.createElement("div");

    newList.innerHTML= `<ul>
    <li>Facebook</li>
    <li>Netflix</li>
    <li>Instagram</li>
    <li>Snapchat</li>
    <li>Twitter</li>
    </ul>`

    document.body.appendChild(newList);


    // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

    const elementsToRemove = document.getElementsByClassName("fn-remove-me");

    var deleteSoons = (() =>{
        for(var i = 0; i <= elementsToRemove.length; i++){
            const elements = document.querySelector(".fn-remove-me");
            
            elements.remove();
        }
    })

    deleteSoons(elementsToRemove);

    


    // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild. RESUELTO!!!

    const newP = document.createElement("p");
    const newT = document.createTextNode("¡Voy en medio!");
    newP.appendChild(newT);

    document.body.appendChild(newP);

    const beforeDiv= document.querySelector('[customName="beforeMe"]');

    document.body.insertBefore(newP, beforeDiv);


    // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here. RESUELTO!!

    const insertHere = document.querySelector('[customName="afterMe"]');
    const insertAlsoHere = document.querySelector('[customName="beforeMe"]');

    insertHere.innerHTML = `<p>¡Voy dentro!</p>`;

    insertAlsoHere.innerHTML= `<p>¡Voy dentro!</p>`;

})