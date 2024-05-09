export default class ManaBar extends Phaser.GameObjects.Graphics 
{
    private maxMana: number;
    private currentMana: number;
    private text: Phaser.GameObjects.Text
    private width = 500;
    private height = 20;

    constructor(scene: Phaser.Scene, x: number, y: number, maxMana: number)
    {
        super(scene, {x: x, y: y});
        this.maxMana = maxMana;
        this.currentMana = maxMana;
        scene.add.existing(this);
        this.text = new Phaser.GameObjects.Text(scene, x + this.width/2, y, '', {color: 'white', fontSize: '18px'});
        scene.add.existing(this.text);
        this.draw();
    }

    public setMaxMana(mana: number): void
    {
        this.maxMana = mana;
    }

    public setCurrentMana(mana: number): void
    {
        this.currentMana = mana;     
    }

    private draw(): void
    {
        this.clear();

        this.fillStyle(0x000000);
        this.fillRect(0, 0, this.width, this.height);

        this.fillStyle(0x00aaff);
        this.fillRect(0, 0, this.width * this.currentMana/this.maxMana, this.height); 

        this.text.setText(`${this.currentMana} / ${this.maxMana}`);
        const textWidth = this.text.displayWidth;
        const textHeight = this.text.displayHeight;
        this.text.setPosition(this.x + (this.width - textWidth) / 2, this.y + (this.height - textHeight) / 2);
    }
}