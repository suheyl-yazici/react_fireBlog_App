import './App.css';
import AuthContextProvider from './contexts/AuthContext';
import BlogContextProvider from './contexts/BlogContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
