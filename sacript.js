//funcion que me aplica el estilo  a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opcion = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

// vamos a desaparecer el menu una vez que se ha selecionado una opcion en el modo responsive 

    var x = document.getElementById("nav");
    x.className = "";
}
//funcion de muetra el menu responsive//
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

window.onscroll = function(){
    efectoHobilidades()
};

function efectoHobilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerheight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("html").classList.add("barra-progreso2")
        document.getElementById("html").classList.add("barra-progreso3")
        document.getElementById("html").classList.add("barra-progreso4")
    }
}
