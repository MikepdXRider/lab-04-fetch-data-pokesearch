import React, { Component } from 'react'
import PokeList from './PokeList.js'
import request from 'superagent'



export default class SearchPage extends Component {
    state = {
        dataArr: [],
        searchQuery: '',
        searchOrder: 'asc',
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
    handleSearch = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({searchQuery: e.target.value})
        console.log(this.state.searchQuery)
    }
    
    
    // handleSearchOrder method
    // takes in e
    handleSearchOrder = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({searchOrder: e.target.value})
    }


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

        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchQuery}&direction=${this.state.searchOrder}`)
            
        // update dataArr state
        this.setState({dataArr: [...response.body.results]})
        // update isLoading state to false
        this.setState({isLoading: false})

        console.log('isLoading state leaving function', this.state.isLoading)
        console.log('dataArr state leaving function', this.state.dataArr)
        console.log('searchOrder state leaving function', this.state.searchOrder)
    }




    render() {
        return (
            <main>
                <section>
                    <input type='text' onChange={this.handleSearch} />
                    <button onClick={this.handleClick}>Search</button>
                    {/* onChange = handleSearchOrder method */}
                    <select onChange={this.handleSearchOrder}>
                        <option key='asc' value='asc'>Ascending</option>
                        <option key='desc' value='desc'>Descending</option>
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
