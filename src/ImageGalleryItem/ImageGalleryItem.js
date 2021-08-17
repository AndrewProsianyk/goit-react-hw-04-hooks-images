import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, onClick,tags})=> {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={tags}
                className={styles.ImageGalleryItemImage}
                onClick={onClick}    
            />
        </li>
    )
}
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;