"use client";

import { RiArrowUpWideLine } from "react-icons/ri";
import LocomotiveScroll, { ScrollToTarget } from 'locomotive-scroll';

export default function Footer() {
    return (
        <footer className="container-box mt-betweenSectionMd xl:mt-betweenSection
        bg-black text-white rounded-tl-[50px] md:rounded-tl-[100px] rounded-tr-[50px] md:rounded-tr-[100px] h-[calc(100dvh-7rem)] flex justify-center items-center"
            style={{ clipPath: " polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
        >
            <div className="w-full">
                <Content />
            </div>
        </footer>
    )
}

const Content = () => {
    const locomotiveScroll = new LocomotiveScroll();

    const handleScrollToTop = () => {
        try {
            const hero = document.querySelector("#hero")
            locomotiveScroll.scrollTo(hero as ScrollToTarget, {
                duration: 5
            });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="py-16 xl:py-24 space-y-20"
        >
            <div className="space-y-10 md:space-y-16 xl:space-y-24 text-center px-2 md:px-12 xl:px-0">
                <div className="space-y-4">
                    <h3 className="heading-4 xl:heading-3 font-dancing-script">Спасибо вам</h3>
                    <p className="text-xs md:text-sm xl:text-base font-roboto-slab">Для нас будет честью и радостью, если вы согласитесь присутствовать и благословить жениха и невесту.</p>
                </div>
                <h3 className="heading-4 xl:heading-3 font-dancing-script">
                   Свадьба ВЛАДИСЛАВА & АНАСТАСИИ
                </h3>
                <button className="flex flex-col justify-center items-center mx-auto" onClick={handleScrollToTop}>
                    <RiArrowUpWideLine className="text-2xl" />
                    <p className="font-roboto-slab text-xs">Back to top</p>
                </button>
            </div>
            <div className="px-2 md:px-12 xl:px-28 w-11/12 mx-auto">
                <p className="font-roboto-slab text-xs mt-2 text-gray-500 text-center">@ All Right Reserved | Created by Vladislav Petrov</p>
            </div>
        </div>
    )
}
