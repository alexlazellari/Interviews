import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, useLoaderData } from 'react-router-dom';
import DrawerAppBar from '../components/DrawerAppBar';
import { fetchArticles } from '../services/api.service';
import { Article } from '../types/article.type';
import ArticleCardList from '../components/ArticleCardList';

export async function loader(): Promise<Article[] | null> {
    const articles = await fetchArticles('elon musk');
    return articles;
}

export default function Root() {
    const articles: Article[] = useLoaderData();
    return (
        <Box
            sx={{
                margin: {
                    xs: '1rem',
                },
            }}
        >
            <DrawerAppBar />
            <Box component="main" maxWidth="1280px" margin="auto">
                <Toolbar />
                {articles.length > 0 ? (
                    <ArticleCardList articles={articles} />
                ) : (
                    <p>No articles found</p>
                )}
                <Outlet />
            </Box>
        </Box>
    );
}
