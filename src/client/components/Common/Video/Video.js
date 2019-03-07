import React from 'react';

import Youtube from './Youtube';

import voca from 'voca';

class Video extends React.Component {

    state = {
        id: '',
    }

    // Video 정체성 찾기
    getVideoSite = () => {
        const { url } = this.props;

        const urlData = voca.trim(url);

        // http로 시작하는지 확인
        const isHttp = voca.startsWith(urlData, 'http', 0);
        if(!isHttp)
            return;

        // https://youtu.be/ 형태의 사이트 추출
        const firstIndex = voca.indexOf(urlData, "https://youtu.be/");
        const endIndex = voca.indexOf(urlData, "?");

        
        console.log(firstIndex);
        console.log(endIndex);

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
        this.getVideoSite();
        const { url, allowFullScreen } = this.props;
        const query = this.makeQuery();
        console.log(query);

        return(
            <React.Fragment>
                <Youtube id={url} allowFullScreen={allowFullScreen} query={query} />
            </React.Fragment>
        );
    }
}

export default Video;