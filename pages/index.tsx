import { useEffect, useState } from "react"

import axios from 'axios'
const HomePage = () => {

    const [productList, setProductList] = useState<TProduct[]>([])

    const getAvos = async() => {
        const { data } = await axios.get('/api/avo')
        setProductList(data.entries)
        
    }

    useEffect(()=>{
        getAvos()
    },[])

    return (
        <div>
            <h1 className="text-6xl">Hola mundo!</h1>
                {
                    productList.map( product => (
                        <div key={product.id}>{ product.name } - { product.id } </div>
                    ))
                }
        </div>
    )
}

export default HomePage




// Solucion al autocompletado con archivos JS

/*
> 1er paso
ctrl + shif + p

> 2do paso - seleccionar lo siguiente:
change language Mode

> 3er paso - Escribir 
Javascript React

> y listo !! les autocompletara las etiquetas.

*/ 