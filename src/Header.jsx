import './Header.css';

export function Header() {
	return (
		<div className='header'>
			<div className='title'>Memory Game</div>
			<div className='scoreBoard'>
				<div className='score'>Score:</div>
				<div id='score'>0</div>
				<div className='score'>Highscore:</div>
				<div id='highscore'>0</div>
			</div>
		</div>
	);
}
