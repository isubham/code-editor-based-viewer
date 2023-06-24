

const last = (arr) => {
  return arr[arr.length - 1];
}

/**
 * will focus the document in opened pane
 */
const focusSelectedDoc = (file, selectedItems) => {
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

const openDoc = (selectedItems, item) => {
  const itemOpened = selectedItems.filter(i => item.id == i.id).length == 1;

  // if not openeded open it
  if (!itemOpened) {
    // setHistoryOnClose(item)
    return [...selectedItems, item];
  }
  return selectedItems;
};


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

      const fileClickedInSidebar = action.file;
      const items = openDoc(state.selectedItems, fileClickedInSidebar)
      const itemsWithActiveStatus = focusSelectedDoc(fileClickedInSidebar, items);

      return { ...state, selectedItems: itemsWithActiveStatus, history: [...state.history, fileClickedInSidebar] }

    }

    case "OPENEND_FILES_FILE_CLOSE": {
      const file = action.file;
      console.log('closing item', file)
      const historyWithoutItem = state.history.filter(e => e.id !== file.id);

      const remainingDoc = state.selectedItems.filter(i => file.id != i.id);
      const selectedItemsWithActive = focusSelectedDoc(
        last(historyWithoutItem), remainingDoc);
      return { ...state, selectedItems: selectedItemsWithActive, history: historyWithoutItem }
    }

    case "OPENED_FILES_FILE_CLICK": {
      const file = action.file;
      const itemsWithActive = focusSelectedDoc(action.file, state.selectedItems);

      // only set if current file is not last
      const clickOutOfFocusDoc = last(state.history).id != file.id;
      if (clickOutOfFocusDoc) {
        return ({ ...state, folders: itemsWithActive, history: state.history.filter(e => e.id != file.id) })
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