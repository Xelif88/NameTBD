import Tile from './tile'

export default class TileSet {
  tiles : Tile[]

  constructor() {
    this.tiles = [
      new Tile(5, 0),
      new Tile(6, 0),
      new Tile(7, 0),
      new Tile(10, 0),
      new Tile(6, 1),
      new Tile(7, 1),
      new Tile(8, 1),
      new Tile(9, 1),
      new Tile(17, 5),
      new Tile(19, -4),
      new Tile(21, -4),
      new Tile(21, -4),
      new Tile(20, -3),
    ];
  }
}
