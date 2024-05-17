import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import { Article } from '../../../types/article.type';

export default function ArticleMasonryItem({ article }: { article: Article }) {
    return (
        <Card sx={{ mb: 2 }}>
            {article.urlToImage && (
                <CardMedia
                    component="img"
                    image={article.urlToImage}
                    alt={article.title || 'No title available'}
                />
            )}
            <CardContent sx={{ pt: 1, px: 1.75 }}>
                {article.source && article.source.name && (
                    <Typography
                        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}
                        variant="subtitle2"
                    >
                        - {article.source.name} -
                    </Typography>
                )}
                {article.title && (
                    <Typography
                        gutterBottom
                        variant="h3"
                        sx={{ fontSize: '1.125rem', mb: 1 }}
                        component="div"
                    >
                        {article.title}
                    </Typography>
                )}
                {article.description && (
                    <Typography
                        sx={{ mb: 1, fontSize: '0.875rem' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {article.description}
                    </Typography>
                )}
                {article.publishedAt && (
                    <Typography
                        sx={{
                            fontWeight: '400',
                            textAlign: 'right',
                            fontSize: '0.75rem',
                        }}
                        variant="subtitle2"
                        color="text.secondary"
                    >
                        -- Date:{' '}
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                {article.url && (
                    <Link
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body2"
                        sx={{ m: 'auto' }}
                    >
                        Read Full Article
                    </Link>
                )}
            </CardActions>
        </Card>
    );
}
