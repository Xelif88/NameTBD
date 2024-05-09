import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import TileSet from '../objects/tileset'

export default class MainScene extends Phaser.Scene {
  fpsText
  tileSet : TileSet
  graphics : Phaser.GameObjects.Graphics

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.tileSet = new TileSet();

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);

    let music: Phaser.Sound.BaseSound;
    music = this.sound.add('spinning_rat_power', { loop: true});
    music.play();

    this.drawTileSet();
  }

  update() {
    this.fpsText.update();
  }

  drawTileSet() {
    const graphics = this.add.graphics();

    this.tileSet.tiles.forEach((tile) => {
      const points = tile.getPoints();

      graphics.lineStyle(2, 0x0000FF);
      graphics.beginPath();
      graphics.moveTo(points[0].x, points[0].y);
  
      for (let i = 1; i < points.length; i++) {
        graphics.lineTo(points[i].x, points[i].y);
      }
  
      graphics.lineTo(points[0].x, points[0].y);
      graphics.closePath();
      graphics.strokePath();
    });
  }
}
