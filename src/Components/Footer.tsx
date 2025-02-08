import Logo from '../assets/logoooo.png'
export default function Footer() {
    return(
        <footer className="mt-[20rem] flex justify-between items-center text-textColor">
            <div className="flex flex-col w-[12rem]">
                <div className='flex items-center gap-4 mb-2'>
                    <img src={Logo} alt="vector logo of company" />
                    <p className="text-[20px] font-semibold">Habbit Flow</p>
                </div>
                <p className='opacity-75'>Habbit App for helping in tracking your Habbits</p>
            </div>
            <div >
                <h2 className="text-[20px] font-semibold">
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