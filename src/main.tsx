import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './views/ErrorBoundary.tsx';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <ErrorBoundary>
        <RouterProvider router={App} />
      </ErrorBoundary>
    </ConvexProvider>
  </StrictMode>,
)
