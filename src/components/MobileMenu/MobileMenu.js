import React from 'react'
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'

import styles from './MobileMenu.module.css'
import 'hamburgers/dist/hamburgers.css'

// IDEA: reuse menu items from normal navigation to keep a single source of data and links.
const MobileMenu = ({ goToSection, setMenuIsOpen }) => {
    const menuItemData = [
        {
            href: '#about',
            text: 'About',
        },
        {
            href: '#projects',
            text: 'Projects',
        },
        {
            href: '#skills',
            text: 'Skills',
        },
        {
            href: '#contact',
            text: 'Contact',
        },
    ]

    const menuItems = menuItemData.map((item, i) => (
        <li key={i}>
            <MenuItem className={styles.menuItem}>
                <a href={item.href} onClick={goToSection}>
                    {item.text}
                </a>
            </MenuItem>
        </li>
    ))

    const preventBackgroundScroll = state => {
        setMenuIsOpen(state.isOpen)
        document.querySelector('button.hamburger').classList.toggle('is-active')
        document.documentElement.style.overflow = state.isOpen ? 'hidden' : ''
    }

    // TODO: Investigate why this doesn't scroll to menu items on mobile.

    return (
        <Wrapper
            className={styles.mobileMenu}
            onMenuToggle={preventBackgroundScroll}
        >
            <Button className={styles.button}>
                <button class="hamburger hamburger--slider" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </Button>
            <Menu className={styles.items}>
                <ul>{menuItems}</ul>
            </Menu>
        </Wrapper>
    )
}

export default MobileMenu
