import React from 'react';
import Masonry from '@mui/lab/Masonry';
import ArticleCard from '../ArticleCard';
import { Article } from '../../types/article.type';

interface ArticleCardListProps {
    articles: Article[];
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({ articles }) => {
    return (
        <Masonry
            sx={{ m: 0, mb: 4 }}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            spacing={2}
        >
            {articles.map((article, index) => (
                <ArticleCard article={article} key={index} />
            ))}
        </Masonry>
    );
};

export default ArticleCardList;
