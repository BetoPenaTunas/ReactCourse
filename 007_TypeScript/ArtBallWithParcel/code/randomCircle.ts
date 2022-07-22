//---> HACIENDO OBJECT DESTRUCTURING con el objeto Math <---
    //Es decir, obteniendo algunas propiedades de 
    //Algunas propiedades son funciones y otras CONSTANTES 
    const{random,PI,min,cos,sin} =Math
    const maxValue=2*PI //2pi= Lo que mide una circunferencia 2PI  

    const randomPointCircle=(radius:number)=>{
        const angle1=random()*maxValue //Ángulo entre 0 y 2PI
        return {x:radius*cos(angle1), y:radius*sin(angle1)} //Convirtiendo a coordenadas cartesianas
    }

    export{randomPointCircle}