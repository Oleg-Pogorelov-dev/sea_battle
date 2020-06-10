let number_cells = 100;
let computer_navy = [];
let player_navy = [];
let blank_cells = [
	0,  1,  2,  3,  4,  5,  6,  7,  8,  9,
	10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
	20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
	30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
	40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
	50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
	60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
	70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
	80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
	90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];



const computer_field = document.querySelector('.computer');
const player_field = document.querySelector('.player');

for (let i = 0; i < 100; i++) {
	computer_field.children[i].className = 'computer_' + i
	player_field.children[i].className = 'player_' + i
}

function turn() {
	return Boolean(Math.round(Math.random()));
}

function randomPlaceForShips(arr) {
	let battleship = Math.floor(Math.random() * 100);
	let battleship_2;
	let battleship_3;
	let battleship_4;

	if (turn()){
		while (
			battleship + 30 > 99
		) battleship = Math.floor(Math.random() * 100);
		battleship_2 = battleship + 10;
	  battleship_3 = battleship + 20;
	  battleship_4 = battleship + 30;
	} else {
		while (
			String(battleship).indexOf('9', 1) != -1 ||
			String(battleship).indexOf('8', 1) != -1 ||
			String(battleship).indexOf('7', 1) != -1 
		) battleship = Math.floor(Math.random() * 100);
		battleship_2 = battleship + 1;
		battleship_3 = battleship + 2;
		battleship_4 = battleship + 3;
	}
	arr.push(battleship);
	arr.push(battleship_2);
	arr.push(battleship_3);
	arr.push(battleship_4);

	for (let i = 2; i > 0; i--) {
		let cruiser = Math.floor(Math.random() * 100);
		let cruiser_2;
		let cruiser_3;
		if (turn()){
			while (
				arr.includes(cruiser) || 
				arr.includes(cruiser + 1) || 
				arr.includes(cruiser - 1) || 
				arr.includes(cruiser + 9) || 
				arr.includes(cruiser - 9) || 
				arr.includes(cruiser + 10) || 
				arr.includes(cruiser - 10) ||
				arr.includes(cruiser + 11) ||
				arr.includes(cruiser - 11) ||
				arr.includes(cruiser + 19) ||
				arr.includes(cruiser + 20) ||
				arr.includes(cruiser + 21) ||
				arr.includes(cruiser + 29) ||
				arr.includes(cruiser + 30) ||
				arr.includes(cruiser + 31) ||
				cruiser + 20 > 99
			) cruiser = Math.floor(Math.random() * 100);
			cruiser_2 = cruiser + 10;
		  cruiser_3 = cruiser + 20;
		} else {
			while (
				arr.includes(cruiser) || 
				arr.includes(cruiser + 1) || 
				arr.includes(cruiser - 1) || 
				arr.includes(cruiser + 9) || 
				arr.includes(cruiser - 9) || 
				arr.includes(cruiser + 10) || 
				arr.includes(cruiser - 10) ||
				arr.includes(cruiser + 11) ||
				arr.includes(cruiser - 11) ||
				arr.includes(cruiser - 8) ||
				arr.includes(cruiser + 2) ||
				arr.includes(cruiser + 12) ||
				arr.includes(cruiser - 7) ||
				arr.includes(cruiser + 3) ||
				arr.includes(cruiser + 13) ||
				String(cruiser).indexOf('9', 1) != -1 ||
				String(cruiser).indexOf('8', 1) != -1
			) cruiser = Math.floor(Math.random() * 100);
			cruiser_2 = cruiser + 1;
		cruiser_3 = cruiser + 2;
		}
		arr.push(cruiser);
		arr.push(cruiser_2);
		arr.push(cruiser_3);
	}

	for (let i = 3; i > 0; i--) {
		let destroyer = Math.floor(Math.random() * 100);
		let destroyer_2;
		if (turn()){
			while (
				arr.includes(destroyer) || 
				arr.includes(destroyer + 1) || 
				arr.includes(destroyer - 1) || 
				arr.includes(destroyer + 9) || 
				arr.includes(destroyer - 9) || 
				arr.includes(destroyer + 10) || 
				arr.includes(destroyer - 10) ||
				arr.includes(destroyer + 11) ||
				arr.includes(destroyer - 11) ||
				arr.includes(destroyer + 19) ||
				arr.includes(destroyer + 20) ||
				arr.includes(destroyer + 21) ||
				destroyer + 10 > 99
			) destroyer = Math.floor(Math.random() * 100);
			destroyer_2 = destroyer + 10;
		} else {
			while (
				arr.includes(destroyer) || 
				arr.includes(destroyer + 1) || 
				arr.includes(destroyer - 1) || 
				arr.includes(destroyer + 9) || 
				arr.includes(destroyer - 9) || 
				arr.includes(destroyer + 10) || 
				arr.includes(destroyer - 10) ||
				arr.includes(destroyer + 11) ||
				arr.includes(destroyer - 11) ||
				arr.includes(destroyer - 8) ||
				arr.includes(destroyer + 2) ||
				arr.includes(destroyer + 12) ||
				String(destroyer).indexOf('9', 1) != -1
			) destroyer = Math.floor(Math.random() * 100);
			destroyer_2 = destroyer + 1;
		}
		arr.push(destroyer);
		arr.push(destroyer_2);
	}

	for (let i = 4; i > 0; i--) {
		let boat = Math.floor(Math.random() * 100);
		while (
				arr.includes(boat) || 
				arr.includes(boat - 1) || 
				arr.includes(boat + 1) || 
				arr.includes(boat + 9) || 
				arr.includes(boat - 9) || 
				arr.includes(boat + 10) || 
				arr.includes(boat - 10) ||
				arr.includes(boat + 11) ||
				arr.includes(boat - 11) 
		) boat = Math.floor(Math.random() * 100);
		arr.push(boat)
	}
};


