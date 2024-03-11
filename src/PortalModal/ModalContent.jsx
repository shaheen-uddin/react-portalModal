import React from 'react'
const Child = () => {
  return(
    <div className='border border-red-500 p-1'>
      <h1>I am a child</h1>
      <button>Click</button>
    </div>
  )
}//absolute top-20 left-12 bottom-20 z-10
const ModalContent = ({onClose}) => {
  return (//h-screen 
    <div className="flex flex-col items-center border rounded-lg top-2 left-1/2 transform -translate-x-1/2 absolute w-screen/50 mx-auto  bg-black text-white p-2" role="dialog" aria-modal="true">
        <p className='mx-2'>Hey I am a Modal</p>
        <Child />
        <button
            className="bg-white text-black p-1 border rounded-md"
            onClick={onClose}>Close</button>
    </div>
  )
}

export default ModalContent