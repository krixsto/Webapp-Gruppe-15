import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/All.tsx'
import './styles/reset.css';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
