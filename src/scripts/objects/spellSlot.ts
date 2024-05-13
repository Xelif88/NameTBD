import Spell from './spell'

export default class SpellSlot extends Phaser.GameObjects.Sprite
{
    constructor(scene: Phaser.Scene, x: number, y: number)
    {
        super(scene, x, y, 'spellSlot');
       
        this.setScale(0.8);
        scene.add.existing(this);
    }

    addSpell(sprite: string): void
    {
        const spellSprite = this.scene.add.sprite(this.x, this.y, sprite);
        spellSprite.setScale(this.displayWidth/spellSprite.displayWidth);
        
    }
}