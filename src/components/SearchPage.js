import React, { Component } from 'react'
import PokeList from './PokeList.js'
import request from 'superagent'
import sortData from '../sortData.js'
import Sort from './Sort.js'
import SearchOrder from './SearchOrder.js'



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

        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${sortBy}&direction=${searchOrder}&pokemon=${searchQuery}`)
            
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
            <>
                <header>
                    <h1>POKEMON</h1>
                    <img className='header-img' src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' alt='pikachu' />
                </header>
                <main className='main-flex-cont'>
                    <section className="search-cont">
                        <div> 
                            <input type='text' onChange={this.handleSearch} />
                            <button onClick={this.handleClick}>Search</button>
                        </div>
                        
                        <Sort 
                        sortData = {sortData}
                        handleSort = {this.handleSort}
                        />

                        <SearchOrder 
                        handleSearchOrder = {this.handleSearchOrder}
                        />

                    </section>
                    <PokeList
                    dataArr = {this.state.dataArr} 
                    isLoading = {this.state.isLoading}
                    />
                </main>
            </>
        )
    }
}
