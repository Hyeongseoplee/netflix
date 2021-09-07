import React from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

export default class SearchContainer extends React.Component {
    state = {
        tvResult : null,
        movieResult : null,
        searchTerm : "",
        loading : false,
        error : null
    }

    handleSubmit() {
        const { searchTerm } = this.state;
        if( searchTerm !== "") {
            this.searchByTerm()
        }
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({loading : true});

        try{
            const { data : { results : movieResult }} = await moviesApi.movieSearch(searchTerm);
            const { data : { results : tvResult }} = await tvApi.tvSearch(searchTerm);
            this.setState({ 
                movieResult,
                tvResult,
            })
        }catch{
            this.setState({
                error : "Sorry, we can't find the keyword. :("
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }

    render() {
        const { tvResult, movieResult, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter 
                tvResult={tvResult} 
                movieResult={movieResult} 
                searchTerm={searchTerm} 
                loading={loading} 
                error={error}
                handleSubmit={this.handleSubmit}/>
        )
    }
}