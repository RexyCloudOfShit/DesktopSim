import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Desktop from "./Desktop/Desktop.js";
import Buttons from "./Buttons/Buttons.js";
import Kid from "./Kid/Kid.js";
import Img7423 from "./Img7423/Img7423.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Desktop: new Desktop({
    x: -190,
    y: -118,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Buttons: new Buttons({
    x: -14,
    y: 40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Kid: new Kid({
    x: -144,
    y: -177,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Img7423: new Img7423({
    x: 67,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
