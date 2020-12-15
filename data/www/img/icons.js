window.icons = {
    'pre': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">',
    'post': '</svg>',

    'music': '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
    'network': '<path d=" M 9 2 L 9 8 L 15 8 L 15 2 L 9 2 Z " /><path d=" M 12 8 L 12 12 M 12 12 L 5 12 L 5 16 M 12 12 L 19 12 L 19 16" /><path d=" M 8 16 L 2 16 L 2 22 L 8 22 L 8 16 Z " /><path d=" M 16 16 L 16 22 L 22 22 L 22 16 L 16 16 Z " />',
    'disc': '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
    'hard-drive': '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
    'laptop': '<path d="M6 16.4h12"></path><path d="M17 7H7v7h10V7z"></path>',
    'radio': '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',

    'volume': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
    'settings': '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
    'chevron-right': '<polyline points="9 18 15 12 9 6"></polyline>',
    'plus': '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
    'minus': '<line x1="5" y1="12" x2="19" y2="12"></line>',
    'lock': '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    'rotate-cw': '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
    'unlock': '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',

    'wifi-0': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/>',
    'wifi-1': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 17.056 15.24 L 12.01 21.526 L 12 21.536 L 11.99 21.526 L 6.944 15.24 C 8.321 14.705 10.032 14.28 12 14.28 C 13.968 14.28 15.679 14.705 17.056 15.24 Z " fill="rgb(77,132,195)"/>',
    'wifi-2': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 19.058 12.745 L 12.01 21.526 L 12 21.536 L 11.99 21.526 L 4.942 12.745 C 6.463 11.873 8.917 10.829 12 10.829 C 15.083 10.829 17.537 11.873 19.058 12.745 Z " fill="rgb(77,132,195)"/>',
    'wifi-3': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 2.273 9.42 L 11.989 21.525 L 12 21.536 L 12.011 21.525 L 21.727 9.42 C 21.233 9.041 17.524 6.033 12 6.033 C 6.476 6.033 2.767 9.041 2.273 9.42 Z " fill="rgb(77,132,195)"/>',
    'wifi-4': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(77,132,195)"/>',

    'wifi-0-secure': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/>',
    'wifi-1-secure': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 17.056 15.24 L 12.01 21.526 L 12 21.536 L 11.99 21.526 L 6.944 15.24 C 8.321 14.705 10.032 14.28 12 14.28 C 13.968 14.28 15.679 14.705 17.056 15.24 Z " fill="rgb(77,132,195)"/>',
    'wifi-2-secure': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 19.058 12.745 L 12.01 21.526 L 12 21.536 L 11.99 21.526 L 4.942 12.745 C 6.463 11.873 8.917 10.829 12 10.829 C 15.083 10.829 17.537 11.873 19.058 12.745 Z " fill="rgb(77,132,195)"/>',
    'wifi-3-secure': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(225,225,225)"/><path d=" M 2.273 9.42 L 11.989 21.525 L 12 21.536 L 12.011 21.525 L 21.727 9.42 C 21.233 9.041 17.524 6.033 12 6.033 C 6.476 6.033 2.767 9.041 2.273 9.42 Z " fill="rgb(77,132,195)"/>',
    'wifi-4-secure': '<path d=" M 12.01 21.526 L 24 6.588 C 23.536 6.237 18.918 2.464 12 2.464 C 5.072 2.464 0.464 6.237 0 6.588 L 11.99 21.526 L 12 21.536 L 12.01 21.526 Z " fill="rgb(77,132,195)"/>'
}