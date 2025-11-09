/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Desktop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("andie-d", "./Desktop/costumes/andie-d.svg", {
        x: 70.65299999999999,
        y: 56.220511659652715,
      }),
      new Costume("andie-d3", "./Desktop/costumes/andie-d3.svg", {
        x: 71,
        y: 57,
      }),
    ];

    this.sounds = [
      new Sound("Basketball Bounce", "./Desktop/sounds/Basketball Bounce.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "andie-d3";
    this.goto(-190, -221);
    yield* this.glide(0.4, -190, -118);
    yield* this.wait(0.5);
    yield* this.sayAndWait(
      "Hi Am Desktop And Welcome To A Simulation On How To Be Me",
      5
    );
    yield* this.sayAndWait(
      "So I Dont Know How To Code Lol So I Got Ethereal Src",
      3.5
    );
    yield* this.sayAndWait("Alr So Just Press the cntrl c button", 3);
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait(
      "Ok So Now Press Rename To Just Rename It To Ani.yt ",
      3.5
    );
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait(
      "Alr Now Just Paste It Into Luarmor To Start Selling",
      3.5
    );
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait(
      "Nice Now We Can Start Selling Just Press Sell",
      3.5
    );
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait("Ok Sick We Are Making Bank", 3);
    yield* this.sayAndWait("But Am Lowk Board Lets Just Exit Scam xd", 3.5);
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait("Nice Alr We Made So Much Money", 3.5);
    yield* this.sayAndWait("Am Lowk Horny Oxy Come Help", 3.5);
    yield* this.broadcastAndWait("2");
    yield* this.sayAndWait("Ah Yes Thanks Thats What Am gonna do", 3.5);
    yield* this.sayAndWait("Ok Now Press Search For CP", 3.5);
    yield* this.broadcastAndWait("1");
    yield* this.sayAndWait("OOO YES THATS SOME GOOD CP", 3.5);
    yield* this.sayAndWait("THIS IS SO GOOD YUMMY", 3.5);
    yield* this.sayAndWait("AM ABOUT TO CUM UHHHH", 3.5);
    this.costume = "andie-d";
    yield* this.sayAndWait("Opps i think i cumed", 3.5);
    yield* this.sayAndWait("NOONIE COME HERE SLUT", 3.5);
    yield* this.broadcastAndWait("3");
    this.costume = "andie-d3";
    yield* this.sayAndWait("Thanks Now Fuck Off", 2);
    yield* this.sayAndWait(
      "Well Alr uhh i think thats it for desktop sim bye",
      4
    );
  }
}
