/* eslint-disable jsx-a11y/alt-text */
import ErrorIMG from '../Attachments/Image/Error.png'

export default function ScreenWarn({ visibility }) {
    return <div className={`${visibility} w-screen h-screen grid place-items-center`}>
        <div className="w-auto h-auto">
            <ul className="list-none space-y-10 grid place-items-center">
                <li>
                    <img src={ErrorIMG} className="h-56 w-56" />
                </li>
                <li>
                    <h1 className="text-xl font-Poppins font-bold text-center">
                        We are so sorry, that your device is not compatible 😔
                    </h1>
                </li>
            </ul>
        </div>
    </div>
}