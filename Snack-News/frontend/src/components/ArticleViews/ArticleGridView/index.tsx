import React from 'react';
import { Article } from '../../../types/article.type';
import { Grid } from '@mui/material';
import ArticleGridItem from '../../ArticleItems/ArticleGridItem';

interface Props {
    articles: Article[];
}

const ArticleGridView: React.FC<Props> = ({ articles }) => {
    return (
        <Grid container spacing={2} sx={{ mb: 4 }}>
            {articles.map((article, index) => (
                <ArticleGridItem article={article} key={index} />
            ))}
        </Grid>
    );
};

export default ArticleGridView;
