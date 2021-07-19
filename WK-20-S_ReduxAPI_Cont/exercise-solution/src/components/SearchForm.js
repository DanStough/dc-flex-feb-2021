import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { modifySearch } from '../store/searchSlice';


function SearchForm() {

    const [q, setQ] = useState('');
    const [rating, setRating] = useState('all');
    const [limit, setLimit] = useState(20);
    const dispatch = useDispatch();
    
   
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(modifySearch({
            q,
            rating,
            limit
        }))
    }

    // Standard function that work for all state changes that correspond to an input's name.
    const createChangeHandler = (setHook) => (e) => {
        setHook(e.target.value)
    }

    // Standard function that work for all state changes that correspond to an input's name.
    const limitChangeHandler = (e) => {
        setLimit(parseInt(e.target.value))
    }

    return (
        <form onSubmit={handleSubmit} style={{paddingBottom: "50px"}} >
            <div className="form-group">
                {/* We covered this binding state to value in class */}
                <label htmlFor="name">Search Term</label>
                <input className="form-control" type="text" name="q" value={q} onChange={createChangeHandler(setQ)}/>
            </div>
            <div className="form-group">
                <div>Limit</div>
                <div className="form-check form-check-inline">
                    {/* Don't forget the two way bind for these items too. Plus there is an onChange FOR EACH RADIO BUTTON */}
                    <input className="form-check-input" type="radio" id="five" name="limit" value="5" checked={5===limit} onChange={limitChangeHandler} />
                    <label className="form-check-label" htmlFor="five">5</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="twenty" name="limit" value="20" checked={20===limit} onChange={limitChangeHandler} />
                    <label className="form-check-label" htmlFor="twenty">20</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="fifty" name="limit" value="50" checked={50===limit} onChange={limitChangeHandler} />
                    <label className="form-check-label" htmlFor="fifty">50</label>
                </div>
            </div>


            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                {/* I only need one onChange for this component. The value here set the value of the whole control and can change the selected item */}
                <select className="form-control" name="rating" value={rating} onChange={createChangeHandler(setRating)}>
                    {/* These values only apply WHEN THIS OPTION IS SELECTED */}
                    <option value="all">All</option>
                    <option value="g">G</option>
                    <option value="pg">PG</option>
                    <option value="pg-13">PG-13</option>
                    <option value="r">R</option>
                </select>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}

export default SearchForm;
