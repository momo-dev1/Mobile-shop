import React from 'react'

const QuickSpecs = (
    { isTrue, Icon, Icon2, Icon3 }
) => {
    console.log(Icon)
    return (
        <div className={`${ isTrue ? "flex" : "hidden" } border-t pt-3 `}>
            <div className="flex flex-col w-3 flex-1 items-center gap-2">
                <Icon className='w-5 h-5 object-contain' />
                <p className="text-[10px]">
                    <span className="text-xs font-semibold">6.82"</span>  <br />Screen Size</p>
            </div>
            <div className="flex flex-col w-3 flex-1 items-center gap-2">
                <Icon2 className='w-5 h-5 object-contain' />
                <p className="text-[10px]">
                    <span className="text-xs">48 mp</span>  <br />Camera</p>
            </div>
            <div className="flex flex-col w-3 flex-1 items-center gap-2">
                <Icon3 className='w-5 h-5 object-contain' />
                <p className="text-[10px]">
                    <span className="text-xs">64 GB</span>  <br />Storage</p>
            </div>
        </div>
    )
}

export default QuickSpecs