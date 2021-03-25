import React from 'react';

function SearchBar(props){
        return(
            <div>
                <form className="search-form" onSubmit={props.handleSubmit}>
                    <input type="text" value={props.value} onChange={props.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>

    )
}

export default SearchBar;