import React from "react";
import { Outlet } from "react-router-dom";

import { SidebarHeader } from "../../Components/SidebarHeader";
import SidebarBody from "../../Components/SidebarBody/SidebarBody";
import { SidebarSearchField } from "../../Components/SidebarSearchField";

import styles from "./SidebarPage.module.scss";

function SidebarPage(props) {
    return (
        <>
            <aside className={styles.allChats}>
                <SidebarHeader />
                <SidebarSearchField />
                <SidebarBody />
            </aside>

            <Outlet />
        </>
    );
}

// const mapStateToProps = (state) => ({
//   messages: state.messageReduser.messages,
// });

// export default connect(mapStateToProps, { openChat })(SidebarPage);
export { SidebarPage };