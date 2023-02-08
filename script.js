const titulo = document.createElement('h1');
titulo.id = 'title';
titulo.innerHTML = 'Paleta de Cores';
body.appendChild(titulo);

const section = document.createElement('section');
section.id = 'color-palette';
body.appendChild(section);

const cor1 = document.createElement('div');
let cor2 = document.createElement('div');
let cor3 = document.createElement('div');
let cor4 = document.createElement('div');
cor1.className = 'color selected';
cor2.className = 'color';
cor3.className = 'color';
cor4.className = 'color';
cor1.id = 'color-1';
cor2.id = 'color-2';
cor3.id = 'color-3';
cor4.id = 'color-4';

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'purple';
cor3.style.backgroundColor = 'blue';
cor4.style.backgroundColor = 'aqua';

section.appendChild(cor1);
section.appendChild(cor2);
section.appendChild(cor3);
section.appendChild(cor4);

const button = document.createElement('button');
button.id = 'button-random-color';
button.innerHTML = 'Cores aleatórias';
body.appendChild(button);

const coresAleatórias = () => {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i+= 1) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color
};

button.addEventListener('click', () => {
    for(let i = 2; i < 5; i+= 1) {
        let div_color = document.getElementById(`color-${i}`);
        div_color.style.backgroundColor = coresAleatórias();
    }
});