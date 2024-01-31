export type CharacterPositionKeys = 'top' | 'left';

export type NumberInPx = `${number}px`;

export type CharacterPosition = {
  [key in CharacterPositionKeys]: NumberInPx;
};
