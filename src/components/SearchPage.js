import React, { Component } from 'react'
import PokeList from './PokeList.js'
import request from 'superagent'
import sortData from '../sortData.js'



export default class SearchPage extends Component {
    state = {
        dataArr: [],
        searchQuery: '',
        sortBy: '',
        searchOrder: 'asc',
        isLoading: false
    }

    // handleClick Method
    handleClick = () => {
        const searchQuery = this.state.searchQuery
        const searchOrder = this.state.searchOrder
        const sortBy = this.state.sortBy
        this.fetchSearch(sortBy, searchOrder, searchQuery)
    }


    // handleSearch Method
    // takes in e
    handleSearch = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({searchQuery: e.target.value})
        console.log(this.state.searchQuery)
    }


    // handleSearch Method
    // takes in e
    handleSort = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({sortBy: e.target.value})
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
        const sortBy = this.state.sortBy
        this.fetchSearch(sortBy, searchOrder, searchQuery)
    }


    // fetchSearch async function
    // takes in searchQuery and searchOrder
    fetchSearch = async (sortBy , searchOrder, searchQuery) => {
        // updates isLoading state to true
        this.setState({isLoading: true})

        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${searchQuery}&sort=${sortBy}&direction=${searchOrder}&`)
            
        // update dataArr state
        this.setState({dataArr: [...response.body.results]})
        // update isLoading state to false
        this.setState({isLoading: false})

        // console.log('isLoading state leaving function', this.state.isLoading)
        // console.log('dataArr state leaving function', this.state.dataArr)
        // console.log('searchOrder state leaving function', this.state.searchOrder)
    }


    render() {
        return (
            <main>
                <section>

                    <div className="search-cont"> 
                        <input type='text' onChange={this.handleSearch} />
                        <button onClick={this.handleClick}>Search</button>
                    </div>
                        <span>Sort:</span>  
                   <select onChange={this.handleSort}>
                        {
                            sortData.map((sortItem) => <option key={sortItem} value={sortItem}>{sortItem.toLocaleUpperCase()}</option>)
                        }
                    </select>
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
