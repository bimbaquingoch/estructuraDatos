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

  pop() {
    // guardamos el ultimo elemento
    const lastItem = this.data[this.length - 1];
    // eliminamos el último elemento
    delete this.data[this.length - 1];
    // borra la posicion
    this.length--;
    return lastItem;
  }

  delItem(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (var i = index; i < this.length - 1; i++) {
      // hace el cambio de indices
      this.data[i] = this.data[i + 1];
    }
    // borra el contenido en el index
    delete this.data[this.length - 1];
    // decrementamos en 1 el index
    this.length--;
  }

  inserFirst(item) {
    for (var i = this.length; i > 0; i--) {
      // hace el cambio de indices
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }

  delFirst() {
    this.delItem(0);
  }
}

const elArray = new MyArray();

elArray.push("Carlos");
console.table(elArray);
elArray.push("Marlon");
console.table(elArray);
elArray.delFirst();
console.table(elArray);
elArray.push("Chente");
console.table(elArray);
elArray.push("Main");
console.table(elArray);
elArray.pop();
console.table(elArray);
elArray.delItem(1);
console.table(elArray);

elArray.inserFirst("hola");
console.table(elArray);
