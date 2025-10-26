//Import Modules
// import { StrictMode } from 'react' --(Disabled to prevent multiple function calls related to redux saga in console log)
import { createRoot } from 'react-dom/client'
import { AuthProvider } from "./auth/AuthProvider";
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import App from './app/App.jsx'

// Render Core Application to DOM
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  // </StrictMode>,
);