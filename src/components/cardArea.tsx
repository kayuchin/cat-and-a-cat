import { CardProps } from "./card";

export interface CardAreaProps {
    cardDeck: CardProps[];
}

const CardArea = (cardAreaProps: CardAreaProps) => {
    const { cardDeck } = cardAreaProps;
    return <div className="card-area"></div>
}

export default CardArea;