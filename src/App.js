import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImgApi from './ImgApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Button from './Button';
import Loader from './Loader';
import  './App.module.css';



function App () {
  const [hits, setHits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState('');
  const [error, setError] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');

  
  const onChangeQuery = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setHits([]);
    setError(null);
  }

  useEffect(() => {
    if (!searchQuery) {
      return
    }

    setIsLoading(true);
    
    ImgApi({ searchQuery: searchQuery, currentPage }).then(hits => {
      setHits(prevState => [...prevState, ...hits]);
    })
      .then(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError({ error: 'No pictures found' })).finally(() => setIsLoading(false))
    
  }, [searchQuery, currentPage])
  


  const toggleModal = () => {
    setLargeImageURL('')
  }

  const onOpenModalImg = (largeImageURL) => {
    setLargeImageURL(largeImageURL)
  };


 
  return (
    <>
      <Searchbar
        onSubmit={onChangeQuery}
      />
      {error && <p>{error}</p>}

      <ImageGallery
        hits={hits}
        onOpenModalImg={onOpenModalImg}
      />

      {isLoading &&
        <Loader />}
      
      {hits.length > 11 && !isLoading && (
        <Button
          onClick={()=>setCurrentPage(currentPage + 1) }
        />
      )}

      {largeImageURL && (
        <Modal
          src={largeImageURL}
          alt={tags}
          onClose={toggleModal}
        />

      )}
    </>
  )
}

App.propTypes = {
  hits: PropTypes.array,
  searchQuery: PropTypes.string,
  currentPage: PropTypes.number,
  isLoading: PropTypes.bool,
  showModal: PropTypes.bool,
  tags: PropTypes.string,
  error: PropTypes.string,
  largeImageURL: PropTypes.string
};

export default App;