// player_field.onmouseover = (event) => {
// 	let target = event.target;
// 	if (target.parentElement.className != 'player') return;
//   target.classList.add('player_choose-place');
// };

// player_field.onmouseout = (event) => {
// 	let target = event.target;
// 	if (target.parentElement.className != 'player') return;
//   target.classList.remove('player_choose-place');
// };

// player_field.onclick = (event) => {
// 	let target = event.target;
// 	if (target.parentElement.className != 'player') return;
//   target.classList.add('player_navy');
// };
randomPlaceForShips(computer_navy);
randomPlaceForShips(player_navy);

for (let i = 0; i < 100; i++) {
	const number_cell = Number(player_field.children[i].className.slice(7))
	if (player_navy.includes(number_cell)) {
		player_field.children[i].classList.add('player_navy')
	}
}

computer_field.onclick = (event) => {
	let target = event.target;
	let chosen_cell = Math.floor(Math.random() * number_cells);
	let shoot = blank_cells[chosen_cell];

	if (target.parentElement.className != 'computer'    ||
						target.classList.contains('destroyed')    ||
						target.classList.contains('crashed_ship') || 
						target.classList.contains('miss')) return;

	if 	(computer_navy.includes(+target.classList[0].slice(9)) && 
				(
					computer_navy.includes(+target.classList[0].slice(9) + 1)  ||
					computer_navy.includes(+target.classList[0].slice(9) - 1)  ||
					computer_navy.includes(+target.classList[0].slice(9) - 10) ||
					computer_navy.includes(+target.classList[0].slice(9) + 10)
				)
		 	) {
    target.classList.add('crashed_ship');
	} else if (computer_navy.includes(+target.classList[0].slice(9))) {
		target.classList.add('destroyed');
	} else {
		target.classList.add('miss');
	};

	if (player_field.children[shoot].classList.contains('player_navy')){
		player_field.children[shoot].classList.remove('player_navy');
		player_field.children[shoot].classList.add('destroyed');
	} else {
		player_field.children[shoot].classList.add('miss');
	};

	blank_cells.splice(chosen_cell, 1);
	number_cells = number_cells - 1;
};
