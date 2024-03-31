import styles from './Profile.module.css'

// eslint-disable-next-line react/prop-types
const Profile = ({ userName }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar}  src={`https://github.com/${userName}.png`} />
            <h1 className={styles.name} > { userName }</h1>
        </header>
    )
}

export default Profile;