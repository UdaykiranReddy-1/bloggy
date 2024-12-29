import Image from "next/image"
// import { FaCalendar } from "react-icons/fa";
// import { FaRegClock } from "react-icons/fa";
// import { CgSandClock } from "react-icons/cg";
// import { CiClock2 } from "react-icons/ci";
// import { BsClock } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { SlClock } from "react-icons/sl";

const TitleCard: React.FC = () => {
    return (
        <div className="bg-[#22d172] text-[#202c45] p-4 mx-4 md:p-12 rounded-lg">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Title Card */}
                <div className="flex-1">
                    <h1 className="text-2xl md:text-4xl font-bold leading-10 tracking-wide">
                        Set Up SMTP Server - A Step-By-Step Tutorial
                    </h1>
                    <div className="flex text-sm mt-4 space-x-8">
                        <div className="flex items-center space-x-1 "><IoCalendarOutline className="text-lg" /> <span >December 17th , 2024</span></div>
                        <div className="flex items-center space-x-1 "> <SlClock className="text-lg" /><span >5min read</span></div>
                    </div>
                    <div className="mt-4 flex items-center">
                        <img
                            src="/blogim/profile-pic.jpeg" // Replace with author image
                            alt="Author"
                            className="w-[50px] h-[50px] rounded-full object-contain bg-white"
                        />
                        <div className="ml-3">
                            <p className="text-lg font-semibold">Uday Reddy</p>
                            <p className="text-xs">Technical Content Writer</p>
                        </div>
                    </div>
                </div>
                {/* Illustration */}
                <div className="flex-1 items-center hidden md:block">
                    <div className="relative w-full h-56"> {/* Fixed container size */}
                        <Image
                            src="/blogim/smtp-stock.png"
                            alt="smpt-server"
                            layout="fill"           // Makes image fill the container
                            objectFit="contain"       // Ensures image covers container without distortion
                            quality={100}            // Adjusts image quality
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TitleCard;