import { useSelector, useDispatch } from 'react-redux'
import { updateSort } from '../../store/productSlice';

const Sort = () => {
    const { sort } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <form>
            <label className='mr-2 text-xs font-semibold' htmlFor="sort">Sort By:</label>
            <select className='p-2 text-xs font-semibold border rounded-md shadow-sm outline-none hover:border-blue-550' name="sort" id="sort" value={sort} onChange={(e) => dispatch(updateSort(e.target.value))} >
                <option value="most-popular">Most Popular</option>
                <option value="price-lowest">Price: Low to High</option>
                <option value="price-highest">Price: High to Low</option>
                <option value="name-a">Alphabetical (A-Z)</option>
            </select>
        </form>
    )
}

export default Sort