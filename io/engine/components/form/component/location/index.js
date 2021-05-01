
import { useEffect, useState } from 'components'
import Choices from './components/choices'
import renderType from './utils/type'
import options from './options'

export default function Location({location}) {

    const [type, setType] = useState();

    useEffect(() => {



        return () => {
            cleanup
        }
    }, [])


    const cleanup = () => {
        console.log("location figured")
    }


    // const Option = ({ code, name }) => {
    //     return (
    //         <div id={code} className="w-1/3 h-32 flex my-4 p-2 cursor-emoji">
    //             <div className="w-32 bg-gray-600 flex items-end rounded animated  p-2  fadeIn">
    //                 <a>{name}</a>
    //             </div>
    //         </div>
    //     )

    // }



    return (

        <div className="w-full flex flex-wrap">

            {type ? "" : <Choices choices={[options.collect,options.door,options.pep]} func={setType}/>}

            {renderType(type,location)}







        </div>
    )
}
