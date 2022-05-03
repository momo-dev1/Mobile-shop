import { useSelector, useDispatch } from 'react-redux'
import { SearchIcon } from '../../assets/icons';
import { updateFilters } from '../../store/productSlice';

const Filters = () => {
    // const { filters: { company } } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const companies = ["Apple", "Motorola", "Samsung"]
    const updateFilter = (e) => {
        const name = e.target.name
        let value = e.target.value

        if (name === "company") {
            value = e.target.textContent
        }
        dispatch(updateFilters({ name, value }))
    }
    return (
        <form className='flex-1 px-2' onSubmit={e => e.preventDefault()}>
            <section className="flex flex-wrap-reverse font-semibold ml-14 justify-between items-center ">
                <div className='flex gap-5'>
                    {companies.map((company, index) => (
                        <button key={index} name="company" onClick={updateFilter} className="h-10 px-5 py-1 bg-white border rounded-full cursor-pointer text-blue-550 shadow-pill hover:border-blue-550">{company}</button>
                    ))
                    }
                </div>

                <div className=" flex justify-start items-center py-3 relative">
                    <input onChange={updateFilter} name="search" className="text-sm leading-none text-left text-gray-600 px-4 py-2 w-full border rounded border-gray-300  outline-none" type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
            </section >
        </form>

    )
}

export default Filters

