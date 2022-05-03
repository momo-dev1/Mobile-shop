import { formatPrice } from '../../utils/formatPrice'
import { useSelector, useDispatch } from 'react-redux'
import { updateQuickSpecs } from '../../store/productSlice';
import { CameraIcon, StorageIcon, ScreenSizeIcon, ArrowIcon } from '../../assets/icons';
import mobile from "../../assets/mobiles/mobile-1.webp"
import { Stars } from '../index'
import { Link } from "react-router-dom";

const Product = ({ id, name, price, reviews, stars, image, company }) => {
    const { quickSpecs } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    return (
        <section className="px-4 pt-5 pb-2 border rounded-[10px] shadow-card font-semibold max-w-[340px] mx-auto">

            <Link to={`/mobiles/${ id }`} >
                <div className='flex w-full justify-between'>
                    <h3 className="capitalize text-[#6e6f72] text-sm flex-1 ">{company}</h3>
                    <Stars stars={stars} reviews={reviews} />
                </div>
                <h2 className="text-2xl my-2">{name}</h2>

                <div className="flex gap-4">
                    <div className='w-[125px]'>
                        <img className='w-full h-full object-contain' src={mobile} alt="mobile" />
                    </div>
                    <div>
                        <span className="block">From</span>
                        <h5 className="text-[#60a630] text-[28px] ">{formatPrice(price)}</h5>
                        <p className="text-[9px] max-w-[150px]">When you bring your number and activate a $60/mo plan</p>
                    </div>

                </div>
            </Link>

            <div className="text-center mt-3 cursor-pointer">
                <button onClick={() => dispatch(updateQuickSpecs())} className="text-blue-550 mb-2 font-semibold">
                    <div className='flex items-center gap-3'>
                        Quick Specs
                        <ArrowIcon rotate={quickSpecs} />
                    </div>
                </button>
                <div className={`${ quickSpecs ? "flex" : "hidden" } border-t pt-3 `}>
                    <div className="flex flex-col w-3 flex-1 items-center gap-2">
                        <ScreenSizeIcon className='w-5 h-5 object-contain' />
                        <p className="text-[10px]">
                            <span className="text-xs font-semibold">6.82"</span>  <br />Screen Size</p>
                    </div>
                    <div className="flex flex-col w-3 flex-1 items-center gap-2">
                        <CameraIcon className='w-5 h-5 object-contain' />
                        <p className="text-[10px]">
                            <span className="text-xs">48 mp</span>  <br />Camera</p>
                    </div>
                    <div className="flex flex-col w-3 flex-1 items-center gap-2">
                        <StorageIcon className='w-5 h-5 object-contain' />
                        <p className="text-[10px]">
                            <span className="text-xs">64 GB</span>  <br />Storage</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product