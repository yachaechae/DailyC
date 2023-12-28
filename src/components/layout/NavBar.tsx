import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  return (
    <nav className={styles.warpper}>
      <Link style={{ textDecoration: "none" }} href="/profilepage">
        <span className={pathname === "/profilepage" ? "active" : ""}>
          나의 코디
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }} href="/profilepage/savecody">
        <span className={pathname === "/profilepage/savecody" ? "active" : ""}>
          북마크 코디
        </span>
      </Link>
      <Link style={{ textDecoration: "none" }} href="/profilepage/likecody">
        <span className={pathname === "/profilepage/likecody" ? "active" : ""}>
          좋아요 코디
        </span>
      </Link>
      <style jsx>{`
        .active {
          color: #f49608;
          border-bottom: 5px solid #f49608;
          padding-bottom: 5px;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
