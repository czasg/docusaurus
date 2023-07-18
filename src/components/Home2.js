import React from 'react';
import styles from './Home2.module.css';

export default function Home2() {
    return <>
        <div className={styles.container}>
            <div className={styles.centerBox}>
                <img
                    src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=czasg&hide=issues&hide_title=true&include_all_commits=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff"
                    alt="GitHub Stats"/>
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=czasg&layout=donut-vertical&hide_title=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff"
                    alt="GitHub Stats"/>
            </div>
        </div>
    </>
}