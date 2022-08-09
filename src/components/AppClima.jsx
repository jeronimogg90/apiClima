import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Loading from './Loading'

const AppClima = () => {
    
    const {resultado, cargando, noResultado} = useClima()

  return (
    <>
        <main className='dos-columnas'>
            <Formulario />

            {cargando ? <Loading /> : 
            resultado?.name ? <Resultado/> : 
            <p>{noResultado}</p>
}
        </main>
    </>
  )
}

export default AppClima
