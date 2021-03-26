// Find the players on the St. Louis Team

function findPlayer(position) {
	const onTheField = ['1st baseman','2nd baseman','3rd baseman','shortstop','left fielder','center fielder','pitcher','catcher','right fielder'];
	const max = onTheField.length;
	const player = ['Who','What','I don\'t know','I don\'t care','Why','Because','Tomorrow','Today','Joe DiMaggio'];
	var n = -1;
	var whichPlayer = 'not a position';
	
	for (let i=0; i<max; i++) {			// could be improved with while loop
		if (position === onTheField[i]) {
			n = i;
			break;
		}
	}
	
	if (n >= 0) {
		whichPlayer = player[n];
	}
	return whichPlayer;
}

function findWhoPlays(stlPlayer) {
	const playerQ = stlPlayer;
	let displayPlayer = findPlayer(playerQ);

	if (displayPlayer === 'not a position') {
		console.log('St. Louis does not have that position on the team.');
	} else {
		console.log(`The ${playerQ}'s name is ${displayPlayer}.`);
		console.log(`${displayPlayer}?`);
		console.log(`Yes ${displayPlayer}.`);
	}
}

findWhoPlays('1st baseman');
console.log();
findWhoPlays('2nd baseman');
console.log();
findWhoPlays('pitcher');
console.log();
findWhoPlays('DH');
console.log();
findWhoPlays('right fielder');
console.log();
findWhoPlays('3rd baseman');