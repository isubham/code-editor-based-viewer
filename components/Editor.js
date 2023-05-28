import { useEffect, useState } from "react";
import { ContentArea } from "./content-area/content-area";
import { Sidebar } from "./sidebar/sidebar";
import { getData, brand } from "../data";

const Editor = () => {

    const data = getData();

    const [folders, setFolders] = useState(getData());
    const [selectedItems, setSelectedItems] = useState([]);
    const [history, setHistory] = useState([]);

    const setActive = (file, selectedItems) => {
        console.log('item clicked in openedfiles', file)
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
        if (!itemOpened) {
            setHistoryOnClose(item)
            return [...selectedItems, item];
        }
        return selectedItems;
    }

    const itemClickInSidebar = (item) => {
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
            setHistoryOnClose(file)
        }
    };

    const setHistoryOnClose = (file) => {
        setHistory([...history.filter(e => e.id != file.id), file])
    }

    const last = (arr) => {
        return arr[arr.length - 1];
    }

    const titleCloseHandler = (item) => {
        console.log('closing item', item)
        const selectedItemsWithoutClosedItem = selectedItems.filter(i => item.id != i.id)
        const historyWithoutItem = history.filter(e => e.id !== item.id);
        const selectedItemsWithActive = setActive(last(historyWithoutItem), selectedItemsWithoutClosedItem);
        setSelectedItems(selectedItemsWithActive);
        setHistory(historyWithoutItem);
    }

    const folderClick = (folder) => {
        const newFolders = folders.map(e => {
            if (e.id == folder.id) {
                e.active = !e.active;
            }

            return e;
        })
        setFolders(newFolders);
    };

    return (<div className="Editor container-flex">
        <Sidebar  {...{ items: folders, itemClick: itemClickInSidebar, folderClick, brand }} />
        <ContentArea  {...{ selectedItems, setSelectedItems, titleCloseHandler, openedFileClick: itemClickInOpenedFiles, history }} />
    </div>)
};

export { Editor };
