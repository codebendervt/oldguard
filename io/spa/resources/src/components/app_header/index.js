import { useState, useEffect } from "react";
import test from './test'

const AppHeader = ({ refresh,children }) => {

    const [token] = useState(new URLSearchParams(new URL(window.location).search).get('token'))


    useEffect(() => {

        if (token) {
            //console.log(token)
            let decoded = test(token)
            refresh(decoded)

        }

        return () => {

           
        }
    }, [token])


    return (


        <div className="flex p-2">
            {children}
        </div>
    )
}

export default AppHeader;