/* -->DESTRUCTURING EN OBJETOS<--- */

/* Primero se crea el objeto */
const coordenadas={
    x:10,
    y:2,
    z:4,
}

/* 
    DESTRUCTURING: Es ocupar los atributos 
    de un objeto dentro de una función flecha, los 
    atributos van entre corchetes
*/      
                /* x & y son atributos del objeto coordendas*/
const getArea = ({x,y})=>x*y

console.log("La altura de la figura es: "+getArea(coordenadas)+" m2")