import React from "react";
import Section1 from "./Section1";
import About from "./About";
import Aboutsection from "./Aboutsection";
import Section2 from "./Section2";
import Comment from "./Comment";
import Commentsection from "./Commentsection";

export const Main = () => {
  return (
    <div>
      <Section1 />
      <About />
      <Aboutsection />
      <Section2 />
      <Comment/>
      <Commentsection/>
    </div>
  );
};
export default Main;
