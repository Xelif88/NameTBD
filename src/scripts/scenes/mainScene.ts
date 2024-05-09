import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import HealthBar from '../objects/healthBar'
import ManaBar from '../objects/manaBar'

export default class MainScene extends Phaser.Scene {
  fpsText
  private healthBar: HealthBar
  private manaBar: ManaBar

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.healthBar = new HealthBar(this, 25, 650, 100);
    this.manaBar = new ManaBar(this, 25, 675, 100);

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
  }

  update() {
    this.fpsText.update();
  }
}
