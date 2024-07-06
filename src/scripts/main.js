document.addEventListener('DOMContentLoaded', function() {
    const movies = document.querySelectorAll('[data-movies-title]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    for (let i = 0; i < movies.length; i++) {
        movies[i].addEventListener('click', abreOuFechaFilme);
    }
})

function abreOuFechaFilme(elemento) {
    const classe = 'movies__trilogy__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}