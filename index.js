import { App } from './app';
import { createRoot } from "react-dom/client";
import './style.css';

const container = document.querySelector('#react_root');
const root = createRoot(container)

root.render(<App />);
