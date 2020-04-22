import React, { useState, useEffect } from 'react'
import NextLink from '../components/NextLink'
import API from '../apis';

interface Props {

}

const boardIds = [5, 6];

export default function News({ }: Props) {
    const [newsData, setNewsData] = useState<News[] | null>(null);
    const [storiesData, setStoriesData] = useState<News[] | null>(null);
    useEffect(() => {
        fetchData();
        return () => { };
    }, [])

    const fetchData = async () => {
        let newsData: News[] = [], storiesData: News[] = [];
        let errorMessage = null;
        try {
            const response = await API.boardController.getPosts(boardIds[0]);
            storiesData = (response.data.content as News[]);
        } catch (error) {
            errorMessage = '뉴스를 불러오는 데 실패했습니다.'
        }
        try {
            const response = await API.boardController.getPosts(boardIds[1]);
            newsData = (response.data.content as News[]);
        } catch (error) {
            errorMessage = '뉴스를 불러오는 데 실패했습니다.'
        }
        setNewsData(newsData)
        setStoriesData(storiesData)
        if (errorMessage) {
            alert(errorMessage)
        }
    }

    return (
        <div className="news-page page-top-padding">
            <div className="container">
                <div className="row">
                    <div className="page-tilte">
                        <h1>
                            이노베이션 아카데미에 대한<br />
                            다양한 소식을 만나보세요.
                        </h1>
                    </div>
                </div>
                {storiesData && <section className="stories row">
                    {storiesData.map((item, key) => {
                        return <div className="story col md-6" key={key}>
                            <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                <img src={item.thumbnail} alt="" />
                                <div>
                                    <p className="title">{item.title}</p>
                                    <p className="desc" dangerouslySetInnerHTML={{ __html: insertBr(item.summary) || "" }}></p>
                                </div>
                            </a>
                        </div>
                    })}
                </section>}
                {
                    newsData && <section className="news">
                        <div className="grid">
                            {newsData.map((item, key) => {
                                return <div key={key} className="md-4">
                                    <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                        <div className="img" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                                        <p className="title">{item.title}</p>
                                        <p className="desc" dangerouslySetInnerHTML={{ __html: insertBr(item.summary) || "" }}></p>
                                        <span className="from">{item.author}</span>
                                    </a>
                                </div>
                            })}
                        </div>
                    </section>
                }
                <NextLink className="contact-link" title="Contact" description={"이노베이션 아카데미 오시는 길"} link={"/contact"} />
            </div>
        </div>
    )
}


interface News {
    title: string | undefined
    summary: string | undefined
    thumbnail: string | undefined
    author: string | undefined
    link: string | undefined
}

const slickSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    centerMode: false,
    responsive: [{
        breakpoint: 769,
        settings: {
            variableWidth: false,
            dots: true
        }
    }]
};


function insertBr(text?: string) {
    return text ? text.replace(/\n/gi, "<br>") : ""
}
