interface IGame {
    name: string
    logo: string
    routerPath: string
}

export const RockPaperScissorsSpecs: IGame = {
    name: 'Rock, Paper, Scissors',
    logo: 'rock-paper-scissors/logo.png',
    routerPath: '/rock-paper-scissors'
}

export const TicTacToeSpecs: IGame = {
    name: 'Tic Tac Toe',
    logo: '/tic-tac-toe/logo.png',
    routerPath: '/tic-tac-toe'
}
