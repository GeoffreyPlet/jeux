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
    function pageOne(){

        document.body.innerHTML = '';


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

            /* DEBUT TITRE */
                divUtil = createDivContent('h3', 'Trouvez le code');
                divUtil.style.width = '100%';
                pageRight.getElementsByClassName('row')[0].appendChild(divUtil);
            /* FIN TITRE */

            /* DEBUT BTN VALIDE */
                divUtil = createDivContent('button', 'Validé');
                divUtil.style.width = '100%';
                divUtil.style.height = '120px';
                divUtil.style.cursor = 'pointer';
                divUtil.setAttribute('id', 'valide-page-2')
                pageRight.getElementsByClassName('row')[0].appendChild(divUtil);
            /* FIN BTN VALIDE */

            /* DEBUT PARTIE COLUMN */
                pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border d-flex flex-column justify-content-center'));
                pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border d-flex flex-column justify-content-center'));
                pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border d-flex flex-column justify-content-center'));
                pageRight.getElementsByClassName('row')[0].appendChild(createDivClass('div', 'col-3 border d-flex flex-column justify-content-center'));
                divUtil = createDivClass('p', 'position-absolute bot right m-0');
                divUtil.textContent = 'page 2';
                pageRight.appendChild(divUtil);
            /* DEBUT PARTIE COLUMN */

            /* DEBUT init column col-3[0,1,2,3] */
                for(var i = 0; i < pageRight.getElementsByClassName('col-3').length; i++){
                    divUtil = createDivContent('p', '0');
                    divUtil.style.margin = '0';
                    divUtil.style.display = 'flex';
                    divUtil.style.flexDirection = 'column';
                    divUtil.style.justifyContent = 'center';
                    divUtil.style.height = '100%';
                    divUtil.style.display = 'none';
                    pageRight.getElementsByClassName('col-3')[i].appendChild(divUtil);
                }
                
                /* DEBUT EVENT COL-3 */

                    /* DEBUT EVENT COL-3[0] */
                        document.getElementsByClassName('col-3')[0].addEventListener('click', function(){
                            var cpt = parseInt(document.getElementsByClassName('col-3')[0].textContent) + 1;
                            document.getElementsByClassName('col-3')[0].innerHTML = '';
                            document.getElementsByClassName('col-3')[0].innerHTML = '<span>'+cpt+'</span>';

                            
                            document.getElementsByClassName('col-3')[0].getElementsByTagName('span')[0].style.display = 'none';
                            
                            if(parseInt(document.getElementsByClassName('col-3')[0].textContent) === 10){
                                document.getElementsByClassName('col-3')[0].textContent = 0;
                            }

                        });
                    /* FIN EVENT COL-3[0] */

                    /* DEBUT EVENT COL-3[1] */
                    document.getElementsByClassName('col-3')[1].addEventListener('click', function(){
                        var cpt = parseInt(document.getElementsByClassName('col-3')[1].textContent) + 1;
                        document.getElementsByClassName('col-3')[1].innerHTML = '';
                        document.getElementsByClassName('col-3')[1].innerHTML = '<span>'+cpt+'</span>';
                        document.getElementsByClassName('col-3')[1].getElementsByTagName('span')[0].style.display = 'none';
                        if(parseInt(document.getElementsByClassName('col-3')[1].textContent) === 10){
                            document.getElementsByClassName('col-3')[1].textContent = 0;
                        }

                    });
                    /* FIN EVENT COL-3[1] */

                    /* DEBUT EVENT COL-3[2] */
                    document.getElementsByClassName('col-3')[2].addEventListener('click', function(){
                        var cpt = parseInt(document.getElementsByClassName('col-3')[2].textContent) + 1;
                        document.getElementsByClassName('col-3')[2].innerHTML = '';
                        document.getElementsByClassName('col-3')[2].innerHTML = '<span>'+cpt+'</span>';
                        document.getElementsByClassName('col-3')[2].getElementsByTagName('span')[0].style.display = 'none';
                        if(parseInt(document.getElementsByClassName('col-3')[2].textContent) === 10){
                            document.getElementsByClassName('col-3')[2].textContent = 0;
                        }

                    });
                    /* FIN EVENT COL-3[2] */

                    /* DEBUT EVENT COL-3[3] */
                    document.getElementsByClassName('col-3')[3].addEventListener('click', function(){
                        var cpt = parseInt(document.getElementsByClassName('col-3')[3].textContent) + 1;
                        document.getElementsByClassName('col-3')[3].innerHTML = '';
                        document.getElementsByClassName('col-3')[3].innerHTML = '<span>'+cpt+'</span>';
                        document.getElementsByClassName('col-3')[3].getElementsByTagName('span')[0].style.display = 'none';
                        if(parseInt(document.getElementsByClassName('col-3')[3].textContent) === 10){
                            document.getElementsByClassName('col-3')[3].textContent = 0;
                        }

                    });
                    /* FIN EVENT COL-3[3] */

                /* FIN EVENT COL-3 */
            /* FIN init column col-3[0,1,2,3] */

            /* DEBUT ENQUETE */
                document.getElementById('valide-page-2').addEventListener('click', function(){
                    var next = [1,2,3,4];
                    var solution = [];
                    var check = false;
                    
                    
                    for(var i = 0; i < document.getElementsByClassName('col-3').length; i++){
                        solution.push(parseInt(document.getElementsByClassName('col-3')[i].textContent));
                        if(solution[i] == next[i]){
                            document.getElementsByClassName('col-3')[i].style.backgroundColor = 'green';
                            check = true;
                        }
                        else{
                            document.getElementsByClassName('col-3')[i].style.backgroundColor = 'red';
                            check = false;
                        }
                    }
                    if(check === true){
                        pageTwo();
                    }
                });
            /* FIN ENQUETE */
            
        /* FIN init PAGE RIGHT */
    }
/* FIN 1er Page */



/* DEBUT 2eme PAGE */
    function pageTwo(){
        
        document.body.innerHTML = '';
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
            
            

        /* FIN init PAGE LEFT */

        /* DEBUT init PAGE RIGHT */
            var pageRight = document.getElementsByClassName('col-6')[1];
            
        /* FIN init PAGE RIGHT */
    }
/* FIN 2eme PAGE */

pageTwo();

