export const formatearDinero = (importe) =>{
    return importe?.toLocaleString(
        'es-UY',{
            style:'currency',
            currency: 'UYU'
        }
    )
}
export const formatearDineroUSD = (importe) =>{
    return importe?.toLocaleString(
        'es-AR',{
            style:'currency',
            currency: 'USD'
        }
    )
}