import { App } from './pages/editor.page';
import { createRoot } from "react-dom/client";
import './style.css';
import { ApiService } from './api.service';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Anime, Dashboard, App, DownloadedAnime } from './pages/index';


/**
 * 
 * @returns [{title, type, content, id}]
 */

const getDummyData = () => {

    let counter = 0;
    const getID = () => {
        counter += 1;
        return counter;
    }

    const file = (title, type = 'pdf') => ({ title: title, type: type, content: "./content/resume.pdf", id: getID(), active: false });
    const folder = (title, files) => ({ title, type: "folder", content: files, id: getID() });

    const kdrama = folder("kdrama", [file('descendents of the sun'), file('startup')]);
    const anime = folder("anime", [file('death node'), file('naruto')]);

    const items = [anime, kdrama];
    items.push(file('resume', 'txt'));
    items.push(file('nature', 'mp3'));

    items.push(file('resume'));

    return items;

};

const container = document.querySelector('#react_root');
const root = createRoot(container)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/editor",
        element: <App />
    },
    {
        path: "/anime",
        element: <Anime />
    },
    {
        path: "/downloaded-anime",
        element:  <DownloadedAnime />
    }

])

root.render(<RouterProvider router={router} />);
