interface Props {
    navigation: string[];
}

const Header = ({ navigation }: Props) => {
    return (
        <div className="fixed top-0 w-screen">
            <div className="flex items-center justify-between px-[20vw] py-[1.8rem] bg-[#fff]" style={{ boxShadow: '0 0 17px 0 rgba(0, 0, 0, 0.04)' }}>
                <div className="font-bold text-[#003180] opacity-[0.8] text-[18px] hover:opacity-[0.6] cursor-pointer transition">Logo</div>
                <div className="flex items-center">
                    {navigation.map((item, index) => (
                        <p key={index} className="ml-2 text-[12px] text-[#999] opacity-[0.8] hover:opacity-[1] hover:text-[#777] font-medium uppercase cursor-pointer">{item} /</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
