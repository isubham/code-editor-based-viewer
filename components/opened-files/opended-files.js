import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./opened-file.css";

const OpenedFile = ({ file, titleCloseHandler, onTitleClick }) => {
    return (
        <div className={`OpenedFile File col-md-3 ${file.active ? 'highlight' : 'muted'}`}>
            <div className={`${file.active ? 'active' : 'inactive'}`} >
                <span onClick={() => onTitleClick(file)} className="col-md-10">
                    <small>
                        {file.filename}
                    </small>
                </span>
                <span className="crossIcon pull-right col-md-1" onClick={() => titleCloseHandler(file)}>
                    <FontAwesomeIcon icon={faClose} />
                </span>
            </div>
        </div>
    )
}

const OpenedFiles = ({ selectedItems, titleCloseHandler, openedFileClick }) => {
    return (
        <div className="OpenedFiles row" >
            {selectedItems.map(file => <OpenedFile key={file.id} file={file} onTitleClick={openedFileClick} titleCloseHandler={titleCloseHandler} />)}
        </div>
    );
}

export { OpenedFiles };