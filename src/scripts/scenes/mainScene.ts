import GameLogo from '../objects/gameLogo'
import FpsText from '../objects/fpsText'
import RessourceBar from '../objects/ressourceBar'
import SpellBar from '../objects/spellBar'
import ExpBar from '../objects/expBar'
import LeftInfoBar from '../objects/leftInfoBar'
import Spell from '../objects/spell'

export default class MainScene extends Phaser.Scene {
  fpsText
  private healthBar: RessourceBar;
  private manaBar: RessourceBar;
  private spellBar: SpellBar;
  private expBar: ExpBar;
  private leftInfoBar: LeftInfoBar;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    new GameLogo(this, this.cameras.main.width / 2, this.cameras.main.height / 2);
    this.fpsText = new FpsText(this);
    
    this.leftInfoBar = new LeftInfoBar(this, 200, 672);
    this.healthBar = new RessourceBar(this, 85, 640, 100, 'health');
    this.healthBar.setMaxValue(324);
    this.healthBar.setCurrentValue(208);
    this.manaBar = new RessourceBar(this, 1195, 640, 100, 'mana');
    this.spellBar = new SpellBar(this, 1080, 672);
    this.manaBar.setMaxValue(153);
    this.manaBar.setCurrentValue(80);
    const spell = new Spell();
    this.spellBar.addSpell(1, spell.getSprite());
    this.spellBar.addSpell(7, spell.getSprite());
    this.expBar = new ExpBar(this, 640, 716, 100);
    this.expBar.setCurrentExp(66);

  
    
    



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
