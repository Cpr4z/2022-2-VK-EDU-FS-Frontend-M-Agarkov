import React from "react";

import { SidebarHeader } from "../../Components/SidebarHeader";
import { SidebarBody } from "../../Components/SidebarBody";
import { SidebarSearchField } from "../../Components/SidebarSearchField";

import styles from "./SidebarPage.module.scss";

function SidebarPage({ openChat }) {
    return (
        <aside className={styles.allChats}>
            <SidebarHeader />
            <SidebarSearchField />
            <SidebarBody openChat={openChat} />
        </aside>
    );
}

export { SidebarPage };