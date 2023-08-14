import _ from "underscore";

/**
 * 
 * @param {Array<String>} tiposCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>}
 */

export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

    if (!tiposCarta || tiposCarta.length === 0)
        throw Error('TiposCarta es obligatorio como un arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}