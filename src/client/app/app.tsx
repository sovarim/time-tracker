import { createRoot } from 'react-dom/client';
import { Providers } from './providers/Providers';
import '@/client/shared/styles/global.css';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
