import React from 'react';
import ImgArrow from '../assets/images/ic-arrow-large.svg';
import ImgHex from '../assets/images/ic-hexagon-16-px.svg';

interface Props {
    title: string,
    description: string,
    link: string,
    className?: string,
    id?: string
}

export default function NextLink({ id, className, title = '타이틀', description = '설명', link = '#' }: Props) {

    return (
        <a href={link} className={`next-link ${className}`} id={id}>
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
            <div className="link">
                <img className="arrow" src={ImgArrow} />
                <img className="hexagon" src={ImgHex} />
            </div>
        </a>
    )
}
