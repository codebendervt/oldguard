import { useEffect, useState } from 'components'


export default function Logic({ func, name, model, modal, Control }) {

    const [value] = useState(model.steps)
    const [count, setCount] = useState(0)
    const [logicState, setLogicState] = useState()

    useEffect(() => {

        return () => {
            cleanup
        }
    }, [])


    // const setOptions = (term, index) => {

    //     setValue(term)

    //     if (modal == "plug") {
    //         func({ [name]: model.values[index] })
    //     } else {

    //         func({ [name]: term })
    //     }

    // }



    const cleanup = () => {
        setLogicState()
    }

    const changeLogic = (e) => {
        console.log(e)
        setCount(count + 1)
        setLogicState(e)
    }

    const renderLogic = (data) => {

        return (
            <Control model={data} name={data.name} type={data.type} func={func} label={data.label} modal={modal} trigger={changeLogic} />
        )


    }

    const CreateLogic = ({ position }) => {


        if (count <= value) {
            if (position >= 0) {
                return (
                    renderLogic(model.step.step[position])
                )

            } else {
                return (
                    renderLogic(model.step)
                )
            }
        } else {
            return (
                <>{model.message}</>
            )
        }



    }



    return (

        <div className="w-full flex flex-wrap">
            <CreateLogic key={logicState} position={logicState} />
        </div>
    )
}


// { name, type, func, label, location, model, modal }
