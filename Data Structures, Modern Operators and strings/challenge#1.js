const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = game.players[0];
const players2 = game.players[1];

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const { odds: {team1, x: draw, team2} } = game;

const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const printGoals = (...players) => {
    console.log(`${players.length} goals scored`)
}

printGoals(...game.scored);

team1 < team2 && console.log('Bayern Munchen is more likely to win.');
team1 > team2 && console.log('Borussia Dortmund is more likely to win.');

