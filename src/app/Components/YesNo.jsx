"use client"
import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const YesNo = () => {
    const [like, setLike] = useState(null);
    const [hoverYes, setHoverYes] = useState(false);
    const [hoverNo, setHoverNo] = useState(false);

    return (
        <div className='flex'>
            <button className='flex justify-center items-center'
                onClick={() => setLike(true)}
                onMouseEnter={() => setHoverYes(true)}
                onMouseLeave={() => setHoverYes(false)}
            >
                <AiFillDislike
                    size={50}
                    color={hoverYes || like === true ? "#48A064" : "#e4e5e9"}
                />
                <p>No</p>
            </button>
            <button className='flex justify-center items-center'
                onClick={() => setLike(false)}
                onMouseEnter={() => setHoverNo(true)}
                onMouseLeave={() => setHoverNo(false)}
            >
                <AiFillLike
                    size={50}
                    color={hoverNo || like === false ? "#48A064" : "#e4e5e9"}
                />
                <p >Yes</p>
            </button>
        </div>
    )
}

export default YesNo
