const profile = {
    name: "최보민",
    email: "bomin1995@naver.com",
    tel: "010-5069-9108"
}

export { profile }


const portfolio = [
    { id: 1, title: "1.NYX", type: "React Axios Responsive Web", font: ["Noto Sans Korean"], info: "React와 Axios로 리디자인한 반응형 NYX 홈페이지입니다.", color: ["#000"], skill: ["React", "React-router-dom", "Axios"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio05_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio05_2.png", link: "https://qha1995.github.io/choibomin_NYX" },
    { id: 2, title: "2.에버랜드", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React로 리디자인한 반응형 에버랜드 홈페이지입니다.", color: ["#f5a100"], skill: ["React", "React-router-dom"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio01_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio01_2.png", link: "https://qha1995.github.io/portfolio_everland/" },
    { id: 3, title: "3.고요의바다", type: "Fullpage Responsive Web", font: ["Noto Sans Korean"], info: "Fullpage로 디자인한 반응형 홈페이지입니다.", color: ["#000"], skill: ["Fullpage"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio02_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio02_2.png", link: "https://qha1995.github.io/choibomin_silence/" },
    { id: 4, title: "4.대한항공", type: "Jquery Responsive Web", font: ["Noto Sans Korean"], info: "Jquery로 리디자인한 반응형 대한항공 홈페이지입니다. ", color: ["#00256c"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio03_2.png", link: "https://qha1995.github.io/choibomin_koreanair/" },
    { id: 5, title: "5.Nonfiction", type: "Jquery Responsive Web", font: ["Noto Sans Korean"], info: "Jquery로 리디자인한 반응형 Nonfiction 홈페이지입니다.", color: ["#000"], skill: ["Jquery"], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio04_1.png", src: process.env.PUBLIC_URL + "/assets/img/portfolio04_2.png", link: "https://qha1995.github.io/choibomin_nonfiction/" },


    {
        id: 6, title: "6.training", training: [
            { id: 1, title: "1.현대엘리베이트", type: "React, Javascript, Jquery Responsive Web", font: ["Noto Sans Korean"], info: "React, Javascript, Jquery로 실습한 페이지입니다.", color: ["#333"], skill: [{ nme: "React", lnk: "https://qha1995.github.io/hd_web_react" }, { nme: "Javascript", lnk: "https://qha1995.github.io/hd_web_javascript/" }, { nme: "Jquery", lnk: "https://qha1995.github.io/hd_web/" }], src: process.env.PUBLIC_URL + "/assets/img/trn_01.png", link: ["https://qha1995.github.io/hd_web_react", "https://qha1995.github.io/hd_web_javascript/", "https://qha1995.github.io/hd_web/"] },
            { id: 2, title: "2.NETFLIX", type: "React Responsive Web", font: ["Noto Sans Korean"], info: "React와 Axios로 실습한 페이지입니다.", color: ["#333"], skill: [{ nme: "React", lnk: "https://qha1995.github.io/Axios_practice01" }], src: process.env.PUBLIC_URL + "/assets/img/trn_02.png" },
            { id: 3, title: "3.동진쎄미캠", type: "Gnuboard", font: ["Noto Sans Korean"], info: "Gnuboard를 실습한 페이지입니다. ", color: ["#333"], skill: [{ nme: "Gnuboard", lnk: "http://bomin1995.dothome.co.kr/" }], srcr: process.env.PUBLIC_URL + "/assets/img/portfolio03_1.png", src: process.env.PUBLIC_URL + "/assets/img/trn_03.png" },


        ]
    },

];

export { portfolio }



