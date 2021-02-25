class MyArray {
  constructor() {
    // elementos que se agregan al array
    this.length = 0;
    // guara la información en un objeto
    this.data = {};
  }
  // recibe un index para que me regrese el elemento
  get(index) {
    return this.data[index];
  }
  // recibe el dato que quiero que se guarde en el array
  push(item) {
    // aumentamos la longitud del array
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
}

const elArray = new MyArray();

console.table(elArray);
elArray.push("Carlos");
console.table(elArray);
elArray.push("Marlon");
console.table(elArray);
console.log(elArray.get(1));
