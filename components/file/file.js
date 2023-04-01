import { Icon } from "../icon/icon";


export const File = ({item, itemClick}) => {
    return (
        <div class="File">
            <li onClick={() => itemClick(item)} 
                className={`${item.active? 'active' : 'inactive'}`}
                type={item.type}> <big>
                    <Icon type={item.type} /> {item.title} {item.type} </big></li>
        </div>
    ); 
}