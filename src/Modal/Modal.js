import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onKeyDown)
    };

    onKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        };
    };

    onOverlayClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        };
    };

    render() {
        return createPortal (
            <div className={styles.overlay} onClick={this.onOverlayClick}>
                <div className={styles.modal}>
                    <img
                        src={this.props.src}
                        alt={this.props.alt}
                    ></img>
                </div>
            </div>,
            modalRoot
        );
    };
};

export default Modal;