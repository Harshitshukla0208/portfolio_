import React, { useState } from "react";
import profilePhoto from "../assets/images/myimage.jpeg";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedLetters from "./AnimatedLetters";
import { Player } from "@lottiefiles/react-lottie-player";
import FloatingIcons from "./FloatingIcons";

const phrases: string[] = [
    "Hey, click me",
    "do it again",
    "yes go on",
    "don't know why I created this",
    "anyway...",
    "drop me an email if you'd like",
    "...",
    "still playing with this? 😂",
    "you can stop now.",
    "seriously.",
    "checkout the website now ffs!",
];

const letters: string[] = [
    "I'm",
    "developing",
    "Creative",
    "&",
    "Interactive",
    "webapps",
    "🚀",
];

const title: string[] = ["Hello!", "I'm", "Harshit"];

const Hero: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    const handlePhrases = () => {
        if (index === phrases.length - 1) {
            return;
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <section className="w-full cursor-default bg-[#000] xl:px-44 lg:px-40 sm:pt-48 sm:pb-0 pt-28 md:px-32 sm:px-28 vvs:px-12 px-10 mt-[-30px] overflow-hidden">
            <div className="hero-container flex flex-col">
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex justify-between items-center"
                >
                    <div className="w-fit">
                        <Tooltip
                            title={phrases[index]}
                            placement="right-start"
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 300 }}
                        >
                            <div>
                                <img
                                    src={profilePhoto}
                                    alt="Harshit Shukla"
                                    onClick={handlePhrases}
                                    id="profilePhoto"
                                    className="rounded-full !z-10 lg:h-28 lg:w-28 md:h-28 md:w-28 vvs:h-18 vvs:w-18 w-16 h-16 hover:scale-[1.05] hover:shadow-custom1 hover:-rotate-12 transition-all duration-300 ease-in-out cursor-pointer"
                                />
                            </div>

                        </Tooltip>
                    </div>

                    <div className="flex justify-between items-center space-x-2 ">
                        <div className="h-[1px] md:w-10 sm:w-7 vvs:w-5 w-4 bg-white"></div>
                        <p className="text-white font-Glimer-Medium font-medium hover:text-[#EEA1BE] transition-colors duration-300 ease-in-out capitalize vss:text-sm md:text-base xl:text-lg text-xs">
                            Available for work
                        </p>
                    </div>
                </motion.div>

                <div>
                    <div className="mt-10 mb-8">
                    <h1 className="text-white/70 font-Glimer-Outlined font-medium !z-10 2xl:text-[6rem] xl:text-[5.8rem] lg:text-[4.5rem] md:text-[3rem] sm:text-[2.5rem] vvs:text-[2rem] text-[1.8rem] tracking-normal xl:leading-[100px] md:leading-[80px] lg:leading-[90px] sm:leading-[70px] vvs:leading-[50px] leading-[40px]">
                        <AnimatedLetters letters={title} />
                    </h1>

                    <h2 className="text-white !z-10 font-Glimer-Bold font-bold 2xl:text-[5rem] xl:text-[4.5rem] lg:text-[3rem] md:text-[2.2rem] sm:text-[1.8rem] vvs:text-[1.3rem] text-[1.2rem] tracking-normal 2xl:leading-[100px] lg:leading-[80px] md:leading-[60px] sm:leading-[40px] leading-[30px]">
                        <AnimatedLetters letters={letters} />
                    </h2>
                    </div>
                    <motion.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="w-full flex md:flex-row flex-col justify-between items-center ">
                            <div>
                                <p className=" text-white/60 font-Glimer-Light xl:text-[1.3rem] 2xl:text-[1.5rem] lg:text-base md:text-sm text-xs xl:leading-8 2xl:leading-9 lg:leading-6 leading-5 mb-6 md:mb-0">
                                "As a full-stack developer, I specialize in creating seamless and user-friendly web applications. I leverage advanced technologies like NextJS, ReactJS and NodeJS to deliver robust, high-performance solutions, ensuring seamless functionality from front to back end."                                </p>
                            </div>
                            <div>
                                <Player
                                    autoplay
                                    loop
                                    src="https://assets6.lottiefiles.com/packages/lf20_m64r7cwa.json"
                                    className="xl:!h-[400px] !z-10 xl:!w-[600px] lg:!h-[280px] lg:!w-[480px] md:!h-[240px] md:!w-[300px] !h-[180px] !w-[360px]"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <FloatingIcons />
                </div>
            </div>
        </section>
    );
};

export default Hero;
