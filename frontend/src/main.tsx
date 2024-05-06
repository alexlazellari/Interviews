import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './views/Error';
import Landing from './views/Landing';
import Visitor from './layouts/Visitor';
import News from './views/News';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Visitor />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'news',
                element: <News />,
            },
        ],
    },
]);

const theme = createTheme({
    palette: {
        mode: 'light',
        contrastThreshold: 4.5,
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
