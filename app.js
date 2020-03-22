const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const mejh = document.querySelector('h1');

const colors = ['yellow', 'red', 'green', 'black', 'blue', 'orange'];
const mejhValue = ['tepach', 'karatist', 'haker', 'Full stack programmer', 'Java Guru', 'Virtuelna Masina'];

const rndNumb = () => Math.floor(Math.random() * 6);

const changeColor = () => {
	bodyBcg.style.backgroundColor = colors[rndNumb()];
};

const textAdd = () => {
	document.getElementById('h1').innerHTML = 'Mejh je ' + mejhValue[rndNumb()];
};

colorBtn.addEventListener('click', changeColor);
colorBtn.addEventListener('click', textAdd);
