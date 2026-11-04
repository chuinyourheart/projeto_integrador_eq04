// Garante que o JavaScript só vai rodar depois que todo o HTML da página estiver carregado
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. AMPLIAR E REDUZIR TEXTO (SALVANDO A PREFERÊNCIA)
    // ==========================================
    const botaoFonte = document.querySelector("#botao-fonte");

    // Verifica se o usuário já tinha deixado o texto ampliado em algum acesso anterior
    const modoFonteSalvo = localStorage.getItem("fonteAmpliada");
    if (modoFonteSalvo === "true") {
        document.body.classList.add("fonte-ampliada");
        if (botaoFonte) {
            botaoFonte.textContent = "Reduzir texto";
            botaoFonte.setAttribute("aria-pressed", "true");
        }
    }

    // Adiciona o evento de clique para o botão de acessibilidade
    if (botaoFonte) {
        botaoFonte.addEventListener("click", function () {
            const ampliada = document.body.classList.toggle("fonte-ampliada");
            
            // Guarda a informação no navegador (true se estiver ampliada, false se não)
            localStorage.setItem("fonteAmpliada", String(ampliada));
            
            botaoFonte.textContent = ampliada ? "Reduzir texto" : "Ampliar texto";
            botaoFonte.setAttribute("aria-pressed", String(ampliada));
        });
    }

    // ==========================================
    // 2. FORMULÁRIO DE AVALIAÇÃO DA PÁGINA (PÁGINA 6)
    // ==========================================
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
            
            // SALVA A AVALIAÇÃO NO NAVEGADOR:
            // Transforma o objeto em texto para conseguir salvar no localStorage
            localStorage.setItem("ultimaAvaliacao", JSON.stringify(avaliacao));

            console.log("Avaliação salva no localStorage:", avaliacao);
            resposta.style.color = "#2e7d32";
            resposta.textContent = "Avaliação salva localmente com sucesso! (Protótipo local).";
            formAvaliacao.reset();
        });
    }

    // ==========================================
    // 3. FORMULÁRIO DE RELATOS (PÁGINA 6)
    // ==========================================
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
            
            // SALVA O RELATO NO NAVEGADOR:
            localStorage.setItem("ultimoRelatoFicticio", JSON.stringify(relato));

            console.log("Relato salvo no localStorage:", relato);
            resposta.style.color = "#2e7d32";
            resposta.textContent = "Relato fictício salvo localmente! Não foi enviado para nenhum servidor externo.";
            formRelato.reset();
        });
    }

    // ==========================================
    // 4. DADOS REAIS / ESTATÍSTICAS (PÁGINA 6)
    // ==========================================
    const botaoDado = document.querySelector("#mostrar-dado");
    if (botaoDado) {
        botaoDado.addEventListener("click", function () {
            const dadoElemento = document.querySelector("#dado-destaque");
            dadoElemento.textContent = "Segundo dados da UNESCO (2021), a implementação de programas de Educação para a Paz nas escolas reduziu em até 40% os relatos de bullying e conflitos violentos no ambiente escolar.";
        });
    }

});
