function Student(firstName, lastName, year) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.year = year;
  this._visits = new Array(10);
  this._scores =  new Array(10);
  
  this.getAge = function() {
    return Math.max((new Date()).getFullYear() - this.year, 0) || undefined
  }

  this.averageScore = function() {
    if(!this._scores.length) return undefined
    return this._scores.reduce((sum, v) => sum + v) / this._scores.length
  }

  this.visitScore = function() {
    let visitTotal = 0;
    if(!this._visits.length) return undefined
    this._visits.map((v) => {
      if(v) {
        visitTotal += 0.1;
      }
    });
    return Number(visitTotal.toFixed(1));
  }

  this.present = function() {
    this.findIndexVisit(true)
  }

  this.absent = function() {
    this.findIndexVisit(false)
  }

  this.mark = function(mark) {
    const freePos = this._scores.findIndex(v => v === undefined)
    if(freePos === -1) {
      return;
    } 

    this._scores[freePos] = mark
  }

  this.findIndexVisit = function(visit){
    const freePos = this._visits.findIndex(v => v === undefined)
    if(freePos === -1) {
      return;
    } 
    this._visits[freePos] = visit
  }

  this.summary = function () {
    let totalScored = this.averageScore();
    let totalVisits = this.visitScore();

    if(totalScored <= 3 && totalVisits <= 0.3) {
      alert(`${this.firstName} ${this.lastName}: ${this.getAge()} года - "Редиска!"`);
    } else if(totalScored > 7 && totalVisits > 0.7) {
      alert(`${this.firstName} ${this.lastName}: ${this.getAge()} года - "Ути какой молодчинка!"`);
    } else {
      alert(`${this.firstName} ${this.lastName}: ${this.getAge()} года - "Норм, но можно лучше!"`);
    }
  }
}

let student = new Student("Иван", "Грецкий", 1989);

student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.absent()
student.absent()
student.absent()
student.present()
student.present()
student.absent()
student.absent()
student.present()
student.absent()
student.absent()
student.absent()
student.absent()
student.present()


student.mark(10)
student.mark(10)
student.mark(10)
student.mark(10)
student.mark(5)
student.mark(10)
student.mark(10) 
student.mark(10)
student.mark(10)
student.mark(2)


console.log(student._visits);
console.log(student._scores);
console.log(student.averageScore());
console.log(student.visitScore());
console.log(student.summary());

// student.summary();