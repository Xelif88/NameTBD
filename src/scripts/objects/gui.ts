export default class GUI extends Phaser.GameObjects.Container
{
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);

        

        
        scene.add.existing(this);
    }
}