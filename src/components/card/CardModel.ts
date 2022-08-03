export enum CardType {
    ROCK = 'Rock',
    PAPER = 'Paper',
    SCISSORS = 'Scissors'
};

const CardImagePath = new Map<CardType, string>([
    [CardType.ROCK, 'rock.png'],
    [CardType.PAPER, 'paper.png'],
    [CardType.SCISSORS, 'scissors.png']
]);

const CardBeats = new Map<CardType, CardType>([
    [CardType.ROCK, CardType.SCISSORS],
    [CardType.PAPER, CardType.ROCK],
    [CardType.SCISSORS, CardType.PAPER]
]);

export class CardModel {
    readonly type: CardType;
    private readonly _beats: CardType;
    private readonly _imagePath: string;
    get imagePath() { return this._imagePath; }

    constructor(type?: CardType) {
        this.type = type || CardType.ROCK;
        this._imagePath = CardImagePath.get(this.type) || '';
        this._beats = CardBeats.get(this.type) || CardType.SCISSORS;
    }

    beats = (anotherCard: CardModel) => this._beats === anotherCard.type;
}
