document.addEventListener('DOMContentLoaded', function () {
    const fotoElemento = document.querySelector('#fotoUsuario');
    const nomeElemento = document.querySelector('#nomeReal');
    const nomeUsuarioElemento = document.querySelector('#nomeUsuario');
    const RepositorioElemento = document.querySelector('#repositorios');
    const seguidorElemento = document.querySelector('#seguidor');
    const seguirElemento = document.querySelector('#seguindos');
    const linkElemento = document.querySelector('#link');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/luanlnf', true);

    xhr.onload = function () {
        // O método 'onload' é chamado quando a requisição está completa
        const json = JSON.parse(xhr.responseText);
        
        // Atualizando os elementos da página
        fotoElemento.src = json.avatar_url;
        nomeElemento.innerText = json.name;
        nomeUsuarioElemento.innerText = json.login;
        RepositorioElemento.innerText = json.public_repos;
        seguidorElemento.innerText = json.followers;
        seguirElemento.innerText = json.following;
        linkElemento.href = json.html_url;
    };

    // Envia a requisição
    xhr.send();
});



