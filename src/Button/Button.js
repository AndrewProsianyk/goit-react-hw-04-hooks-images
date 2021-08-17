import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'

const Button = ({ onClick }) => (
    <button className={styles.button} type="button" onClick={onClick}>
        Load more
    </button>
    );


Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;