const { EventEmitter } = require("events");

const eventEmitters = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

eventEmitters.on("birthday", birthdayEventListener);

eventEmitters.emit("birthday", "asep");
