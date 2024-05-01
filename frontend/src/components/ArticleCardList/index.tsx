import React from 'react';
import Grid from '@mui/material/Grid';
import { Article } from '../../types/article.type';
import ArticleCard from '../ArticleCard';

interface ArticleCardListProps {
    articles: Article[];
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({ articles }) => {
    return (
        <Grid container spacing={2}>
            {articles.map((article, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <ArticleCard article={article} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ArticleCardList;
