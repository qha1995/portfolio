import React from 'react'
import { profile } from './Data';

const Introduce = () => {
    return (

        <div className="section">

            <div class="blobs">
                <div class="blob"></div>
                <div class="blob"></div>
                <div class="blob"></div>
                <div class="blob"></div>


            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <div className='text'>
                <h2>I'm not a Corder <br />I'm a <span>Developer</span></h2>
                <h3>다재다능한 신입 개발자 <span>{profile.name} </span>입니다.</h3>
                <p>단순히 코드만 짜는 코더가 아닌 고객과 동료의 가려운 부분을  <br />같이 고민하고 해결할 줄 아는 개발자가 되겠습니다.
                </p>
            </div>

        </div>

    )
}

export default Introduce;