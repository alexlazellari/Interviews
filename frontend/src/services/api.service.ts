import axios, {
    AxiosResponse,
    AxiosRequestConfig,
    RawAxiosRequestHeaders,
} from 'axios';
import { Article } from '../types/article.type';

const serverUrl = import.meta.env.VITE_SERVER_URL;

const client = axios.create({
    baseURL: serverUrl,
});

/**
 * Fetches articles based on a search query.
 * @param {string} query - The query to search for articles.
 * @returns {Promise<Article[]> | null} - A promise that resolves to an array of articles or null if an error occurs.
 */
export async function fetchArticles(query: string): Promise<Article[] | null> {
    const config: AxiosRequestConfig = {
        headers: {
            Accept: 'application/json',
        } as RawAxiosRequestHeaders,
    };
    const queryString: string = `query=${encodeURIComponent(query)}`;

    try {
        const response: AxiosResponse<{ data: Article[] }> = await client.get(
            `/articles?${queryString}`,
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
