

const last = (arr) => {
  return arr[arr.length - 1];
}

const updateActiveFieldInSelectedItems = (file, selectedItems) => {
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

/**
 * 
 * @param {} state 
 * @example 
 * {
        folders: getData(),
        selectedItems: [],
        history: []
    }
 * @param {*} action 
 * @returns 
 */
function folderReducer(state, action) {
  const type = action.type;
  switch (type) {
    case "SIDEBAR_FOLDER_CLICK": {
      const folder = action.folder;
      const newFolders = state.folders.map(e => {
        if (e.id == folder.id) {
          e.active = !e.active;
        }
        return e;
      })
      return { ...state, folders: newFolders };
    };

    case "SIDEBAR_FILE_CLICK": {

      const openInOpenedFiles = (selectedItems, item) => {
        const itemOpened = selectedItems.filter(i => item.id == i.id).length == 1;

        // if not openeded open it
        if (!itemOpened) {
          // setHistoryOnClose(item)
          return [...selectedItems, item];
        }
        return selectedItems;
      }


      const fileClickedInSidebar = action.file;
      const items = openInOpenedFiles(state.selectedItems, fileClickedInSidebar)
      const itemsWithActiveStatus = updateActiveFieldInSelectedItems(fileClickedInSidebar, items);
      return { ...state, selectedItems: itemsWithActiveStatus }

    }

    case "OPENEND_FILES_FILE_CLOSE": {

      console.log('closing item', item)
      const selectedItemsWithoutClosedItem = state.selectedItems.filter(i => item.id != i.id)
      const historyWithoutItem = state.history.filter(e => e.id !== item.id);
      const selectedItemsWithActive = setActive(last(historyWithoutItem), selectedItemsWithoutClosedItem);
      setSelectedItems(selectedItemsWithActive);
      setHistory(historyWithoutItem);
    }

    case "OPENED_FILES_FILE_CLICK": {
      const itemsWithActive = updateActiveFieldInSelectedItems(action.file, state.selectedItems);
      // only set if current file is not last
      if (last(history).id != file.id) {
        return ({ ...state, folders: itemsWithActive, history: history.filter(e => e.id != file.id) })
      }
      else {
        return { ...state, selectedItems: itemsWithActive };
      }
    }
    default: {
      return state;
    }
  }

}

export { folderReducer };