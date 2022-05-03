import { Product, Sort, Filters } from "../index"
import jsonData from "../../data.json"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterProducts, sortProducts } from "../../store/productSlice"
const ProductList = () => {
    // const { sort, filters } = useSelector(state => state.product)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(filterProducts())
    //     dispatch(sortProducts())
    // }, [sort, filters, dispatch])

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
            {jsonData.productlist.map((product, index) => {
                return <section className="grid grid-cols-auto-fill gap-5 ">
                    <Product key={product.id} {...product} />
                    <Product key={index + 1} {...product} />
                    <Product key={index + 2} {...product} />
                    <Product key={index + 3} {...product} />
                    <Product key={index + 4} {...product} />
                    <Product key={index + 5} {...product} />
                </section>
            })}
        </section>
    )
}

export default ProductList
