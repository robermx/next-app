"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./ActiveLink.module.css";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ path, text }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.link} ${pathName === path ? styles.active_link : ""}`}
      href={path}
    >
      {text}
    </Link>
  );
};
