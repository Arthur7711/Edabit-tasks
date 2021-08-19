// Создайте в классе метод, который возвращает сравнение возраста другого человека . Учитывая экземпляры , и , которые будут инициализированы атрибутами и , верните предложение в следующем формате:Personp1p2p3nameage

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  myAge = 25;
  compareAge() {
    if (this.age > this.myAge) {
      return `${this.name} is older than me`;
    } else if (this.age < this.myAge) {
      return `${this.name} is younger than me`;
    }
    return `${this.name} is the same age as me`;
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 25);

console.log(p1.compareAge());
console.log(p2.compareAge());
console.log(p3.compareAge());
