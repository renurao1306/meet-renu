import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FiSend } from 'react-icons/fi'

const Main = () => {
    return (
        <div className='pb-36 pt-20'>
            <div><Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen fill-white ' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vh] fill-purple-400 ' />
                <Spotlight className='top-28 left-80  h-[80vh] w-[50vh] fill-blue-800 ' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                    <h2 className='text-blue-100 text-xs tracking-widest text-center max-w-80'>
                        Welcome to my little corner on the Internet!
                    </h2>


                    <TextGenerateEffect className='text-center' words='From design to development, I turn challenges into seamless solutions' />

                    <p className='text-white text-lg mt-10'>
                        Hi, I&apos;m Renu
                    </p>
                    <p className='text-white-100 text-md'>
                        A sofware developer based in India
                    </p>


                    <button className="mt-10 relative inline-flex h-12 w-100 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-200">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-8 gap-4 text-sm font-medium text-white backdrop-blur-3xl">
                            Contact Me!

                            <FiSend />

                        </span>
                    </button>

                </div>
            </div>

        </div>

    )
}

export default Main