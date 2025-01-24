import { footer } from '@/../content/footer'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="relative mt-[5rem] bottom-0 min-h-[20rem] bg-[#2f2e36] px-[15rem] py-[2.5rem]" id="footer__section">
            <p className="font-bold text-[#fff] text-[18px] mb-5">Logo</p>

            <div className="flex gap-[7rem]" id="footer__content">
                <div>
                    {footer.slice(0, 3).map((item, index) => (
                        <div key={index} className="my-3" id="footer__content__1">
                            <p className="text-[#fff] text-[14px]" id="footer__title">{item.title}</p>
                            <p className="text-[#999] text-[14px]" id="footer__graph">{item.graph} <Link to={item.url}>{item.url}</Link></p>
                            <p className="text-[#999] text-[14px]" id="footer__timestamp">{item.timestamp}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {footer.slice(3, 6).map((item, index) => (
                        <div key={index} className="my-3" id="footer__content__2">
                            <p className="text-[#fff] text-[14px]" id="footer__title">{item.title}</p>
                            <p className="text-[#999] text-[14px]" id="footer__graph">{item.graph} <Link to={item.url}>{item.url}</Link></p>
                            <p className="text-[#999] text-[14px]" id="footer__timestamp">{item.timestamp}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
