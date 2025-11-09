/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kid extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sam", "./Kid/costumes/sam.png", { x: 117, y: 159 }),
    ];

    this.sounds = [new Sound("pop", "./Kid/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "3" }, this.whenIReceive3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceive3() {
    this.visible = true;
    this.say("COMING MASTER");
    yield* this.glide(2, -144, -177);
    this.say("");
    for (let i = 0; i < 3; i++) {
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction -= 15;
        yield;
      }
      for (let i = 0; i < 3; i++) {
        this.direction += 15;
        yield;
      }
      yield;
    }
    yield* this.wait(1);
    yield* this.sayAndWait("All Done Master Arf :3", 2);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.goto(126, 56);
    this.visible = false;
  }
}
