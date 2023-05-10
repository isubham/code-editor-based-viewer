import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OpenedFile = ({ file, titleCloseHandler, onTitleClick }) => {
    return (
        <div className="OpenedFile ">
            <div className={`${file.active ? 'active' : 'inactive'}`} >
                <span onClick={() => onTitleClick(file)}>
                    <marquee>
                        {file.filename}
                    </marquee>
                </span>
                <span className="crossIcon" onClick={() => titleCloseHandler(file)}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            </div>
        </div>
    )
}

const OpenedFiles = ({ selectedItems, titleCloseHandler, openedFileClick }) => {
    return (
        <div className="OpenedFiles" >
            {selectedItems.map(file => <OpenedFile key={file.id} file={file} onTitleClick={openedFileClick} titleCloseHandler={titleCloseHandler} />)}
        </div>
    );
}

export { OpenedFiles };