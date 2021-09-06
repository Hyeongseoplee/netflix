import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
    status = {
        result : null, // show는 id를 가져온다.  tv와 movie 둘 모두 똑같이 결과를 나타내 줄 것.
        loading : true,
        error : null,
    }

    render() {
        const { result, loading, error} = this.state;
        return (
            <DetailPresenter result={result} loading={loading} error={error}/>
        )
    }
}