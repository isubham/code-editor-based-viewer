import { Sidebar } from "./sidebar";
import { useState } from "react";
import { ContentArea } from "./content-area";

const App = () => {

    const item = {title: "resume.pdf", type: "pdf", content: "./content/resume.pdf", active: false};

    const items = [item];
    for(let i = 0; i < 100; i++)
    {
        items.push({...item, title: `${item.title}_${i}`, id: i});
    }

    const [selectedItems, setSelectedItems] = useState([]);
    const [history, setHistory] = useState([]);

    const setActive = (file, selectedItems) => {
        console.log('item clicked in openedfiles', item)
        const updatedItems = selectedItems.map(e => {
            if (file.id == e.id) {
                e.active = true;
            }
            else {
                e.active = false;
            }
            return e;
        })
        return updatedItems;

    }

    const openInOpenedFiles = (selectedItems, item) => {
        const itemOpened = selectedItems.filter(i => item.id == i.id).length == 1;
        if (! itemOpened) {
            setHistory([...history, item])
            return [...selectedItems, item];
        }
        return selectedItems;
    }

    const itemClickInSidebar= (item) => {
        console.log('item clicked in sidebar', item)
        const items = openInOpenedFiles(selectedItems, item)
        const itemsWithActiveStatus = setActive(item, items);
        setSelectedItems(itemsWithActiveStatus);
    }

    const itemClickInOpenedFiles = (file) => {
        const itemsWithActive = setActive(file, selectedItems);
        setSelectedItems(itemsWithActive);

        // only set if current file is not last
        if (last(history).id != file.id) {
            setHistory([...history, file])
        }
    };

    const last = (arr) => {
        return arr[arr.length - 1];
    }

    const titleCloseHandler = (item) => {
        console.log('closing item', item)
        const selectedItemsWithoutClosedItem = selectedItems.filter(i => item.id != i.id)
        const historyWithoutItem = history.filter(e => e.id !== item.id);
        const selectedItemsWithActive = setActive(last(historyWithoutItem), selectedItemsWithoutClosedItem );
        setSelectedItems(selectedItemsWithActive);
        setHistory(historyWithoutItem);
    }

    return (<div className="Editor">
        <Sidebar { ...{items, itemClick: itemClickInSidebar}} />
        <ContentArea  {...{selectedItems, setSelectedItems, titleCloseHandler, openedFileClick: itemClickInOpenedFiles, history }} />

    </div>)
};

export { App };
