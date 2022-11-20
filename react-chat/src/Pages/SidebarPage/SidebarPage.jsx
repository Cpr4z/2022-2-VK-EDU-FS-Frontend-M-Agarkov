import React from "react";

import { SidebarHeader } from "../../Components/SidebarHeader";
import { SidebarBody } from "../../Components/SidebarBody";
import { FloatButton } from "../../Components/FloatButton";

import styles from "./SidebarPage.module.scss";

function SidebarPage({ openChat }) {
    return (
        <aside className={styles.allChats}>
            <SidebarHeader />
            <SidebarBody openChat={openChat} />
            <FloatButton />
        </aside>
    );
}

export { SidebarPage };