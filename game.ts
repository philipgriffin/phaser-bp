/// <reference path="./custom.d.ts" />

import "phaser";
import { MainScene } from "./scenes/main-scene";

export const GameDimensions = {
  height: 960,
  width: 540
};

// main game configuration
const config: Phaser.Types.Core.GameConfig = {
  scale: {
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    parent: "game",
    autoCenter: 1,
    height: GameDimensions.height,
    width: GameDimensions.width
  },
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 200 }
    }
  }
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
  new Game(config);
});
