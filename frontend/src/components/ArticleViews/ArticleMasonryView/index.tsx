import React from 'react';
import Masonry from '@mui/lab/Masonry';
import { Article } from '../../../types/article.type';
import ArticleMasonryItem from '../../ArticleItems/ArticleMasonryItem';

interface Props {
    articles: Article[];
}

const ArticleMasonryView: React.FC<Props> = ({ articles }) => {
    return (
        <Masonry
            sx={{ m: 0, mt: -1, mb: 4 }}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            spacing={2}
            sequential
        >
            {articles.map((article, index) => (
                <ArticleMasonryItem article={article} key={index} />
            ))}
        </Masonry>
    );
};

export default ArticleMasonryView;
