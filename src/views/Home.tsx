import { api } from "@/../convex/_generated/api";
import { content } from '@/../content/content';
import Footer from '@/components/Footer';
import Header from "@/components/Header"
import PostCard from '@/components/PostCard';
import LeftPanel from "@/components/ui/LeftPanel"
import useLogLocation from '@/hooks/useLogLocation';
import { useMutation } from 'convex/react';
import { useEffect } from 'react';

const Home = () => {
    const logMutation = useMutation(api.logModule.createLog)

    useEffect(() => {
        useLogLocation(logMutation);
    }, [])

    return (
        <>
            <Header navigation={[{ page: "посты", href: "/web.money_for_student" }]} />

            <div className="flex gap-5 mt-[8.5rem] mx-[15vw]" id="home__section">
                <LeftPanel />

                <div className="flex flex-wrap gap-5 justify-center content-start">
                    {content.map((item, index) => (
                        <PostCard key={index} index={index} content={item} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
