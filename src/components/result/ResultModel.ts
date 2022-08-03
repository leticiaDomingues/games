export enum MatchResult {
    PLAYER_WINNER,
    COMPUTER_WINNER,
    DRAW
}

export const MatchResultText = new Map<MatchResult, string>([
    [MatchResult.PLAYER_WINNER, "You won!"],
    [MatchResult.COMPUTER_WINNER, "You lost!"],
    [MatchResult.DRAW, "It's a draw!"]
]);

export const getMatchResult = (playerCard, computerCard) => {
    if (playerCard.beats(computerCard)) {
        return MatchResult.PLAYER_WINNER;
    }
    if (computerCard.beats(playerCard)) {
        return MatchResult.COMPUTER_WINNER;
    }
    return MatchResult.DRAW;
};