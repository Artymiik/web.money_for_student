import { ContentItem } from "@/types/content.type"

interface Props {
    posts: ContentItem[];
}

const TopPosts = ({ posts }: Props) => {
    return (
        <>
            <div className="bg-[#fff] p-7 mt-7 rounded">
                <p className="font-semibold text-[#48387f]" id="popular__posts__title__block">Популярные Посты</p>

                {posts.slice(0, 4).map((item, index) => (
                    <div className="flex items-start gap-4 my-5" key={index}>
                        <p className="font-bold text-[#48387f] text-[1.4rem]" id="popular__post__id">{item.id}</p>

                        <div>
                            <p className="font-semibold text-[#48387f] text-[14px]" id="popular__post__title">{item.title}</p>
                            <p className="text-[#555] text-[13px] mt-1" id="popular__post__date">24.01 2025</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopPosts
