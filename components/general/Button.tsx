import Link from "next/link";

export default function Button({ link, text, onClick }: { link?: string, text: string, onClick?: Function }) {


    if(link) {
        return (
            <Link href={link} className="w-2/3 rounded-lg py-1 flex justify-center items-center transition-all text-primary text-lg
                border border-neutral-300 dark:border-slate-500 dark:text-slate-400 hover:bg-neutral-700 dark:hover:bg-slate-500 dark:hover:text-neutral-50 hover:text-neutral-50">
                {text}
            </Link>
        )
    } else {
        return (
            <div onClick={() => onClick && onClick()} className="cursor-pointer w-2/3 rounded-lg py-1 flex justify-center items-center transition-all text-primary text-lg
                border border-neutral-300 dark:border-slate-500 dark:text-slate-400 hover:bg-neutral-700 dark:hover:bg-slate-500 dark:hover:text-neutral-50 hover:text-neutral-50">
                {text}
            </div>
        )
    }
}