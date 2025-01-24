import Header from "@/components/Header"
import LeftPanel from "@/components/ui/LeftPanel"

const Home = () => {
    return (
        <>
            <Header navigation={["home", "blog", 'left side']} />

            <div className="flex gap-5 mt-[8.5rem] mx-[20vw]">
                <LeftPanel />

                <div>
                    <p>sdfsdfsdfsdfs sdf sdf sdf</p>
                </div>
            </div>
        </>
    )
}

export default Home
