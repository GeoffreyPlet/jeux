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


/* DEBUT fonction utile */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
/* FIN fonction utile */


/* DEBUT fonction creation de div avec content */
function createDivContent(name, content){
    myDiv = document.createElement(name);
    myDiv.textContent = content;
    return myDiv;
}
/* FIN fonction creation de div avec content */

var audioRadio = document.createElement('audio');
audioRadio.setAttribute('src', 'img/radio.mp3');


var livre = createDivClass('div', 'container border mt-5 livre');
livre.style.height = '800px';
document.body.appendChild(livre);

/* DEBUT 1er Page */
    function pageOne(){

       


        var divUtil
        var livreRow = createDivClass('div', 'row h-100');
        var page = [createDivClass('div', 'col-6 h-100 d-flex flex-column justify-content-center text-center'), createDivClass('div', 'col-6 h-100 border-left')];

        /* DEBUT init LIVRE */
     


            document.getElementsByClassName('container')[0].appendChild(livreRow);
            document.getElementsByClassName('row')[0].appendChild(page[0]);
            document.getElementsByClassName('row')[0].appendChild(page[1]);
        /* FIN init LIVRE */

        /* DEBUT init PAGE LEFT */
            var pageLeft = document.getElementsByClassName('col-6')[0];
            
            pageLeft.appendChild(createDivContent('h2', 'Bienvenu voyageur'));
            divUtil = createDivContent('p', 'Serrez-vous à la hauteur ?')
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
                                document.getElementsByClassName('col-3')[0].innerHTML = '';
                                document.getElementsByClassName('col-3')[0].innerHTML = '<span>0</span>';
                                document.getElementsByClassName('col-3')[0].getElementsByTagName('span')[0].style.display = 'none';
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
                            document.getElementsByClassName('col-3')[1].innerHTML = '';
                            document.getElementsByClassName('col-3')[1].innerHTML = '<span>0</span>';
                            document.getElementsByClassName('col-3')[1].getElementsByTagName('span')[0].style.display = 'none';
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
                            document.getElementsByClassName('col-3')[2].innerHTML = '';
                            document.getElementsByClassName('col-3')[2].innerHTML = '<span>0</span>';
                            document.getElementsByClassName('col-3')[2].getElementsByTagName('span')[0].style.display = 'none';
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
                            document.getElementsByClassName('col-3')[3].innerHTML = '';
                            document.getElementsByClassName('col-3')[3].innerHTML = '<span>0</span>';
                            document.getElementsByClassName('col-3')[3].getElementsByTagName('span')[0].style.display = 'none';
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
        
        document.getElementsByClassName('livre')[0].innerHTML = '';
        
        var divUtil
        var livreRow = createDivClass('div', 'row h-100');
        var page = [createDivClass('div', 'col-6 h-100'), createDivClass('div', 'col-6 h-100 border-left')];

        /* DEBUT init LIVRE */
            livre.style.height = '800px';

            $('.container').append(livreRow);
            $('.row').append(page);
            
        /* FIN init LIVRE */

        /* DEBUT init PAGE LEFT */
            var pageLeft = $('.col-6').eq(0);

            divUtil = createDivClass('p', 'position-absolute bot right m-0');
            divUtil.textContent = 'page 3';
            pageLeft.append(divUtil);

            /* DEBUT TITRE */
                pageLeft.append(createDivContent('h2', 'Radio'));
                $('h2').css({
                    'text-align':'center'
                });
            /* FIN TITRE */
            
            /* DEBUT RADIO */
            divUtil = createDivClass('div', 'border mt-5');
            divUtil.setAttribute('id', 'radio');
            pageLeft.append(divUtil);

            $('#radio').css({
                height : '240px',
            });

            
            /* FIN RADIO */

            /* DEBUT RADION-SCREEN */
                divUtil = createDivClass('div', 'border w-75 mx-auto mt-3');
                divUtil.setAttribute('id', 'radio-screen');
                $('#radio').append(divUtil);
                $('#radio-screen').css({
                    'position':'relative',
                    height : '120px',
                    'text-align':'center',
                });

                /* DEBUT TEXT RADIO-SCREEN */
                    $('#radio-screen').append(createDivContent('p', 'MHz :'));
                    $('#radio-screen p').append(createDivContent('span', ' 108.00'));
                    $('#radio-screen p').css({
                        'position': 'absolute',
                        'left': '50%',
                        'top': '50%',
                        'transform': 'translate(-50%, -50%)',
                    })
                /* FIN TEXT RADIO-SCREEN */

            /* FIN RADION-SCREEN */

            /* DEBUT BUTTON RADIO*/
                divUtil = createDivClass('div', 'container');
                $('#radio').append(divUtil);
                divUtil = createDivClass('div', 'row d-flex justify-content-around pt-3');
                $('#radio .container').append(divUtil);

                /* DEBUT BTN RADIO LEFT */
                    divUtil = createDivClass('div', 'rounded-circle border btn position-relative');
                    $('#radio .row').append(divUtil);
                    var vefirBtnLef = false
                    var positionX;
                    var degre = 0;
                    $(divUtil).mousedown(function(event){
                        vefirBtnLef = true;
                        positionX = event.pageX;
                    }).bind('mouseup mouseover mouseout', function(){
                            vefirBtnLef = false;
                            positionX = 0;
                    });

                    $(divUtil).mousemove(function(event){

                        if( vefirBtnLef === true && positionX != 0){

                            if(event.pageX != positionX){
                                degre = degre + 4;
                                $('#radio-screen p span').eq(0).text(degre % 360);
                                $('#btn-radio-left').css({
                                    
                                    'transform': 'rotate('+degre+'deg)',
                                });
                            }
                        }
                        else{
                            vefirBtnLef = false;
                        }
                        if($('#radio-screen p span').eq(0).text() == '0'){
                            $('#btn-valide-page-3').css({
                                'background-color':'green',
                            });
                            audioRadio.pause();
                            for(var i = 0; i < $('.text-solution-radio span').length; i++){
                                $('.text-solution-radio span').eq(i).css({
                                    opacity : 1,
                                });
                            }
                            $('button').show();
                        }
                        else{
                            $('#btn-valide-page-3').css({
                                'background-color':'red',
                            });
                            audioRadio.play();
                            for(var i = 0; i < $('.text-solution-radio span').length; i++){
                                $('.text-solution-radio span').eq(i).css({
                                    opacity : 0,
                                });
                            }
                            $('button').hide();
                        }
                    });


                    divUtil = createDivContent('p', '');
                    divUtil.setAttribute('id', 'btn-radio-left');
                    $('#radio .row .rounded-circle').append(divUtil);
                    $(divUtil).css({
                        'position':'absolute',
                        'margin':'0',
                        'left':'0px',
                        'top':'23px',
                        'border':'1px solid',
                        'width':'100%',
                    })
                    
                /* FIN BTN RADIO LEFT */

                /* DEBUT BTN RADIO RIGHT */
                    divUtil = createDivClass('div', 'position-relative rounded-circle border btn');
                    $('#radio .row').append(divUtil);
                    $(divUtil).mousedown(function(event){
                        vefirBtnLef = true;
                        positionX = event.pageX;
                    }).bind('mouseup mouseover mouseout', function(){
                            vefirBtnLef = false;
                            positionX = 0;
                    });

                    $(divUtil).mousemove(function(event){
                        if( vefirBtnLef === true && positionX != 0){

                            if(event.pageX != positionX){
                                degre = degre - 4;
                                document.getElementById('btn-radio-right').style.transform = 'rotate('+degre+'deg)';
                                $('#radio-screen p span').eq(0).text(degre % 360);
                            }
                        }
                        else{
                            vefirBtnLef = false;
                        }

                        
                        if($('#radio-screen p span').eq(0).text() == '0'){
                            $('#btn-valide-page-3').css({
                                'background-color':'green',
                            });
                            audioRadio.pause();
                            for(var i = 0; i < $('.text-solution-radio span').length; i++){
                                $('.text-solution-radio span').eq(i).css({
                                    opacity : 1,
                                });
                            }
                            $('button').show();
                        }
                        else{
                            $('#btn-valide-page-3').css({
                                'background-color':'red',
                            });
                            audioRadio.play();
                            for(var i = 0; i < $('.text-solution-radio span').length; i++){
                                $('.text-solution-radio span').eq(i).css({
                                    opacity : 0,
                                });
                            }
                            $('button').hide();
                            
                        }
                    });

                    divUtil = createDivContent('p', '');
                    divUtil.setAttribute('id', 'btn-radio-right');
                    $('#radio .row .rounded-circle').eq(1).append(divUtil);
                    $(divUtil).css({
                        'position':'absolute',
                        'margin':'0',
                        'left':'0px',
                        'top':'23px',
                        'border':'1px solid',
                        'width':'100%',
                    })
                /* FIN BTN RADIO RIGHT */
                
                $('.btn').css({
                    height : '48px',
                    width : '48px',
                });
            /* FIN BUTTON RADIO */

            divUtil = createDivClass('div', 'container border');
            divUtil.setAttribute('id','btn-valide-page-3');
            $(divUtil).css({
                'height': '120px',
                'margin-top': '10em',
            });
            pageLeft.append(divUtil);

            



        /* FIN init PAGE LEFT */

        /* DEBUT init PAGE RIGHT */
            var pageRight = $('.col-6').eq(1);

            divUtil = createDivClass('p', 'position-absolute bot right m-0');
            divUtil.textContent = 'page 4';
            pageRight.append(divUtil);

            pageRight.addClass('d-flex flex-column justify-content-center')
            divUtil = createDivClass('p', 'text-solution-radio text-center');
            pageRight.append(divUtil);
            $(divUtil).html('<span>Allo !!<br></span><span>On m\'entend !! <br></span><span>Je suis enfermer, je ne vois plus rien !! <br></span><span>Alllooooo !!!! <br></span><span>Je sais qu\'il y a quelqu\'un je vous entend !!!!! <br></span><span> Venez m\'aider !!!</span>');

            for(var i = 0; i < $('.text-solution-radio span').length; i++){
                $('.text-solution-radio span').eq(i).css({
                    opacity : 0,
                    transition : '5s',
                })
            }

            divUtil = createDivClass('button', 'btn');
            $(divUtil).html('Validé');
            $(divUtil).hide();
            pageRight.append(divUtil);

            $(divUtil).click(function(){
                pageTrois();
            })
            


            
        /* FIN init PAGE RIGHT */
    }
