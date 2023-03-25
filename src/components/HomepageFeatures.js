import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '站点选型',
    src: "img/homepage/feature/1.png",
    description: (
      <>
          博客注重于记录问题、生活等方面的知识点。文档则注重于某个领域的知识整理。
          相比对传统的博客站点，我更倾向于集<strong>博客、文档于一体</strong>的记录方式.
      </>
    ),
  },
  {
    title: '站点技术', // 朵朵
    src: "img/homepage/feature/2.png",
    description: (
        <>
            本站是基于 <strong>Docusaurus</strong> 搭建的静态站点，目前借助 <strong>Github Actions</strong> 自动构建、部署在 <strong>Github Pages</strong>.
        </>
    ),
  },
  {
    title: 'Czasg 含义',
    src: "img/homepage/feature/3.png",
    description: (
      <>
        这事，还得从 1995 年的那一晚说起😏算了，我摊牌了，
          <strong>我(cza)</strong> 是 😎<strong>帅哥(sg)</strong>😎.
      </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src = {src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
