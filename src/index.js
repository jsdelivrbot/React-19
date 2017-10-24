import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBse-nzuf67mhh3k3c0EPItW8m1R_vNj0o';

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page. (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
