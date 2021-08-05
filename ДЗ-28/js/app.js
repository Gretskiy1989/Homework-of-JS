"use strict";

//метод Bind своими руками

const auto = {
    brand: "Mercedes",
    drive: function () {
        return `Вас приветствует компания ${this.brand}`;
    },
  };
  alert(auto.drive()); 