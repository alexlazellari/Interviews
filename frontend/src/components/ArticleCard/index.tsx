import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import { Article } from '../../types/article.type';

export default function ArticleCard({ article }: { article: Article }) {
    console.log(article);
    return (
        <Card sx={{ maxWidth: 345, mb: 2 }}>
            {article.urlToImage && (
                <CardMedia
                    component="img"
                    height="140"
                    image={article.urlToImage}
                    alt={article.title || 'No title available'}
                />
            )}
            <CardContent sx={{ pt: 1 }}>
                {article.source && article.source.name && (
                    <Typography
                        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}
                        variant="subtitle2"
                    >
                        {article.source.name}
                    </Typography>
                )}
                {article.title && (
                    <Typography
                        gutterBottom
                        variant="h3"
                        sx={{ fontSize: '1.25rem', mb: 1 }}
                        component="div"
                    >
                        {article.title}
                    </Typography>
                )}
                {article.description && (
                    <Typography
                        sx={{ mb: 1 }}
                        variant="body2"
                        color="text.secondary"
                    >
                        {article.description}
                    </Typography>
                )}
                {article.author && (
                    <Typography
                        sx={{ mb: 1 }}
                        variant="subtitle2"
                        color="text.secondary"
                    >
                        Author: {article.author}
                    </Typography>
                )}
                {article.publishedAt && (
                    <Typography
                        sx={{ fontWeight: 'bold', textAlign: 'right' }}
                        variant="subtitle2"
                        color="text.secondary"
                    >
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
