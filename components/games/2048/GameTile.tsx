type GameTileProps = {
    pos: { row: number, col: number}
}

export default function GameTile({ pos }: GameTileProps) {


    return (
        <div className="w-full h-full bg-slate-200 dark:bg-slate-500 rounded-lg">

        </div>
    )
}