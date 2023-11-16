import { React } from "react";

function Card({username, btnText="Read", imgSrc}) {
    return(
        <>
            <div className="m-4 w-[300px] rounded-md border">
                <img
                    src={imgSrc}
                    alt="Laptop"
                    className="h-[200px] w-full rounded-md object-cover"
                />
                <div className="p-4">
                    <h1 className="text-lg font-semibold">About {username}</h1>
                    <p className="mt-3 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                    </p>
                    <button
                    type="button"
                    className="mt-4 rounded-sm bg-green-400 px-2.5 py-1 text-[16px] font-semibold text-black shadow-sm hover:bg-black/80 hover:text-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                    {btnText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card;