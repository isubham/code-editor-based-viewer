import './sidebar-style.css';
import { Folder } from '../folder/folder';

const Sidebar = ({items, itemClick, folderClick}) => {
    return (
    <div className="sidebar four columns">

        <div className='Folders padding-left-md'>
            {items.map( item => {
                return <Folder key={item.id} item={item} itemClick={itemClick} folderClick={folderClick} />
            })}
        </div>

    </div>
    );

}

export { Sidebar };
