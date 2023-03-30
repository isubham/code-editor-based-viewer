import './content-area-style.css';

import { OpenedFiles } from './opended-files';

const TextHandler = ({item}) => {
    return (
        <div className='content-area'>
            <div className={`${item.active ? 'active': 'inactive'}` }>
                <h1>{item.title}</h1>
                <p>
                    {item.content}
                </p>
                <small>Version: {item.id} active {item.active?"yes": "no"}</small>

            </div>
        </div>
    );
};

const EditorFiles = ({selectedItems, history}) => {
    return (
        <div className="EditorFiles">
            <div class="file-panel">
                {selectedItems.map(item => (<TextHandler key={item.id} item={item} />))}
            </div>
            <div className='history-panel'>
                <p>History</p>
                {history.map(h => <div key={h.id}>{h.title} {h.id}</div>)}
            </div>
        </div>
    );
}

const ContentArea = ({selectedItems, setSelectedItems, titleCloseHandler, openedFileClick, history}) => {
    return (
        <div className='ContentArea'>
            <OpenedFiles  {...{selectedItems, titleCloseHandler, setSelectedItems, openedFileClick }} />
            <EditorFiles { ...{selectedItems, history} }  />
            
        </div>
    );
};

export { ContentArea };