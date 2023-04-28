import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import Home from './pages/Home';
import { GlobalStyle } from './styles';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <GlobalStyle />
         <RouterProvider router={router} />
      </QueryClientProvider>
   </React.StrictMode>
);
