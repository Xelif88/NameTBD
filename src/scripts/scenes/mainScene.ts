import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import RessourceBar from '../objects/ressourceBar'
import SpellBar from '../objects/spellBar'
import Spell from '../objects/spell'

export default class MainScene extends Phaser.Scene {
  fpsText
  private healthBar: RessourceBar;
  private manaBar: RessourceBar;
  private spellBar: SpellBar;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    
    this.spellBar = new SpellBar(this, 1050, 652);
    this.healthBar = new RessourceBar(this, 120, 620, 100, 'health');
    this.healthBar.setMaxValue(324);
    this.healthBar.setCurrentValue(208);
    this.manaBar = new RessourceBar(this, 1165, 620, 100, 'mana');
    this.manaBar.setMaxValue(153);
    this.manaBar.setCurrentValue(41);
    this.spellBar.addSpell(1, new Spell);
    



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
