import React, {useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageLanguages from '../components/HomepageLanguages';
import {translate} from "@docusaurus/core/lib/client/exports/Translate";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const initScript = () => {
      var
          words = ['女票', '涨薪', '健康', '快乐', '大厂', '长胖', '锻炼', '猫咪', '帝豪', '自信', '存钱', '勇敢'],
          bg = document.querySelector('#bg'),
          ani = document.querySelector('#ani'),
          ctx_bg = bg.getContext('2d'),
          ctx_ani = ani.getContext('2d');
      bg.height = ani.height = 400;
      bg.width = ani.width = 400;
      /* 两个圈 */
      ctx_bg.beginPath();
      ctx_bg.translate(200, 200);
      ctx_bg.moveTo(80, 0);
      ctx_bg.arc(0, 0, 80, 0, Math.PI * 2);
      ctx_bg.moveTo(115, 0);
      ctx_bg.arc(0, 0, 115, 0, Math.PI * 2);
      ctx_bg.stroke();
      /* 六芒星 */
      ctx_bg.beginPath();
      ctx_bg.moveTo(-69, 40);
      ctx_bg.lineTo(69, 40);
      ctx_bg.lineTo(0, -80);
      ctx_bg.lineTo(-69, 40);
      ctx_bg.moveTo(-69, -40);
      ctx_bg.lineTo(69, -40);
      ctx_bg.lineTo(0, 80);
      ctx_bg.lineTo(-69, -40);
      ctx_bg.stroke();
      /* 两个红三角 */
      ctx_bg.beginPath();
      ctx_bg.fillStyle = 'red';
      ctx_bg.moveTo(0, -125);
      ctx_bg.lineTo(-5, -115);
      ctx_bg.lineTo(5, -115);
      ctx_bg.lineTo(0, -125);
      ctx_bg.moveTo(-125, 0);
      ctx_bg.lineTo(-115, 5);
      ctx_bg.lineTo(-115, -5);
      ctx_bg.lineTo(-125, 0);
      ctx_bg.fill();

      /* 生成器 */
      function* loop(n) {
          var pool = [];
          for (var i = 0; i < n; i++) {
              pool.push(i);
          }
          while (1) {
              for (i of pool) {
                  yield i
              }
          }
      }

      var
          p_rotate = Math.PI / 30,
          word_rotate = Math.PI / 2 + Math.PI / 18,
          loop2000 = loop(2000);

      var point60 = new Path2D();
      point60.moveTo(120, 0);
      point60.lineTo(125, 0);

      (function clockDrawing() {
          var value = loop2000.next().value;

          ctx_ani.clearRect(0, 0, 400, 400);

          ctx_ani.save();
          ctx_ani.translate(200, 200);

          ctx_ani.save();  // 60个点
          ctx_ani.rotate(value * (Math.PI / 500));
          for (let i = 0; i < 60; i++) {
              ctx_ani.stroke(point60);
              ctx_ani.rotate(p_rotate);
          }
          ctx_ani.restore();

          ctx_ani.save();  // 12个文字
          ctx_ani.rotate(-value * (Math.PI / 1000));
          words.forEach(word => {
              ctx_ani.rotate(Math.PI / 6);
              ctx_ani.save();
              ctx_ani.translate(85, 0);
              ctx_ani.rotate(word_rotate);
              ctx_ani.fillText(word, 5, 0);
              ctx_ani.restore();
          });
          ctx_ani.restore();

          ctx_ani.restore();
          requestAnimationFrame(clockDrawing);
      })();
  };
  useEffect(() => {initScript()}, []);
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6')}>
              <div className={styles.canvasBox}>
                  <canvas id="bg" className={clsx(styles.positionAbsolute)}> </canvas>
                  <canvas id="ani" className={clsx(styles.positionAbsolute)}> </canvas>
              </div>
          </div>
          <div className={clsx('col col--6')}>
              <div className={clsx(styles.middleDiv)}>
                  <div>
                      <h1 className="hero__title">{siteConfig.title}</h1>
                      <p className="hero__subtitle">{siteConfig.tagline}</p>
                      <div className={styles.buttons}>
                          <Link
                              className="button button--secondary button--lg"
                              to="/about/me">
                              About Me ~ 5min ⏱️
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/*<HomepageLanguages />*/}
      </main>
    </Layout>
  );
}
