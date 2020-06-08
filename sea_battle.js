let navy = [];

const field = document.querySelector('.computer');

for (let i = 0; i < 100; i++) {
	field.children[i].className = 'computer_' + i
}

function turn() {
	return Boolean(Math.round(Math.random()));
}

let battleship = Math.floor(Math.random() * 100);
let battleship_2;
let battleship_3;
let battleship_4;
if (turn()){
	while (
		navy.includes(battleship) || 
		navy.includes(battleship + 1) || 
		navy.includes(battleship - 1) || 
		navy.includes(battleship + 9) || 
		navy.includes(battleship - 9) || 
		navy.includes(battleship + 10) || 
		navy.includes(battleship - 10) ||
		navy.includes(battleship + 11) ||
		navy.includes(battleship - 11) ||
		navy.includes(battleship + 19) ||
		navy.includes(battleship + 20) ||
		navy.includes(battleship + 21) ||
		navy.includes(battleship + 29) ||
		navy.includes(battleship + 30) ||
		navy.includes(battleship + 31) ||
		navy.includes(battleship + 39) ||
		navy.includes(battleship + 40) ||
		navy.includes(battleship + 41) ||
		battleship + 30 > 99
	) battleship = Math.floor(Math.random() * 100);
	battleship_2 = battleship + 10;
  battleship_3 = battleship + 20;
  battleship_4 = battleship + 30;
} else {
	while (
		navy.includes(battleship) || 
		navy.includes(battleship + 1) || 
		navy.includes(battleship - 1) || 
		navy.includes(battleship + 9) || 
		navy.includes(battleship - 9) || 
		navy.includes(battleship + 10) || 
		navy.includes(battleship - 10) ||
		navy.includes(battleship + 11) ||
		navy.includes(battleship - 11) ||
		navy.includes(battleship - 8) ||
		navy.includes(battleship + 2) ||
		navy.includes(battleship + 12) ||
		navy.includes(battleship - 7) ||
		navy.includes(battleship + 3) ||
		navy.includes(battleship + 13) ||
		navy.includes(battleship - 6) ||
		navy.includes(battleship + 4) ||
		navy.includes(battleship + 14) ||
		String(battleship).includes('9' || '8' || '7')
	) battleship = Math.floor(Math.random() * 100);
	battleship_2 = battleship + 1;
	battleship_3 = battleship + 2;
	battleship_3 = battleship + 3;
}
navy.push(battleship);
navy.push(battleship_2);
navy.push(battleship_3);
navy.push(battleship_4);

for (let i = 2; i > 0; i--) {
	let cruiser = Math.floor(Math.random() * 100);
	let cruiser_2;
	let cruiser_3;
	if (turn()){
		while (
			navy.includes(cruiser) || 
			navy.includes(cruiser + 1) || 
			navy.includes(cruiser - 1) || 
			navy.includes(cruiser + 9) || 
			navy.includes(cruiser - 9) || 
			navy.includes(cruiser + 10) || 
			navy.includes(cruiser - 10) ||
			navy.includes(cruiser + 11) ||
			navy.includes(cruiser - 11) ||
			navy.includes(cruiser + 19) ||
			navy.includes(cruiser + 20) ||
			navy.includes(cruiser + 21) ||
			navy.includes(cruiser + 29) ||
			navy.includes(cruiser + 30) ||
			navy.includes(cruiser + 31) ||
			cruiser + 20 > 99
		) cruiser = Math.floor(Math.random() * 100);
		cruiser_2 = cruiser + 10;
	  cruiser_3 = cruiser + 20;
	} else {
		while (
			navy.includes(cruiser) || 
			navy.includes(cruiser + 1) || 
			navy.includes(cruiser - 1) || 
			navy.includes(cruiser + 9) || 
			navy.includes(cruiser - 9) || 
			navy.includes(cruiser + 10) || 
			navy.includes(cruiser - 10) ||
			navy.includes(cruiser + 11) ||
			navy.includes(cruiser - 11) ||
			navy.includes(cruiser - 8) ||
			navy.includes(cruiser + 2) ||
			navy.includes(cruiser + 12) ||
			navy.includes(cruiser - 7) ||
			navy.includes(cruiser + 3) ||
			navy.includes(cruiser + 13) ||
			String(cruiser).includes('9' || '8')
		) cruiser = Math.floor(Math.random() * 100);
		cruiser_2 = cruiser + 1;
	cruiser_3 = cruiser + 2;
	}
	navy.push(cruiser);
	navy.push(cruiser_2);
	navy.push(cruiser_3);
}

for (let i = 3; i > 0; i--) {
	let destroyer = Math.floor(Math.random() * 100);
	let destroyer_2;
	if (turn()){
		while (
			navy.includes(destroyer) || 
			navy.includes(destroyer + 1) || 
			navy.includes(destroyer - 1) || 
			navy.includes(destroyer + 9) || 
			navy.includes(destroyer - 9) || 
			navy.includes(destroyer + 10) || 
			navy.includes(destroyer - 10) ||
			navy.includes(destroyer + 11) ||
			navy.includes(destroyer - 11) ||
			navy.includes(destroyer + 19) ||
			navy.includes(destroyer + 20) ||
			navy.includes(destroyer + 21) ||
			destroyer + 10 > 99
		) destroyer = Math.floor(Math.random() * 100);
		destroyer_2 = destroyer + 10;
	} else {
		while (
			navy.includes(destroyer) || 
			navy.includes(destroyer + 1) || 
			navy.includes(destroyer - 1) || 
			navy.includes(destroyer + 9) || 
			navy.includes(destroyer - 9) || 
			navy.includes(destroyer + 10) || 
			navy.includes(destroyer - 10) ||
			navy.includes(destroyer + 11) ||
			navy.includes(destroyer - 11) ||
			navy.includes(destroyer - 8) ||
			navy.includes(destroyer + 2) ||
			navy.includes(destroyer + 12) ||
			String(destroyer).includes('9')
		) destroyer = Math.floor(Math.random() * 100);
		destroyer_2 = destroyer + 1;
	}
	navy.push(destroyer);
	navy.push(destroyer_2);
}

for (let i = 4; i > 0; i--) {
	let boat = Math.floor(Math.random() * 100);
	while (
			navy.includes(boat) || 
			navy.includes(boat - 1) || 
			navy.includes(boat + 1) || 
			navy.includes(boat + 9) || 
			navy.includes(boat - 9) || 
			navy.includes(boat + 10) || 
			navy.includes(boat - 10) ||
			navy.includes(boat + 11) ||
			navy.includes(boat - 11) 
	) boat = Math.floor(Math.random() * 100);
	navy.push(boat)
}

field.onclick = (event) => {
	let target = event.target;
	if (target.parentElement.className != 'computer') return;
	if (navy.includes(+target.classList[0].slice(9))) {
    target.classList.add('destroyed');
	} else {
		target.classList.add('miss');
	};
};
