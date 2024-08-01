import React from 'react'
import { useSelector } from 'react-redux';

const DisplayMsg = () => {
  const { selectedMail } = useSelector((state) => state.mailSlice);
  return (
    <div className='h-[90dvh] overflow-y-auto px-4'>
<div className="flex items-center justify-between gap-1" >
  <div className='flex items-center gap-2'>
    <h1 className='text-2xl font-medium text-[#252525]'>{selectedMail?.subject}</h1>
    <span className='text-xs px-2 py-1 font-medium bg-gray-100 text-[#707070] rounded-md'>Indox</span>
  </div>
  <div className='text-sm text-[#707070]'>
  {new Date(selectedMail?.createdAt?.seconds*1000).toUTCString()}
  </div>
</div>



<div className='flex flex-col gap-2 mt-6' >
  <p className='text-base text-[#707070] '>{selectedMail?.to}</p>
  <p className='text-sm text-[#707070]'>to me</p>
  <div className='text-sm  text-[#373737] mt-5'>
{selectedMail?.message}
  </div>
</div>

    </div>
  )
}

export default DisplayMsg