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
        isLoading: false,
        isShowing: true,
        translate: -85,
        rotate: 180,
        bushClassName: 'header-img bush-start',
        pikaClassName: 'header-img pika-start'
    }

    // handleClick Method used on button element
    handleClick = () => {
        const searchQuery = this.state.searchQuery
        const searchOrder = this.state.searchOrder
        const sortBy = this.state.sortBy
        this.fetchSearch(sortBy, searchOrder, searchQuery)
    }


    // handleSearch Method used on input element
    // takes in e
    handleSearch = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({searchQuery: e.target.value})
        console.log(this.state.searchQuery)
    }


    // handleSort Method for Sort component
    // takes in e
    handleSort = (e) =>{
        // updates searchOrder state to e.target.value
        this.setState({sortBy: e.target.value})
    }
    
    
    // handleSearchOrder method for SearchOrder component.
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


    // isShowing method for chevron img element. 
    isShowing = () => {
        this.setState({isShowing: !this.state.isShowing})
        this.showSearchSection()
        this.rotateChevron()
    }

    // show search section method used in isShowing method
    showSearchSection = () => {
        console.log('...is showing?', this.state.isShowing)
        !this.state.isShowing ? this.setState({translate: -80}) : this.setState({translate: -25})
        console.log('...translate state', this.state.translate)
    }

    // rotate chevron method used in isShowing method
    rotateChevron = () => {
        !this.state.isShowing ? this.setState({rotate: 180}) : this.setState({rotate: 0})
    }

    // pika surprise animation method used on bush image element
    pikaSurpriseAnim = () => {
        this.setState({bushClassName: 'header-img bush-end'})
        this.setState({pikaClassName: 'header-img pika-end'})
    }


    // fetchSearch async function
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
                    <img className={`${this.state.pikaClassName}`} src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' alt='pikachu' />
                    <img onClick={this.pikaSurpriseAnim} className={`${this.state.bushClassName}`} src='bush.png' alt='bush' />
                </header>
                <main className='main-flex-cont'>
                    <section style={{transform: `translateY(${this.state.translate}px)`}} className="search-cont">
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

                        <img style={{transform: `rotate(${this.state.rotate}deg)`}}onClick={this.isShowing} className='chevron' src='chevron.png' alt='chevron'/>
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
