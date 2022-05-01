import { useState } from "react"

const ProductImages = ({ images = [] }) => {
    const [main, setMain] = useState(images[0])
    return (
        <div> <img src={main.url} alt="" /></div>
    )
}

export default ProductImages