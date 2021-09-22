import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const { location : { pathname }} = this.props;
        console.log(pathname);

        this.state = {
            result : null, // 들어오는 경로에 따라서 result애 들어오는 값도 바뀐다.
            loading : true,
            error : null,
            isMovie : pathname.includes("/movie/")
        }
    }

    async componentDidMount() {
        const { match : {params : { id }}, history : { push }} = this.props;
        const parsedId = parseInt(id);
        const { isMovie } = this.state;
        if(isNaN(parsedId)){
            return push("/")
        }
        let result;
        try {
            if( isMovie ){
                result = await moviesApi.movieDetail(parsedId);

            }else{
                result = await tvApi.tvDetail(parsedId);
            }
        } catch {
            this.setState({
                error : "Sorry, Can't find anything."
            }) 
        } finally {
            this.setState({
                loading : false,
                result,
            })
        }
    }

    render() {
        const { result, loading, error} = this.state;
        console.log(this.state);
        return (
            <DetailPresenter 
                result={result} 
                loading={loading} 
                error={error}/>
        )
    }
}

export default DetailContainer;

