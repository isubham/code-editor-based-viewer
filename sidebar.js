import './sidebar-style.css';

const File = ({item, itemClick}) => {
    return (
        <div class="File">
            <li onClick={() => itemClick(item)} 
                className={`${item.active? 'active' : 'inactive'}`}
                type={item.type}>{item.title}</li>
        </div>
    ); 
}

const Folder = ({item, itemClick, folderClick}) => {
    if (item.type == 'folder') {
        return (
            <div>
                {/* folder */}
                <div className='Folder'>
                    <li className={`${item.active? 'active' : 'inactive'}`} onClick={() => folderClick(item)} 
                    type={item.type}>{item.active ? '-' : '+' } {item.title}</li>
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
        return <File  key={item.id} item={item} itemClick={itemClick} /> 
    }
}
const Sidebar = ({items, itemClick, folderClick}) => {
    return (
    <div className="sidebar">

        <div className='Folders padding-left-md'>
            {items.map( item => {
                return <Folder key={item.id} item={item} itemClick={itemClick} folderClick={folderClick} />
            })}
        </div>

    </div>
    );

}

export { Sidebar };
