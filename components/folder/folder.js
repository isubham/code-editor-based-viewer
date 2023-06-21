
import { File } from '../file/file';
import { Icon } from '../icon/icon';
import './folder.css';
// folderClickInSidebar={folderClickInSidebar}
export const Folder = ({ item, fileClickInSidebar, folderClickInSidebar }) => {


    {/* folder */ }
    if (item.type == 'folder') {
        return (
            <div>
                <div className='Folder'>
                    <li className={`${item.active ? 'active' : 'inactive'}`} onClick={() => folderClickInSidebar(item)}
                        type={item.type}>
                        {/* folder open and close icon */}
                        <Icon type={`folder_${item.active ? 'open' : 'close'}`} /> {item.filename}
                    </li>
                </div>

                {/* render contents inside folder */}
                <div className={`Folder-contents padding-left-sm ${item.active ? 'active' : 'inactive'}`}>
                    {item.content.map(folderItem => {
                        return <Folder key={folderItem.id} item={folderItem}
                            fileClickInSidebar={fileClickInSidebar} folderClickInSidebar={folderClickInSidebar} />
                    })}
                </div>
            </div>
        );
    }
    // file
    else {
        return <File key={item.id} item={item} fileClickInSidebar={fileClickInSidebar} folderClickInSidebar={folderClickInSidebar} />
    }
}