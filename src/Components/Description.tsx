type DescriptionProps = {
    title?: string;
    description?: string;

}
export default function Description({title, description}: DescriptionProps) {
    return (
    <article className="flex flex-col text-left gap-2">
        <h2 className="text-[50px] font-semibold w-[25rem] leading-[120%]">{title}</h2>
        <p className="opacity-75 text-[20px] w-[20rem] leading-8">{description}</p>
    </article>
    )
}