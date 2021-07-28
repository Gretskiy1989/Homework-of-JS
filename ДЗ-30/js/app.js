let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log( this.step );
      return this;
    }
}
  
ladder.up().up().down().up().down().showStep(); // 1

// Для длинной цепи вызовов более читабельным будет такой вариант:

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep();