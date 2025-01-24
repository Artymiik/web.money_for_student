import { Search } from "lucide-react"

const LeftPanel = () => {
    return (
        <>
            <div className="flex flex-col min-w-[15vw]">
                <div className="relative">
                    <input type="text" placeholder="Search..." />
                    <Search size={16} color="#444" className="absolute right-3 top-[0.6rem]" />
                </div>
            </div>
        </>
    )
}

export default LeftPanel
