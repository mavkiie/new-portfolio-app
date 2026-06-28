import React from "react";
import Image from "next/image";
import medlinePic from "@/public/medlinePicture.jpg";
import missionPic from "@/public/missionPic.png";
import Header from "@/components/Header";
import {
    SiPython,
    SiCplusplus,
    SiMysql,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiVite,
    SiTailwindcss,
    SiGit,
    SiPostgresql,
    SiMongodb,
    SiGooglecolab,
  } from "react-icons/si";
//react doesn't have azure icon so must use svg
  const AzureIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
    </svg>
  );


  const skillCategories = [
    {
      category: "languages",
      skills: [
        { name: "python", icon: SiPython },
        { name: "javascript", icon: SiJavascript },
        { name: "typescript", icon: SiTypescript },
        { name: "sql", icon: SiPostgresql },
        { name: "html/css", icon: [SiHtml5] },
      ]
    },
    {
      category: "frameworks",
      skills: [
        { name: "react.js", icon: SiReact },
        { name: "next.js", icon: SiNextdotjs },
        { name: "express.js", icon: SiExpress },
        { name: "tailwind css", icon: SiTailwindcss },
      ]
    },
    {
      category: "databases",
      skills: [
        { name: "mysql", icon: SiMysql },
        { name: "mongodb", icon: SiMongodb },
      ]
    },
    {
      category: "tools & platforms",
      skills: [
        { name: "git", icon: SiGit },
        { name: "vite", icon: SiVite },
        { name: "google colab", icon: SiGooglecolab },
        { name: "azure", icon: AzureIcon },
      ]
    },
  ];


export default function About() {
  return (
    //MAIN DIV
    <div>
          {/*aboout me text seciont */}
      <div className="flex flex-row items-center justify-between mx-auto w-[1344px] gap-6 pt-20">
        <Image
          src={medlinePic}
          alt="gray pic"
          width={614}
          height={468}
          className="w-[576px] h-[434px] rounded-md object-cover"
        />
        <div className="w-[700px]">
          <Header title="about me" />
          <div className="flex flex-col gap-10">
          
            <div>
            <h3 className="text-[25px] font-bold text-[#8B5E3C]">creativity</h3>
              <p className="text-[18px]">
                as a first-gen woman in stem, i’m interested in the bridge
                between creativity and technology, and building applications
                that have real-world impact. from video and photo editing
                through my favorite applications, not only did i fall in love
                with visual storytelling, but i became curious about how these
                applications were created.
              </p>
            </div>

            <div>
              <h3 className="text-[25px] font-bold text-[#8B5E3C]">initiative</h3>
              <p className="text-[18px]">
                throughout my time as a student, i’ve developed a passion for
                communicating my knowledge in development, collaborating with
                others, and learning how technology directly impacts others.
                pursuing a minor in asian american studies has allowed me to
                understand how technology can enact real change for underserved
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/*skills and picture section*/ }
      <div className="flex flex-row items-center justify-between mx-auto w-[1344px] gap-6 pt-20">
        <div>
            <Header title="skills" />
            {/* map skills data here to items in the div*/}
            <div>
            </div>
        </div>
        <div>
        <Image
          src={missionPic}
          alt="gray pic"
          width={614}
          height={468}
          className="w-[576px] h-[630px] rounded-md object-cover"
        />
        </div>

      </div>
    </div>
  );
}
