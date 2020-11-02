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
        divUtil = createDivContent('p', 'Serriez-vous à la hauteur ?')
        pageLeft.appendChild(divUtil);
        divUtil = createDivClass('p', 'position-absolute bot right m-0');
        divUtil.textContent = 'page 1';
        pageLeft.appendChild(divUtil);

    /* FIN init PAGE LEFT */

    /* DEBUT init PAGE RIGHT */
        var pageRight = document.getElementsByClassName('col-6')[1];
        pageRight.appendChild(createDivClass('div', 'container h-100 position-relative'));
        pageRight.getElementsByClassName('container')[0].appendChild(createDivClass('div', 'row text-center w-100 h-75 position-absolute top-10'));
        pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border'));
        pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border'));
        pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border'));
        pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border'));

        /* DEBUT init column col-3[0,1,2,3] */
            for(var i = 0; i < pageRight.getElementsByClassName('col-3').length; i++){
                divUtil = createDivContent('p', '0');
                divUtil.style.margin = '0';
                divUtil.style.display = 'flex';
                divUtil.style.flexDirection = 'column';
                divUtil.style.justifyContent = 'center';
                divUtil.style.height = '100%';
                pageRight.getElementsByClassName('col-3')[i].appendChild(divUtil);
            }
        /* FIN init column col-3[0,1,2,3] */
        
    /* FIN init PAGE RIGHT */

/* FIN 1er Page */