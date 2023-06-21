import { Icon } from "../icon/icon";

// <File key={item.id} item={item} fileClickInSidebar={fileClickInSidebar} folderClickInSidebar={folderClickInSidebar} />
export const File = ({ item, fileClickInSidebar }) => {
    return (
        <div className="File">
            <span onClick={() => fileClickInSidebar(item)}
                className={`${item.active ? 'active' : 'inactive'}`}
                type={item.type}>
                <Icon type={item.type} /> {item.filename}</span>
        </div>
    );
}