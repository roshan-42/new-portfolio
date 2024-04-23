import React from "react";

const About = () => {
  return (
    <div>
      <div className={`  flex items-center gap-4`}>
        <h2 className="font-bold text-3xl">About</h2>
        <div className="bg-red-500 h-[2px] w-24 rounded-full"></div>
      </div>
      <p>
        I'm a React developer, graduated from Amrit Science Campus with a degree
        in Computer Science. Currently based in Kathmandu, originally from Dang.
        I'm passionate about technology and love learning new things. React has
        become my playground for crafting dynamic user experiences. Beyond
        coding, I find joy in simple pleasures like exploring places, reading
        books and connecting with others. Let's dive into the world of tech
        together!
      </p>
    </div>
  );
};

export default About;
