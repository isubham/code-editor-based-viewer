
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileAudio, faFilePdf, faFileText, faFolderClosed, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

export const Icon = ({ type }) => {
    console.log(type);
    switch(type) {
        case 'pdf': { 
            return (<FontAwesomeIcon icon={faFilePdf} />);
        }
        case 'txt': {
            return (<FontAwesomeIcon icon={faFileText} />);
        }

        case 'mp3': {
            return (<FontAwesomeIcon icon={faFileAudio} />);
        }
        case 'folder_close': {
            return <FontAwesomeIcon icon={faFolderClosed} />
        }


        case 'folder_open': {
            return (<FontAwesomeIcon icon={faFolderOpen} />);
        }

        default: 
            return (<FontAwesomeIcon icon={faFile} />)
    }
}
