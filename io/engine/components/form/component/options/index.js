import { useEffect, useState } from 'components'

const Card = ({ width = "2", height = 32, children }) => {

    return (
        <div className={`p-2 w-1/${width}`}>
            <div className={`bg-gray-100 w-full h-${height} rounded flex relative animated fadeIn`}>
                <div className="w-full h-full flex flex-col p-2 relative items-end">
                    {children}
                </div>
            </div>
        </div>


    )
}
export default function Options({ func, name, model, modal, trigger }) {

    const [value, setValue] = useState(false)

    useEffect(() => {


        return () => {
            cleanup
        }
    }, [])




    const cleanup = () => {
        // location(value)
        // console.log("location figured", value)
    }

    const renderOptions = (m) => {

        
        return (
            m.options ?
            m.options.map((i, k) => {
                return (

                    <Card key={i+k}>
                        <div className="w-full h-full cursor-emoji text-black flex items-end" key={i} onClick={() => setOptions(i, k)}>

                            <div>{i}</div>
                        </div>

                    </Card>

                )
            }): <OptionsError error={model.error}/>
        ) 

    }

    const setOptions = (term, index) => {

        setValue(term)

        if (modal == "plug") {
            func({ [name]: model.values[index] })
        } else {

            func({ [name]: term })
        }

        if (trigger) {
            trigger(index)
        }

    }

    // to be made to look nicer
    const OptionsError = ({error}) => {
        return(
            error?
            <div className="">
                <div>{error.message}</div>    
                <a className="font-bold" href={error.url}>create {model.name}</a>    
            </div>: <></>
        )
    }



    return (

        <div className="w-full flex flex-wrap">

            {
                model && !value ? renderOptions(model) : <></>
            }

            {
                value ? <p>you have selected {value}</p> : <></>
            }
        </div>
    )
}
