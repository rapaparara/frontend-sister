const Modal = ({ isOpen, onClose, title, children, onConfirm }) => {
   if (!isOpen) return null

   return (
      <div className="modal modal-open">
         <div className="modal-box max-w-2xl">
            {/* Tombol Close di bagian atas */}
            <div className="modal-header flex justify-between items-center">
               <h3 className="font-bold text-lg">{title}</h3>
               <button className="btn btn-sm btn-ghost" onClick={onClose}>
                  ×
               </button>
            </div>

            {/* Konten Modal */}
            <div className="py-4">{children}</div>

            {/* Aksi Modal */}
            <div className="modal-action justify-end">
               {onConfirm && (
                  <>
                     <button className="btn btn-error" onClick={onConfirm}>
                        Ya
                     </button>
                     <button className="btn btn-neutral" onClick={onClose}>
                        Tidak
                     </button>
                  </>
               )}
            </div>
         </div>
      </div>
   )
}

export default Modal
