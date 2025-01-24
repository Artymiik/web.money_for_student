import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
    navigation: { page: string, href: string }[];
}

const Header = ({ navigation }: Props) => {
    return (
        <div className="fixed top-0 w-screen z-[1000]">
            <div
                className="flex items-center justify-between px-[15vw] py-[1.8rem] bg-[#fff]"
                style={{ boxShadow: '0 0 17px 0 rgba(0, 0, 0, 0.04)' }}
                id="header__section"
            >
                <div className="font-bold text-[#48387f] opacity-[0.8] text-[18px] hover:opacity-[0.6] cursor-pointer transition">Logo</div>
                <div className="flex items-center">
                    <Link to="/web.money_for_student" className="ml-2 text-[12px] text-[#999] opacity-[0.8] hover:opacity-[1] hover:text-[#777] font-medium uppercase cursor-pointer">дом /</Link>
                    {navigation.map((item, index) => (
                        <div className="flex items-center">
                            <Link to={item.href} key={index} className="ml-2 text-[12px] text-[#999] opacity-[0.8] hover:opacity-[1] hover:text-[#777] font-medium uppercase cursor-pointer">{item.page} /</Link>
                        </div>
                    ))}
                </div>
                <AlignJustify className="cursor-pointer text-[#666] hover:text-[#000] transition hidden" />
            </div>
        </div>
    )
}

export default Header
