import { createRoot } from 'react-dom/client';
import { Providers } from './providers/Providers';
import Tasks from '@/client/screens/Tasks';

const App = () => {
  return (
    <Providers>
      <Tasks />
    </Providers>
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
