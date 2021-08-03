import { AppFooter, AppHeader, ReactDOM, useState, useEffect } from 'components';

import './index.css'

const App = () => {

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        console.log(window.location.pathname)

       


        return () => {

        }
    }, [])



    return (
        <div className="app-container">

            <AppHeader refresh={setRefresh} />


            <div className="app-content-showcase hide-scrollbar">

   


            </div>



            <AppFooter refresh={refresh} />

        </div>

    )
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);