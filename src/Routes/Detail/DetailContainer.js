import React from 'react';
import DetailPresenter from './DetailPresenter';

class DetailContainer extends React.Component {
    state = {
        result : null, // show는 id를 가져온다.  tv와 movie 로부터 id를 가지고 얻게 되는 것들은 result를 갖게된다.
        loading : true,
        error : null,
    }

    async componentDidMount() {
        console.log(this.props);
        const { match : {params : { id }}, history : { push }} = this.props;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)){
            return push("/")
        }
    }

    render() {
        const { result, loading, error} = this.state;
        return (
            <DetailPresenter 
                result={result} 
                loading={loading} 
                error={error}/>
        )
    }
}

export default DetailContainer;