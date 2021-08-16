import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSchedule } from '../../redux/schedule';
import ProgramCard from '../program-card';
import VideoRow from '../video-row';

export default function Schedule(): JSX.Element {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { programs, status } = useAppSelector((state) => state.schedule);

    React.useEffect(() => {
        dispatch(fetchSchedule());
    }, []);

    const isLoading = () => !['fulfilled', 'rejected'].includes(status);

    return (
        <VideoRow title={t('scheduleTitle')} emptyText={t('emptyText')} loading={isLoading()}>
            {programs.map((program) => (
                <ProgramCard key={program.id} program={program} />
            ))}
        </VideoRow>
    );
}
