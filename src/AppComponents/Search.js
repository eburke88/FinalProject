
import SearchPage from '../Jams/SearchPage';
import '../css/style.css';

import {Link}
from "react-router-dom";

export default function Search() { /* A function for the about section of the profile page */

    let link;
    
    // link= <SearchPage />

    return (
       
        <Link to="/Search">
            <div className="search-bar">
                Search
            </div>
        </Link>

    );

};