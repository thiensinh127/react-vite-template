import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './config/routes.tsx';
import { store } from './config/store.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>,
)


