import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';


const Modal = ({ children, open, classname='', onClose }) => {

    const dialog = useRef();

    useEffect(() => {

        const modal = dialog.current;

        if(open) {
           modal.showModal();
        }
        return () => modal.close()
    }, [open])

    const element = document.getElementById('modal')
    
    return (
        createPortal(<dialog ref={dialog} className={`modal ${classname}`} onClose={onClose}>{children}</dialog>, element)
    )
}

export default Modal