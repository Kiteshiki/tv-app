import React from 'react';

import Schedule from '../../containers/schedule';
import VOD from '../../containers/vod';
import styles from './style.module.css';

export default function Home(): JSX.Element {
    return (
        <div className={styles.wrapper}>
            <Schedule />
            <VOD />
        </div>
    );
}
