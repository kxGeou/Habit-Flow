type ButtonProps = {
    title: string;
    width : number;
    height: number;
}

export default function Button({title, width, height}:ButtonProps) {
    return (
        <button className={`w-[${width}rem] h-[${height}rem] bg-button/10 border border-stroke text-white rounded-[12px] transition-transform duration-500 hover:scale-105`}>{title}</button>
    )
}