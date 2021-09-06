import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
    state = {
        tvResult : null,
        movieResult : null,
        searchTerm : "",
        loading : false,
        error : null
    }

    render() {
        const { tvResult, movieResult, searchTerm, loading, error} = this.state;
        return (
            <SearchPresenter tvResult={tvResult} movieResult={movieResult} searchTerm={searchTerm} loading={loading} error={error}/>
        )
    }
}