export default function TwoZeroFourEight() {



    return (
        <div className='w-full h-full justify-center flex flex-col items-center pt-10 gap-10'>
            
            <div className="w-full md:w-96 lg:w-[30rem] xl:w-[35rem] aspect-square bg-transparent flex flex-col gap-2">
                {Array.from({length: 4}, (_, row) => (
                    <div key={row} className="w-full grid gap-2 grid-cols-4">
                        {Array.from({length: 4}, (_, col) => (
                            <div key={row + '_' + col} className="w-full aspect-square p-3 bg-neutral-200 rounded-lg">
                                
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        
        </div>
    )
}