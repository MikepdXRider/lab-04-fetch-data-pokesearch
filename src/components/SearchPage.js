import React, { Component } from 'react'
import PokeList from './PokeList.js'

export default class SearchPage extends Component {
    state = {
        dataArr: [],
        searchQuery: '',
        searchOrder: 'ascending',
        isLoading: false
    }

    // handleClick Method
        // call fetchData function
        
    // handleSearch Method
        // takes in e
        // updates searchOrder state to e.target.value

    // handleSearchOrder method
        // takes in e
        // updates searchOrder state to e.target.value

    // componentDidMount method
        // call fetchData function

    // fetchData async function
        // takes searchQuery and searchOrder
        // updates isLoading state to true
        // try to await a response on an endpoint request
        // update dataArr state
        // update isLoading state to false
    
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
                isLoading = {this.state.isLoading}
                />
            </main>
        )
    }
}
