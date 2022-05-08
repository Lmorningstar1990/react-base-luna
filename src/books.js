import * as React from 'react';
import ReactDOM from 'react-dom/client'
import Books from './components/Books'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<Books />)