/* FIN 2eme PAGE */


var compteurInitCouleur = 0;
var intervalInitCouleur = 2000;

/* DEBUT PAGE 3 */
function pageTrois(){
        
        document.getElementsByClassName('livre')[0].innerHTML = '';
        
        
        var divUtil
        var livreRow = createDivClass('div', 'row h-100');
        var page = [createDivClass('div', 'col-6 h-100'), createDivClass('div', 'col-6 h-100 border-left')];


        /* DEBUT FONCTION FLECHE */
            $(document).keydown(function(event){
                
                if(event.key == 'ArrowLeft'){
                    $('#col-0-row-4-grill').css({
                        'backgroundColor' : 'red',
                    });
                }
                if(event.key == 'ArrowUp'){
                    $('#col-1-row-4-grill').css({
                        'backgroundColor' : 'blue',
                    });
                }
                if(event.key == 'ArrowRight'){
                    $('#col-2-row-4-grill').css({
                        'backgroundColor' : 'orange',
                    });
                }
                if(event.key == 'ArrowDown'){
                    $('#col-3-row-4-grill').css({
                        'backgroundColor' : 'green',
                    });
                }
            }).bind('keyup', function(event){
                if(event.key == 'ArrowLeft'){
                    $('#col-0-row-4-grill').css({
                        'backgroundColor' : 'white',
                    });
                }
                if(event.key == 'ArrowUp'){
                    $('#col-1-row-4-grill').css({
                        'backgroundColor' : 'white',
                    });
                }
                if(event.key == 'ArrowRight'){
                    $('#col-2-row-4-grill').css({
                        'backgroundColor' : 'white',
                    });
                }
                if(event.key == 'ArrowDown'){
                    $('#col-3-row-4-grill').css({
                        'backgroundColor' : 'white',
                    });
                }
            });
        /* DEBUT FONCTION FLECHE */

        /* DEBUT init LIVRE */
            livre.style.height = '800px';

            $('.container').append(livreRow);
            $('.row').append(page);
            
        /* FIN init LIVRE */

        /* DEBUT init PAGE LEFT */
            var pageLeft = $('.col-6').eq(0);

            /* DEBUT INFO PAGE */
                divUtil = createDivClass('p', 'position-absolute bot right m-0');
                divUtil.textContent = 'page 5';
                pageLeft.append(divUtil);
            /* DEBUT INFO PAGE */

            /* DEBUT GRILL */
                divUtil = createDivClass('div', 'position-relative');
                $(divUtil).attr('id', 'grill');
                pageLeft.append(divUtil);

                /* DEBUT ROW GRILL */
                    for( var i = 0; i < 5; i++){
                        divUtil = createDivClass('div','row');
                        $(divUtil).attr('id','row-grill-'+i);
                        $('#grill').append(divUtil);
                        for( var j = 0; j < 4; j++){
                            divUtil = createDivClass('div','col border');
                            $(divUtil).css({
                                height : '120px',
                            });
                            $(divUtil).attr('id','col-'+j+'-row-'+i+'-grill');
                            $('#row-grill-'+i).append(divUtil);
                        }
                    }
                /* FIN ROW GRILL */
            /* FIN GRILL */

            /* DEBUT TABLEAU DE VIE */
                divUtil = createDivClass('div', 'container border');
                pageLeft.append(divUtil);
                $(divUtil).css({
                    height:'120px',
                    'margin-top':'24px',
                });
            /* FIN TABLEAU DE VIE */

            /* DEBUT LVL 1 */
                var setLvl = 4;
            /* FIN LVL 1 */

            /* DEBUT INTERVAL SET COULEUR */
                var setCouleur = setInterval(function(){
                var random = getRandomInt(4);

                divUtil = createDivClass('div','position-absolute');
                $('#col-'+random+'-row-0-grill').append(divUtil);

                switch(random){
                    case 0:
                        $(divUtil).css({
                            height:'120px',
                            width: '100%',
                            left:0,
                            'background-color':'red',
                        });
                        break;
                    case 1:
                        $(divUtil).css({
                            height:'120px',
                            width: '100%',
                            left:0,
                            'background-color':'blue',
                        });
                        break;
                    case 2:
                        $(divUtil).css({
                            height:'120px',
                            width: '100%',
                            left:0,
                            'background-color':'orange',
                        });
                        break;
                    case 3:
                        $(divUtil).css({
                            height:'120px',
                            width: '100%',
                            left:0,
                            'background-color':'green',
                        });
                        break;
                }
                compteurInitCouleur ++;
                if(compteurInitCouleur === setLvl){
                    clearTimeout(setCouleur);
                }
                
            }, intervalInitCouleur);
            /* FIN INTERVAL SET COULEUR */
        /* FIN init PAGE LEFT */

        /* DEBUT init PAGE RIGHT */
            var pageRight = $('.col-6').eq(1);

            /* DEBUT INFO PAGE */
                divUtil = createDivClass('p', 'position-absolute bot right m-0');
                divUtil.textContent = 'page 6';
                pageRight.append(divUtil);
            /* DEBUT INFO PAGE */
        /* FIN init PAGE RIGHT */
    }
    /* FIN PAGE 3 */

    pageTrois();