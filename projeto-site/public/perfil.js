// Mudar imagem do perfil

let imagem = ["img/usuario.png","img/usuario1.png",
              "img/usuario2.png","img/usuario3.png",
              "img/usuario4.png"];

function perfil() {

    let aleatorio = Math.trunc(Math.random() * 5);
    

    var sessao = {
        imagem: `${imagem[aleatorio]}`
    };

    sessionStorage.imagem_usuario = sessao.imagem;
    
    console.log(sessionStorage.imagem_usuario)
    console.log(sessao.imagem)
}