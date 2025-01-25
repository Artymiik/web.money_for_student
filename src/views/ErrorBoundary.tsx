import { Component, ReactNode } from "react";
import { Link } from "react-router-dom"

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(error: unknown): State {
        // Обновляем состояние с тем, чтобы следующий рендер показал fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: any) {
        // Можно также логгировать ошибку, используя сервис вроде Sentry
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Кастомный компонент для отображения при ошибке
            return (
                <div className="h-screen flex flex-col items-center justify-center">
                    <div className="text-[9rem]">🤷‍♂️</div>
                    <p className="font-semibold tracking-wide text-[1.6rem]">Неизвестная ошибка :(</p>
                    <p className="text-[#666] max-w-[45vw] text-balance text-center my-5">Кажется, что-то пошло не так, и вы столкнулись с неожиданной проблемой. Пожалуйста, попробуйте обновить страницу через несколько минут или вернитесь позже.</p>
                    <Link to="/web.money_for_student/" className="my-2 bg-[#48387f] text-[#fff] px-4 py-2 text-[0.8rem] tracking-[0.03rem] cursor-pointer hover:text-[#fff] hover:bg-[#7568a4]">Назад домой</Link>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary
