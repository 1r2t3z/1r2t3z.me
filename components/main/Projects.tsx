import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <div className="z-[20]  px-[5px] flex justify-center items-center">
        <div className="cursive text-[20px] font-medium text-center text-gray-300 lg:w-1/2 ">
          <p>
            Once upon a time in the bustling digital landscape, there lived a
            visionary student named Karel. With dreams bigger than the vast web
            that connects the world, Karel wasn&post; just any student. They
            were a thinker, a doer, and an aspiring entrepreneur with a passion
            for web development that burned brighter than the most intricate
            lines of code.
          </p>

          <p>
            Kareln&post; journey began in the quiet corners of a university
            library, where the term &quot;1r2t3z&quot; first caught their eye.
            It wasnn&post; just a random string of characters, but a beacon that
            ignited their curiosity. To Karel, 1r2t3z symbolized the endless
            possibilities of the digital world—a world they were determined to
            shape.
          </p>

          <p>
            Armed with a laptop and an insatiable desire to create, Karel
            embarked on a mission to master the art of web development. Night
            after night, they delved into the complexities of coding, unraveling
            the mysteries of the internet. Each line of code was a step closer
            to their dream, a testament to their dedication.
          </p>

          <p>
            But Kareln&post; ambitions stretched far beyond the confines of
            personal projects. They envisioned a future where their skills could
            pave the way for innovative solutions to everyday problems. A future
            where their passion for web development would blossom into a
            thriving enterprise.
          </p>

          <p>
            Determined to turn their dreams into reality, Karel began building
            websites and apps that captured the essence of their vision. Each
            project was a piece of a larger puzzle, a stepping stone toward the
            company they aspired to build. With every challenge encountered,
            Karel&post;s resolve only grew stronger, fueled by the belief that
            their work could make a difference.
          </p>

          <p>
            As word of Karel&post;s talent spread, they were no longer seen just
            as a student, but as a budding entrepreneur with a knack for
            transforming ideas into digital realities. The term
            &quot;1r2t3z,&quot; once a mere curiosity, had become synonymous
            with their journey—a journey marked by innovation, perseverance, and
            the relentless pursuit of excellence.
          </p>

          <p>
            Today, Karel stands on the brink of a new chapter, poised to launch
            a company that embodies their journey from a curious student to a
            visionary entrepreneur. Their story is a testament to the power of
            thinking big, the importance of web development in shaping the
            future, and the boundless potential of those who dare to dream.
          </p>

          <p>
            In the heart of every aspiring entrepreneur, the spirit of 1r2t3z
            lives on, a reminder that with passion, dedication, and a bit of
            code, the possibilities are endless.
          </p>
        </div>
      </div>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects:
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        <ProjectCard
          src="/najdupraxi.png"
          title="NajduPraxi"
          description="Having hard time finding an internship? NajduPraxi is here to help everyone find the best internship with no stress!"
          link="https://najdupraxi.cz"
          showlink="najdupraxi.cz"
        />
        <ProjectCard
          src="/AxisLogo.png"
          title="The-Axis"
          description="Small team of people who are developing software and hardware that is helping people in challenging environments and everyday life."
          link="https://the-axis.eu"
          showlink="the-axis.eu"
        />
      </div>
    </div>
  );
};

export default Projects;
