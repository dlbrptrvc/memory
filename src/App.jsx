import { Header } from './Header';
import { Board } from './Board';
import { useState } from 'react';
import './App.css';

function App() {
	const [gameOn, setGameOn] = useState(false);
	const [cardNo, setCardNo] = useState(3);

	function initGame(e) {
		let n = +e.target.innerHTML;
		setGameOn(true);
		setCardNo(n);
	}

	function Board() {}

	return (
		<>
			<Header></Header>
			<div className='main'>
				{gameOn ? (
					<Board></Board>
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
