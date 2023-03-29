import { messages } from "../messages";
//xử lý logic
//get folders, get users
export const getFolders = () => [
  ...new Set([...messages].map((el) => el.folder)),
];
/**
 * const folderList = [...messages].map(el => el.folder) => Lấy ra tên folder trong mảng messages
 * const uniqueFolders = new Set(folderList) => Lấy ra mảng gồm các tên folder là unique: object
 * [...uniqueFolders]
 *
 */
export const getUsers = () => [...new Set([...messages].map((el) => el.to))];

export const firstCharacterUpperCase = (nameFolder) =>
  nameFolder[0].toLocaleUpperCase() + nameFolder.slice(1, nameFolder.length);

export const formatDate = (date) => {
  if (!date) {
    return "";
  }
  const initialDate = new Date(date);
  return `${initialDate.getFullYear()}-${initialDate.getMonth()}-${initialDate.getDay()}`;
};

export const getPathName = (pathName) => {
  const splitPathName = pathName.split("/");
  return splitPathName[splitPathName.length - 1];
};
