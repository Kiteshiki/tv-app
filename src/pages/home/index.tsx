import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSchedule } from '../../redux/schedule';

export default function Home(): JSX.Element {
    const dispatch = useAppDispatch();
    const { programs } = useAppSelector((state) => state.schedule);

    React.useEffect(() => {
        dispatch(fetchSchedule());
    }, []);

    return (
        <div style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
            <ol>
                {programs.map((program) => (
                    <li key={program.id}>{program.title}</li>
                ))}
            </ol>
        </div>
    );
}
