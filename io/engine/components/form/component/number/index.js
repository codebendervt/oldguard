import { hasAccount, useEffect, useState } from 'components'

export default function GuapInvoice({label,func,name,placeholder="00.00"}) {
    // const [isValid, setValid] = useState(false)
    // const [account, setAccount] = useState(false)
    const [values] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    const [amount, setAmount] = useState('')

    // useEffect(() => {

    //     if (hasAccount() && !isValid) {

    //         //console.log('has account')
    //         setAccount(hasAccount().data)

    //         setValid(true)
    //     }

    //     return () => {
    //         console.log("cleaning up")
    //     }
    // }, [account])

    const onChange = (i) => {

        setAmount(i.target.value)
        func({[i.target.name]: i.target.value })

    }

    const changeNumber = (i) => {
        //console.log(i)
        let _newAmount = i.toString();
        if (amount) {
            _newAmount = amount + i.toString()
        }

        setAmount(_newAmount)
        
        func({[name]: _newAmount })

    }

    const deleteNumber = () => {

        try{
            let _newAmount = amount.split('')
            _newAmount.pop()
            //console.log(_newAmount)
            setAmount(_newAmount.join(''))
        }catch(ex){

            console.log("can not delete", ex.message)
        }


    }

    return (


        <>

    


             <div className="max-w-md w-full flex-col text-4xl p-4 flex items-center">

                <div className="w-full text-sm font-default-sub-title text-center">
                    <p>{label}</p>
                </div>
                <div className="w-64 h-full relative flex items-end justify-center">

                    <input className="w-64 appearance-none bg-transparent text-center font-default-title " type="text" name={name} placeholder={placeholder} value={amount} onChange={onChange} />

                </div>

            </div>

            <div className="max-w-md flex w-full h-full p-2 items-center  lg:hidden">
                <div className="w-full flex flex-wrap justify-center">
                    {
                        values.map((i) => {

                            return (
                                <div className="w-1/3 h-24 p-2" key={i}>
                                    <div className=" h-full rounded-full text-5xl flex items-center justify-center font-default-title cursor-emoji" onClick={() => changeNumber(i)}>
                                        {i}
                                    </div>

                                </div>
                            )
                        })

                    }


                    <div className="w-1/3 h-24 p-2">
                        <div className="h-full rounded text-sm text-gray-700  w-full flex items-center justify-center font-default-title cursor-emoji" onClick={deleteNumber}>
                            <p className="text-center">

                                remove number
                            </p>
                        </div>

                    </div>
                </div>


            </div>

            {/* <div className="max-w-md w-full h-24 flex justify-center items-center p-8">
                <button submit className="font-default-accent p-2 text-gray-200 flex items-center justify-center appearance-none cursor-emoji">Create invoice</button>
            </div>  */}


            {/* <Notice message={"you dont have an account"} url="/"/> */}

        </>

    )
}


//check if user has account