import { useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { fetchArticles } from '../../services/api.service';
import Box from '@mui/material/Box';
import ArticleCardList from '../../components/ArticleCardList';
import {
    Button,
    CircularProgress,
    InputAdornment,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import Select from '../../components/Select';
import BasicDatePicker from '../../components/BasicDatePicker';
import dayjs from 'dayjs';
import SearchIcon from '@mui/icons-material/Search';
import { Article } from '../../types/article.type';

export default function News() {
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [from, setFrom] = useState(
        searchParams.get('from') ? dayjs(searchParams.get('from')) : null
    );
    const [to, setTo] = useState(
        searchParams.get('to') ? dayjs(searchParams.get('to')) : null
    );
    const [sortBy, setSortBy] = useState(
        searchParams.get('sortBy') || 'publishedAt'
    );
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const [articles, setArticles] = useState<Article[] | null>([]);

    const updateSearchParams = (newParams) => {
        // Start with current search parameters
        const params = new URLSearchParams(searchParams);

        // Update with new values
        Object.entries(newParams).forEach(([key, value]) => {
            if (value != null) {
                // This checks for non-null values but allows values like 0 or false
                params.set(key, value.toString());
            } else {
                params.delete(key); // Remove the parameter if the value is null
            }
        });

        // Set the updated search parameters
        setSearchParams(params, { replace: true });
    };

    const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setNotFound(false);
        }
        setQuery(event.target.value);
        updateSearchParams({ query: event.target.value });
    };

    const onFromChange = (newValue: dayjs.Dayjs) => {
        setTo(null);
        setFrom(newValue);
        updateSearchParams({ from: newValue ? newValue.format() : '', to: '' });
    };

    const onToChange = (newValue: dayjs.Dayjs) => {
        setTo(newValue);
        updateSearchParams({ to: newValue ? newValue.format() : '' });
    };

    const onSortByChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value);
        updateSearchParams({ sortBy: event.target.value });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        updateSearchParams({
            query,
            from: from?.format('YYYY-MM-DD'),
            to: to?.format('YYYY-MM-DD'),
            sortBy,
        });
        let articles = await fetchArticles({
            query,
            from: from?.format('YYYY-MM-DD'),
            to: to?.format('YYYY-MM-DD'),
            sortBy,
        });
        if (!articles || articles.length === 0) setNotFound(true);
        else {
            setNotFound(false);
            // Filter out articles where the source name is 'removed'
            articles = articles.filter(
                (article) => article.source.name.toLowerCase() !== '[removed]'
            );
        }

        setArticles(articles);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Box>
            <Form onSubmit={onSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 1,
                        mb: 3.5,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <TextField
                            fullWidth
                            type="text"
                            id="query"
                            name="query"
                            aria-label="Search news articles"
                            placeholder="Search"
                            value={query}
                            onChange={onQueryChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 1,
                        }}
                    >
                        <BasicDatePicker
                            label="From"
                            value={from}
                            onChange={onFromChange}
                        />
                        <BasicDatePicker
                            label="To"
                            value={to}
                            onChange={onToChange}
                            minDate={from}
                        />
                    </Box>

                    <Box>
                        <Select value={sortBy} onChange={onSortByChange} />
                    </Box>

                    <Button
                        type="submit"
                        value="submit"
                        variant="contained"
                        disableElevation
                        disabled={isLoading}
                    >
                        Search
                    </Button>
                </Box>
            </Form>

            {isLoading ? (
                <div style={{ textAlign: 'center', height: '36.5rem' }}>
                    <CircularProgress />
                </div>
            ) : (
                <div>
                    {articles && articles.length > 0 ? (
                        <ArticleCardList articles={articles} />
                    ) : (
                        <div>
                            <Box sx={{ textAlign: 'center', mt: 4, mb: 8 }}>
                                <Box sx={{ maxWidth: 450, margin: 'auto' }}>
                                    {query && notFound ? (
                                        <>
                                            <img
                                                src="../../../articles-404.svg"
                                                alt="No articles found"
                                                style={{
                                                    maxWidth: '450px',
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                            />
                                            <Typography fontSize="1.125rem">
                                                No articles found for "{query}"
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <img
                                                src="../../../search-news.png"
                                                alt="Type your query"
                                                style={{
                                                    maxWidth: '450px',
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                            />
                                            <Typography fontSize="1.125rem">
                                                Enter search terms to find
                                                articles!
                                            </Typography>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </div>
                    )}
                </div>
            )}
        </Box>
    );
}
