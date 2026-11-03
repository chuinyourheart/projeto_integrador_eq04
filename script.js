//ampliar e reuzir texto


const botaoFonte = document.querySelector("#botao-fonte");


if (botaoFonte) {
   botaoFonte.addEventListener("click", function () {
       const ampliada = document.body.classList.toggle("fonte-ampliada");
       botaoFonte.textContent = ampliada ? "Reduzir texto" : "Ampliar texto";
       botaoFonte.setAttribute("aria-pressed", String(ampliada));
   });
}


// formulário de avaliação da página




const formAvaliacao = document.querySelector("#form-avaliacao");


if (formAvaliacao) {
   formAvaliacao.addEventListener("submit", function (evento) {
       evento.preventDefault();


       const clareza = document.querySelector("#clareza").value;
       const notaTexto = document.querySelector("#nota").value;
       const sugestao = document.querySelector("#sugestao").value.trim();
       const resposta = document.querySelector("#resultado-avaliacao");


       const nota = Number(notaTexto);


       // Validação dos campos obrigatórios e da nota (inteiro de 1 a 5)
       if (!clareza || !notaTexto || !Number.isInteger(nota) || nota < 1 || nota > 5) {
           resposta.style.color = "#d32f2f";
           resposta.textContent = "Por favor, escolha a clareza e informe uma nota inteira de 1 a 5.";
           document.querySelector(!clareza ? "#clareza" : "#nota").focus();
           return;
       }


       const avaliacao = { clareza, nota, sugestao };
       console.log("Avaliação de teste registrada:", avaliacao);


       resposta.style.color = "#2e7d32";
       resposta.textContent = "Avaliação conferida com sucesso! Envio ainda indisponível (Protótipo local).";
       formAvaliacao.reset();
   });
}


// formulário de relatos


const formRelato = document.querySelector("#form-relato");


if (formRelato) {
   formRelato.addEventListener("submit", function (evento) {
       evento.preventDefault();


       const categoria = document.querySelector("#categoria").value;
       const descricao = document.querySelector("#descricao").value.trim();
       const sugestao = document.querySelector("#sugestao-relato").value.trim();
       const resposta = document.querySelector("#resultado-relato");


       // Validação: categoria selecionada e descrição com no mínimo 20 caracteres
       if (!categoria || descricao.length < 20) {
           resposta.style.color = "#d32f2f";
           resposta.textContent = "Selecione a categoria e escreva ao menos 20 caracteres na descrição.";
           document.querySelector(!categoria ? "#categoria" : "#descricao").focus();
           return;
       }


       const relato = { categoria, descricao, sugestao };
       console.log("Relato de teste registrado:", relato);


       resposta.style.color = "#2e7d32";
       resposta.textContent = "Relato de teste conferido com sucesso! Não foi enviado nem publicado.";
       formRelato.reset();
   });
}


//dado reais


const botaoDado = document.querySelector("#mostrar-dado");


if (botaoDado) {
   botaoDado.addEventListener("click", function () {
       const dadoElemento = document.querySelector("#dado-destaque");
       dadoElemento.textContent = "Segundo dados da UNESCO (2021), a implementação de programas de Educação para a Paz nas escolas reduziu em até 40% os relatos de bullying e conflitos violentos no ambiente escolar.";
   });
}
