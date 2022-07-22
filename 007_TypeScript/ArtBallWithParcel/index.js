require("./index.css");


//---> HACIENDO OBJECT DESTRUCTURING con el objeto Math <---
//Es decir, obteniendo algunas propiedades de 
//Algunas propiedades son funciones y otras CONSTANTES 
const { random: $fdd79821867e0196$var$random , PI: $fdd79821867e0196$var$PI , min: $fdd79821867e0196$var$min , cos: $fdd79821867e0196$var$cos , sin: $fdd79821867e0196$var$sin  } = Math;
const $fdd79821867e0196$var$maxValue = 2 * $fdd79821867e0196$var$PI //2pi= Lo que mide una circunferencia 2PI  
;
const $fdd79821867e0196$export$da154e6a8eb66502 = (radius)=>{
    const angle1 = $fdd79821867e0196$var$random() * $fdd79821867e0196$var$maxValue //Ángulo entre 0 y 2PI
    ;
    return {
        x: radius * $fdd79821867e0196$var$cos(angle1),
        y: radius * $fdd79821867e0196$var$sin(angle1)
    } //Convirtiendo a coordenadas cartesianas
    ;
};


// import{randomPointInCircle} from "./randomCircle"
const { min: $47d8f3c8b92fa13a$var$min  } = Math;
const $47d8f3c8b92fa13a$var$canvas = document.getElementById('drawing');
// ---> Para darle calidad HD
$47d8f3c8b92fa13a$var$canvas.width = $47d8f3c8b92fa13a$var$canvas.clientWidth;
$47d8f3c8b92fa13a$var$canvas.height = $47d8f3c8b92fa13a$var$canvas.clientHeight;
const { width: $47d8f3c8b92fa13a$var$width , height: $47d8f3c8b92fa13a$var$height  } = $47d8f3c8b92fa13a$var$canvas;
//Calculando el radio 
//0.8 de la cosa más chiquita sobre 2
const $47d8f3c8b92fa13a$var$radius = 0.8 * $47d8f3c8b92fa13a$var$min($47d8f3c8b92fa13a$var$width, $47d8f3c8b92fa13a$var$height) / 2;
const $47d8f3c8b92fa13a$var$context = $47d8f3c8b92fa13a$var$canvas.getContext("2d");
//Dibujando la línea, 
const $47d8f3c8b92fa13a$var$draw = (x1, y1, x2, y2)=>{
    const [dx, dy] = [
        $47d8f3c8b92fa13a$var$width / 2,
        $47d8f3c8b92fa13a$var$height / 2
    ];
    $47d8f3c8b92fa13a$var$context.beginPath();
    $47d8f3c8b92fa13a$var$context.moveTo(dx + x1, dy - y1);
    $47d8f3c8b92fa13a$var$context.lineTo(dx + x2, dy - y2);
    $47d8f3c8b92fa13a$var$context.stroke();
};
const $47d8f3c8b92fa13a$var$loop = ()=>{
    const { x: x1 , y: y1  } = $fdd79821867e0196$export$da154e6a8eb66502($47d8f3c8b92fa13a$var$radius);
    const { x: x2 , y: y2  } = $fdd79821867e0196$export$da154e6a8eb66502($47d8f3c8b92fa13a$var$radius);
    $47d8f3c8b92fa13a$var$draw(x1, y1, x2, y2);
};
//Mando a llamar a setTimeOut() cada 30 segundos
for(let i = 0, time = 0, dt = 30; i < 5000; ++i, time += dt)setTimeout($47d8f3c8b92fa13a$var$loop, time);


//# sourceMappingURL=index.js.map
