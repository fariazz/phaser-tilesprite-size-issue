// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {

};

// load assets
gameScene.preload = function(){

  // load images
  this.load.image('block', 'assets/images/block.png');

};

// executed once, after assets were loaded
gameScene.create = function() {

  // non-static (size of physics body correctly  matches that of tileSprite)
  let platform1 = this.add.tileSprite(10, 100, 36 * 4, 30, 'block').setOrigin(0);
  this.physics.add.existing(platform1, false);﻿

  // static (size of the physics body doesn't match that of the tileSprite)
  let platform2 = this.add.tileSprite(10, 200, 36 * 4, 30, 'block').setOrigin(0);
  this.physics.add.existing(platform2, true);﻿
};


// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 400,
  height: 400,
  scene: gameScene,
  title: 'Monster Kong',
  pixelArt: true,
  physics: {
    default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: true
        }
  }
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
