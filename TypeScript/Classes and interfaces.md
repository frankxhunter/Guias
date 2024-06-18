# Clases and Interface in Typescript

## Clases

Las clases representan las programación orientada a objetos. Para crear una clase se utiliza la keyword "class" y para crear una instancia se utiliza "new"

```ts
// define an Animal
class Animal {
  // data for all Animals
  name: string;
  kind: string = "animal";
  //           ^^^^^^^^^^ default value

  // function that runs on instantiation
  constructor(animalName: string) {
    this.name = animalName;
  }

  // function that belongs to every Animal
  sayHi() {
    console.log(
      `Hi, I'm an ${this.kind} called ${this.name}`
    );
  }
}

// create (instantiate) an Animal
// Note that we're only passing in the "name" as "zebra"
// the "kind" has a default value of "animal"
let zebra = new Animal("zebra");
zebra.sayHi(); // "Hi, I'm an animal called zebra"
```

## Interfaces

Las Interfaces se utilizan para definir un forma a las objetos, es decir, un esquema el cual deben cumplir. Como las clases, las Interfaces solo existen para propósitos de revisado de tipado

*Nota*: Deben darse cuenta que en este caso la interfaz no se utiliza de la misma manera que lo harí

```ts
// define what the shape of
// the Book object
// should look like
interface Book {
  name: string;
  language: string;
  isFun: boolean;
}

// use the Book shape as the type.
function read(book: Book) {
  // ...
}

function countWord(
  book: Book,
  word: string
): number {
  // ...
}

interface PaymentTransaction {
  // an optional comment
  comment?: string;
  // a read only value
  readonly value: number;
}

let payment: PaymentTransaction = {
  // we are only adding the value
  // no need to add a comment
  // because it's optional
  value: 123,
};

// cannot change a readonly value
payment.value = 0;
// error: Cannot assign to 'value' because it is a read-only property.
```

Nota*: Deben darse cuenta que en este caso la interfaz no se está utilizando de la misma manera que lo haría en Java. Está forma la veremos a continuación

## Implementación de Interfaces en clases

La Interfaces tambien se utilizan para dar un esquema a las clases

```ts
interface Flyer {
  // all flyers must have a name
  // that is of type string
  name: string;
  // all flyers must have a fly method
  // that has no parameters and
  // doesn't return anything
  fly(): void;
}

class Bird implements Flyer {
//         ^^^^^^^^^^^^^^^^
// all Bird now have the data
// from the Flyer interface
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly() {
    console.log(
      `bird ${this.name} is flying`
    );
  }
}

class Dragon implements Flyer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly() {
    console.log(
      `dragon ${this.name} is flying`
    );
  }
}

const eagle = new Bird("Eagle");
const jabberwocky = new Dragon(
  "Jabberwocky"
);

eagle.fly();
// bird Eagle is flying
jabberwocky.fly();
// dragon Jabberwocky is flying


class Fish {
//        ^ doesn't implement Flyer
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const nemo = new Fish("Nemo");

nemo.fly(); // fish can't fly :)
// error: Property 'fly' does not exist on type 'Fish'
```
