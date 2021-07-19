import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import SearchForm from './components/SearchForm'

import { useGetGiphySearchResultsQuery } from './services/giphy'

import './App.css';

function App() {

  // const query = useSelector((state)=> state);
  // const dispatch = useDispatch();

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetGiphySearchResultsQuery({q: "song"})

  // const handleFormSubmit = gifQueryData => {
  //   return { data, error, isLoading } = useGetGiphySearchResultsQuery({
  //     q: gifQueryData.term,
  //     limit: gifQueryData.limit,
  //     rating: gifQueryData.rating,
  //   })

    
  // }

  return (
    <div className="container">
        <h1 style={{textAlign: "center"}}>🌠 JIFFY </h1>
        <h2 style={{textAlign: "center"}}>A Legally Safe GIF Search Site for Choosey Moms</h2>
        <hr/>
        <h2>Search</h2>
        <SearchForm />
        <h2>Results</h2>
        <div className="gif-flexbox">
          {isLoading ? <h2>Loading..</h2> : data?.data.map(record => <img src={record.images.fixed_width.url}/>)}
        </div>
    </div>
  );
}

export default App;
