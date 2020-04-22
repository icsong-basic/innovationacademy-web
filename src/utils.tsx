export default {
    getScrollTop() {
        return (window.pageYOffset || document.documentElement.scrollTop);
    },
    getScrollLeft() {
        return (window.pageXOffset || document.documentElement.scrollLeft);
    },
    getHttpErrorMessage(error: any) {
        return error && error.response && error.response.data ? error.response.data.message : null;
    }
}