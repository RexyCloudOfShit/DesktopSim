/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Img7423 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("IMG_7423", "./Img7423/costumes/IMG_7423.svg", {
        x: 164.50077399380808,
        y: 192.515479876161,
      }),
    ];

    this.sounds = [
      new Sound(
        "Untitled video - Made with Clipchamp (1)",
        "./Img7423/sounds/Untitled video - Made with Clipchamp (1).wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "2" }, this.whenIReceive2),
    ];
  }

  *whenGreenFlagClicked() {
    this.audioEffects.clear();
    this.goto(292, -95);
    this.visible = false;
  }

  *whenIReceive2() {
    this.visible = true;
    yield* this.glide(1, 67, -60);
    this.say("I LOVE CP CP OHHH I LOVE CP I LOVE CP");
    for (let i = 0; i < 4; i++) {
      yield* this.playSoundUntilDone(
        "Untitled video - Made with Clipchamp (1)"
      );
      this.audioEffects.pitch += 25;
      yield;
    }
    this.visible = false;
  }
}
