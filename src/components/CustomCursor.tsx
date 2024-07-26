import React, { useEffect } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
    useEffect(() => {
        gsap.delayedCall(1, () => {
            const bigBall = document.querySelector(".cursor__ball--big") as HTMLElement;
            const socialIcons = document.querySelectorAll(".social");
            const footerIcons = document.querySelectorAll(".social-icon");
            const profilePhoto = document.getElementById("profilePhoto") as HTMLElement;
            const links = document.querySelectorAll(".link");
            const repoLinks = document.querySelectorAll(".repo");
            const techIcons = document.querySelectorAll(".tech");
            const downloadBtn = document.getElementById("download-btn") as HTMLElement;

            // Listeners
            document.body.addEventListener("mousemove", onMouseMove);

            socialIcons.forEach(icon => {
                icon.addEventListener("mouseenter", onMouseHover);
                icon.addEventListener("mouseleave", onMouseHoverOut);
            });

            footerIcons.forEach(icon => {
                icon.addEventListener("mouseenter", linkMouseHover);
                icon.addEventListener("mouseleave", onMouseHoverOut);
            });

            links.forEach(link => {
                link.addEventListener("mouseenter", linkMouseHover);
                link.addEventListener("mouseleave", onMouseHoverOut);
            });

            repoLinks.forEach(repo => {
                repo.addEventListener("mouseenter", linkMouseHover);
                repo.addEventListener("mouseleave", onMouseHoverOut);
            });

            techIcons.forEach(icon => {
                icon.addEventListener("mouseenter", profileMouseHover);
                icon.addEventListener("mouseleave", onMouseHoverOut);
            });

            profilePhoto.addEventListener("mouseenter", profileMouseHover);
            profilePhoto.addEventListener("mouseleave", onMouseHoverOut);

            downloadBtn.addEventListener("mouseenter", profileMouseHover);
            downloadBtn.addEventListener("mouseleave", onMouseHoverOut);

            // Move the cursor
            function onMouseMove(e: MouseEvent) {
                gsap.to(bigBall, {
                    opacity: 1,
                    duration: 0.4,
                    x: e.clientX - 15,
                    y: e.clientY - 15,
                });
            }

            // hover link:
            function linkMouseHover() {
                gsap.to(bigBall, {
                    duration: 0.3,
                    scale: 1.4,
                    ease: "Power3.easeInOut",
                });
            }

            // Hover profile photo:
            function profileMouseHover() {
                bigBall.style.display = "none";
            }

            // Hover an element
            function onMouseHover(e: MouseEvent) {
                bigBall.style.display = "none";
                gsap.to(bigBall, {
                    duration: 0.3,
                    opacity: 0,
                    ease: "Power2.easeInOut",
                });
                gsap.to((e.target as HTMLElement).querySelector(".icon-wrapper"), {
                    duration: 0.3,
                    scale: 1.1,
                    ease: "Power3.easeInOut",
                });
                gsap.to((e.target as HTMLElement).querySelector("img"), {
                    duration: 0.3,
                    scale: 0.9,
                    ease: "Power3.easeInOut",
                });
            }

            function onMouseHoverOut(e: MouseEvent) {
                bigBall.style.display = "block";
                gsap.to(bigBall, {
                    duration: 0.3,
                    opacity: 1,
                    ease: "Power2.easeInOut",
                });
                gsap.to((e.target as HTMLElement).querySelector(".icon-wrapper"), {
                    duration: 0.3,
                    scale: 1,
                    ease: "Power3.easeInOut",
                });
                gsap.to((e.target as HTMLElement).querySelector("img"), {
                    duration: 0.3,
                    scale: 1,
                    ease: "Power3.easeInOut",
                });
                gsap.to(bigBall, {
                    duration: 0.3,
                    scale: 1,
                    ease: "Power3.easeInOut",
                });
            }
        });
    }, []);

    return (
        <div className="cursor hidden xl:block">
            <svg
                width="44"
                height="42"
                viewBox="0 0 54 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor__ball cursor__ball--big opacity-0 flex justify-center items-center"
            >
                <path
                    d="M53.5 26C53.5 40.0656 41.6535 51.5 27 51.5C12.3465 51.5 0.5 40.0656 0.5 26C0.5 11.9344 12.3465 0.5 27 0.5C41.6535 0.5 53.5 11.9344 53.5 26Z"
                    stroke="#EEA1BE"
                    strokeWidth={1.1}
                />
            </svg>
        </div>
    );
};

export default CustomCursor;
