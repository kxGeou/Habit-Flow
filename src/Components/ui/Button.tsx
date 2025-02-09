import useWindowWidth from "../../hooks/UseWindowWidth"
type ButtonProps = {
    title: string;
    width : number;
}

export default function Button({title, width}:ButtonProps) {
    const widthW = useWindowWidth()

    return (
        <button className={`w-[${width}rem] ${widthW < 500 ? "w-full" : ""}  h-[3.25rem] bg-button/10 border border-stroke text-white rounded-[12px] transition-transform duration-500 hover:scale-105`}>{title}</button>
    )
}