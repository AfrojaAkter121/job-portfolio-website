import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './router/Router.jsx';
import ThemeProvider from './Context/ThemeProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
     <RouterProvider router={router} />
     </ThemeProvider>
  </StrictMode>,
)
