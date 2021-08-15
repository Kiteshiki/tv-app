export default interface Program {
    id: number;
    channel_id: number;
    platform_id: string;
    runtime: number;
    metatype: string;
    dataset: string;
    broadcast_datetime: string;
    broadcast_end_datetime: string;
    source_id: string;
    title: string;
    subtitle: string;
    description: string;
    short_description: string;
    category: string;
    subcategory: string;
    pictures: {
        thumbnails: string[];
    };
}
