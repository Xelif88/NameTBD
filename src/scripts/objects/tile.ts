import Phaser from 'phaser'

export default class Tile {
  static readonly TILE_WIDTH: number = 100;

  // Pixel jump per tile position unit
  static readonly STEP_X : number = Tile.TILE_WIDTH / 2;
  static readonly STEP_Y : number = Tile.TILE_WIDTH * Math.sin(0.5) / 2;

  tx: number; // X tile coordinate
  ty: number; // Y tile coordinate

  constructor(tx: number, ty: number) {
    this.tx = tx;
    this.ty = ty;
  }

  getPoints() : Phaser.Geom.Point[] {
    let pixelX = this.tx * Tile.STEP_X + this.ty * Tile.STEP_X;
    let pixelY = this.tx * Tile.STEP_Y - this.ty * Tile.STEP_Y;

    return [
      new Phaser.Geom.Point(pixelX, pixelY - Tile.STEP_Y),
      new Phaser.Geom.Point(pixelX + Tile.STEP_X, pixelY),
      new Phaser.Geom.Point(pixelX, pixelY + Tile.STEP_Y),
      new Phaser.Geom.Point(pixelX - Tile.STEP_X, pixelY),
    ];
  }
}
