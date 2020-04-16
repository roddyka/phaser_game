import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import mapPNG from "./assets/assetsmap.png";
import mapJSON from "./assets/map.json";
import water from "./assets/water.png";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 650,
  height: 650,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {

  this.load.image("background", water);
  

  this.load.image("tiles", mapPNG);
  this.load.tilemapTiledJSON("map", mapJSON);
}

function create() {
  const map = this.make.tilemap({key : "map"});
  const tileset = map.addTilesetImage("assets", "tiles");

  this.add.image(650, 650, "background");
  
  const ground = map.createStaticLayer("ground", tileset, 0, 0);
  const objectCollider = map.createStaticLayer("objectCollider", tileset, 0, 0);
  const aboveCollider = map.createStaticLayer("aboveObject", tileset, 0, 0);

}

function update(){
  
}
