
import { useEffect, useState } from 'components'
import styles from '../style/'

export default function FormList({ func, name, model }) {

    const [value, setValue] = useState({})
    const [item, setItem] = useState()

    useEffect(() => {

        // console.log(model)

        return () => {
            cleanup
        }
    }, [])


    useEffect(() => {

         console.log("item set")
        updateMainList()

        return () => {
            cleanup
        }
    }, [item])




    const cleanup = () => {

        // location(value)
        // console.log("location figured", value)
    }

    // const renderOptions = (m) => {

    //     return (
    //         m.options.map((i) => {
    //             return (

    //                 <Card>
    //                     <div className="w-full h-full cursor-emoji" key={i} onClick={() => setOptions(i)}>

    //                         <div>{i}</div>
    //                     </div>

    //                 </Card>

    //             )
    //         })
    //     )

    // }

    // const setOptions = (term) => {

    //     setValue(term)

    //     func({ [name]: term })
    // }


    const RederInput = () => {
        return (
            model.data.map((i) => {

                return (
                    <input key={i.name} onChange={handleChange} className={`w-1/2 ` + styles.input} type={i.type} placeholder={i.label} name={i.name} />
                )
            })
        )
    }

    const RenderList = ({ data }) => {
        if (data) {
            return (
                data.map((i, k) =>
                    <div className="w-full flex" key={k}>
                        <RenderItem i={i} />
                        <div className="font-default-accent p-4" onClick={() => deleteItem(k)}>delete</div>
                    </div>
                )
            )

        } else {

            return (<></>)
        }
    }

    const RenderItem = ({ i }) => {
        return (
            model.data.map((v,k) => {
                return (
                    <>
                        <div key={k} className="p-4 font-default-">{i[v.name]}</div>

                    </>
                )

            })
        )

    }

    const handleChange = (i) => {


        let v = { [i.target.name]: i.target.value }
        let s = Object.assign(value, v)
        setValue(s)
    }

    const addToList = () => {
        //todo check here

        if (item) {
            item.push(value)
            setItem(item)
        } else {
            setItem([value])
        }

        setValue({})
        //updateMainList()
    }

    const deleteItem = (k) => {
        let _item = []

        item.map((i, x) => {
            if (x != k) {
                _item.push(i)

            }
        })

        setItem(_item)
        updateMainList()
    }

    const updateMainList = () => {
        func({ [model.name]: item })
        
    }

    return (

        <div className="w-full flex flex-wrap flex-col">
            <RederInput />

            <div onClick={addToList} className={styles.form_button + "px-2 cursor-emoji"}> add to list</div>

            <div className="max-w-sm w-full flex flex-wrap">

                <RenderList data={item} />
            </div>

        </div>
    )
}
