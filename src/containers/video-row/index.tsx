import React from 'react';
import Loader from '../loader';
import styles from './style.module.css';

interface VideoRowProps {
    title: string;
    emptyText: string;
    loading: boolean;
    children: React.ReactNode;
}

export default function VideoRow({ title, emptyText, loading, children }: VideoRowProps): JSX.Element {
    const { videoRow, videoRowTitle, videoRowLoading, videoRowEmpty, videoRowList } = styles;

    return (
        <div className={videoRow}>
            <h2 className={videoRowTitle}>{title}</h2>

            {loading ? (
                <div className={videoRowLoading}>
                    <Loader />
                </div>
            ) : children ? (
                <div className={videoRowList}>{children}</div>
            ) : (
                <div className={videoRowEmpty}>{emptyText}</div>
            )}
        </div>
    );
}
