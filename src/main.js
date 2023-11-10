document.addEventListener('DOMContentLoaded', function(){
    const button = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementosDoHeader();
        } else {
            exibirElementosDoHeader();
        }
    })
    
    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(botao){
            const alvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${alvo}]`);
            esconderTodasAsAbas();
            aba.classList.add('shows__list--is-active');
            removerBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active');
            
        })
    }

    for (let i=0; i < questions.length; i++){
        questions[i].addEventListener('click', abrirEFechar);
    }
}
)

function abrirEFechar(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);

}

function removerBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i=0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');

}}

function esconderTodasAsAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i=0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
function ocultarElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibirElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}