import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import { Article } from '../../../types/article.type';
import { Grid } from '@mui/material';

// Function to truncate text
const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength
        ? `${text.substring(0, maxLength)}...`
        : text;
};

export default function ArticleGridItem({ article }: { article: Article }) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {article.urlToImage && (
                    <CardMedia
                        component="img"
                        image={article.urlToImage}
                        alt={article.title || 'No title available'}
                        sx={{ height: 150 }}
                    />
                )}
                <CardContent sx={{ pt: 1, px: 1.75, flex: 1 }}>
                    {article.source && article.source.name && (
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                mb: 1,
                            }}
                            variant="subtitle2"
                        >
                            - {article.source.name} -
                        </Typography>
                    )}
                    {article.title && (
                        <Typography
                            gutterBottom
                            variant="h3"
                            sx={{
                                fontSize: '1.125rem',
                                mb: 1,
                            }}
                            component="div"
                        >
                            {truncateText(article.title, 75)}
                        </Typography>
                    )}
                    {article.description && (
                        <Typography
                            sx={{
                                mb: 1,
                                fontSize: '0.875rem',
                                overflow: 'hidden',
                            }}
                            variant="body2"
                            color="text.secondary"
                        >
                            {truncateText(article.description, 150)}
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
                <CardActions sx={{ pb: 1.5 }}>
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
        </Grid>
    );
}
