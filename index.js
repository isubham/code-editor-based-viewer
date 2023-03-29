import { App } from './app';
import { createRoot } from "react-dom/client";
import './style.css';

const container = document.querySelector('#container');
const root = createRoot(container)

root.render(<App />);
