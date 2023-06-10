import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'

export default function Home() {

    const [cartvalue, setCartvalue] = useState(0);

    return (
        <>
            <Navbar cartvalue={cartvalue} />
            <Cards setCartvalue={setCartvalue} cartvalue={cartvalue} />
        </>
    )
}
