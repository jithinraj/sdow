import {connect} from 'react-redux';

import {setError, setShortestPaths} from '../actions';

import SearchButton from '../components/SearchButton';

const mapStateToProps = (state) => {
  return {
    toArticleTitle: state.toArticleTitle,
    fromArticleTitle: state.fromArticleTitle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShortestPaths: (paths) => {
      dispatch(setShortestPaths(paths));
    },
    setError: (errorMessage) => {
      dispatch(setError(errorMessage));
    },
  };
};

const SearchButtonContainer = connect(mapStateToProps, mapDispatchToProps)(SearchButton);

export default SearchButtonContainer;