import React, { useEffect, useState } from 'react'
import API from '../apis';

import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import NextLink from "../components/NextLink";
import utils from '../utils';
import LeftSideNavigator from '../components/LeftSideNavigator';
import { Label } from '../types';
import DropdownIcon from '../assets/images/ic_dropdown.svg';
import queryString from 'query-string';
import Board from '../components/Board';

const boardIds = [3, 4];

export default withRouter(function Notice({ history, location }) {
    const [waiting, setWaiting] = useState(true);
    const [labels, setLabels] = useState<Label[]>([])
    const [boardId, setBoardId] = useState<number | null>(null)
    const [labelMenus, setLabelMenus] = useState<LabelMenu[]>([]);
    const [selectedLabelMenu, setSelectedLabelMenu] = useState<LabelMenu | null>(null)

    useEffect(() => {
        setWaiting(true);
        API.boardController.getLabels(boardIds).then(({ data }) => {
            setLabels(data)
            setTimeout(() => {
                setWaiting(false);
            }, 10)
        }).catch(error => {
            window.alert(utils.getHttpErrorMessage(error) || "말머리 정보를 불러올 수 없습니다.");
            setWaiting(false);
        })
        return () => { };
    }, []);

    useEffect(() => {
        const boardIdStr = (location.pathname.substr(('/notice').length + 1));
        if (boardIdStr) {
            const boardId = parseInt(boardIdStr);
            if (!isNaN(boardId) && boardIds.includes(boardId)) {
                setBoardId(boardId)
            } else {
                history.replace('/404');
            }
        } else {
            setBoardId(null);
        }
        return () => { };
    }, [location.pathname])

    useEffect(() => {
        const newLabelSelectMenus: LabelMenu[] = [];
        for (let label of labels.filter(label => {
            if (boardId) {
                if (label.board) {
                    return label.board.id === boardId
                } else {
                    return false;
                }
            } else {
                return true
            }
        })) {
            const exisitingMenu = newLabelSelectMenus.find(menu => menu.name === label.name);
            if (!label.board) {
                continue;
            }
            if (exisitingMenu) {
                exisitingMenu.labels.push({ labelId: label.id, boardId: label.board.id });
            } else {
                newLabelSelectMenus.push({ name: label.name, labels: [{ labelId: label.id, boardId: label.board.id }] });
            }
        }
        setLabelMenus(newLabelSelectMenus);
        return () => { };
    }, [boardId, labels])

    useEffect(() => {
        const searchObj = queryString.parse(location.search);
        if (searchObj && searchObj.label) {
            if (Array.isArray(searchObj.label)) {
                setSelectedLabelMenu(
                    (labelMenus.find(menu => {
                        return allContains(
                            menu.labels.map(({ labelId }) => labelId),
                            searchObj.label.map((item: any) => parseInt(item)))
                    })) || null)
            } else {
                setSelectedLabelMenu(
                    (labelMenus.find((labelMenu) => {
                        return labelMenu.labels.length === 1 && labelMenu.labels[0].labelId === parseInt(searchObj.label);
                    })) || null
                )
            }
        } else {
            setSelectedLabelMenu(null);
        }
        return () => { };
    }, [location.search])

    useEffect(() => {
        const searchObj = queryString.parse(location.search);
        if (searchObj && searchObj.label) {
            if (Array.isArray(searchObj.label)) {
                setSelectedLabelMenu(
                    (labelMenus.find(menu => {
                        return allContains(
                            menu.labels.map(({ labelId }) => labelId),
                            searchObj.label.map((item: any) => parseInt(item)))
                    })) || null)
            } else {
                setSelectedLabelMenu(
                    (labelMenus.find((labelMenu) => {
                        return labelMenu.labels.length === 1 && labelMenu.labels[0].labelId === parseInt(searchObj.label);
                    })) || null
                )
            }
        } else {
            setSelectedLabelMenu(null);
        }
        return () => { };
    }, [labelMenus])

    return (
        <div className="notice-page page-top-padding" id="notice-page">
            <div className="container">
                <div className="row">
                    <div className="page-tilte">
                        <h1>게시판</h1>
                        <p>이노베이션 아카데미는 재단 활동과 관련된 전반적인 내용을 투명하게 공개하고 있습니다.</p>
                    </div>
                </div>
                <div className="only-mobile">
                    <div className="sm-3"><BoardSelector boardId={boardId} /></div>
                    <LabelSelector labelMenus={labelMenus} selectedLabel={selectedLabelMenu} />
                </div>
                <div className="row">
                    <div className="only-pc col md-2 position-relative">
                        <LeftSideNavigator topStartElementId="section-wrap" className="notice-navigator" pageId="notice-page" id="notice-navigator" nextPageButtonId="news-link">
                            <BoardSelector boardId={boardId} />
                            <LabelSelector labelMenus={labelMenus} selectedLabel={selectedLabelMenu} />
                        </LeftSideNavigator>
                    </div>
                    <div className="col margin-left-md-1 md-8 sm-6" id="section-wrap">
                        {
                            waiting ?
                                undefined :
                                <Board selectedLabelMenu={selectedLabelMenu} boardId={boardId} />
                        }
                    </div>
                </div>
                <NextLink className="news-link" id="news-link" title="News" description={"이노베이션 아카데미의 다양한 소식들"} link={"/news"} />
            </div>
        </div>
    )
})

export type LabelMenu = { name: string, labels: { labelId: number, boardId: number }[] }

export function getBoardName(boardId: number | null) {
    switch (boardId) {
        case 3:
            return '정보공개'
        case 4:
            return '알림'
        default:
            return '전체'
    }
}

function BoardSelector({ boardId }: { boardId: number | null }) {
    const [opened, setOpened] = useState(false);
    return <div className="board-selector">
        <div className="current-selected" onClick={() => { setOpened(true) }}>
            {getBoardName(boardId)}
            <img src={DropdownIcon} className="dropdown-icon" alt="dropdown" />
        </div>
        {
            opened ?
                <div className="menu">
                    <img src={DropdownIcon} className="dropdown-icon" alt="dropdown" onClick={() => { setOpened(false) }} />
                    <ul>
                        <li>
                            <Link onClick={() => { setOpened(false) }} to={{ pathname: '/notice' }}>전체</Link>
                        </li>
                        {
                            boardIds.map((id, key) => {
                                return <li key={key}>
                                    <Link onClick={() => { setOpened(false) }} to={{ pathname: `/notice/${id}` }}>{getBoardName(id)}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                : undefined
        }
    </div>
}

type LabelSelectorType = RouteComponentProps & { labelMenus: LabelMenu[], selectedLabel: LabelMenu | null };
const LabelSelector = withRouter(({ location, labelMenus, selectedLabel }: LabelSelectorType) => {
    return <ul className="label-selector">
        <li className={!selectedLabel ? "active" : undefined}>
            <Link to={{ pathname: location.pathname, search: '' }}>전체</Link>
        </li>
        {
            labelMenus.map(({ name, labels }, key) => {
                return <li key={key} className={(selectedLabel && selectedLabel.name === name) ? 'active' : undefined}>
                    <Link
                        to={
                            {
                                pathname: location.pathname,
                                search: queryString.stringify({ label: labels.map(({ labelId }) => (labelId)) })
                            }
                        }>
                        {name}
                    </Link>
                </li>
            })
        }
    </ul >
})

function allContains(array1: any[], array2: any[]) {
    let result = true;
    for (let array1Obj of array1) {
        if (!array2.includes(array1Obj)) {
            result = false;
            break;
        }
    }
    return result;
}