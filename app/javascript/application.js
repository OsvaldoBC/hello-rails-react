// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <div>Hello World</div>;
    }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
    );
