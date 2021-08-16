import dayjs from 'dayjs';

type DateTime = string | number;

export const checkLeadingZero = (v: number): DateTime => (v < 10 ? `0${v}` : v);

export function formatDate(dateTime: DateTime): string {
    return dayjs(dateTime).format('HH:mm MM/DD');
}

export function formatProgramRuntimeDates(
    startDate: DateTime,
    endDate: DateTime,
): string {
    const startTime = dayjs(startDate).format('HH:mm');
    const endTime = dayjs(endDate).format('HH:mm');
    const startDay = dayjs(startDate).format('MM/DD');

    return `${startTime} - ${endTime} ${startDay}`;
}

export function formatRuntime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);

    return `${checkLeadingZero(hours)}:${checkLeadingZero(minutes)}`;
}
