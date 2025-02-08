import Tutorial from './Tutorial';
import useWindowWidth from '../hooks/UseWindowWidth';
export default function ShowCase() {    
    const width = useWindowWidth();
    return (
        <div className='mt-[20rem] mb-[10rem] flex flex-col justify-center items-center'>
            <h2 className={`text-textColor  mb-[6rem] text-center ${width < 950 ? "text-[1.5rem] p-12" : "text-[2rem]"}`}>Track habits with a simple and intuitive interface</h2>
            <Tutorial></Tutorial>
        </div>
    )
}