type ButtonProps = {
    title: string;
}

export default function Button({title}:ButtonProps) {
    return (
        <button className="bg-[#1C1B1F] text-white w-[20rem] h-[3.5rem] rounded-[12px]">{title}</button>
    )
}