# Clases and Interface in Typescript

## Clases

Las clases representan las programación orientada a objetos. Para crear una clase se utiliza la keyword "class" y para crear una instancia se utiliza "new"

```ts
// define an Animal
class Animal {
    // data for all Animals
    readonly name: string;// readonly -> no se puede modificar una vez establecido 

    #kind: string = "animal"; // el character '#' significa que la propiedad es privada, debe usarse el caracter dentro la clase para referirse a la propiedad, esto es nativo de javascript
    //           ^^^^^^^^^^ default value
    private id = crypto.randomUUID() // private hace la propiedad private pero esto es por typescript, por tanto no funciona en runTime 

    protected colors: string[]= []; // Proteted es que solo puede usarse en la propia clase y en clases hijas
    
    // function that runs on instantiation
    constructor(animalName: string) {
      this.name = animalName;
    }
  
    // function that belongs to every Animal
    sayHi(): void {
      console.log(
        `Hi, I'm an ${this.#kind} called ${this.name}`
      );
    }

    getId(): string{
        return this.id;
    }
    addColor(color: string){
        this.colors.push[color]
    }
  }

const zebra: Animal = new Animal("zebra")

//zebra.name = "Vaca" // ❌ Esta propiedad es de solo lectura
//console.log(zebra.kind); // ❌ Esta propiedad es privada 
//console.log(zebra.id); // ❌ Esta propiedad es privada 
console.log(zebra.getId()); // ✔ Se puede ver la propiedad con un getter 
//zebra.colors.push("negro")    // ❌ Esta propiedad es protected y solo puede accederse desde una clase hija
zebra.addColor('negro')// ✔ Se puede acceder a la propiedad a traves de un setter o similar 
zebra.addColor('blanco')

```

## Interfaces

Las Interfaces se utilizan para definir un forma a las objetos, es decir, un esquema el cual deben cumplir. Como las clases, las Interfaces solo existen para propósitos de revisado de tipado

>[!TIP]
> Deben darse cuenta que en este caso la interfaz no se utiliza de la misma manera que lo haría en JAVA, en el 90% de los casos es sustituibles por los types

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

>[!IMPORTANT]
> La princiapal diferencia entre las interfaces y los types es que las intefaces permiten las herencia de otras interfaces

```ts

interface Producto {
    id: string
    name: string,
    precio: number
}

interface Zapatos extends Producto{
    talla: number
}

interface CarritoDeCompras{ 
    totalPrice: (productos: (Producto | Zapatos)[])=>number
    productos : (Producto | Zapatos)[],

}

const miCarrito: CarritoDeCompras= {
    totalPrice: (productos)=>{
        let total = 0;
        productos.forEach(element => {
            total+=element.precio;
        });
        return total
    },  
    productos: [
        {
            id: "234",
            name: "Lapto",
            precio: 23,
        },
        {
            id: "234",
            name: "Zapatos Adidas",
            precio: 223,
            talla: 43,
        }
    ]
}

```

>[!NOTE]
> Las interfaces se pueden extender automaticamente con crear otra interfaz que tenga el mismo nombre, pero si se repite algun atributo, sera detectado como un error, tambien se debe tener cuidado de no hacerlo sin querer

### Cuando usar interfaces o types

A diferencia de las **interfaces** los **types** tambien se pueden usar para definir tipos primitivos con string o number, por eso para los objetos es mejor usar **interfaces** mientras que para cosas mas cercanas a los tipos primitivos es mejor usar **types**

>[!TIP]
>Siempre que pueda ser posible es recomendable usar types, las interfaces tratar de usarlas en las clases o en objetos muy grandes

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
