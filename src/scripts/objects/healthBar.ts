export default class HealthBar extends Phaser.GameObjects.Graphics 
{
    private maxHealth: number;
    private currentHealth: number;
    private text: Phaser.GameObjects.Text
    private width = 500;
    private height = 20;

    constructor(scene: Phaser.Scene, x: number, y: number, maxHealth: number)
    {
        super(scene, {x: x, y: y});
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        scene.add.existing(this);
        this.text = new Phaser.GameObjects.Text(scene, x + this.width/2, y, '', {color: 'white', fontSize: '18px'});
        scene.add.existing(this.text);
        this.draw();
    }

    public setMaxHealth(health: number): void
    {
        this.maxHealth = health;
    }

    public setCurrentHealth(health: number): void
    {
        this.currentHealth = health;     
    }

    private draw(): void
    {
        this.clear();

        this.fillStyle(0x000000);
        this.fillRect(0, 0, this.width, this.height);

        this.fillStyle(0xd11507);
        this.fillRect(0, 0, this.width * this.currentHealth/this.maxHealth, this.height); 

        this.text.setText(`${this.currentHealth} / ${this.maxHealth}`);
        const textWidth = this.text.displayWidth;
        const textHeight = this.text.displayHeight;
        this.text.setPosition(this.x + (this.width - textWidth) / 2, this.y + (this.height - textHeight) / 2);
    }
}

