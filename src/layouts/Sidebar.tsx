import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { menus } from "@/_variables";

type menuProps = {
  id: number;
  title: string;
  href: string;
};

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {menus.map((item: menuProps, index: number) => (
          <li key={index} className="sidebar-list__item">
            <Link href={item.href}>
              <a
                className={
                  router.pathname === `${item.href}`
                    ? "sidebar-list__link active"
                    : "sidebar-list__link"
                }
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
