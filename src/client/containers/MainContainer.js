import React from 'react';

import SearchByChannelID from '@components/UI/SearchByChannelID';

class MainContainer extends React.Component {

    componentDidMount() {
        // const oauth = Youtube.authenticate({
        //     type: "key",
        //     key: "AIzaSyD9L2HR1-5jd-g317cskOmjVItWykPI4yM"
        // });
        // console.log(oauth);
    }

    render() {        
        return (
            <div>            
                <SearchByChannelID />
            </div>
        );
    }
}

export default MainContainer;


