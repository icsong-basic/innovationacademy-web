import React, { useEffect } from 'react'
import utils from '../utils';

interface Props {
    id: string,
    pageId: string,
    nextPageButtonId: string,
    className: string,
    topStartElementId: string,
    children: React.ReactNode,
    nextButtonDistanceMargin?: number
}

export default function LeftSideNavigator({ id, pageId, nextPageButtonId, className, topStartElementId, children, nextButtonDistanceMargin = 50 }: Props) {
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        window.addEventListener('resize', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        };
    }, [])

    const onScroll = (e: any) => {
        const navEl = document.getElementById(id) as HTMLElement;
        const pageContainer = document.getElementById(pageId) as HTMLElement;
        const nextPageButtonEl = document.getElementById(nextPageButtonId) as HTMLElement;
        const navParentEl = ((navEl).parentNode as HTMLElement);

        const containerEl = pageContainer.children[0] as HTMLElement;
        const appbarEl = document.getElementById('appbar') as HTMLElement;
        const rowEl = document.getElementById(topStartElementId) as HTMLElement;

        if (!navEl || !appbarEl || !containerEl) {
            return;
        }

        if (utils.getScrollTop() > (rowEl.offsetTop - appbarEl.offsetHeight - 20)) {
            navEl.style.position = 'fixed';
            navEl.style.width = navParentEl.clientWidth + 'px';
            const distanceToNextPageButton = (nextPageButtonEl.offsetTop - utils.getScrollTop() - navEl.clientHeight - appbarEl.clientHeight - nextButtonDistanceMargin);

            if (distanceToNextPageButton > 0) {
                navEl.style.top = (appbarEl.offsetHeight + 20) + 'px';
            } else {
                navEl.style.top = distanceToNextPageButton + appbarEl.clientHeight + 20 + 'px';
            }
            navEl.style.left = ((pageContainer.clientWidth - 1194) / 2 - document.documentElement.scrollLeft) + 'px'
        } else {
            navEl.style.position = 'absolute';
            navEl.style.width = '';
            navEl.style.top = '0';
            navEl.style.left = '0';
        }
    };

    return (
        <div className={className} id={id}>
            {children}
        </div>
    )
}
