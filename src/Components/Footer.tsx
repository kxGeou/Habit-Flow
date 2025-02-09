import Logo from '../assets/logoooo.png'
import useWindowWidth from '../hooks/UseWindowWidth';
export default function Footer() {
    const width = useWindowWidth()
    return(
        <footer className={`mt-[14em] flex  text-textColor w-full px-8 ${width < 600 ? "flex-col justify-start items-start gap-8" : "justify-between items-center"}`}>
            <div className="flex flex-col">
                <div className='flex items-center gap-4 mb-2'>
                    <img src={Logo} alt="vector logo of company" />
                    <p className="text-[27px] font-semibold text-mainColor">Habbit Flow</p>
                </div>
                <p className='opacity-75 w-[75%]'>Habbit App for helping in tracking your Habbits</p>
            </div>
            <div >
                <h2 className="text-[27px] font-semibold text-mainColor">
                    Contact
                </h2>
                <ul>
                    <li>IG: lorem</li>
                    <li>Fb: lorem</li>
                </ul>
            </div>
        </footer>
    );
}