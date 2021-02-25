class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // ayuda a generar el hash (es el hashFunction)
  hashMethod(key) {
    let hash = 0;
    for (var i = 0; i < key.length; i++) {
      // genera un número ramdom en utf-16
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // metodo de insertar elementos
  // clave-valor
  set(key, value) {
    // se usa la key para generar el hash
    // el hash es el address donde se guarda el valor
    const address = this.hashMethod(key);
    // si esta vacio entonces se convierte en un nuevo array
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // sino le agregamos como otro array
    // evitando que reescriba lo que ya existe en ese espacio de memoria
    this.data[address].push([key, value]);
    return this.data;
  }
}

// hashtable con 50 espacio disponibles para guardar
const myHashTable = new HashTable(50);

myHashTable.set("Annie", 2021);
console.table(myHashTable);
console.table(myHashTable.data);
myHashTable.set("Mikasa", 2021);
console.table(myHashTable);
console.table(myHashTable.data);
myHashTable.set("Sasha", 2021);
console.table(myHashTable);
console.table(myHashTable.data);
