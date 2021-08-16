export default interface VOD {
    id: number;
    platform_id: string;
    type: number;
    runtime: number;
    purchase: {
        price: number;
        type: number;
    };
    short_summary: string;
    summary: string;
    title: string;
    rating_id: string;
    country: string;
    pictures: {
        backdrops: string[];
        thumbnails: string[];
    };
    availability: {
        start: string;
        end: string;
    };
    eligibility: string;
    nodes: [
        {
            position: number;
            id: number;
        },
    ];
    year: number;
    genre: string;
    subscription_id: string[];
}
