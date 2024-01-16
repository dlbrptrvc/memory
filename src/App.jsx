import { Header } from './Header';
import { useState } from 'react';
import { Game } from './Game';
import './App.css';

function App() {
	const [gameOn, setGameOn] = useState(false);
	const [game, setGame] = useState({});

	function initGame(e) {
		let n = +e.target.innerHTML;
		setGame(new Game(n).newRound());
		setGameOn(true);
	}

	function selectCard(game, e) {
		let fruit = e.target.dataset.target;
		if (game.round < game.cardNo) {
			if (game.available.includes(fruit)) {
				game.selected.push(fruit);
				game.available = game.available.filter((item) => {
					return item !== fruit;
				});
				score.innerHTML++;
				if (highscore.innerHTML < score.innerHTML) {
					highscore.innerHTML = score.innerHTML;
				}
				let next = new Game(game.cardNo);
				next.round = game.round;
				next.available = game.available;
				next.selected = game.selected;
				setGame(next.newRound());
			} else {
				score.innerHTML = '0';
				setGameOn(false);
			}
		} else {
			score.innerHTML = '0';
			setGameOn(false);
		}
	}

	function Board(props) {
		return (
			<div className='board'>
				{props.game.board.map((item) => (
					<div
						className='card'
						onClick={(e) => {
							selectCard(props.game, e);
						}}
						data-target={item}
					>
						{item}
					</div>
				))}
			</div>
		);
	}

	return (
		<>
			<Header></Header>
			<div className='main'>
				{gameOn ? (
					<Board game={game}></Board>
				) : (
					<div className='frame'>
						<div className='menu'>
							<div className='info'>Number of cards</div>
							<div className='buttons'>
								<button onClick={initGame} className='menuBtn'>
									3
								</button>
								<button onClick={initGame} className='menuBtn'>
									6
								</button>
								<button onClick={initGame} className='menuBtn'>
									9
								</button>
								<button onClick={initGame} className='menuBtn'>
									12
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
