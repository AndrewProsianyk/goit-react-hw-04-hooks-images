import { useState } from 'react';
import styles from './Searchbar.module.css';

function Searchbar({onSubmit}) {
    const [query, setQuery] = useState('');


    const inputChange = e => {
        setQuery(e.currentTarget.value)
    }

    const inputSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('')
    }

    
    return (
        <header className={styles.Searchbar}>
            <form
                className={styles.SearchForm}
                onSubmit={inputSubmit}
            >
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={styles.SearchFormInput}
                    type="text"
                    value={query}
                    onChange={inputChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
    
}
export default Searchbar;