var person = {
  jump: function () {
    console.log('jump jump');
    return this;
  },
  run: function () {
    console.log('run run');
    return this;
  },
  eat: function () {
    console.log('eat eat');
    return this;
  }
}

person.jump().run().eat();