import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const  ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {
        setLoading(true)
        fetch(`https://api.github.com/users/${ userName }/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setLoading(false)
                    setRepos(resJson)
                }, 4000)
            })
    }, [userName])

    return (
        <div className="container">
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                    <ul className={styles.list}>
                    {/* { repos.map( repository => (
                        <li key={ repository.id }>
                            <b>Name: </b> { repository.name}
                            <b>Language: </b> { repository.language }
                            <a target="_blank" href={ repository.html_url }>Visit in Github</a>
                        </li>
                    ))} */}

                    { repos.map(({ id, name, language, html_url}) => (
                        <li className={ styles.listItem } key={ id}>
                            <div className={ styles.itemName }>
                                <b>Name: </b> 
                                { name }
                            </div>
                            <div className={ styles.itemName }>
                                <b >Language: </b>
                                { language }
                            </div>
                            <a className={ styles.itemLink } href={ html_url }>Visit on Github</a>
                        </li>
                    ))}
                </ul>
            ) }
        </div>
    )
}

export default ReposList;