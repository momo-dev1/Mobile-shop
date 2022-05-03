import { useSelector, useDispatch } from 'react-redux'
import { updateSort } from '../../store/productSlice';

const Sort = () => {
    const { sort } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <form>
            <label htmlFor="sort" className='mr-2 text-xs font-semibold' >Sort By:</label>
            <select
                name="sort"
                id="sort"
                className="pl-3 pr-5 py-2 text-base border border-gray-200 focus:outline-none focus:ring-blue-550 focus:border-blue-550 sm:text-sm rounded-md"
                value={sort}
                onChange={(e) => dispatch(updateSort(e.target.value))}
            >
                <option value="most-popular">Most Popular</option>
                <option value="price-lowest">Price: Low to High</option>
                <option value="price-highest">Price: High to Low</option>
                <option value="name-a">Alphabetical (A-Z)</option>
            </select>
        </form>
    )
}

export default Sort