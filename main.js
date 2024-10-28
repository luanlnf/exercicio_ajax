document.addEventListener('DOMContentLoaded', function () {
    
    $(document).ready(function() {
        const endpoint = 'https://api.github.com/users/luanlnf';
    
        // Faz a requisição AJAX com jQuery
        $.ajax(endpoint)
            .done(function(resposta) {
                // Seleciona os elementos da página
                $('#fotoUsuario').attr('src', resposta.avatar_url);
                $('#nomeReal').text(resposta.name);
                $('#nomeUsuario').text(resposta.login);
                $('#repositorios').text(resposta.public_repos);
                $('#seguidor').text(resposta.followers);
                $('#seguindos').text(resposta.following);
                $('#link').attr('href', resposta.html_url);
            })
            .fail(function() {
                // Caso ocorra um erro na requisição
                alert('Erro ao carregar as informações da API.');
            });
    });
});



