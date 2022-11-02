import React, { useRef } from "react";
import { CardPattern } from "../constants";
import { GameItemProps } from "./common";

const imageDir = "/assets/images/cards";

export interface CardProps extends GameItemProps {
    pattern: CardPattern;
    zIndex: number;
}

const onClick = (event: React.MouseEvent | React.TouchEvent): void => {
    const card = event.currentTarget;
    console.log(card)
}

const Card = (cardProps: CardProps) => {
    const { position, pattern, zIndex } = cardProps;

    const cardPattern = useRef(pattern);
    const imgUrl = `${imageDir}/${CardPattern[pattern].toLowerCase()}.png`

    return <div onClick={onClick}>
        <img src={imgUrl}/>
    </div>;
};

export default Card;