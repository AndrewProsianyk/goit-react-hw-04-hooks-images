import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImgApi from './ImgApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';
import  './App.module.css';



class App extends Component {
  static propTypes = {
    hits: PropTypes.array,
    searchQuery: PropTypes.string,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
    showModal: PropTypes.bool,
    tags: PropTypes.string,
    error: PropTypes.string,
    largeImageURL: PropTypes.string
  }

  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    tags: '',
    error: '',
    largeImageURL:''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits()
    }

    if (this.state.searchQuery !== 2 && prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null
    })
  }

  fetchHits = () => {
    const { searchQuery, currentPage } = this.state;
    const options = {
      searchQuery,
      currentPage
    }
    
    this.setState({ isLoading: true })
    
    ImgApi(options).then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        currentPage:prevState.currentPage + 1
      }))
    })
      .catch(error => this.setState({ error: 'No pictures found' })).finally(() => this.setState({
        isLoading:false
      }))
  }


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  }

  onOpenModalImg = (largeImageURL = '') => {
    this.setState({largeImageURL});
    this.toggleModal();
  };


  render() {
    const { hits, isLoading, showModal, largeImageURL, tags, error } = this.state;
    return (
      <>
        <Searchbar
          onSubmit={this.onChangeQuery}
        />
        {error && <p>{error}</p>}

        <ImageGallery
          hits={hits}
          onOpenModalImg={this.onOpenModalImg}
        />

        {isLoading &&
          <Loader />}
        {hits.length > 11 && !isLoading && (
          <Button onClick={this.fetchHits}/>
        )}

        {showModal && (
          <Modal
            src={largeImageURL}
            alt={tags}
            onClose={this.onOpenModalImg}
          />

        )}
      </>
    )
  }
}

export default App;
