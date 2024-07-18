import React, { useEffect } from "react";
// import bloggy from "../assets/images/Bloggy.png";
// import planitio from "../assets/images/Planitio.png";
import mvk_ui_web from "../assets/images/mvk-ui.png"
import mvk_ui_npm from "../assets/images/mvk-npm.png"
import codelogs from "../assets/images/codelogs.png"
import codeamong from "../assets/images/codeamong.png"
import { BsGithub, BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
    useEffect(() => {
        const containers = document.querySelectorAll<HTMLElement>(".container");

        containers.forEach((container) => {
            const imgContainer = container.querySelector<HTMLElement>(".img-container");
            const img = container.querySelector<HTMLImageElement>(".img");
            const textContainer = container.querySelector<HTMLElement>(".text-container");
            const contentLine = textContainer?.children[0].children[0] as HTMLElement;
            const contentP = textContainer?.children[1] as HTMLElement;
            const contentBtn = textContainer?.children[2] as HTMLElement;

            gsap.delayedCall(1, () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top 65%",
                        end: "top top",
                        toggleActions: "play none resume pause",
                    },
                })
                    .set(container, {
                        duration: 0.5,
                        visibility: "visible",
                        ease: "power4.Out",
                    })
                    .to(
                        imgContainer,
                        {
                            duration: 1.6,
                            width: "0%",
                            ease: "power4.out",
                        },
                        0.2
                    )
                    .from(
                        img,
                        {
                            duration: 1.6,
                            scale: 1.6,
                            ease: "power4.out",
                        },
                        0.2
                    )
                    .from(
                        contentLine.firstChild,
                        {
                            duration: 1,
                            y: "54px",
                            ease: "power4.inOut",
                        },
                        0.5
                    )
                    .from(
                        contentP,
                        {
                            duration: 1,
                            y: 20,
                            opacity: 0,
                            ease: "power4.inOut",
                        },
                        1
                    )
                    .from(
                        contentBtn,
                        {
                            duration: 1,
                            y: 20,
                            opacity: 0,
                            ease: "power4.inOut",
                        },
                        1.2
                    );
            });

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#project-heading",
                    start: "top 95%",
                    toggleActions: "play none resume pause",
                },
            })
                .fromTo(
                    "#project-heading",
                    {
                        y: 70,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "power4.inOut",
                        duration: 1.4,
                    }
                );
        });
    }, []);

    return (
        <div
            className="w-full  pb-40 xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10"
            id="projects"
        >
            <h1
                id="project-heading"
                className="text-white/70 font-Glimer-Outlined font-semibold z-40 lg:mb-32 mb-20 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.0rem] lg:text-[7.0rem] xl:text-[9.0rem] 2xl:text-[10.0rem]  text-[3.0rem] leading-[3.0rem] sm:leading-[5.0rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
            >
                Featured Projects
            </h1>
            <div className="sm:space-y-40 space-y-32 xl:space-y-[35vh] z-30">
                {/* mvk-ui-web */}
                <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={mvk_ui_web}
                            alt="project image"
                            className="absolute w-full object-cover rounded-xl h-full img"
                        />
                        <div className="img-container absolute top-0 right-0 bg-[#000] w-full h-full"></div>
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000] ">
                                <div className="content-line-inner">mvk-ui-web</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-xl sm:text-lg 2xl:text-2xl vvs:text-sm text-xs lg:text-right">
                            A component library website built with Next.js and Tailwind CSS, 
                            showcasing live components and their code,
                            which you can copy and paste into your apps.                        
                        </p>

                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/Harshitshukla0208/mvk-ui-web"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://mvk-ui.vercel.app/"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mvk-ui-npm */}
                <div className="container lg:space-x-2  flex flex-col-reverse lg:flex-row lg:justify-between  lg:items-center items-start invisible ">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000]">
                                <div className="content-line-inner">npm-package</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-xl sm:text-lg 2xl:text-2xl vvs:text-sm text-xs">
                            An npm package built using TypeScript. Enhance your projects with beautifully designed, accessible components ready to integrate.
                        </p>

                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/Harshitshukla0208/mvk-ui"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://www.npmjs.com/package/mvk-ui"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={mvk_ui_npm}
                            alt="project image"
                            className="absolute w-full h-[90%] rounded-xl img"
                        />
                        <div className="img-container absolute top-0 left-0 bg-[#000] w-full h-full"></div>
                    </div>
                </div>

                {/* Codelogs */}
                <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={codelogs}
                            alt="project image"
                            className="absolute w-full object-cover h-full rounded-xl img"
                        />
                        <div className="img-container absolute top-0 right-0 bg-[#000] w-full h-full"></div>
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000] ">
                                <div className="content-line-inner">Codelogs</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-xl sm:text-lg 2xl:text-2xl vvs:text-sm text-xs lg:text-right">
                            A web application built with Vite and React.js that allows users to write and compile code snippets.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/Harshitshukla0208/Codelogs"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://codelogs.vercel.app/"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CodeAmong */}
                <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000]">
                                <div className="content-line-inner">CodeAmong</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-xl sm:text-lg 2xl:text-2xl vvs:text-sm text-xs">
                            Code together effortlessly with a collaborative platform that includes built-in video calling.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/Harshitshukla0208/CodeAmong-frontend"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://codeamong.vercel.app/"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={codeamong}
                            alt="project image"
                            className="absolute w-full object-cover h-full rounded-xl img"
                        />
                        <div className="img-container absolute top-0 left-0 bg-[#000] w-full h-full"></div>
                    </div>
                </div>

                {/* Planitio */}
                {/* <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={planitio}
                            alt="project image"
                            className="absolute w-full object-cover h-full img"
                        />
                        <div className="img-container absolute top-0 right-0 bg-[#000] w-full h-full"></div>
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text cursor-default font-Glimer-Bold font-bold lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000] ">
                                <div className="content-line-inner">Planit.io</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
                            Now no more going back-n-forth in conducting meetings, Planit.io
                            makes it easy and elegant to schedule meetings.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="#"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="#"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Bloggy */}
                {/* <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-[#000]">
                                <div className="content-line-inner">Bloggy</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
                            A constructive and inclusive social network for software
                            developers.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="#"
                                >
                                    <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-white/90 hover:text-white" />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="#"
                                >
                                    <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-white transition duration-200 ease-in-out text-white/90" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={bloggy}
                            alt="project image"
                            className="absolute w-full object-cover h-full img"
                        />
                        <div className="img-container absolute top-0 left-0 bg-[#000] w-full h-full"></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Projects;