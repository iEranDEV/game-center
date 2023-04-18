import KeyboardButton from "./KeyboardButton";
import { TbBackspace, TbSend } from 'react-icons/tb';

function WordleKeyboard() {
    const symbols = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
    ]

    const getIcon = (val: string) => {
        if(val === 'ENTER') return <TbSend className="h-6 w-6"></TbSend>
        else if(val === 'DELETE') return <TbBackspace className="h-6 w-6"></TbBackspace>
    }

    return (
        <div className="w-full md:w-96 lg:w-[30rem] xl:w-[35rem] h-2/6 flex flex-col gap-2">

            {/* Rows */}
            {symbols.map((row, index) => (
                <div key={index} className="w-full flex justify-center items-center gap-2">
                    {row.map((item) => (
                        <KeyboardButton key={item} letter={item} icon={getIcon(item)} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default WordleKeyboard;