import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import RessourceBar from '../objects/ressourceBar'

export default class MainScene extends Phaser.Scene {
  fpsText
  private healthBar: RessourceBar
  private manaBar: RessourceBar

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    this.healthBar = new RessourceBar(this, 120, 620, 100, 'health');
    this.healthBar.setMaxValue(324);
    this.healthBar.setCurrentValue(208);
    this.manaBar = new RessourceBar(this, 1160, 620, 100, 'mana');
    this.manaBar.setMaxValue(153);
    this.manaBar.setCurrentValue(41);


    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0);
	let music: Phaser.Sound.BaseSound;
	music = this.sound.add('spinning_rat_power', { loop: true});
	//music.play();
  }

  update() {
    this.fpsText.update();
  }
}
