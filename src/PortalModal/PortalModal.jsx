import React, {useState} from 'react'
import ModalContent from './ModalContent';
import Portal from '../Portal';
const PortalModal = () => {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        console.log('I am clicked');
    }//relative 
  return (
    <div className="border border-black mb-5 p-2 w-64 h-20 overflow-hidden" onClick={handleClick}>
        <button
            className="bg-black text-white p-1 border rounded-md"
            onClick={() => setShowModal(true)}
            >Modal using React Portal</button>

        {
            showModal && (
                <Portal>
                    <ModalContent onClose={() => setShowModal(false)} />
                </Portal>
            )
        }
    </div>
  )
}

export default PortalModal