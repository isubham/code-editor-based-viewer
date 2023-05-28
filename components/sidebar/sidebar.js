import './sidebar-style.css';
import { Folder } from '../folder/folder';

const Sidebar = ({ brand, items, itemClick, folderClick }) => {
    return (
        <div className="sidebar col-md-2">
            <h4>
                {brand.title}
            </h4>
            <div className='Folders padding-left-md'>
                {items.map(item => {
                    return <Folder key={item.id} item={item} itemClick={itemClick} folderClick={folderClick} />
                })}
            </div>

        </div>
    );

}

export { Sidebar };
