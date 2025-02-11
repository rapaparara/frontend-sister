const Modal = ({ isOpen, onClose, title, children }) => {
   if (!isOpen) return null

   return (
      <div className="modal modal-open">
         <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="py-4">{children}</div>
         </div>
      </div>
   )
}

export default Modal
