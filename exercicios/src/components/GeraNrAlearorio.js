
// TODO corrigir pois não está gerando nr aleatorio se não foren enviados parametros
export default ({max = 100, min = 0}) => parseInt( Math.random() * (max - min) + min)