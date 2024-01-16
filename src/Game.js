export class Game {
	constructor(cardNo) {
		this.cardNo = cardNo;
		this.round = 0;
		this.fruit = [
			'apple',
			'avocado',
			'grapes',
			'orange',
			'blueberry',
			'strawberry',
			'bannana',
			'pear',
			'carrot',
			'pineapple',
			'kiwi',
			'lemon',
			'tomato',
		];
		this.selected = [];
		this.available = this.fruit;
		this.board = [];
	}
	newRound() {
		this.board = [];
		if (this.round < this.cardNo) {
			let cards = [...this.selected];
			let available = shuffle([...this.available]);
			for (let i = 0; i < this.cardNo - this.selected.length; i++) {
				cards.push(available[i]);
			}
			this.board = shuffle(cards);
			this.round++;
		} else {
			this.round = 0;
			this.selected = [];
			this.available = this.fruit;
			this.board = [];
		}
		return this;
	}
}

function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		let per = Math.floor(Math.random() * arr.length);
		arr[i] = arr[per];
		arr[per] = val;
	}
	return arr;
}
