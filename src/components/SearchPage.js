import React, { Component } from 'react'
import PokeList from './PokeList.js'
import request from 'superagent'

export default class SearchPage extends Component {
    state = {
        dataArr: [],
        searchQuery: '',
        searchOrder: 'ascending',
        isLoading: false
    }

    // handleClick Method
    handleClick = () => {
        const searchQuery = this.state.searchQuery
        const searchOrder = this.state.searchOrder

        this.fetchSearch(searchQuery, searchOrder)
    }


    // handleSearch Method
        // takes in e
        // updates searchOrder state to e.target.value

    // handleSearchOrder method
        // takes in e
        // updates searchOrder state to e.target.value

        
    // componentDidMount method
    componentDidMount = () => {
        const searchQuery = this.state.searchQuery
        const searchOrder = this.state.searchOrder

        this.fetchSearch(searchQuery, searchOrder)
    }


    // fetchSearch async function
    // takes in searchQuery and searchOrder
    fetchSearch = async (searchQuery, searchOrder) => {
        // updates isLoading state to true
        this.setState({isLoading: true})

        // try to await a response on an endpoint request
        const response = await request.get(/* endpoint here*/)

        // update dataArr state
        this.setState({dataArr: [...response.body]})

        // update isLoading state to false
        this.setState({isLoading: false})
    }
    
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
