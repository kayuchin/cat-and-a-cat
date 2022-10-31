import React from "react";
import { CardPattern } from "../constants/enum";
import { GameItemProps } from "./common";

const Card = (card: CardProps) => {
    const { dimension, imageUrl, pattern, onClick } = card;
    return <div></div>;
};

export interface CardProps extends GameItemProps {
    pattern: CardPattern;
    zIndex: number;
    onClick: (event: React.MouseEvent | React.TouchEvent) => void;
}

export default Card;