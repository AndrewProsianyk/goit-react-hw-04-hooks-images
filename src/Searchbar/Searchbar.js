import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: ''
    }

    inputChange = e => {
        this.setState({query:e.currentTarget.value})
    }

    inputSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({query:''})
    }

    render() {
        return (
            <header className={styles.Searchbar}>
                <form
                    className={styles.SearchForm}
                    onSubmit={this.inputSubmit}
                >
                    <button type="submit" className={styles.SearchFormButton}>
                        <span className={styles.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={styles.SearchFormInput}
                        type="text"
                        value={this.state.query}
                        onChange={this.inputChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
export default Searchbar;