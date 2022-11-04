export interface IResponse {
    id: string;
    genres: string[];
    title: string;
    description: string;
    createdAt: string;
    poster: {
        url: string;
    };
}