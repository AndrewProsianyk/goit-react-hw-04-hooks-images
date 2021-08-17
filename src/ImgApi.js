import axios from 'axios';
const KEY = '21944568-357b711266e3368e889ab4e4f';

const fetchHits = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    return axios
        .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response =>response.data.hits)
}

export default fetchHits;