function requisitarPagina(url) {
    let ajax = new XMLHttpRequest();

    document.getElementById('conteudo').innerHTML = '';

    // incluir o gif na pag
    if (!document.getElementById('loading')) {

        let imgLoading = document.createElement('img');
        imgLoading.id = 'loading';
        imgLoading.src = 'loading.gif';
        imgLoading.className = 'rounded mx-auto d-block';

        document.getElementById('conteudo').appendChild(imgLoading);
    };



    // requisição não iniciada, state = 0
    //console.log(ajax.readyState);

    // conexão estabelecida com o servidor, state = 1
    ajax.open('GET', url);

    // lógica que olha o progresso da requisição
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status == 200) {

            document.getElementById('conteudo').innerHTML = ajax.responseText;
            //document.getElementById('loading').remove();
        };

        if (ajax.readyState === 4 && ajax.status == 404) {

            document.getElementById('conteudo').innerHTML = 'Tente novamente mais tarde...'
            //document.getElementById('loading').remove();
        };

    };

    ajax.send();
    // console.log(ajax);
}