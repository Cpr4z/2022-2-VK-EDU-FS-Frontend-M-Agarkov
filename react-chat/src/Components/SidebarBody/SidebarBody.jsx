import React from 'react'
import 'material-icons/iconfont/material-icons.css';
import styles from './SidebarBody.module.scss'

function SidebarBody({openChat}) {
    //     планируется делать запрос на бэк, ответ от которого - это массив со всеми чатами пользователя.
    //     у чата есть свой id и другая информация, эта информация передается в функцию openChat(), которая открывает этот чат

    let id1 = 1;
    let id2 = 2;
    return (
        <article className={styles.chatsContainer}>

            <section className={styles.chatPreview} onClick={() => openChat(id1)}>
                <div className={styles.chatPicture}>
                    <img className={styles.picture} src="https://via.placeholder.com/60" alt="profile_pic" />
                </div>
                <div className={styles.chatDetails}>
                    <span className={styles.chatName}>Matvey Agarkov2</span>
                    <span className={styles.chatLastMessage}>hello, world</span>
                </div>
                <div className={styles.chatMeta}>
                    <span className={styles.LastMessageTime}>13:39</span>
                    <div className={styles.messageState} type="">
                        <span className="material-icons">done</span>
                    </div>
                </div>
            </section>

            <section className={styles.chatPreview} onClick={() => openChat(id2)}>
                <div className={styles.chatPicture}>
                    <img className={styles.picture} src="https://via.placeholder.com/60" alt="profile_pic" />
                </div>
                <div className={styles.chatDetails}>
                    <span className={styles.chatName}>Matvey Agarkov1</span>
                    <span className={styles.chatLastMessage}>hello, world</span>
                </div>
                <div className={styles.chatMeta}>
                    <span className={styles.LastMessageTime}>13:39</span>
                    <div className={styles.messageState} type="">
                        <span className="material-icons">done_all</span>
                    </div>
                </div>
            </section>

        </article>
    );
}

export { SidebarBody };
