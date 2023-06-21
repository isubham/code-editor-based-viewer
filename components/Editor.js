import { useReducer } from "react";

import { ContentArea } from "./content-area/content-area";
import { Sidebar } from "./sidebar/sidebar";
import { getData, brand } from "../data";
import { folderReducer } from "../reducers/fileAndFolderReducer.js";


const Editor = () => {

    const [filesAndFolders, dispatchFolderEvent] = useReducer(folderReducer,
        {
            folders: getData(),
            selectedItems: [],
            history: []
        });


    const fileClickInSidebar = (file) => {
        dispatchFolderEvent({ type: "SIDEBAR_FILE_CLICK", file: file });
        // console.log('fileClickInSidear')
    };

    const sidebarFolderClick = (folder) => {
        dispatchFolderEvent({ type: "SIDEBAR_FOLDER_CLICK", folder: folder });
    };

    const setSelectedItems = (file) => {
        console.log('setSelectedItems', file);
    };

    const titleCloseHandler = (file) => {
        console.log('titleCloseHandler', file);
    }

    const openedFileClick = (file) => {
        console.log("openedFileClick", file);
    }

    return (<div className="Editor container-flex">
        <Sidebar brand={brand}
            folders={filesAndFolders.folders}
            fileClickInSidebar={fileClickInSidebar}
            sidebarFolderClick={sidebarFolderClick} />
        {/* selectedItems, setSelectedItems, titleCloseHandler, openedFileClick, history */}
        <ContentArea  {...{ ...filesAndFolders, setSelectedItems, openedFileClick, titleCloseHandler, }} />
    </div>)
};

export { Editor };
