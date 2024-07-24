import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export default function Modal({children, open, onClose, className =''}) {
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current
        if (open) {
            modal.showModal()
        }
        return ()=>modal.close()
    }, [open])
    return (
        createPortal(<dialog
            className={`modal ${className}`}
            onClose={onClose}
            ref={dialog}>
            {children}
        </dialog>, document.getElementById('modal'))
    )
}