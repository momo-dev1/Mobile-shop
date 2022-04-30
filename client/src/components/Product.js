
import AddToCart from './AddToCart'
import ProductImages from './ProductImages'

const Product = () => {
    return (
        <section>
            <ProductImages />
            <h2>names</h2>
            <h5>price</h5>
            <P>description</P>
            {stock > 0 && <AddToCart />}
        </section>
    )
}

export default Product