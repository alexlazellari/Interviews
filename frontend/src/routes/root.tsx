import { useEffect, useState } from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { fetchArticles } from '../services/api.service';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DrawerAppBar from '../components/DrawerAppBar';
import ArticleCardList from '../components/ArticleCardList';
import { Button, TextField } from '@mui/material';
import Select from '../components/Select';
import BasicDatePicker from '../components/BasicDatePicker';
import dayjs from 'dayjs'; // Assuming you are using dayjs

export default function Root() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [from, setFrom] = useState(
        searchParams.get('from') ? dayjs(searchParams.get('from')) : null
    );
    const [to, setTo] = useState(
        searchParams.get('to') ? dayjs(searchParams.get('to')) : null
    );
    const [sortBy, setSortBy] = useState(
        searchParams.get('sort') || 'publishedAt'
    );
    const [query, setQuery] = useState(searchParams.get('query') || '');
    const [articles, setArticles] = useState([]);
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

    useEffect(() => {
        const loadArticles = async () => {
            const results = await fetchArticles({
                query: query,
                from: from ? from.toISOString() : undefined,
                to: to ? to.toISOString() : undefined,
                sortBy: sortBy,
            });
            setArticles(results);
        };
        loadArticles();
    }, [query, from, to, sortBy]);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        updateSearchParams({ query: event.target.value });
    };

    const onFromChange = (newValue) => {
        setFrom(newValue);
        updateSearchParams({ from: newValue ? newValue.format() : '' });
    };

    const onToChange = (newValue) => {
        if (from && newValue && newValue.isBefore(from)) {
            newValue = from;
        }
        setTo(newValue);
        updateSearchParams({ to: newValue ? newValue.format() : '' });
    };

    const onSortByChange = (event) => {
        setSortBy(event.target.value);
        updateSearchParams({ sort: event.target.value });
    };

    return (
        <Box sx={{ margin: { xs: '1rem' } }}>
            <DrawerAppBar />
            <Box component="main" maxWidth="1280px" margin="auto">
                <Toolbar />
                <Box mb={2}>
                    <Form role="search">
                        <TextField
                            type="text"
                            id="query"
                            name="query"
                            aria-label="Search news articles"
                            placeholder="Search"
                            value={query}
                            onChange={handleQueryChange}
                        />
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
                        <Select value={sortBy} onChange={onSortByChange} />
                    </Form>
                </Box>
                {articles && articles.length > 0 ? (
                    <ArticleCardList articles={articles} />
                ) : (
                    <p>No articles found</p>
                )}
            </Box>
        </Box>
    );
}
