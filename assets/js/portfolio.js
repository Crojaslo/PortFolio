let menuVisible = false;
//Función que oculta o muestra el menú

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculto el menú una vez que seleciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("rubyonrails");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("github");
        habilidades[5].classList.add("trabajoequipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("colaboracion");
        habilidades[9].classList.add("projectmanagement");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades.
window.onscroll = function(){
    efectoHabilidades();
}
