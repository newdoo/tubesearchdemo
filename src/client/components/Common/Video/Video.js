import React from 'react';

import Youtube from './Youtube';
import Vimeo from './Vimeo';

import voca from 'voca';
import { format } from 'path';

class Video extends React.Component {

    state = {
        platform: 'default',
        id: '',
        query: '',
    }

    componentDidMount() {
        this.setVideoSite(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        this.setVideoSite(nextProps);
    }

    // Video 정체성 찾기
    setVideoSite = (props) => {
        console.log('setVideoSite');
        const { url } = props;

        let urlTemp = voca.trim(url);

        // http로 시작하는지 확인
        const isHttp = voca.startsWith(urlTemp, 'http', 0);
        if(!isHttp)
            return;

        // http => https 변환
        urlTemp = voca.replace(urlTemp, 'http://', 'https://');
        console.log(urlTemp);

        // https://youtube.com => https://www.youtube.com 변환
        urlTemp = voca.replace(urlTemp, 'https://youtube.com', 'https://www.youtube.com');
        console.log(urlTemp);

        // https://vimeo.com => https://www.vimeo.com 변환
        urlTemp = voca.replace(urlTemp, 'https://vimeo.com', 'https://www.vimeo.com');
        console.log(urlTemp);

        if(voca.indexOf(urlTemp, "https://youtu.be/") === 0) { // https://youtu.be/ 형태의 사이트 추출
            // https://youtu.be/id?query
            const exceptHttp = voca.splice(urlTemp, 0, 17);
            const splitData = voca.split(exceptHttp, /\?/, 2);
            console.log(splitData);
            this.setState({platform: 'youtube', id: splitData[0], query: '?' + splitData[1]});
        }
        if(voca.indexOf(urlTemp, "https://www.youtube.com/watch?") === 0) { // https://www.youtube.com/watch? 형태의 사이트 추출
            // https://www.youtube.com/watch?query v=id
            const exceptHttp = voca.splice(urlTemp, 0, 30);
            console.log(exceptHttp);
            const splitData = voca.split(exceptHttp, '&');
            console.log(splitData);
            let qq = '?';
            for(var i=0;i<splitData.length;++i) {
                if( voca.matches(splitData[i], /v=*/) ) {
                    const id = voca.splice(splitData[i], 0, 2);
                    this.setState({platform: 'youtube', id: id});
                } else {
                    qq += splitData[i] + '&';
                }
            }
            this.setState({query: qq});
        }
        if(voca.indexOf(urlTemp, "https://www.youtube.com/embed/") === 0) { // https://www.youtube.com/embed/ 형태의 사이트 추출
            // https://www.youtube.com/embed/id?query
            const exceptHttp = voca.splice(urlTemp, 0, 30);
            const splitData = voca.split(exceptHttp, /\?/, 2);
            console.log(splitData);
            this.setState({platform: 'youtube', id: splitData[0], query: '?' + splitData[1]});
        }
        if(voca.indexOf(urlTemp, "https://www.vimeo.com/") === 0) { // https://www.vimeo.com/ 형태의 사이트 추출
            // https://www.vimeo.com/id?query
            const exceptHttp = voca.splice(urlTemp, 0, 22);
            const splitData = voca.split(exceptHttp, /\?/, 2);
            console.log(splitData);
            this.setState({platform: 'vimeo', id: splitData[0], query: '?' + splitData[1]});
        }
        if(voca.indexOf(urlTemp, "https://www.vimeo.com/channels/staffpicks/") === 0) { // https://www.vimeo.com/channels/staffpicks/ 형태의 사이트 추출
            // https://www.vimeo.com/channels/staffpicks/id?query
            const exceptHttp = voca.splice(urlTemp, 0, 42);
            const splitData = voca.split(exceptHttp, /\?/, 2);
            console.log(splitData);
            this.setState({platform: 'vimeo', id: splitData[0], query: '?' + splitData[1]});
        }
        if(voca.indexOf(urlTemp, "https://player.vimeo.com/video/") === 0) { // https://player.vimeo.com/video/ 형태의 사이트 추출
            // https://player.vimeo.com/video/id?query
            const exceptHttp = voca.splice(urlTemp, 0, 31);
            const splitData = voca.split(exceptHttp, /\?/, 2);
            console.log(splitData);
            this.setState({platform: 'vimeo', id: splitData[0], query: '?' + splitData[1]});
        }


    }

    // Query 만들기(유튜브 쿼리)
    makeQuery = () => {
        const { autoplay, cc_load_policy, color, controls, disablekb, enablejsapi, start, end, fs, hl, iv_load_policy, modestbranding, loop, playlist } = this.props;
        let query = "?";
        if(autoplay)
            query += "autoplay=1";
        else
            query += "autoplay=0";
        
        if(cc_load_policy)
            query += "&cc_load_policy=1";

        if(color)
            query += "&color="+color;

        if(controls)
            query += "&controls="+controls;

        if(disablekb)
            query += "&disablekb=1";

        if(enablejsapi)
            query += "&enablejsapi=1";

        if(start)
            query += "&start="+start;

        if(end)
            query += "&end="+end;

        if(fs)
            query += "&fs="+fs;

        if(hl)
            query += "&hl="+hl;

        if(iv_load_policy)
            query += "&iv_load_policy=3";

        if(modestbranding)
            query += "&modestbranding=1";

        if(loop)
            query += "&loop=1";

        if(playlist)
            query += "&playlist="+playlist;

        return query;
    }

    render() {
        const { allowFullScreen } = this.props;
        const { platform, id, query } = this.state;
        console.log('id : ' + id);
        console.log('query : ' + query);

        return(
            <React.Fragment>
                { platform === 'youtube' && <Youtube id={id} query={query} allowFullScreen={allowFullScreen} /> }
                { platform === 'vimeo' && <Vimeo id={id} query={query} allowFullScreen={allowFullScreen} /> }
                { platform === 'default' && <div>동영상 플랫폼을 식별할 수 없습니다. 관리자에게 문의하세요.</div>}
            </React.Fragment>
        );
    }
}

export default Video;