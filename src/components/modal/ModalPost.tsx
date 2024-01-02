import React, { ReactNode } from "react";
import styles from "./modal.module.css";

type Props = {
  children: ReactNode;
};

function ModalPost({ children }: Props) {
  return (
    <>
      <div className={styles.backdrop} />
      <dialog open={true} className={styles.modalPost}>
        {children}
      </dialog>
    </>
  );
}

export default ModalPost;
