import { v4 } from "uuid";

const getID = () => v4();
const file = (title, content = '', type = 'pdf') => ({ filename: title, type: type, content, id: getID(), active: false });
const folder = (title, files) => ({ filename: title, type: "folder", content: files, id: getID() });

export { file, folder };
