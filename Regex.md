# Regex

Los regex son patrones que se utilizan para encontrar coincidencias en textos

En muchos lenguajes de programación suelen encerrarse entre *//* 

Por ejemplo 

*/fre/* =

*fre*
*fre*el
em*fre*tel

## Cuantificadores

Los Cuantificadores permiten encontrar coincidencias sin conocer el número exacto de veces q se repite

- /abc{2}/ = La c se repite 2 veces

- /abc{2,4}/ = La c se repite entre 2 y 4 veces

- /abc?/ = La c puede o no estar en el patron

- /abc*/ = La c se repite 0 o más veces veces

- /abc+/ = La c se repite 1 o más veces

## Wildcards

Se utilizan para añadir flexibilidad cuando tú no sabes q carácter hay

Por ejemplo el *.* se utiliza para representar cualquier carácter así q podríamos hacer esto

-/ab.*/ =

*abc*
*abdf*
*abfirigiriggie#(€(&*



