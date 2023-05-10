import './content-area-style.css';

import { OpenedFiles } from '../opened-files/opended-files';
import { ApiService } from '../../api.service';
// import ShakaPlayer from 'shaka-player-react';
// import 'shaka-player-react/dist/controls.css';

const AppSelector = ({ item }) => {
    const extension = item.filename.split(".").pop();

    if (["mp4", "mkv", "MKV", "MP4"].indexOf(extension) > -1) {
        return (
            <div>
                <h1>{item.title}</h1>
                {/* <ShakaPlayer src={ApiService.getAnimeVideoLink(item)} */}
                {/* autoPlay */}
                {/* /> */}
                <video src={ApiService.getAnimeVideoLink(item)} controls width="800px" />
            </div>
        )
    }

    if (["mp3", "flac", "aac"].indexOf(extension) > -1) {
        return (
            <div>
                <h1>{item.title}</h1>
                {/* <ShakaPlayer src={ApiService.getAnimeVideoLink(item)} */}
                {/* autoPlay */}
                {/* /> */}
                <audio src={ApiService.getAnimeVideoLink(item)} controls />
            </div>
        )
    }

    if (["jpg", "png", "jpeg"].indexOf(extension) > -1) {
        return (
            <div>
                <h1>{item.title}</h1>
                {/* <ShakaPlayer src={ApiService.getAnimeVideoLink(item)} */}
                {/* autoPlay */}
                {/* /> */}
                <image src={ApiService.getAnimeVideoLink(item)} />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>{item.title}</h1>
                <p>
                    {item.content}
                </p>
            </div>
        )
    }


}

const AppHandler = ({ item }) => {
    return (
        <div className='content-area '>
            <div className={`${item.active ? 'active' : 'inactive'}`}>
                <AppSelector item={item} />
                <small>Version: {item.id} active {item.active ? "yes" : "no"}</small>
            </div>
        </div>
    );
};

const EditorFiles = ({ selectedItems, history }) => {
    return (
        <div className="EditorFiles">
            <div class="file-panel">
                {selectedItems.map(item => (<AppHandler key={item.id} item={item} />))}
            </div>
            {/* <div className='history-panel'>
                <p>History</p>
                {history.map(h => <div key={h.id}>{h.title} {h.id}</div>)}
            </div> */}
        </div>
    );
}

const ContentArea = ({ selectedItems, setSelectedItems, titleCloseHandler, openedFileClick, history }) => {
    return (
        <div className='ContentArea eight columns'>
            <OpenedFiles  {...{ selectedItems, titleCloseHandler, setSelectedItems, openedFileClick }} />
            <EditorFiles {...{ selectedItems, history }} />

        </div>
    );
};

export { ContentArea };