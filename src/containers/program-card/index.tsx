import React from 'react';

import { formatProgramRuntimeDates } from '../../utils/date';
import { Program } from '../../types';
import styles from './style.module.css';

interface ProgramProps {
    program: Program;
}

export default function ProgramCard({ program }: ProgramProps): JSX.Element {
    const { title, broadcast_datetime, broadcast_end_datetime, pictures } = program;
    const { programCard, programThumbnail, programContent, programTitle, programTime } = styles;

    const getThumbnail = () => pictures.thumbnails[0];
    const getRuntime = () => formatProgramRuntimeDates(broadcast_datetime, broadcast_end_datetime);

    return (
        <div className={programCard}>
            <div className={programThumbnail}>
                <img src={getThumbnail()} alt="" />
            </div>

            <div className={programContent}>
                <div className={programTitle}>{title}</div>
                <div className={programTime}>{getRuntime()}</div>
            </div>
        </div>
    );
}
