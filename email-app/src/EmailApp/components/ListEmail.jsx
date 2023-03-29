import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatDate, getPathName } from "../../helpers";
import { messages } from "../../messages";

export default function ListEmail({ currentUser }) {
  const [statePathName, setPathName] = useState("");
  const [listDataEmail, setListDataEmail] = useState([]);

  const senderDetail = (el) => {
    return `${el.senderName?.first} ${el.senderName?.last} <${el.from}`;
  };
  const { pathname } = useLocation();
  console.log("location", pathname);

  //lấy được param trên url => lọc ra các item có folder là parm + to === users

  useEffect(() => {
    const result = getPathName(pathname);
    setPathName((pre) => (pre = result));
  }, [pathname]);

  useEffect(() => {
    const data = [...messages].filter(
      (el) => el.to === currentUser && el.folder === statePathName
    );
    setListDataEmail((pre) => (pre = [...data]));
  }, [statePathName, currentUser]);

  return (
    <div className="w-100">
      <table className="table-list-email">
        <thead>
          <tr>
            <th>Sender</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {listDataEmail.map((el, index) => (
            <tr key={index}>
              <td>{senderDetail(el)}</td>
              <td>{el.subject}</td>
              <td>{formatDate(el.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
