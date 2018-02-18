import React from 'react';
import Wrap from '../../helpers/Wrap';
import styles from './Layout.css';

const layout = (props) => (
    <Wrap>
        <div>Layout</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Wrap>
);

export default layout;