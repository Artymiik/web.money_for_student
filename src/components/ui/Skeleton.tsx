const Skeleton = () => {
    return (
        <>
            <div className="fixed top-0 left-0 z-[2000] w-screen">
                <div className="flex items-center justify-between py-[2rem] px-[5rem] bg-[#fff]">
                    <div className="w-[10rem] bg-[#ccc] h-4 rounded-md animate-pulse"></div>
                    <div className="flex items-center gap-3">
                        <div className="w-[3rem] bg-[#ccc] h-4 rounded-md animate-pulse"></div> /
                        <div className="w-[4rem] bg-[#ccc] h-4 rounded-md animate-pulse"></div>
                    </div>
                </div>

                <div className="pt-[2.5rem] px-[15vw] flex gap-9 bg-[#f3f3f3]" id="skeleton__home__section">
                    <div className="flex flex-col gap-8" id="skeleton__home__left">
                        <div className="w-[22rem] h-[3rem] rounded-md bg-[#ccc] animate-pulse"></div>
                        <div className="w-[22rem] h-[24rem] rounded-md bg-[#ccc] animate-pulse"></div>
                    </div>

                    <div className="flex items-center flex-wrap justify-center gap-3">
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                        <div className="bg-[#ccc] w-[19rem] h-[27rem] animate-pulse"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skeleton
