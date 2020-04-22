import axios from 'axios';
import querystring from 'querystring';
import { Board, Page, Post, Label } from './types';

const contentTypeKey = 'Content-Type';
const contentTypeJson = 'application/json';
const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout: 5000,
    headers: {
        common: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            [contentTypeKey]: 'application/x-www-form-urlencoded charset=UTF-8'
        }
    },
    transformRequest: [(data, headers) => {
        if (headers[contentTypeKey] === contentTypeJson) {
            if (typeof (data) === 'string' || data instanceof String) {
                return data;
            }
            return JSON.stringify(data);
        }
        if (data && FormData && data instanceof FormData)
            return data;

        return querystring.stringify(data)
    }]
});

const jsonContentTypeConfig = {
    headers: { [contentTypeKey]: contentTypeJson }
};

let accountController = {
    registerMailing: function (email: string) {
        return instance.post('/v1/account/mailing?email=' + email);
    }
};

let boardController = {
    getList() {
        return instance.get<Board>('/v1/board');
    },
    getPosts: (id: number, page: number = 0, size: number = 15) => {
        const params = { page, size };
        return instance.get<Page<Post>>(`/v1/board/${id}/posts`, { params });
    },
    getPost: (id: number, postId: number) => {
        return instance.get<Post>(`/v1/board/${id}/posts/${postId}`);
    },
    getLabels(boardIds: number[]) {
        return instance.get<Label[]>(`/v1/board/labels?${querystring.stringify({ boardIds })}`)
    },
    getPostsFromMultipleBoards(ids: number[], page = 0, size = 15) {
        return instance.get<Page<Post>>(`/v1/board/posts?${querystring.stringify({ ids, page, size })}`)
    },
    getLabelPosts(labelIds: number[], page = 0, size = 15) {
        return instance.get<Page<Post>>(`/v1/board/label/posts?${querystring.stringify({ labelIds, page, size })}`)
    }
}

const API = {
    accountController,
    boardController
};

export default API;