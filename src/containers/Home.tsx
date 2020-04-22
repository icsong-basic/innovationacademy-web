import React from 'react'
// @ts-ignore
import Lottie from 'lottie-react-web';
import animationData from '../assets/jsons/main_source_desktop.json';
import animationMobileData from '../assets/jsons/main_source_mobile.json';
import { observer } from 'mobx-react';
import { isMobileWidth } from "../windowWidth";
import {Link} from "react-router-dom";

interface Props {

}

export default observer(function Home({ }: Props) {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: isMobileWidth() ? animationMobileData : animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    let bgWidth = undefined;
    let bgHeight = undefined;

    if (isMobileWidth()) {
        // bgWidth = getWidth() * 0.711;
        // bgHeight = bgWidth * 0.80468;
    }
    else {
        // bgWidth = getWidth() * 0.776;
        // bgWidth = bgWidth > 1194 ? 1194 : bgWidth;
        // bgHeight = bgWidth * 0.49581;
    }

    return (
        <div className="home-page">
            <div className="container background-container">
                <div className="row">
                    <div className="animation col md-12 sm-5 margin-left-sm-1">
                        <Lottie options={defaultOptions} width={bgWidth} height={bgHeight} />
                    </div>
                </div>
            </div>
            <div className="inner-container container">
                <p className="slogan only-pc">
                    이노베이션 아카데미는<br />
                    소프트웨어로 대한민국의 미래를 준비합니다.
                </p>
                <p className="slogan only-mobile">
                    이노베이션<br />
                    아카데미는
                </p>
                <p className="slogan only-mobile">
                    소프트웨어로<br />
                    대한민국의 미래를<br />
                    준비합니다.
                </p>
                <Link to={"/about"}>
                <div className="button">
                    <p>이노베이션 아카데미</p>
                    <p><span>자세히 보기</span><i /></p>
                </div>
                </Link>
            </div>
        </div>
    );
});