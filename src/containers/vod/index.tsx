import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchVodList } from '../../redux/vod';
import VideoRow from '../video-row';
import VODCard from '../vod-card';

export default function VOD(): JSX.Element {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { videos, status } = useAppSelector((state) => state.vod);

    React.useEffect(() => {
        dispatch(fetchVodList());
    }, []);

    const isLoading = () => !['fulfilled', 'rejected'].includes(status);

    return (
        <VideoRow
            title={t('vodTitle')}
            emptyText={t('emptyText')}
            loading={isLoading()}
        >
            {videos.map((vod) => (
                <VODCard key={vod.id} vod={vod} />
            ))}
        </VideoRow>
    );
}
