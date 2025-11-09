/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buttons extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("C", "./Buttons/costumes/C.svg", { x: 60.5, y: 24.5 }),
      new Costume("R", "./Buttons/costumes/R.svg", { x: 60.5, y: 24.5 }),
      new Costume("V", "./Buttons/costumes/V.svg", { x: 60.5, y: 24.5 }),
      new Costume("Sell", "./Buttons/costumes/Sell.svg", { x: 60.5, y: 24.5 }),
      new Costume("Scam", "./Buttons/costumes/Scam.svg", { x: 60.5, y: 24.5 }),
      new Costume("CP", "./Buttons/costumes/CP.svg", { x: 60.5, y: 24.5 }),
      new Costume("costume1", "./Buttons/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Buttons/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "1" }, this.whenIReceive1),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-14, 40);
    this.costume = "C";
    this.visible = false;
  }

  *whenIReceive1() {
    this.visible = true;
    if (this.costumeNumber === 6) {
      while (!(this.costumeNumber === 7)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "costume1";
        }
        yield;
      }
    }
    if (this.costumeNumber === 5) {
      while (!(this.costumeNumber === 6)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "CP";
        }
        yield;
      }
    }
    if (this.costumeNumber === 4) {
      while (!(this.costumeNumber === 5)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "Scam";
        }
        yield;
      }
    }
    if (this.costumeNumber === 3) {
      while (!(this.costumeNumber === 4)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "Sell";
        }
        yield;
      }
    }
    if (this.costumeNumber === 2) {
      while (!(this.costumeNumber === 3)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "V";
        }
        yield;
      }
    }
    if (this.costumeNumber === 1) {
      while (!(this.costumeNumber === 2)) {
        if (this.touching("mouse") && this.mouse.down) {
          this.visible = false;
          this.costume = "R";
        }
        yield;
      }
    }
  }
}
