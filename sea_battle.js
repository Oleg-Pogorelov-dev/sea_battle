const field = document.querySelector('.player');
field.onclick = (event) => {
	let target = event.target;
	if (target.parentElement.parentElement.className != 'player') return;
	target.style.background = 'red';
}