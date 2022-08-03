import { ProductList } from "@components/product/ProductList"
import { Avocado } from '@components/SVG'

import { useProduct } from "hooks/useProduct"


const HomePage = () => {

    const { products } = useProduct()

    return (
        <div className="container">
            <h1 className="text-4xl font-semibold flex justify-center my-12">Avo <Avocado /> Store</h1>
            <div>
                <ProductList productList={products} />
            </div>
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