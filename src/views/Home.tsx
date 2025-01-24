import { content } from '@/../content/content';
import Footer from '@/components/Footer';
import Header from "@/components/Header"
import PostCard from '@/components/PostCard';
import LeftPanel from "@/components/ui/LeftPanel"

const Home = () => {
    return (
        <>
            <Header navigation={[{ page: "посты", href: "/web.money_for_student" }]} />

            <div className="flex gap-5 mt-[8.5rem] mx-[15vw]" id="home__section">
                <LeftPanel />

                <div className="flex flex-wrap gap-5 justify-center content-start">
                    {content.map((item, index) => (
                        <PostCard index={index} content={item} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
