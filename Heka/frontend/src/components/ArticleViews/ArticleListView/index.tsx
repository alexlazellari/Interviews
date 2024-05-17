import React from 'react';
import { Article } from '../../../types/article.type';
import Box from '@mui/material/Box';
import ArticleListItem from '../../ArticleItems/ArticleListItem';

interface Props {
    articles: Article[];
}

const ArticleListView: React.FC<Props> = ({ articles }) => {
    return (
        <Box sx={{ mb: 4 }}>
            {articles.map((article, index) => (
                <ArticleListItem article={article} key={index} />
            ))}
        </Box>
    );
};

export default ArticleListView;
