export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture);

    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds();
    this.scene.add.existing(this);
  }
}
