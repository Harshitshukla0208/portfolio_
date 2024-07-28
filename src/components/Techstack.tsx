import { motion } from "framer-motion";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import firebase from "../assets/images/firebase.svg";
import mongo from "../assets/images/mongo.svg";
import postman from "../assets/images/postman.svg";
import node from "../assets/images/node.svg";
import typescript from "../assets/images/typescript.svg";
import mui from "../assets/images/mui.svg";
import js from "../assets/images/js.svg";
import git from "../assets/images/git.svg";
import mysql from "../assets/images/mysql.svg";
import cpp from "../assets/images/cpp.svg";
import nextJS from "../assets/images/nextJS.svg";
import socket from "../assets/images/socket.svg";
import webrtc from "../assets/images/webrtc.svg";
import vscode from "../assets/images/vs.svg";
import ex from "../assets/images/ex.svg";

type Skill = {
    id: number;
    name: string;
    icon: string;
};

const fronendskills: Skill[] = [
    { id: 1, name: "NextJs", icon: nextJS },
    { id: 2, name: "ReactJs", icon: react },
    { id: 3, name: "Typescript", icon: typescript },
    { id: 4, name: "Javascript", icon: js },
];

const backendSkills: Skill[] = [
    { id: 5, name: "TailwindCss", icon: tailwind },
    { id: 6, name: "NodeJs", icon: node },
    { id: 7, name: "ExpressJs", icon: ex },
    { id: 8, name: "C++", icon: cpp },
];

const databases: Skill[] = [
    { id: 9, name: "MongoDB", icon: mongo },
    { id: 10, name: "MySql", icon: mysql },
    { id: 11, name: "Firebase", icon: firebase },
];

const advanced: Skill[] = [
    { id: 12, name: "WebRTC", icon: webrtc },
    { id: 13, name: "Socket.io", icon: socket },
    { id: 14, name: "Material ui", icon: mui },
];

const tools: Skill[] = [
    { id: 15, name: "VsCode", icon: vscode },
    { id: 16, name: "Postman", icon: postman },
];

const tools_2: Skill[] = [
    { id: 17, name: "Git", icon: git },
];

const allSkills: Skill[] = [
    ...fronendskills,
    ...backendSkills,
    ...databases,
    ...advanced,
    ...tools,
    ...tools_2,
];

const Techstack: React.FC = () => {
    const renderSkills = (skills: Skill[]) =>
        skills.map((skill, index) => (
            <motion.div
                key={skill.id}
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.2,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    },
                }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                }}
                whileTap={{
                    scale: 0.9,
                    transition: {
                        duration: 0.2,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    },
                }}
                className={`flex justify-center cursor-pointer ${index === allSkills.length - 1 ? 'col-span-2 justify-center' : ''}`}
            >
                <div className="relative">
                    <span className="absolute top-0 left-0 mt-[5px] ml-[5px] h-full rounded bg-[grey] w-[110px] sm:w-[150px] md:w-[160px]"></span>
                    <span
                        className={`relative h-full rounded border-t-[1px] border-l-[1px] border-[#374151] bg-[#1e1e2e] px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-md text-white transition duration-100 flex items-center gap-2 justify-center w-[110px] sm:w-[150px] md:w-[160px] truncate`}
                    >
                        <img
                            src={skill.icon}
                            width={25}
                            height={25}
                            alt={skill.name}
                        />
                        {skill.name}
                    </span>
                </div>
            </motion.div>
        ));

    return (
        <div className="flex justify-center flex-col">
            <div className="flex items-center justify-center">
                <motion.span
                    initial={{ scale: 0.8, x: -100, opacity: 0 }}
                    whileInView={{ scale: 1, x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className=" text-3xl md:text-4xl font-bold"
                >{`<`}</motion.span>
                <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className="text-4xl md:text-6xl text-white font-Glimer-Outlined font-semibold"
                >
                    Tech Stack
                </motion.span>
                <motion.span
                    initial={{ scale: 0.8, x: 100, opacity: 0 }}
                    whileInView={{ scale: 1, x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className=" text-3xl md:text-4xl font-bold"
                >{`/>`}</motion.span>
            </div>
            <div className="hidden md:block">
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(fronendskills)}
                </div>
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(backendSkills)}
                </div>
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(databases)}
                </div>
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(advanced)}
                </div>
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(tools)}
                </div>
                <div className="flex justify-center gap-10 mt-10 flex-wrap">
                    {renderSkills(tools_2)}
                </div>
            </div>
            <div className="md:hidden grid grid-cols-2 gap-6 mt-10">
                {renderSkills(allSkills)}
            </div>
        </div>
    );
};

export default Techstack;
