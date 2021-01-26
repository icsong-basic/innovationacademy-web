import react from "react";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import ProjectPage from "./containers/ProjectPage";
import AboutPage from "./containers/AboutPage";
import Layout from "./containers/Layout";
import ContactPage from "./containers/ContactPage";
import Notice from "./containers/Notice";
import News from "./containers/News";

type route = {
  path: string;
  name?: string;
  korName?: string;
  component: any;
  exact?: boolean;
  showInNav?: boolean;
  subRoutes?: {
    hash?: string;
    path?: string;
    name: string;
    clearParentPath?: boolean;
  }[];
};
const routes: route[] = [
  { path: "/", component: Home, exact: true },
  {
    path: "/about",
    component: AboutPage,
    name: "About",
    korName: "이노베이션 아카데미",
    showInNav: true,
    exact: true,
    subRoutes: [
      { hash: "#purpose", name: "설립 목적" },
      //{ hash: "#summary", name: "설립 개요" },
      { hash: "#history", name: "주요 연혁" },
      { hash: "#bi", name: "재단 BI" },
      { hash: "#organization", name: "조직도" },
      { path: "https://whitepaper.innovationacademy.kr/", name: "백서", clearParentPath: true },
    ],
  },
  {
    path: "/project",
    component: ProjectPage,
    name: "Project",
    korName: "사업소개",
    showInNav: true,
    exact: true,
    subRoutes: [
      { hash: "#_42seoul", name: "42 SEOUL" },
      { hash: "#projectx", name: "PROJECT-X" },
      { hash: "#software", name: "소프트웨어생태계\n지원 사업" },
    ],
  },
  {
    path: "/notice",
    component: Notice,
    name: "Notice",
    korName: "게시판",
    exact: false,
    showInNav: true,
    subRoutes: [{ name: "전체" }, { path: "/3", name: "정보공개" }, { path: "/4", name: "알림" }],
  },
  {
    path: "/news",
    component: News,
    name: "News",
    korName: "소식",
    exact: true,
    showInNav: true,
    subRoutes: [],
  },
  {
    path: "/contact",
    component: ContactPage,
    name: "Contact",
    korName: "Contact",
    showInNav: true,
    exact: true,
    subRoutes: [
      { hash: "#location", name: "기관정보" },
      { hash: "#newsletter", name: "뉴스레터 신청" },
    ],
  },
  //{ path: "/layout", component: Layout, exact: true },
  { path: "/404", exact: true, component: NotFound, name: "404 ERROR" },
];

export default routes;
