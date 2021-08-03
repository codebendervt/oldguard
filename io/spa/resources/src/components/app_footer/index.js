import Home from 'assets/home.svg'
import Menu from 'assets/menu.svg'
import Compass from 'assets/compass.svg'
import './footer.module.css'
import { useEffect, useState } from 'react'

const AppFooter = ({ refresh }) => {

    const [isAuth, setAuth] = useState(localStorage.auth)
    

    useEffect(() => {

        if(localStorage.auth){
            setAuth(true)
        }else{
            setAuth(refresh)
        }
  
        return () => {

        }
    }, [refresh])

    
    return (

        isAuth ?
            <div className="w-full flex p-2 justify-center sticky bottom-0 bg-black">
 
                <div className="app-slot">
                    <a href="/" className="app-slot-container text-accent">
                        <div className="icon-name-container ">
                            <Home />
                            <p className="text-sm mt-2">Home</p>
                        </div>
                    </a>
                </div>
 

            </div> :

            <div className="w-full flex p-2 justify-center items-center sticky bottom-0 bg-black text-white">
                
                {/* add auth fotter here */}

                <div className="app-slot">
                    <a href="/menu/index.html" className="app-slot-container text-accent">
                        <div className="icon-name-container ">
                            {/* <Menu /> */}
                            <p className="text-sm mt-2">Home</p>
                        </div>
                    </a>
                </div>

            </div>
    )
}

export default AppFooter;