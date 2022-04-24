import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from "../redux/index"

const Counter = () => {
    const counter = useSelector(state => state.value);
    const dispatch = useDispatch();
    return (
        <div className='bg-gray-400 h-screen flex justify-center
        pt-20'>
            <div>
                <div className='text-2xl mb-4'>Counter: <span className='text-fuchsia-800'>{counter}</span> </div>
                <div className='space-x-2'>
                    <button className='px-4 py-2 bg-blue-500' onClick={() => dispatch(increase(10))}>increase +</button>
                    <button className='px-4 py-2 bg-red-500' onClick={() => dispatch(decrease(5))}>decrease - </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;