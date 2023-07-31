import React from "react";
import clsx from "clsx";
import Link from '@docusaurus/Link';
import styles from "./HomepageIndex.module.css";


class Index extends React.PureComponent {
    constructor(props) {
        super(props);
        this.islive = true;
    }

    componentDidMount() {
        const self = this;
        const initScript = () => {
            const words = ['理财', '涨薪', '健康', '快乐', '大厂', '长胖', '锻炼', '猫咪', '家庭', '自信', '存钱', '勇敢'],
                bg = document.querySelector('#bg'),
                ani = document.querySelector('#ani'),
                ctx_bg = bg.getContext('2d'),
                ctx_ani = ani.getContext('2d'),
                multiple = 400 / 260;
            bg.height = ani.height = 260 * multiple;
            bg.width = ani.width = 260 * multiple;
            ctx_bg.strokeStyle = "rgba(255,255,255)";
            ctx_ani.strokeStyle = "rgba(255,255,255)";
            ctx_ani.fillStyle = "rgba(255,255,255)";
            ctx_bg.lineWidth = 5;
            ctx_ani.font = '14px Arial';
            /* 两个圈 */
            ctx_bg.beginPath();
            ctx_bg.translate(130 * multiple, 130 * multiple);
            ctx_bg.moveTo(84 * multiple, 0);
            ctx_bg.arc(0, 0, 84 * multiple, 0, Math.PI * 2);
            ctx_bg.moveTo(115 * multiple, 0);
            ctx_bg.arc(0, 0, 115 * multiple, 0, Math.PI * 2);
            ctx_bg.stroke();
            /* 六芒星 */
            ctx_bg.beginPath();
            ctx_bg.moveTo(-69 * multiple, 40 * multiple);
            ctx_bg.lineTo(69 * multiple, 40 * multiple);
            ctx_bg.lineTo(0, -80 * multiple);
            ctx_bg.lineTo(-69 * multiple, 40 * multiple);
            ctx_bg.moveTo(-69 * multiple, -40 * multiple);
            ctx_bg.lineTo(69 * multiple, -40 * multiple);
            ctx_bg.lineTo(0, 80 * multiple);
            ctx_bg.lineTo(-69 * multiple, -40 * multiple);
            ctx_bg.stroke();
            /* 两个红三角 */
            ctx_bg.beginPath();
            ctx_bg.fillStyle = 'red';
            ctx_bg.moveTo(0, -125 * multiple);
            ctx_bg.lineTo(-5 * multiple, -117 * multiple);
            ctx_bg.lineTo(5 * multiple, -117 * multiple);
            ctx_bg.lineTo(0, -125 * multiple);
            ctx_bg.moveTo(-125 * multiple, 0);
            ctx_bg.lineTo(-117 * multiple, 5 * multiple);
            ctx_bg.lineTo(-117 * multiple, -5 * multiple);
            ctx_bg.lineTo(-125 * multiple, 0);
            ctx_bg.fill();

            /* 生成器 */
            function* loop(n) {
                let i;
                const pool = [];
                for (i = 0; i < n; i++) {
                    pool.push(i);
                }
                while (1) {
                    for (i of pool) {
                        yield i
                    }
                }
            }

            const p_rotate = Math.PI / 30,
                word_rotate = Math.PI / 2 + Math.PI / 18,
                loop2000 = loop(2000);

            const point60 = new Path2D();
            point60.moveTo(120 * multiple, 0);
            point60.lineTo(125 * multiple, 0);

            (function clockDrawing() {
                if (!self.islive) {
                    console.log("draw exit");
                    return
                }
                const value = loop2000.next().value;

                ctx_ani.clearRect(0, 0, 260 * multiple, 260 * multiple);

                ctx_ani.save();
                ctx_ani.translate(130 * multiple, 130 * multiple);

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
                    ctx_ani.translate(90 * multiple, 0);
                    ctx_ani.rotate(word_rotate);
                    ctx_ani.fillText(word, 5, 0);
                    ctx_ani.restore();
                });
                ctx_ani.restore();

                ctx_ani.restore();
                requestAnimationFrame(clockDrawing);
            })();
        };
        initScript();
        console.log("draw start");
    }

    componentWillUnmount() {
        this.islive = false;
    }

    render() {
        return (
            <div className={clsx('hero hero--dark', styles.heroBanner, styles.indexBackground)}>
                <div className="container" style={{
                    minHeight: "100vh",
                }}>
                    <div className="row">
                        <div className={clsx('col col--6')}>
                            <div className={styles.canvasBox}>
                                <canvas id="bg" className={clsx(styles.positionAbsolute)}/>
                                <canvas id="ani" className={clsx(styles.positionAbsolute)}/>
                            </div>
                        </div>
                        <div className={clsx('col col--6')}>
                            <div className={clsx(styles.middleDiv)}>
                                <div>
                                    <h1 className="hero__title">
                                        CZA
                                        <a style={{
                                            background: "#f3ae05",
                                            color: "#000000",
                                            padding: "0.3rem",
                                            borderRadius: "0.5rem",
                                            marginLeft: "0.3rem",
                                        }}>
                                            SG
                                        </a>
                                    </h1>

                                    <p className="hero__subtitle">👋👋👋</p>
                                    <div className={styles.buttons}>
                                        <Link
                                            className="button button--secondary button--lg"
                                            to="/about-me">
                                            About Me ~ 5min ⏱️
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <div className={styles.centerBox}>
                            <img
                                src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=czasg&hide=issues&hide_title=true&include_all_commits=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff"
                                alt="GitHub Stats"/>
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=czasg&layout=donut-vertical&hide_title=true&bg_color=45,f8b2b2,ac96e3&title_color=fff&text_color=fff"
                                alt="GitHub Stats"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default function HomepageIndex() {
    return (<Index/>)
}