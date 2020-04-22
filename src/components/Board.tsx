import React, { useState, useEffect } from 'react'
import API from '../apis';
import { withRouter, RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import { Post, Page } from '../types';
import utils from '../utils';
import { LabelMenu, getBoardName } from '../containers/Notice';
import moment from 'moment';
import ReactPaginate from 'react-paginate';

const boardIds = [3, 4];
type Props = RouteComponentProps & {
    boardId?: number | null,
    selectedLabelMenu: LabelMenu | null
}
const pageSize = 6;
export default withRouter(function Board({ history, location, boardId, selectedLabelMenu }: Props) {
    const [pageData, setPageData] = useState<Page<Post> | null>(null);
    const [page, setPage] = useState(getPageName(location)) // 1부터 시작, api호출시에는 -1 해서 호출
    const [selectedPost, setSelectedPost] = useState<Post | null>(null)

    useEffect(() => {
        const errorMessage = '게시물을 불러올 수 없습니다.'
        if (selectedLabelMenu) {
            setPageData(null)
            API.boardController.getLabelPosts(selectedLabelMenu.labels.map(item => item.labelId), page - 1, pageSize).then(({ data }) => {
                setPageData(data);
            }).catch(error => {
                window.alert(utils.getHttpErrorMessage(error) || errorMessage)
            })
        } else {
            setPageData(null)
            API.boardController.getPostsFromMultipleBoards(boardId ? [boardId] : boardIds, page - 1, pageSize).then(({ data }) => {
                setPageData(data);
            }).catch(error => {
                window.alert(utils.getHttpErrorMessage(error) || errorMessage)
            })
        }
        return () => { };
    }, [boardId, selectedLabelMenu, page])

    useEffect(() => {
        setPage(getPageName(location))
        return () => { };
    }, [location.search])

    useEffect(() => {
        const postId = getPostId(location);
        const boardId = getPostBoardId(location);
        if (postId && boardId) {
            API.boardController.getPost(boardId, postId).then(({ data }) => {
                setSelectedPost(data);
            }).catch(error => {
                window.alert(utils.getHttpErrorMessage(error) || '게시글을 불러오는 데 실패했습니다.')
            })
        } else {
            setSelectedPost(null)
        }

        return () => { };
    }, [location.search])

    const getLabelName = (post: Post) => {
        return post.labels && post.labels.length > 0 ? ` | ${post.labels.map(item => item.name).join(' | ')}` : '';
    }

    const renderPosts = () => {
        return <>
            <ul className="posts">
                {
                    pageData ?
                        (
                            pageData.content.length === 0 ?
                                <li className="empty">0건이 조회되었습니다.</li> :
                                pageData.content.map((item, key) => {
                                    return <li key={key} onClick={() => {
                                        const queryParam = queryString.parse(location.search);
                                        queryParam.board = item.boardId;
                                        queryParam.post = item.id;
                                        history.push(`${location.pathname}?${queryString.stringify(queryParam)}`)
                                    }}>
                                        <p className="top">
                                            {getBoardName(item.boardId)} {getLabelName(item)}
                                            <span className="date">{moment(item.writeAt).format('YYYY.MM.DD')}</span>
                                        </p>
                                        <p className="title">
                                            {item.title}
                                        </p>
                                    </li>
                                })
                        )
                        : undefined
                }
            </ul>
            {
                pageData && pageData.totalPages > 0 ?
                    <ReactPaginate
                        pageRangeDisplayed={7}
                        marginPagesDisplayed={3}
                        containerClassName="paginate"
                        pageCount={pageData ? pageData.totalPages : 1}
                        forcePage={page - 1}
                        previousLabel=""
                        nextLabel=""
                        onPageChange={({ selected }) => {
                            const searchObj = queryString.parse(location.search);
                            searchObj.page = selected + 1;
                            history.push(`${location.pathname}?${queryString.stringify(searchObj)}`);
                        }}
                    />
                    : undefined
            }
        </>
    }

    const renderPost = () => {
        return selectedPost ? <div className="post">
            <p className="top">{getBoardName(selectedPost.boardId)} {getLabelName(selectedPost)}</p>
            <p className="title">{selectedPost.title}</p>
            <p className="author">{selectedPost.author}</p>
            <p className="writeAt">{moment(selectedPost.writeAt).format('YYYY.MM.DD')}</p>
            <p className="contents" dangerouslySetInnerHTML={{ __html: selectedPost.contents || "" }} />
            {
                selectedPost.attachments ?
                    <a className="attachments" target="_blank" rel="noopener noreferrer" href={selectedPost.attachments}>첨부파일</a>
                    : undefined
            }
        </div> : undefined
    }

    return (
        <div className="board">
            {
                selectedPost ?
                    renderPost() :
                    renderPosts()
            }
        </div>
    )
})

function getPageName(location: any) {
    const searchObj = queryString.parse(location.search)
    if (searchObj.page && !isNaN(parseInt(searchObj.page))) {
        return parseInt(searchObj.page);
    }
    return 1;
}

function getPostId(location: any) {
    const searchObj = queryString.parse(location.search)
    if (searchObj.post && !isNaN(parseInt(searchObj.post))) {
        return parseInt(searchObj.post);
    }
    return null;
}

function getPostBoardId(location: any) {
    const searchObj = queryString.parse(location.search)
    if (searchObj.board && !isNaN(parseInt(searchObj.board))) {
        return parseInt(searchObj.board);
    }
    return null;
}