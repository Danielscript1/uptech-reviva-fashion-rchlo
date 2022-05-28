    const estoque = [

        {
            nome: 'Camiseta Social Masculina',
            url: 'camiseta-social',
            preco: 39.90,
            descricao: 'A Camiseta Lipp é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/camisa6.png', descricao: 'camiseta social masculina no tamanho p' }
            ],
        },

        {
            nome: 'Camiseta Molentom',
            url: 'camiseta-molentom',
            preco: 39.90,
            descricao: 'A Camiseta molentom é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/camisa3.png', descricao: 'camiseta molentom  tamanho p' }
            ],
        },
        {
            nome: 'Camiseta Florida',
            url: 'camiseta-florida',
            preco: 39.90,
            descricao: 'A Camiseta florida é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/camisa4.1.png', descricao: 'camiseta florida  tamanho p' }
            ],
        },

        {
            nome: 'Camiseta Quadriculada',
            url: 'camiseta-quadriculada',
            preco: 39.90,
            descricao: 'A Camiseta Quadriculada é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/camisa4.1.png', descricao: 'camiseta Quadriculada  tamanho p' }
            ],
        },

        {
            nome: 'Camiseta Jeans Feminina',
            url: 'camiseta-jeans-feminina',
            preco: 39.90,
            descricao: 'A Camiseta Jeans Feminina é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/mulher1.png', descricao: 'camiseta Jeans Feminina  tamanho p' }
            ],
        },
        {
            nome: 'Camiseta Time',
            url: 'camiseta-time-feminina',
            preco: 39.90,
            descricao: 'A Camiseta Jeans Feminina é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/mulher2.png', descricao: 'camiseta Jeans Feminina  tamanho p' }
            ],
        },

        {
            nome: 'Camiseta Jeans Feminina clara',
            url: 'camiseta-jeans-clara',
            preco: 39.90,
            descricao: 'A Camiseta Jeans Feminina é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/mulher3.png', descricao: 'camiseta Jeans Feminina  tamanho p' }
            ],
        },

        {
            nome: 'Camiseta Social Feminina',
            url: 'camiseta-social-feminina',
            preco: 39.90,
            descricao: 'A Camiseta Jeans Feminina é linda para ser usada em qualquer lugar',
            tamanhos_disponiveis: ['P', 'M', 'G'],
            quantidade_disponivel: 12,
            imagens: [
                { url: './img/mulher4.png', descricao: 'camiseta social Feminina  tamanho p' }
            ],
        }



    ]

    const recebendoArquivos = JSON.parse(localStorage.getItem("itens")) || [];
    const persistindoArquivos = localStorage.setItem("produtos", JSON.stringify(estoque))



    const bancoDados = estoque.forEach(element => {
        if (!recebendoArquivos.includes(element)) {
            recebendoArquivos.push(element)
        }
    });

    //const botoes = document.getElementsByClassName("botao");
    const botoes = document.querySelectorAll('.botao');

    botoes.forEach((el, key) => el.addEventListener('click', event => removeEstoque(key)));


    function removeEstoque(id) {

        if (recebendoArquivos[id].quantidade_disponivel >= 1) {

            recebendoArquivos[id].quantidade_disponivel = recebendoArquivos[id].quantidade_disponivel - 1;
            localStorage.setItem("produtos", JSON.stringify(recebendoArquivos));
            alert(recebendoArquivos[id].nome + " adicionado na sacola.");

        } else {
            alert("!Ops sem estoque no momento")
        }

    }