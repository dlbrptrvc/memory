import { Header } from './Header';
import { useState } from 'react';
import { Game } from './Game';
import './App.css';

function App() {
	const [gameState, setGameState] = useState('start');
	const [game, setGame] = useState({});

	function initGame(e) {
		let n = +e.target.innerHTML;
		setGame(new Game(n).newRound());
		setGameState('play');
	}

	function restart() {
		score.innerHTML = 0;
		setGameState('start');
	}

	function selectCard(game, e) {
		let fruit = e.target.dataset.target;
		if (game.available.includes(fruit)) {
			game.selected.push(fruit);
			game.available = game.available.filter((item) => {
				return item !== fruit;
			});
			score.innerHTML++;
			if (highscore.innerHTML < score.innerHTML) {
				highscore.innerHTML = score.innerHTML;
			}
		} else {
			setGameState('end');
		}
		if (game.round < game.cardNo) {
			let next = new Game(game.cardNo);
			next.round = game.round;
			next.available = game.available;
			next.selected = game.selected;
			setGame(next.newRound());
		} else {
			setGameState('end');
		}
	}

	function Board(props) {
		return (
			<div className='board'>
				{props.game.board.map((item, index) => (
					<div
						key={index}
						className='card'
						onClick={(e) => {
							selectCard(props.game, e);
						}}
						data-target={item}
						style={{
							backgroundImage: "url('./" + item + ".webp')",
						}}
					></div>
				))}
			</div>
		);
	}

	function Menu() {
		return (
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
		);
	}

	function GameOver() {
		return (
			<div className='menu'>
				<div className='info'>Game Over</div>
				<button onClick={restart} className='btn'>
					Play again
				</button>
			</div>
		);
	}

	return (
		<>
			<Header></Header>
			<div className='main'>
				{gameState == 'play' && <Board game={game}></Board>}
				{gameState == 'start' && <Menu></Menu>}
				{gameState == 'end' && <GameOver></GameOver>}
			</div>
		</>
	);
}

export default App;
