const profile = {
    name: "최보민",
    email: "bomin1995@naver.com",
    tel: "010-5069-9108"
}

export { profile }


const portfolio = [
    { id: 1, title: "1.에버랜드", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React와 반응형으로 리디자인한 에버랜드 홈페이지입니다.", color: ["#f5a100"], skill: ["React", "React-router-dom", "Axios"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio01_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio01_2.png", link: "https://qha1995.github.io/portfolio_everland/" },
    { id: 2, title: "2.고요의바다", type: "Fullpage Responsive Web", font: ["Noto Sans Korean"], info: "Fullpage와 반응형으로 디자인한 홈페이지입니다.", color: ["#000"], skill: ["Fullpage"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio02_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio02_2.png", link: "https://qha1995.github.io/choibomin_silence/" },
    { id: 3, title: "3.대한항공", type: "Jquery Responsive Web", font: ["Noto Sans Korean"], info: "Jquery와 반응형으로 리디자인한 대한항공 홈페이지입니다. ", color: ["#00256c"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio03_2.png", link: "https://qha1995.github.io/choibomin_koreanair/" },
    { id: 4, title: "4.Nonfiction", type: "Jquery Responsive Web", font: ["Noto Sans Korean"], info: "Jquery와 반응형으로 리디자인한 에버랜드 홈페이지입니다.", color: ["#000"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio04_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio04_2.png", link: "https://qha1995.github.io/choibomin_nonfiction/" },
    {
        id: 5, title: "5.training", training: [
            { id: 1, title: "1.현대엘리베이트", type: "React, Javascript, Jquery Responsive Web", font: ["Noto Sans Korean"], info: "React, Javascript, Jquery로 실습한 페이지입니다.", color: ["#333"], skill: ["React", "React-router-dom", "Axios"], src: process.env.PUBLIC_URL + "/assets/img/trn_01.png", link: ["https://qha1995.github.io/hd_web_react", "https://qha1995.github.io/hd_web_javascript/", "https://qha1995.github.io/hd_web/"] },
            { id: 2, title: "2.phymongshe", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다.", color: ["#333"], skill: ["Fullpage"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio02_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_02.png", link: "https://qha1995.github.io/phymongshe_shop/" },
            { id: 3, title: "3.깔끔이청소", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다. ", color: ["#333"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_03.png", link: "https://qha1995.github.io/clean_spa/" },


        ]
    },
    {
        id: 6, title: "6.trn", training: [
            { id: 1, title: "1.현대엘리베이트", type: "React, Javascript, Jquery Responsive Web", font: ["Noto Sans Korean"], info: "React, Javascript, Jquery로 실습한 페이지입니다.", color: ["#333"], skill: ["React", "React-router-dom", "Axios"], srcr: process.env.PUBLIC_URL + "/assets/img/trn_01.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio01_2.png", link: ["https://qha1995.github.io/hd_web_react", "https://qha1995.github.io/hd_web_javascript/", "https://qha1995.github.io/hd_web/"] },
            { id: 2, title: "2.phymongshe", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다.", color: ["#333"], skill: ["Fullpage"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio02_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_02.png", link: "https://qha1995.github.io/phymongshe_shop/" },
            { id: 3, title: "3.깔끔이청소", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다. ", color: ["#333"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_03.png", link: "https://qha1995.github.io/clean_spa/" },


        ]
    }
];

export { portfolio }


// const training = [
//     { id: 1, title: "1.현대엘리베이트", type: "React, Javascript, Jquery Responsive Web", font: ["Noto Sans Korean"], info: "React, Javascript, Jquery로 실습한 페이지입니다.", color: ["#333"], skill: ["React", "React-router-dom", "Axios"], srcr: process.env.PUBLIC_URL + "/assets/img/trn_01.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio01_2.png", link: ["https://qha1995.github.io/hd_web_react", "https://qha1995.github.io/hd_web_javascript/", "https://qha1995.github.io/hd_web/"] },
//     { id: 2, title: "2.phymongshe", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다.", color: ["#333"], skill: ["Fullpage"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio02_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_02.png", link: "https://qha1995.github.io/phymongshe_shop/" },
//     { id: 3, title: "3.깔끔이청소", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 실습한 페이지입니다. ", color: ["#333"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_03.png", link: "https://qha1995.github.io/clean_spa/" },


// ];

// export { training }

