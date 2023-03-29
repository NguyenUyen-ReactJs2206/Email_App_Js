import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getUsers } from "../helpers";
import HeaderEmailApp from "./components/HeaderEmailApp";
import MessagesContainer from "./pages/MessagesContainer";

export default function EmailAppContainer() {
  const users = useMemo(() => getUsers(), []);
  const [userSelected, setUserSelected] = useState(users[0]);

  const onSelectedUser = (value) => {
    setUserSelected((pre) => (pre = value));
  };
  return (
    <BrowserRouter>
      <HeaderEmailApp
        userSelected={userSelected}
        onSelectedUser={onSelectedUser}
        users={users}
      />

      <Routes>
        <Route
          path="/messages"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route
          path="/messages/finance"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route
          path="/messages/inbox"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route
          path="/messages/travel"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route
          path="/messages/personal"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route
          path="/messages/spam"
          element={<MessagesContainer userSelected={userSelected} />}
        ></Route>
        <Route path="/contacts"></Route>
        <Route path="/preference"></Route>
      </Routes>
    </BrowserRouter>
  );
}
