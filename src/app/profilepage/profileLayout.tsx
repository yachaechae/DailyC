"use client";

import NavBar from "@/components/layout/NavBar";
import EditProfile from "@/components/modal/EditProfile";
import Modal from "@/components/modal/Modal";
import ProfileInfo from "@/components/profile/ProfileInfo";
import React, { useState } from "react";

function Layout() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      {modalIsVisible && (
        <Modal>
          <EditProfile closeModal={hideModalHandler} />
        </Modal>
      )}

      <ProfileInfo showModal={showModalHandler} />
      <NavBar />
    </>
  );
}

export default Layout;
