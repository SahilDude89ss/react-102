import React from 'react';

import Navigation from '../components/Header/Navigation';

/**
 *
 * @param children
 * @returns {*[]}
 *
 * @constructor
 */
const AppLayout = ({children}) => {
    return <React.Fragment>
        <Navigation/>
        {children}
    </React.Fragment>
}

export default AppLayout
