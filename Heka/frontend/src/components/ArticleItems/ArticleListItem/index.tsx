import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Article } from '../../../types/article.type';
import { Box, Paper } from '@mui/material';

export default function ArticleListItem({ article }: { article: Article }) {
    return (
        <Paper
            sx={{
                mb: 2,
                p: {
                    xs: 1.5,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    mb: 2,
                }}
            >
                {article.source && article.source.name && (
                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle2">
                        {article.source.name}
                    </Typography>
                )}
                {article.publishedAt && (
                    <Typography
                        sx={{
                            fontWeight: '600',
                            fontSize: '0.75rem',
                        }}
                        variant="subtitle2"
                        color="text.secondary"
                    >
                        Date:{' '}
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </Typography>
                )}
            </Box>
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
        </Paper>
    );
}
