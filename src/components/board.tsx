import { CardProps } from "./card";
import { GameItemProps } from "./common";

const imgUrl = "/assets/images/board.png";

export interface BoardProps extends GameItemProps {
    currentCardNum: number;
    cardsOnBoard: CardProps[];
}

const Board = (boardProps: BoardProps) => {
    const { position, currentCardNum, cardsOnBoard } = boardProps;
    return <div className="card-board">
        <img src={imgUrl}/>
    </div>;
};

export default Board;