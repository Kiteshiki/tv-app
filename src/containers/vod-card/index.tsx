import React from 'react';
import { Link } from 'react-router-dom';
import { formatRuntime } from '../../utils/date';
import { VOD } from '../../types';
import styles from './style.module.css';

interface VODProps {
    vod: VOD;
}

export default function VODCard({ vod }: VODProps): JSX.Element {
    const { title, runtime, short_summary, pictures } = vod;
    const {
        vodCard,
        vodThumbnail,
        vodDescription,
        vodContent,
        vodTitle,
        vodTime,
    } = styles;

    const getThumbnail = () => pictures.thumbnails[0];

    return (
        <Link to={`/vod/${vod.id}`} className={vodCard}>
            <div className={vodThumbnail}>
                <img src={getThumbnail()} alt="" />
            </div>

            <div className={vodContent}>
                <div className={vodTitle}>{title}</div>
                <div className={vodTime}>{formatRuntime(runtime)}</div>
                <div className={vodDescription}>{short_summary}</div>
            </div>
        </Link>
    );
}
