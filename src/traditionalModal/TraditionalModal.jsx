import React, {useState} from 'react'
import ModalContent from '../Modal/ModalContent';
const TraditionalModal = () => {
    const [showModal, setShowModal] = useState(false);
  return ( ///* relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden */
    <div className="max-w-xl mx-auto hy-2 relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
        <button
            className="bg-black text-white p-1 border rounded-md"
            onClick={() => setShowModal(true)}
        >Show the Traditional Modal</button>
        {
            showModal && (
                <ModalContent onClose={() => setShowModal(false)} />
            )
        }
    </div>
  )
}

export default TraditionalModal