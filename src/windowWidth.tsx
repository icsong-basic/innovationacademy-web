import { observable } from "mobx";

(window as any).addEventListener('resize', function () {
    width.set(window.outerWidth);
})

const width = observable.box(window.outerWidth);

export function getWidth() {
    return width.get()
};

export function isMobileWidth() {
    return window.matchMedia ?
        window.matchMedia('(max-width: 768px)').matches :
        width.get() <= 768;
};