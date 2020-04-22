export interface Label { id: number, name: string, board?: { id: number } }
export interface Board {
    id: number,
    name: string,
    labels: Label[]
}
export interface Page<T> {
    content: T[],
    last: boolean,
    totalPages: number,
    totalElements: number,
    numberOfElements: number,
    first: boolean,
    size: number,
    number: number
}
export interface Post {
    id: number,
    boardId: number,
    labels: Label[],
    author: string,
    title: string,
    thumbnail: string,
    image: string,
    summary: string,
    link: string,
    attachments: string,
    writeAt: number,
    publishedAt: number
    contents: string | undefined
}