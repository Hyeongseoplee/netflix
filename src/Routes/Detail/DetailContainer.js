import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
    status = {
        result : null, // show는 id를 가져온다.  tv와 movie 로부터 id를 가지고 얻게 되는 것들은 result를 갖게된다.
        loading : true,
        error : null,
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