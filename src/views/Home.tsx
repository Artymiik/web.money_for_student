import { content } from '@/../content/content';
import Header from "@/components/Header"
import PostCard from '@/components/PostCard';
import LeftPanel from "@/components/ui/LeftPanel"

const Home = () => {
    return (
        <>
            <Header navigation={["home", "blog", 'left side']} />

            <div className="flex gap-5 mt-[8.5rem] mx-[18vw]">
                <LeftPanel />

                <div className="flex flex-wrap gap-5">
                    {content.map((item, index) => (
                        <PostCard index={index} content={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
