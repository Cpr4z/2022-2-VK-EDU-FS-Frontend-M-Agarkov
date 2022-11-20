import React from 'react'
import { ProfileHeader } from "../../Components/ProfileHeader";
import { ProfileBody } from "../../Components/ProfileBody";

import styles from "./ProfilePage.module.scss";

function ProfilePage() {
    return (
        <aside className={styles.profilePage}>
            <ProfileHeader />
            <ProfileBody />
        </aside>
    );
}

export { ProfilePage };