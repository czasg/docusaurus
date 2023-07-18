import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageIndex from '../components/HomepageIndex';
import Home2 from "../components/Home2";


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`首页`}
            description={`Author ${siteConfig.title}`}
        >
            <main>
                <HomepageIndex/>
                <Home2/>
                <HomepageFeatures/>
                {/*<HomepageLanguages />*/}
            </main>
        </Layout>
    );
}
