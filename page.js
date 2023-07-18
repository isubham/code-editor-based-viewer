import { createRoot } from "react-dom/client";
import './style.css';
import { App } from "./app";



const container = document.querySelector('#react_root');
const root = createRoot(container)

root.render(<App />);
