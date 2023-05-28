
import { File } from '../file/file';
import { Icon } from '../icon/icon';
import './folder.css';

export const Folder = ({ item, itemClick, folderClick }) => {
    if (item.type == 'folder') {
        return (
            <div>
                {/* folder */}
                <div className='Folder'>
                    <li className={`${item.active ? 'active' : 'inactive'}`} onClick={() => folderClick(item)}
                        type={item.type}>
                        {/* folder open and close icon */}
                        <Icon type={`folder_${item.active ? 'open' : 'close'}`} /> {item.filename}
                    </li>
                </div>

                {/* render contents inside folder */}
                <div className={`Folder-contents padding-left-sm ${item.active ? 'active' : 'inactive'}`}>
                    {item.content.map(folderItem => {
                        return <Folder key={folderItem.id} item={folderItem}
                            itemClick={itemClick} folderClick={folderClick} />
                    })}
                </div>
            </div>
        );
    }
    else {
        return <File key={item.id} item={item} itemClick={itemClick} />
    }
}