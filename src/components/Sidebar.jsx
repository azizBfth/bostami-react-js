import {
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiOutlineCalendar,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { BiMap } from "react-icons/bi";
import { BsJournalText, BsTelephoneOutbound } from "react-icons/bs";
import profilePic from '../images/nouha/profile.jpg'
import cvPdf from '../images/nouha/cv.pdf'

const Sidebar = () => {
  return (
    <>
      <div className="Home_info col-span-12 lg:col-span-4">
        <div className="bg-slate-100 dark:bg-[#111111] rounded-2xl mt-10 lg:mb-10 py-10 md:sticky top-40 left-0">
          <div className="overflow-hidden rounded-lg -mt-48 text-center w-60 h-60 m-auto">
            <img src={profilePic} alt="Profile"/>
          </div>
          <div className="text-center">
            <h2 className="mt-6 mb-1 text-4xl font-semibold dark:text-white">
              OMRANI Nouha
            </h2>
            <h1 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
              Chimiste
            </h1>
          </div>
          <div className="flex justify-center space-x-3">
            <a
              href="/"
              className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-mid-dark hover:hover_active text-[#1773EA] hover:text-slate-50"
            >
              <FaFacebookF />
            </a>
            <a
              href="/"
              className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-mid-dark hover:hover_active text-[#1C9CEA] hover:text-slate-50"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="/"
              className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-mid-dark hover:hover_active text-[#e14a84] hover:text-slate-50"
            >
              <AiOutlineDribbble />
            </a>
            <a
              href="/"
              className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-mid-dark hover:hover_active text-[#0072b1] hover:text-slate-50"
            >
              <RiLinkedinFill />
            </a>
          </div>
          <ul className="flex flex-col bg-light-gray dark:bg-mid-dark px-7 py-8 rounded-2xl mt-10">
            <li className="flex items-center gap-6 border-b border-slate-300 py-3">
              <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-[#111111] text-cyan-500 hover:hover_active group cursor-pointer">
                <BsTelephoneOutbound />
              </div>
              <div className="flex flex-col dark:text-white">
                <span className="text-slate-500 text-xs font-bold">Téléphone</span>
                <a
                  className="transition-all duration-100 hover:text-primary"
                  href="tel:+8801616639307"
                >
                  +216 21 773 258
                </a>
              </div>
            </li>
            <li className="flex items-center gap-6 border-b border-slate-300 py-3">
              <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#6AB5B9] hover:hover_active group cursor-pointer text-xl">
                <BiMap />
              </div>
              <div className="flex flex-col dark:text-white">
                <span className="text-slate-500 text-xs font-bold">
                  Localisation
                </span>
                <span className="transition-all duration-100">
                Siliana-Tunisie
                </span>
              </div>
            </li>
            <li className="flex items-center gap-6 border-b border-slate-300 py-3">
              <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#FD7590] hover:hover_active group cursor-pointer text-xl">
                <BsJournalText />
              </div>
              <div className="flex flex-col dark:text-white">
                <span className="text-slate-500 text-xs font-bold">Email</span>
                <a
                  className="transition-all duration-100 hover:text-primary"
                  href="mailto:example@mail.com"
                >
                  omraninouha54@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-6 py-3">
              <div className="w-10 h-10 rounded bg-light-gray flex items-center justify-center shadow-md dark:bg-black text-[#C17CEB] hover:hover_active group cursor-pointer text-xl">
                <AiOutlineCalendar />
              </div>
              <div className="flex flex-col dark:text-white">
                <span className="text-slate-500 text-xs font-bold">
                  Date de Naissance
                </span>
                <span className="transition-all duration-100 ">
                  16 Mai 1997
                </span>
              </div>
            </li>
          </ul>
          <div className="text-center mt-10">
            <a
              href={cvPdf}
              className=" rounded-[60px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-3 px-6 text-slate-50 inline-flex items-center gap-2"
            >
              <AiOutlineDownload />
              Telecharger CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
