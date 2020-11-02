 /* DEBUT fonction creation de div avec class */
 function createDivClass(name, classe){
    classe = classe.split(' ');
    myDiv = document.createElement(name);

    for(var i = 0; i < classe.length; i++){
       
        myDiv.classList.add(classe[i]);
    }
    
    return myDiv;
}
/* FIN fonction creation de div avec class */

/* DEBUT fonction creation de div avec id */
/* FIN fonction creation de div avec id */

/* DEBUT fonction creation de div avec content */
function createDivContent(name, content){
    myDiv = document.createElement(name);
    myDiv.textContent = content;
    return myDiv;
}
/* FIN fonction creation de div avec content */


/* DEBUT 1er Page */
var divUtil
var livre = createDivClass('div', 'container border mt-5');
var livreRow = createDivClass('div', 'row h-100');
var page = [createDivClass('div', 'col-6 h-100 d-flex flex-column justify-content-center text-center'), createDivClass('div', 'col-6 h-100 border-left')];

/* DEBUT init LIVRE */
    livre.style.height = '800px';

    document.body.appendChild(livre);
    document.getElementsByClassName('container')[0].appendChild(livreRow);
    document.getElementsByClassName('row')[0].appendChild(page[0]);
    document.getElementsByClassName('row')[0].appendChild(page[1]);
/* FIN init LIVRE */

/* DEBUT init PAGE LEFT */
    var pageLeft = document.getElementsByClassName('col-6')[0];
    
    pageLeft.appendChild(createDivContent('h2', 'Bienvenu voyageur'));
    divUtil = createDivContent('p', 'Serez-vous à la hauteur ?')
    pageLeft.appendChild(divUtil);
    divUtil = createDivClass('p', 'position-absolute bot right m-0');
    divUtil.textContent = 'page 1';
    pageLeft.appendChild(divUtil);

/* FIN init PAGE LEFT */

/* DEBUT init PAGE RIGHT */
var pageRight = document.getElementsByClassName('col-6')[1];
    
pageRight.appendChild(createDivContent('h2', 'Bienvenu voyageur'));
    divUtil = createDivContent('p', 'Serez-vous à la hauteur ?')
    pageRight.appendChild(divUtil);
    divUtil = createDivClass('p', 'position-absolute bot right m-0');
    divUtil.textContent = 'page 1';
    pageRight.appendChild(divUtil);

/* FIN init PAGE RIGHT */

/* FIN 1er Page */