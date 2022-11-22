export const formatearDinero = importe =>{
    return importe.toLocaleString('es-UY',{
        style:'currency',
        currency: 'UYU'
    })
}