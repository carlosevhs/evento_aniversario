AOS.init();

const dataDoEvento = new Date ("May 27, 2024 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24 ;
    const horaEmMs = 1000 * 60 * 60 ;
    const minEmMs = 1000 * 60 ;

    const diasAteOevento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMs)/horaEmMs);
    const minutosAteOevento = Math.floor((distanciaAteOEvento % horaEmMs)/minEmMs);
    const segundosAteOevento = Math.floor((distanciaAteOEvento % minEmMs)/1000);

    document.getElementById('contador').innerHTML = `começa em: ${diasAteOevento}d ${horasAteOevento}h ${minutosAteOevento}m ${segundosAteOevento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `O navio ja partiu`
    }

},1000);