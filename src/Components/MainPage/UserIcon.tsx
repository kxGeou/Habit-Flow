import User from '../../assets/user.svg';

type UserIconPrompts = {
    expLevel?: number;
}

function UserBar({expLevel}: UserIconPrompts) {
    return(
    <div className={`flex flex-col justify-center items-center gap-12`}>
        <img src={User} alt="minimalistic image of user" className={`w-[15rem]`}/>
        <div className={`bg-[#1C1B1F] py-3 px-5 w-[30rem] rounded-[12px]`}>
                <p className={`text-white font-semibold text-[16px] mb-2`}>John Smith</p>
                <p className={`text-white opacity-50 font-normal text-[14px] mb-2`}>🍬 Beginning Habbiter</p>
                <progress max="100" value="70" className={`h-[0.75rem] w-full`}></progress>
        </div>
    </div>
    );
}

export default function UserIcon() {
    return(
        <article className='w-full'>
            <UserBar></UserBar>
        </article>
    );
}