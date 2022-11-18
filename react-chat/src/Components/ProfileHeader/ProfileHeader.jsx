import React from "react";
import styles from "./ProfileHeader.module.scss";
import { Link } from "react-router-dom";

const linkStyle = {
    alignSelf: "center",
    touchAction: "auto",
};

function ProfileHeader() {
    return (
        <header className={styles.header}>
            <Link style={linkStyle} to="/">
                <button className={styles.backButton} type="">
                    <span className="material-icons">arrow_back</span>
                </button>
            </Link>
            <span className={styles.userName}>Edit Profile</span>
            <button className={styles.doneButton} type="">
                <span className="material-icons">done</span>
            </button>
        </header>
    );
}

export { ProfileHeader };