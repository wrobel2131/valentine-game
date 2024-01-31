export enum DirectionsEnum {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

export type Direction =
  | DirectionsEnum.UP
  | DirectionsEnum.DOWN
  | DirectionsEnum.LEFT
  | DirectionsEnum.RIGHT;

export enum DirectionsClassEnum {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
export type DirectionClass =
  | DirectionsClassEnum.UP
  | DirectionsClassEnum.DOWN
  | DirectionsClassEnum.LEFT
  | DirectionsClassEnum.RIGHT;
