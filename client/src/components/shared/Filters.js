import { useSelector, useDispatch } from 'react-redux'
import { updateFilters } from '../../store/productSlice';

const Filters = () => {
    const { company } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const companies = ["Apple", "Motorola", "Samsung"]
    return (
        <section className="flex gap-5 font-semibold ml-14">
            {companies.map((company, index) => (
                <div key={index} name={company} onClick={(e) => dispatch(updateFilters(e.target.name))} className="px-5 py-1 bg-white border rounded-full cursor-pointer text-blue-550 shadow-pill hover:border-blue-550">{company}</div>
            ))}
        </section>
    )
}

export default Filters