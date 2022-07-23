const { arrayExpression } = require("@babel/types")
const { array } = require("yargs")

const isVowel = (char) =>{

    /* Así se hace en JavaScript */
    return "aeiou".includes(char)

}
const doubleArray =array => array.map(element=>element*2) 


module.exports = {isVowel,doubleArray}   /* Exportando */
