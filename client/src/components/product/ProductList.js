import { ProductCard, Sort, Filters } from "../index"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterProducts, sortProducts } from "../../store/productSlice"

const ProductList = () => {
    const { sort, products, filters, filtered_Products } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortProducts())
    }, [sort, dispatch])

    useEffect(() => {
        dispatch(filterProducts())
    }, [filters, dispatch])

    return (
        <section className="max-w-[1054px] mx-auto px-4 md:px-2 lg:px-0">
            <div className="h-[170px]"></div>
            <div className="mt-8 text-center">
                <h3 className="mb-2 text-4xl font-bold tracking-wide">Prepaid Cell Phones</h3>
                <p className="text-base">No Annual Contract • No Credit Check • No Hidden Fees • No Stress</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center py-6">
                <Sort />
                <Filters />
            </div>
            <section className="grid grid-cols-auto-fill gap-5 ">
                {filtered_Products.length > 0 ?
                    filtered_Products.map(product => <ProductCard key={product.id} {...product} />)
                    : products.map(product => <ProductCard key={product.id} {...product} />)}
            </section>
        </section>
    )
}

export default ProductList
