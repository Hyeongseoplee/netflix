import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from '../../api';

export default class extends React.Component{
    state = {
        nowPlaying : null, 
        upComing : null,
        popular : null,
        error : null,
        loading : null
    }

    render() {
        const { nowPlaying, upComing, popular, error, loading} = this.state;
        return (
            <HomePresenter nowPlaying={nowPlaying} upComing={upComing} popular={popular} error={error} loading={loading}/>
        )
    }
}