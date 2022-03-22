export interface Movie {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

enum MediaType {
    Movie = "movie",
    Tv = "tv",
}

enum OriginalLanguage {
    En = "en",
    Ja = "ja",
}

interface Result {
    backdrop_path: string;
    genre_ids: number[];
    original_language: OriginalLanguage;
    original_title?: string;
    poster_path: string;
    video?: boolean;
    id: number;
    vote_count: number;
    overview: string;
    release_date?: Date;
    title?: string;
    vote_average: number;
    adult?: boolean;
    popularity: number;
    media_type: MediaType;
    first_air_date?: Date;
    original_name?: string;
    origin_country?: string[];
    name?: string;
}
