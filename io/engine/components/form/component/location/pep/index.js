import { useEffect, useState } from 'components'

export default function Location({location}) {

    const [value] = useState({ location: "pep", address: "pep" })

    useEffect(() => {

        location(value)

        return () => {
            cleanup
        }
    }, [])



    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [service])


    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [results])




    const cleanup = () => {
        location(value)
        console.log("location figured",value)
    }




    return (

        <div className="w-full flex flex-wrap">

            <p>Vendor will contact you to find out which pep store to deliver to</p>


        </div>
    )
}
