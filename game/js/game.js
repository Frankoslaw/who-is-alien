/*
var player;
var nick = "Franek";
var nickText;
var buttone;

console.clear();

console.log(Phaser.VERSION);

var GameScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameScene ()
    {
        Phaser.Scene.call(this, { key: 'gameScene', active: true });

        this.player = null;
        this.cursors = null;
        this.score = 0;
        this.scoreText = null;
    },

    preload: function ()
    {
        this.load.image('playerimg', 'https://frankoslaw.github.io/who-is-alien/game/assets/images/player.png',{ frameWidth: 16, frameHeight: 16 });
        this.load.image("button", "https://frankoslaw.github.io/who-is-alien/game/assets/images/button.png",{ frameWidth: 15, frameHeight: 15 });

        this.load.image("tiles", "https://frankoslaw.github.io/who-is-alien/game/assets/images/tilemap.png");
        this.load.tilemapTiledJSON("map", "https://frankoslaw.github.io/who-is-alien/game/assets/mapa.json");
    },

    create: function ()
    {
        player = this.physics.add.sprite(200, 150, 'playerimg');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        nickText = this.add.text(16, 16, 'Nick : ', { fontSize: '16px', fill: '#ffffff'});
        nickText.setText('Nick : ' + nick);

        var button = this.add.image(400 - 20, 20, 'button', 0).setOrigin(1, 0).setInteractive();
    
        button.on('pointerdown', function() {
        if (this.scale.isFullscreen)
        {
            this.scale.stopFullscreen();
        }
        else
        {
            this.scale.startFullscreen();
        }
        }, this); 
    },

    update: function ()
    {
        var cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', function (pointer) {
             let cursor = pointer;
             let angle = Phaser.Math.Angle.Between(player.x, player.y, cursor.x, cursor.y) + 90
             player.rotation = angle;
        }, this);
        }

});

var config = {
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 400,
        height: 300
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: GameScene
};

var game = new Phaser.Game(config);
*/

 "use strict";

 const config = {
    type: Phaser.CANVAS,
    width: 400,
    height: 300,
    pixelArt: true,
    scene: {
      preload: preload,
      create: create,
      update: update
    },

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 400,
        height: 300
    },

    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
  };
  
  const game = new Phaser.Game(config);
  let controls;
  
  function preload() {
    this.load.image('playerimg', 'https://frankoslaw.github.io/who-is-alien/game/assets/images/player.png',{ frameWidth: 16, frameHeight: 16 });
    this.load.image("button", "https://frankoslaw.github.io/who-is-alien/game/assets/images/button.png",{ frameWidth: 15, frameHeight: 15 });
    
    this.load.image("tiles", "https://frankoslaw.github.io/who-is-alien/game/assets/images/tilemap.png");
    this.load.tilemapTiledJSON("map", "https://frankoslaw.github.io/who-is-alien/game/assets/mapa0.0.1.json");
  }
  
  function create() {
    const map = this.make.tilemap({ key: "map" });
  
    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    const tileset = map.addTilesetImage("test", "tiles");
  
    // Parameters: layer name (or index) from Tiled, tileset, x, y
    const walls = map.createStaticLayer("walls", tileset, 0, 0);
    const ground = map.createStaticLayer("ground", tileset, 0, 0);
  
    // Phaser supports multiple cameras, but you can access the default camera like this:
    const camera = this.cameras.main;
  
    // Set up the arrows to control the camera
    const cursors = this.input.keyboard.createCursorKeys();
    controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: camera,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5
    });
  
    // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  
    // Help text that has a "fixed" position on the screen
    //this.add
    //  .text(16, 16, "Arrow keys to scroll", {
    //    font: "18px monospace",
    //    fill: "#ffffff",
    //    padding: { x: 20, y: 10 },
    //   backgroundColor: "#000000"
    //  })
    //  .setScrollFactor(0);

    player = this.physics.add.sprite(200, 150, 'playerimg');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        nickText = this.add.text(16, 16, 'Nick : ', { fontSize: '16px', fill: '#ffffff'});
        nickText.setText('Nick : ' + nick);

        var button = this.add.image(400 - 20, 20, 'button', 0).setOrigin(1, 0).setInteractive();
    
        button.on('pointerdown', function() {
        if (this.scale.isFullscreen)
        {
            this.scale.stopFullscreen();
        }
        else
        {
            this.scale.startFullscreen();
        }
        }, this); 
  }
  
  function update(time, delta) {
    // Apply the controls to the camera each update tick of the game
    controls.update(delta);

    var cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointermove', function (pointer) {
             let cursor = pointer;
             let angle = Phaser.Math.Angle.Between(player.x, player.y, cursor.x, cursor.y) + 90
             player.rotation = angle;
        }, this);
  }



