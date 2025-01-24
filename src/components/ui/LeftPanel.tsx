import { content } from '@/../content/content';
import { Search } from "lucide-react"
import TopPosts from "../TopPosts"

const LeftPanel = () => {
    return (
        <>
            <div className="flex flex-col min-w-[22rem]" id="left__panel">
                <div className="relative">
                    <input type="text" placeholder="Search..." />
                    <Search size={16} color="#444" className="absolute right-3 top-[0.6rem]" />
                </div>

                <TopPosts posts={content} />
            </div>
        </>
    )
}

export default LeftPanel
