type ChallengeProps = {
  expAmount: number;
  title: string;
  description: string;
  icon: string;
  onClick: any;
};

export default function Challenge({
  expAmount,
  title,
  description,
  icon,
  onClick,
}: ChallengeProps) {
  return (
    <div className="flex justify-between items-center bg-secondary py-2 px-6 gap-8 rounded-[12px]  cursor-pointer" onClick={onClick}>
      <div className="flex items-center j">
        <p className="text-[2.5rem] mr-6">{icon}</p>
        <div className="flex flex-col">
          <p className="text-textColor font-semibold">{title}</p>
          <p className="text-textColor opacity-60">{description}</p>
        </div>
      </div>
      <p className="text-textColor opacity-40 font-light">{expAmount.toString()} pts</p>
    </div>
  );
}
