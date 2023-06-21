import './sidebar-style.css';
import { Folder } from '../folder/folder';

// fileClickInSidear={fileClickInSidear} folderClickInSideBar={folderClickInSideBar}
const Sidebar = ({ brand, folders, fileClickInSidebar, sidebarFolderClick }) => {

    console.log(fileClickInSidebar, sidebarFolderClick);

    return (
        <div className="sidebar col-md-2">
            <h4 className='primary-text'>
                {brand.title}
            </h4>
            <div className='Folders padding-left-md'>
                {folders.map(item => {
                    return <Folder key={item.id} item={item}
                        fileClickInSidebar={fileClickInSidebar}
                        folderClickInSidebar={sidebarFolderClick} />
                })}
            </div>

        </div>
    );

}

export { Sidebar };
