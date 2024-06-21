
const avengers = ["1","1","1","1","1",1];

avengers.forEach(avenger => {
    if( avenger == typeof String)
    avenger.replace("1","2");
    console.log(avenger);
})

type Hero = {
    name: string, 
    age: number,
    superpower?: string,
  }
  
  const batman: Hero= {
    name: "batman",
    age: 22,
  }


  function hiHero(hero: Hero): string{
      const superpower = hero.superpower?.trim
      //--------------------------------? esto detecta que la propiedad es opcional y por tanto 
      // no lo ejecuta si la propiedad no existe
    return `Hola soy ${hero.name} tengo ${hero.age} años 
    ${superpower ?? "y mi super poder es " + superpower}`
  }

  // Usar alias anidados
  type HeroId= `${string}-${string}-${string}-${string}-${string}`
  type Hero2 = {
    // Mantener el encapsulamiento de los alias
    readonly id: HeroId
    name: string, 
    age: number,
    superpower?: string,
  }

  function createHero(name: string, age: number, superpower?: string): Hero2{
    const id = crypto.randomUUID();
    return {id: id, name: name, age: age, superpower: superpower};
  }
  const thor: Hero2 = createHero("thor", 22, "its rich")
  // ❌ El id no se puede modificar
  //hero.id = 2;
  console.log(thor.id)
