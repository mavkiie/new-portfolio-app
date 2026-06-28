import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profilePic.png";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function Home() {
  return (
    //this is the div to hold flex objects
    <div className="flex justify-between w-100 mx-auto  w-300 items-center pt-20 gap-20 h-170">
      <div className="font-bold w-150">
        <div className="relative inline-block fade-in-1">
          <h3 className="text-[70px]">mackenzie doan</h3>
          <Image
            src="/stars-bg-removed.png"
            alt=""
            width={100}
            height={100}
            className="absolute top-0 -right-25 pointer-events-none"
          />
        </div>
        <div>
          <p className="text-lg fade-in-2">
            i'm a recent graduate from the university of maryland with a b.s. in
            computer science. i'm interested in full-stack development, machine
            learning, and product management.
          </p>
        </div>
        <div className=" flex flex-col links-container pt-5 text-lg fade-in-3">
          <Link
            className="flex items-center gap-2 underline hover:text-[#AAB68F] transition-colors duration-200"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineDocumentText className="w-4 h-4" />
            <span>resume</span>
          </Link>
          <Link
            className="flex items-center gap-2 underline hover:text-[#AAB68F] transition-colors duration-200"
            href="mailto:mackenziedoan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail className="w-4 h-4" />
            <span>mackenziedoan@gmail.com</span>
          </Link>
        </div>
        <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: "#6F6F5E",
              borderRadius: "2px",
              margin: "20px 0",
            }}
            className="fade-in-3"
          />
      </div>
      <div className="relative fade-in-1">
        <Image
          src={profilePic}
          alt="gray pic"
          width={500}
          height={500}
          className="w-115 h-115 rounded-md object-cover"
        />

        <Image
          src="/tape-bg-removed.png"
          alt=""
          width={180}
          height={180}
          className="absolute -top-20 left-30 pointer-events-none"
        />
      </div>
    </div>
  );
}
