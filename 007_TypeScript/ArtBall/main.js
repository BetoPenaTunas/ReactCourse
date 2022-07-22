
    const canvas =document.getElementById('drawing')
    
    // ---> Para darle calidad HD
    canvas.width=canvas.clientWidth
    canvas.height=canvas.clientHeight
    
    const {width,height} = canvas

    //Calculando el radio 
    //0.8 de la cosa más chiquita sobre 2
    const radius=(0.8*min(width,height))/2  
    const context =canvas.getContext("2d")

    //Dibujando la línea, 
    const draw = (x1,y1,x2,y2)=>{
        const[dx,dy]=[width/2,height/2]
        context.beginPath()
        context.moveTo(dx+x1,dy-y1)
        context.lineTo(dx+x2,dy-y2)
        context.stroke()
    }

    const loop =()=>{
        const {x:x1,y:y1}=randomPointCircle(radius)
        const {x:x2,y:y2}=randomPointCircle(radius)
        draw(x1,y1,x2,y2)
    }

    //Mando a llamar a setTimeOut() cada 30 segundos
    for(let i=0,time=0,dt=30;i<5_000;++i,time+=dt){
        setTimeout(loop,time)
    }