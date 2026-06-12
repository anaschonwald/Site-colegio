// =============================
// MENU RESPONSIVO
// =============================

const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu");

if (hamburguer) {
    hamburguer.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

// Fecha menu ao clicar em um link

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// =============================
// ÁREA DO ALUNO
// =============================

const painel = document.getElementById("painelAluno");
const titulo = document.getElementById("tituloPainel");
const conteudo = document.getElementById("conteudoPainel");

document.querySelectorAll(".aluno-card").forEach(card => {

    card.addEventListener("click", () => {

        const tipo = card.dataset.content;

        painel.classList.add("active");

        if (tipo === "calendario") {

            titulo.innerHTML = "📅 Calendário Escolar 2026";

            conteudo.innerHTML = `
                <div class="info-box">
                    <ul>
                        <li><strong>10/02:</strong> Início das aulas</li>
                        <li><strong>03/03:</strong> Reunião de Pais</li>
                        <li><strong>21/04:</strong> Feriado de Tiradentes</li>
                        <li><strong>15/07:</strong> Início do Recesso Escolar</li>
                        <li><strong>28/07:</strong> Retorno das aulas</li>
                        <li><strong>10/10:</strong> Feira Cultural</li>
                        <li><strong>05/11:</strong> Mostra Científica</li>
                        <li><strong>12/12:</strong> Encerramento do Ano Letivo</li>
                    </ul>
                </div>
            `;
        }

        if (tipo === "horarios") {

            titulo.innerHTML = "🕒 Horários das Aulas";

            conteudo.innerHTML = `
                <div class="info-box">

                <table class="tabela">

                    <tr>
                        <th>Aula</th>
                        <th>Horário</th>
                    </tr>

                    <tr>
                        <td>1ª Aula</td>
                        <td>07:30 - 08:20</td>
                    </tr>

                    <tr>
                        <td>2ª Aula</td>
                        <td>08:20 - 09:10</td>
                    </tr>

                    <tr>
                        <td>Intervalo</td>
                        <td>09:10 - 09:30</td>
                    </tr>

                    <tr>
                        <td>3ª Aula</td>
                        <td>09:30 - 10:20</td>
                    </tr>

                    <tr>
                        <td>4ª Aula</td>
                        <td>10:20 - 11:10</td>
                    </tr>

                    <tr>
                        <td>5ª Aula</td>
                        <td>11:10 - 12:00</td>
                    </tr>

                </table>

                </div>
            `;
        }

        if (tipo === "avisos") {

            titulo.innerHTML = "📢 Avisos Importantes";

            conteudo.innerHTML = `
                <div class="info-box">

                    <div class="aviso">
                        <h4>Entrega de Boletins</h4>
                        <p>Dia 25 de junho no período da tarde.</p>
                    </div>

                    <div class="aviso">
                        <h4>Feira de Ciências</h4>
                        <p>Inscrições abertas até 20 de setembro.</p>
                    </div>

                    <div class="aviso">
                        <h4>Biblioteca</h4>
                        <p>Funcionamento durante todos os intervalos.</p>
                    </div>

                    <div class="aviso">
                        <h4>Jogos Escolares</h4>
                        <p>Treinos às quartas e sextas-feiras.</p>
                    </div>

                </div>
            `;
        }

        painel.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =============================
// CONTADORES ANIMADOS
// =============================

const contadores = document.querySelectorAll(".contador");

function iniciarContadores() {

    contadores.forEach(contador => {

        const alvo = +contador.dataset.target;

        let atual = 0;

        const incremento = alvo / 80;

        const atualizar = () => {

            atual += incremento;

            if (atual < alvo) {

                contador.innerText = Math.floor(atual);

                requestAnimationFrame(atualizar);

            } else {

                contador.innerText = alvo + "+";
            }
        };

        atualizar();

    });
}

iniciarContadores();

// =============================
// BOTÃO VOLTAR AO TOPO
// =============================

const topoBtn = document.getElementById("topoBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topoBtn.style.display = "flex";

    } else {

        topoBtn.style.display = "none";

    }

});

topoBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =============================
// MODAL DA GALERIA
// =============================

const modal = document.getElementById("modalImagem");
const imagemExpandida = document.getElementById("imagemExpandida");
const fechar = document.querySelector(".fechar");

document.querySelectorAll(".galeria img").forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        imagemExpandida.src = img.src;

    });

});

if (fechar) {

    fechar.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

// =============================
// ANIMAÇÃO AO ROLAR
// =============================

const elementos = document.querySelectorAll(
    ".card, .post, .numero, figure"
);

function revelarElementos() {

    elementos.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", revelarElementos);
revelarElementos();

// =============================
// FORMULÁRIO DE CONTATO
// =============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome = formulario.querySelector(
            'input[type="text"]'
        ).value;

        if (nome.trim() === "") {

            alert("Por favor, preencha seu nome.");
            return;

        }

        alert(
            "Mensagem enviada com sucesso! Obrigado pelo contato, " +
            nome +
            "."
        );

        formulario.reset();

    });

}

// =============================
// ANO AUTOMÁTICO NO RODAPÉ
// =============================

const copy = document.querySelector(".copy");

if (copy) {

    copy.innerHTML =
        `© ${new Date().getFullYear()} Colégio Estadual Dario Vellozo. Todos os direitos reservados.`;

}
