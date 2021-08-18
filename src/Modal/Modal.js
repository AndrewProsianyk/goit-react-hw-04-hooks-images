import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, src, alt }) {
    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown)
    })

    const onKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        };
    };

    const onOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        };
    };

    return createPortal(
        <div className={styles.overlay} onClick={onOverlayClick}>
            <div className={styles.modal}>
                <img
                    src={src}
                    alt={alt}
                ></img>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;