import React, { useState, Fragment } from "react";
// import {  useHistory } from "react-router-dom";
// import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState("");
    // let history = useHistory();
    // console.log(history)
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        
        if (keyword.trim()) {
            history.push(`/product/${keyword}`);
        } else {
            history.push("/product");
        }
    };

    return (
        <Fragment>
            {/* <MetaData title="Search A Product -- ECOMMERCE" /> */}
            <form className="searchBox" onSubmit={searchSubmitHandler}>
                <input
                    type="text"
                    placeholder="Search a Product ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                
                <button type="submit" value="Search" >Search</button>
            </form>
        </Fragment>
    );
};

export default Search;