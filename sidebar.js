import './sidebar-style.css';

const SideBarItem = ({item, itemClick}) => {
    return (
        <div>
            <li onClick={() => itemClick(item)} 
            type={item.type}>{item.title}</li>
        </div>
    ); 
}

const Sidebar = ({items, itemClick}) => {
    return (
    <div className="sidebar">
        <ul>
            {items.map( item => <SideBarItem  key={item.id} item={item} itemClick={itemClick} />)} 
        </ul>
    </div>
    );

}

export { Sidebar };
