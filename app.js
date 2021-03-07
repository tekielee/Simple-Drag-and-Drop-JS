const div = document.querySelector('div');

let divX = 50;
let divY = 50;

div.style.left = divX + 'px';
div.style.top = divY + 'px';

let dragActive = false;

div.addEventListener('mousedown', (e) => {
	div.style.backgroundColor = 'steelblue';
	dragActive = !dragActive;
	
	offsetDivX = e.offsetX;
	offsetDivY = e.offsetY;
});

document.addEventListener('mouseup', (e) => {
	if(dragActive) {
		divX = e.clientX - offsetDivX;
		divY = e.clientY - offsetDivY;
	}
	
	div.style.left = divX + 'px';
	div.style.top = divY + 'px';
	div.style.backgroundColor = 'blue';
	dragActive = !dragActive;
});