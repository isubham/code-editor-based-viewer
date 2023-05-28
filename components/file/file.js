import { Icon } from "../icon/icon";

export const File = ({ item, itemClick }) => {
    return (
        <div class="File">
            <span onClick={() => itemClick(item)}
                className={`${item.active ? 'active' : 'inactive'}`}
                type={item.type}>
                <Icon type={item.type} /> {item.filename}</span>
        </div>
    );
}