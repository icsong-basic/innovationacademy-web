import React from 'react'
import { isMobileWidth } from '../windowWidth';
import { observer } from 'mobx-react';

const OPEN_CLASSNAME = "opened"

export function setOpened(opened: boolean) {
    const element = document.getElementById('hamburger-menu')
    if (!element) {
        return
    }
    if (opened && !element.classList.contains(OPEN_CLASSNAME)) {
        element.classList.add(OPEN_CLASSNAME)
    } else if (!opened && element.classList.contains(OPEN_CLASSNAME)) {
        element.classList.remove(OPEN_CLASSNAME)
    }
}

export function open() { setOpened(true) }
export function close() { setOpened(false) }

export default observer(function HamburgerMenu() {
    if (!isMobileWidth) {
        return null;
    }
    return (
        <div id="hamburger-menu">
            
        </div>
    )
}
)