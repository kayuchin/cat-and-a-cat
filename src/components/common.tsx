export interface GameItemProps {
    dimension: IDimension;
    imageUrl: string;
}

export interface IDimension {
    height: number;
    width: number;
}

export interface IPosition {
    x: number;
    y: number;
}