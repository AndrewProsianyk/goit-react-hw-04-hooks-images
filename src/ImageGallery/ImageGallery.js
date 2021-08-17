import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({hits, onOpenModalImg})=> {
    return (
        <ul className={styles.ImageGallery}>
            {hits.map(({ id, webformatURL, largeImageURL }) => {
                const onImgClick=()=>onOpenModalImg(largeImageURL)
                return (
                    <li key={id}>
                        <ImageGalleryItem
                            webformatURL={webformatURL}
                            onClick={onImgClick}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired,
    onOpenModalImg: PropTypes.func.isRequired,
};

export default ImageGallery;