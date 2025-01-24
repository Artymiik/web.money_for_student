import { ContentItem } from "@/types/content.type";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    index: number;
    content: ContentItem;
}

const PostCard = ({ index, content }: Props) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div key={index} className="max-w-[290px] bg-[#fff] rounded-md cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{ boxShadow: '0 0 15px 0 rgba(73, 73, 73, 0.16)' }}
            id="block__post"
        >
            <Link to={`/post/${content.id}`}>
                <img src={content.content[0].section.img}
                    alt=""
                    className={`${isHover ? "scale-[1.1]" : "scale-[1]"} transition rounded-md max-h-[15rem] w-full object-cover`}
                />

                <div className="px-7 pb-7">
                    <p className="text-[13px] text-[#555] mt-4 mb-2 font-normal" id="post__character">Глава {content.id}</p>
                    <p className="font-semibold text-[#48387f] text-[14.5px] mb-3" id="post__title">{content.title}</p>
                    <p className="font-normal max-w-full line-clamp-3 text-[14px] text-[#555] text-balance" id="post__paragraph">{content.content[0].section.paragraph}</p>
                </div>
            </Link>
        </div>
    )
}

export default PostCard
