let number_cells = 100;
let location_computer_navy = [];
let location_player_navy = [];
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
let crashed_ships = [];
let destroyed_ships = [];

let computer_navy = [
	[4], [3], [3], [2], [2], [2], [1], [1], [1], [1],
]

let player_navy = [
	[4], [3], [3], [2], [2], [2], [1], [1], [1], [1],
]

const computer_field = document.querySelector('.computer');
const player_field = document.querySelector('.player');

for (let i = 0; i < 100; i++) {
	computer_field.children[i].className = 'computer_' + i
	player_field.children[i].className = 'player_' + i
}

function turn() {
	return Boolean(Math.round(Math.random()));
}

function randomCrashX(shoot) {
	if (turn() && String(shoot).indexOf('9', 1) == -1 && shoot != 9) {
		return shoot + 1
	} else if (shoot - 1 >= 0) {
		return shoot - 1
	} else {
		return destroyed_ships[0]
	}
}

function randomCrashY(shoot) {
	if (turn() && shoot + 10 < 100) {
		return shoot + 10
	} else if (shoot - 10 >= 0) {
		return shoot - 10
	} else {
		return destroyed_ships[0]
	}
}

function randomLocations(arr) {
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
			battleship == 9 ||
			battleship == 8 ||
			battleship == 7 ||
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
				cruiser == 9 ||
				cruiser == 8 ||
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
				destroyer == 9 ||
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
//   target.classList.add('location_player_navy');
// };
randomLocations(location_computer_navy);
randomLocations(location_player_navy);

for (let i = 0; i < 100; i++) {
	const number_cell = Number(player_field.children[i].className.slice(7))
	if (location_player_navy.includes(number_cell)) {
		player_field.children[i].classList.add('player_navy')
	}
}

computer_navy[0].push(location_computer_navy.slice(0,4))
computer_navy[1].push(location_computer_navy.slice(4,7))
computer_navy[2].push(location_computer_navy.slice(7,10))
computer_navy[3].push(location_computer_navy.slice(10,12))
computer_navy[4].push(location_computer_navy.slice(12,14))
computer_navy[5].push(location_computer_navy.slice(14,16))
computer_navy[6].push(location_computer_navy.slice(16,17))
computer_navy[7].push(location_computer_navy.slice(17,18))
computer_navy[8].push(location_computer_navy.slice(18,19))
computer_navy[9].push(location_computer_navy.slice(19,20))

player_navy[0].push(location_player_navy.slice(0,4))
player_navy[1].push(location_player_navy.slice(4,7))
player_navy[2].push(location_player_navy.slice(7,10))
player_navy[3].push(location_player_navy.slice(10,12))
player_navy[4].push(location_player_navy.slice(12,14))
player_navy[5].push(location_player_navy.slice(14,16))
player_navy[6].push(location_player_navy.slice(16,17))
player_navy[7].push(location_player_navy.slice(17,18))
player_navy[8].push(location_player_navy.slice(18,19))
player_navy[9].push(location_player_navy.slice(19,20))

computer_field.onclick = (event) => {
	let target = event.target;
	let chosen_cell = Math.floor(Math.random() * number_cells);
	let shoot = blank_cells[chosen_cell];

	if (target.parentElement.className != 'computer'    ||
						target.classList.contains('destroyed')    ||
						target.classList.contains('crashed_ship') || 
						target.classList.contains('miss')) return;

	if (location_computer_navy.includes(+target.classList[0].slice(9))) {
    target.classList.add('crashed_ship');

  	for (let ship of computer_navy) {
  		if (ship[1].includes(+target.classList[0].slice(9))) {
  			ship[0] = ship[0] - 1;
  		}

  		if (!ship[0]) {
  			for (let deck of ship[1]) {
  				destroyed_deck = document.querySelector(`.computer_${deck}`);
  				destroyed_deck.classList.add('destroyed');

  				if (String(deck).indexOf('9', 1) == -1 && deck != 9 && !ship[1].includes(deck + 1)) {
  					document.querySelector(`.computer_${deck + 1}`).classList.add('miss');
  				};

  				if (!String(deck).includes('0') && !ship[1].includes(deck - 1)) {
  					document.querySelector(`.computer_${deck - 1}`).classList.add('miss');
  				};

  				if (deck - 10 >= 0 && !ship[1].includes(deck - 10)) {
  					document.querySelector(`.computer_${deck - 10}`).classList.add('miss');
  				};

  				if (deck + 10 < 100 && !ship[1].includes(deck + 10)) {
  					document.querySelector(`.computer_${deck + 10}`).classList.add('miss');
  				};

  				if (String(deck - 9).indexOf('0', 1) == -1 && deck - 9 > 0) {
  					document.querySelector(`.computer_${deck - 9}`).classList.add('miss');
  				};

  				if (deck + 11 < 100 && String(deck + 11).indexOf('0', 1) == -1){
  					document.querySelector(`.computer_${deck + 11}`).classList.add('miss');
  				};

  				if (deck - 11 >= 0 && String(deck - 11).indexOf('9', 1) == -1){
  					document.querySelector(`.computer_${deck - 11}`).classList.add('miss');
  				};

  				if (deck + 9 < 99 && deck + 9 != 9 && String(deck + 9).indexOf('9', 1) == -1){
  					document.querySelector(`.computer_${deck + 9}`).classList.add('miss');
  				};
  			};
  		};
  		
		};
  	return;
	} else {
		target.classList.add('miss');
	};

	while (destroyed_ships.includes(shoot)) {
			blank_cells.splice(chosen_cell, 1);
			number_cells = number_cells - 1;
			chosen_cell = Math.floor(Math.random() * number_cells);
			shoot = blank_cells[chosen_cell];
	}

	while (player_field.children[shoot].classList.contains('player_navy')){
		player_field.children[shoot].classList.add('crashed_ship');
		crashed_ships.push(shoot);

		for (let ship of player_navy) {
  		if (ship[1].includes(shoot)) {
  			ship[0] = ship[0] - 1;
  		}

  		if (!ship[0]) {
  			for (let deck of ship[1]) {
  				destroyed_deck = document.querySelector(`.player_${deck}`);
  				destroyed_deck.classList.remove('crashed_ship');
  				destroyed_deck.classList.add('destroyed');
  				crashed_ships.splice(0, crashed_ships.length);
  				console.log(crashed_ships)

  				if (String(deck).indexOf('9', 1) == -1 && deck != 9 && !ship[1].includes(deck + 1)) {
  					document.querySelector(`.player_${deck + 1}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck + 1)){
  						destroyed_ships.push(deck + 1);
  					}
  				};

  				if (!String(deck).includes('0') && !ship[1].includes(deck - 1)) {
  					document.querySelector(`.player_${deck - 1}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck - 1)){
  						destroyed_ships.push(deck - 1);
  					}
  				};

  				if (deck - 10 >= 0 && !ship[1].includes(deck - 10)) {
  					document.querySelector(`.player_${deck - 10}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck + 1)){
  						destroyed_ships.push(deck - 10);
  					}
  				};

  				if (deck + 10 < 100 && !ship[1].includes(deck + 10)) {
  					document.querySelector(`.player_${deck + 10}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck + 10)){
  						destroyed_ships.push(deck + 10);
  					}
  				};

  				if (String(deck - 9).indexOf('0', 1) == -1 && deck - 9 > 0) {
  					document.querySelector(`.player_${deck - 9}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck - 9)){
  						destroyed_ships.push(deck - 9);
  					}
  				};

  				if (deck + 11 < 100 && String(deck + 11).indexOf('0', 1) == -1){
  					document.querySelector(`.player_${deck + 11}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck + 11)){
  						destroyed_ships.push(deck + 11);
  					}
  				};

  				if (deck - 11 >= 0 && String(deck - 11).indexOf('9', 1) == -1){
  					document.querySelector(`.player_${deck - 11}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck - 11)){
  						destroyed_ships.push(deck - 11);
  					}
  					
  				};

  				if (deck + 9 < 99 && deck + 9 != 9 && String(deck + 9).indexOf('9', 1) == -1){
  					document.querySelector(`.player_${deck + 9}`).classList.add('miss');
  					if (!destroyed_ships.includes(deck + 9)){
  						destroyed_ships.push(deck + 9);
  					}
  				};
  			};
  		};
		};

		crashed_ships.sort();
		destroyed_ships.push(shoot);
		blank_cells.splice(chosen_cell, 1);
		number_cells = number_cells - 1;
		chosen_cell = Math.floor(Math.random() * number_cells);

		do {
			if (crashed_ships.length > 1 && crashed_ships[0] + 1 == crashed_ships[1]) {
				let rand = Math.floor(Math.random() * crashed_ships.length)
				shoot = randomCrashX(crashed_ships[rand])
			} else if (crashed_ships.length > 1) {
				let rand = Math.floor(Math.random() * crashed_ships.length)
				shoot = randomCrashY(crashed_ships[rand])
			} else if (crashed_ships) {
				if (turn()) {
					let rand = Math.floor(Math.random() * crashed_ships.length)
					shoot = randomCrashX(crashed_ships[rand])
				} else {
					let rand = Math.floor(Math.random() * crashed_ships.length)
					shoot = randomCrashY(crashed_ships[rand])
				}
			} else {
				shoot = blank_cells[chosen_cell];
			}
		} while (destroyed_ships.includes(shoot));
	}

	if (!player_field.children[shoot].classList.contains('player_navy')){
		player_field.children[shoot].classList.add('miss');
		destroyed_ships.push(shoot);
	};

	blank_cells.splice(chosen_cell, 1);
	number_cells = number_cells - 1;

	if (player_field.getElementsByClassName('destroyed').length == 20){
		alert('Компьютер победил!')
		location.reload()
	}

	if (computer_field.getElementsByClassName('destroyed').length == 20){
		alert('Игрок победил!')
		location.reload()
	}
};
