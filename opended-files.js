
const OpenedFile = ({file, titleCloseHandler, onTitleClick}) => {
    return (
        <div className="OpenedFile ">
            <div className={`${file.active ? 'active' : 'inactive'}`} >
                <span onClick={() => onTitleClick(file)}>
                {file.title}    
                </span> 
                <span className="crossIcon" onClick={() => titleCloseHandler(file)}>❌</span>
            </div>
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