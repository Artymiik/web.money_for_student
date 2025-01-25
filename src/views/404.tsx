import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center">
                <div className="text-[9rem]">🤷‍♂️</div>
                <p className="font-semibold tracking-wide text-[1.6rem]">Страница не найдена :(</p>
                <p className="text-[#666] max-w-[45vw] text-balance text-center my-5">К сожалению, запрашиваемая вами страница не найдена. Возможно, она была перемещена или удалена. Перейдите на главную страницу сайта.</p>
                <Link to="/web.money_for_student/" className="my-2 bg-[#48387f] text-[#fff] px-4 py-2 text-[0.8rem] tracking-[0.03rem] cursor-pointer hover:text-[#fff] hover:bg-[#7568a4]">Назад домой</Link>
            </div>
        </>
    )
}

export default NotFound
