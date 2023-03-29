import React from "react";
import ListEmail from "../components/ListEmail";
import SlideBarComponent from "../components/SlideBarComponent";

export default function MessagesContainer({ userSelected }) {
  return (
    <div className="mt-5 d-flex">
      <SlideBarComponent />
      <ListEmail currentUser={userSelected} />
    </div>
  );
}
