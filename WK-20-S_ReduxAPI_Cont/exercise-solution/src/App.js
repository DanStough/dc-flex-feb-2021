import { useSelector } from 'react-redux'

import SearchForm from './components/SearchForm'
import { selectSearch } from './store/searchSlice'

import { useGetGiphySearchResultsQuery } from './services/giphy'

import './App.css';

function App() {

  // Using a query hook automatically fetches data and returns query values
  const searchData = useSelector(selectSearch)
  const { data, isLoading } = useGetGiphySearchResultsQuery(searchData)

  return (
    <div className="container">
        <h1 style={{textAlign: "center"}}>🌠 JIFFY </h1>
        <h2 style={{textAlign: "center"}}>A Legally Safe GIF Search Site for Choosey Moms</h2>
        <hr/>
        <h2>Search</h2>
        <SearchForm />
        <h2>Results</h2>
        <div className="gif-flexbox">
          {isLoading ? <h2>Loading..</h2> : data?.data.map((record, id) => <img key={record.images.original.url+"-"+ id} alt="" src={record.images.original.url}/>)}
        </div>
    </div>
  );
}

export default App;
