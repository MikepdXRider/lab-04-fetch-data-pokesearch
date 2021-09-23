import React, { Component } from 'react'
import PokeList from './PokeList.js'

export default class SearchPage extends Component {
    state = {
        dataArr: [],
        searchQuery: '',
        searchOrder: 'ascending'
    }

    // handleClick Method

    // handleSearch Method

    // handleSearchOrder method

    // componentDidMount method

    // fetchData async function
    
    render() {
        return (
            <main>
                <section>
                    {/* type = text, onChange = handleSearch method */}
                    <input></input>
                    {/* onClick = handleClick method  */}
                    <button></button>
                    {/* onChange = handleSearchOrder method */}
                    <select>
                        <input key='ascending' value='ascending'>Ascending</input>
                        <input key='descending' value='descending'>Descending</input>
                    </select>
                </section>
                <PokeList
                dataArr = {this.state.dataArr} 
                />
            </main>
        )
    }
}
