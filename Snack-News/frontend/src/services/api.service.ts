import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Article } from '../types/article.type';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const client = axios.create({
    baseURL: serverUrl,
});

// Define the ArticleQuery type if not already defined
export type ArticleQuery = {
    query?: string;
    from?: string;
    to?: string;
    sortBy?: string;
    pageSize?: number;
};

export type ArticleResponse = {
    status: string;
    totalResults: number;
    articles: Article[];
};

// Fetch articles from the server
export async function fetchArticles(
    articleQuery: ArticleQuery
): Promise<Article[] | null> {
    const params = new URLSearchParams();

    // Add query parameters only if they exist
    if (articleQuery.query) params.append('query', articleQuery.query);
    if (articleQuery.from) params.append('from', articleQuery.from);
    if (articleQuery.to) params.append('to', articleQuery.to);
    if (articleQuery.sortBy) params.append('sortBy', articleQuery.sortBy);
    if (articleQuery.pageSize)
        params.append('pageSize', articleQuery.pageSize.toString());

    const config: AxiosRequestConfig = {
        headers: {
            Accept: 'application/json',
        },
        params: params,
    };

    try {
        const response: AxiosResponse<ArticleResponse> = await client.get(
            `/articles`,
            config
        );

        // Check if the response status code is 200 (OK)
        if (response.status === 200) {
            return response.data.articles;
        } else {
            console.error('Failed to fetch articles:', response.status);
            return null; // You can return an error message or throw an error as needed
        }
    } catch (err) {
        // Handle errors from Axios
        if (axios.isAxiosError(err)) {
            console.error('Axios error:', err.response?.status, err.message);
        } else {
            console.error('Unexpected error:', err);
        }
        return null; // Return null or handle differently based on your application's needs
    }
}
