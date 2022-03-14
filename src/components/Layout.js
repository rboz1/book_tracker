import React from 'react';
import {Global , css} from '@emotion/react';

const Layout = ({children}) => {
    return (
    <React.Fragment>
        <Global styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
            * {
                color: black;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                
                h1{
                    font-weight: 400;
                }
            }

        `}
        />
        {children}
     </React.Fragment>
    );
}

export default Layout;