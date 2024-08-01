import React from 'react'

const DisplayMsg = () => {
  const Msg='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem eligendi reiciendis inventore. Architecto aut obcaecati porro mollitia quod dolor odio?'
  return (
    <div className='h-[90dvh] overflow-y-auto px-4'>
<div className="flex items-center justify-between gap-1" >
  <div className='flex items-center gap-2'>
    <h1 className='text-2xl font-medium text-[#252525]'>Subject</h1>
    <span className='text-xs px-2 py-1 font-medium bg-gray-100 text-[#707070] rounded-md'>Indox</span>
  </div>
  <div className='text-sm text-[#707070]'>
    12-08-24
  </div>
</div>



<div className='flex flex-col gap-2 mt-6' >
  <p className='text-base text-[#707070] '>bharat@gmail.com</p>
  <p className='text-sm text-[#707070]'>to me</p>
  <div className='text-sm  text-[#373737] mt-5'>
{Msg}
  </div>
</div>

    </div>
  )
}

export default DisplayMsg