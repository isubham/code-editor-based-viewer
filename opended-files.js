
const OpenedFile = ({file, titleCloseHandler, onTitleClick}) => {
    return (
        <div className={`OpenedFile ${file.active ? 'active' : ''}`} >
            <span onClick={() => onTitleClick(file)}>
            {file.title}    
            </span> 
            <span className="crossIcon" onClick={() => titleCloseHandler(file)}>❌</span>
        </div>
    )
}

const OpenedFiles = ({selectedItems, titleCloseHandler, openedFileClick }) => {
    return (
    <div className="OpenedFiles" >
        {selectedItems.map(file => <OpenedFile key={file.id} file={file} onTitleClick={openedFileClick} titleCloseHandler={titleCloseHandler} />)}
    </div>
    );
}

export { OpenedFiles };