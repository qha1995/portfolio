import React, { useEffect, useRef, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import './Main.scss';
import { profile, portfolio } from './Data';
import Introduce from './Introduce';


//portfolio배열에서 title을 빼서 배열을 만들어 쓰겠다.
const AC = portfolio.map(it => it = it.title);


const Cover = ({ on, setOn }) => {
    const cover = useRef(null)
    const wheelStop = e => {
        e.stopPropagation();
    }
    useEffect(() => {
        cover.current.addEventListener('wheel', wheelStop);
        return () => {
            cover.current.removeEventListener('wheel', wheelStop);
        }
    }, [])
    return (
        <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
            <div className='box'>
                <h2>2022<br /><strong>choi bomin's</strong><br />portfolio</h2>
                <ul>

                    <li>{
                        portfolio.map((it, idx) => {
                            return (
                                <li key={idx} onClick={() => setOn(!on)}>
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }</li>



                </ul></div>

        </div>
    )
};


const Portfolio = () => {
    return (
        <>
            {
                portfolio.slice(0, 5).map((it, idx) => {

                    return (
                        <div className="section">
                            <div className='case'>

                                <div className="inner">
                                    <div className="photo">
                                        <a href=""><img src={it.src} alt={it.title} /></a>
                                    </div>
                                    <div className="mobile">
                                        <a href=""> <img src={it.srcr} alt={it.title} /></a>
                                    </div>

                                    <ul className="desc">
                                        <li><h3>TITLE</h3>
                                            <p>{it.title}</p></li>

                                        <li><h3>INFO</h3>
                                            <p>{it.info}</p></li>

                                        <li><h3>TYPE</h3>
                                            <p>{it.type}</p></li>

                                        <li>
                                            <a href={it.link} target='_blank'>
                                                {
                                                    it.color?.map((color, idx) => {
                                                        return (
                                                            <button style={{ background: color }}>web site</button>
                                                        )
                                                    })
                                                }
                                            </a>


                                        </li>


                                        <li>
                                            {
                                                it.color && <h3>COLOR</h3>
                                            }
                                            <ol>
                                                {
                                                    it.color?.map((color, idx) => {
                                                        return (
                                                            <li className="color" style={{ background: color }}>{color}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    )
                })

            }</>
    )

}

const Training = ({ pnum }) => {
    return (
        <div className='section'>

            <div className="inner trn">
                <h2>Training</h2>
                {
                    portfolio[pnum].training.map(it => {
                        return (
                            <figure>
                                <div className="photo02">
                                    <a href=""><img src={it.src} alt={it.title} /></a>  </div>

                                <ul className="desc">
                                    <li><h3>TITLE</h3>
                                        <p>{it.title}</p></li>

                                    <li><h3>INFO</h3>
                                        <p>{it.info}</p></li>

                                    <li><h3>TYPE</h3>
                                        <p>{it.type}</p></li>

                                    <li>

                                        {
                                            it.skill.map((con, idx) => {
                                                return (
                                                    <a href={con.lnk} target='_blank'>
                                                        <button>{con.nme}</button>
                                                    </a>
                                                )
                                            })
                                        }



                                    </li>



                                </ul>



                            </figure>
                        )
                    })
                }
            </div>

        </div>
    )

}

const Main = () => {
    const [num, setNum] = useState(1);
    const [on, setOn] = useState(false)
    return (
        <div className='PF'>

            <h1>2022<br />choi bomin's<br />portfolio</h1>
            <Cover on={on} setOn={setOn} />

            <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
                <span>cover open</span>
            </button>
            <div className='num'>{portfolio[num - 1]?.title}</div>

            <div className="wm"><p><span></span> 본 포트폴리오는 비상업적 취업지원 용도이며 React를 이용한 반응형 페이지로 제작되었습니다. </p></div>
            <nav className='gnb'>

                <ul>
                    <li>{
                        portfolio.map((it, idx) => {
                            return (
                                <li key={idx} className={it.id === num ? "on" : ""}>
                                    <a href={`#${it.title}`}>{it.title}</a>
                                </li>
                            )
                        })
                    }
                    </li>


                </ul>
            </nav>
            <ReactFullpage
                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                anchors={['cover', ...AC, 'footer']}
                afterLoad={(o, d) => setNum(d.index)}

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>

                            <Introduce />
                            <Portfolio />
                            <Training pnum={5} />






                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </div>
    )
}

export default Main