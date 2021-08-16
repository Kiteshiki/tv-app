import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchVod } from '../../redux/vod';
import { VOD } from '../../types';

import styles from './style.module.css';
import { formatRuntime } from '../../utils/date';
import Loader from '../../containers/loader';

export default function VODPage(): JSX.Element {
    const [vod, setVod] = React.useState<VOD | undefined>(undefined);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const { vodWrapper } = styles;

    React.useEffect(() => {
        dispatch(fetchVod(id)).then(({ payload }) => {
            setVod(payload.content);
        });
    }, []);

    const getPicture = () =>
        (vod && vod.pictures.backdrops?.[0]) || vod.pictures.thumbnails?.[0];

    if (!vod) return <Loader />;

    return (
        <div className={vodWrapper}>
            <Link
                style={{ display: 'inline-block', marginBottom: '1rem' }}
                to="/"
            >
                Back
            </Link>

            <img src={getPicture()} width="100%" alt="" />

            <h1>
                {vod.title} <span>({formatRuntime(vod.runtime)})</span>
            </h1>

            <p>{vod.summary}</p>
        </div>
    );
}
