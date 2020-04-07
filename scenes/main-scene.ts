import { GameDimensions } from "../game";
import { Player } from "../objects/Player";

interface TweenMap {}

export class MainScene extends Phaser.Scene {
  private player: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("player", "../assets/player.png");
  }

  create(): void {
    this.player = new Player(this, 120, 120, "player");
  }

  update(): void {}
}
