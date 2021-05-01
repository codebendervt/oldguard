import { useRouter } from 'components'
import { useEffect, useState } from 'react'
import styles from './style/'
import HiddenField from './utils/hidden';
import uploadFileToBlob from './utils/azureUpload.ts';
import FormInput from './input'
import FormEdit from './edit'

export default function Form({ mode, type, data, initData = {}, modal, dataId, custom, length, theme = "", url = "/io/status/submit" }) {
    const [_data, setData] = useState(initData)
    const [state, setState] = useState(0);
    const [_dataId, setDataId] = useState(dataId);
    const [isUpload, setIsUpload] = useState(false)
    const [brand, setBrand] = useState()
    const [isMode, setMode] = useState(mode == "create")
    const [itemName, setItemName] = useState()
    const [itemImage, setItemImage] = useState()
    const router = useRouter()

    const [location, setLocation] = useState({location:""})

    useEffect(() => {


        //console.log("current modal", modal)


        setData(initData)
        //setProducImage(initData['image'])


        if (mode == "edit") {
            setItemName({ name: initData['name'] })
        }

        // console.log("this is the user", user)
        // console.log("this is the data", _data)


        return () => {

        }
    }, [])


    const renderForm = (thedata) => {

        return (

            isMode || !(state == length) ?
                modal.map((i, k) => {
                    return (
                        <div id={k} key={k} className={"w-full " + (state == k ? "animated fadeIn" : formState("hidden"))} >

                            <FormInput key={k+i.type} func={createData} type={i.type} name={i.name} label={i.label} model={i} location={setLocation} modal={type} />

                        </div>


                    )
                }) : modal.map((i, k) => {

                    return (
                        <FormEdit
                            key={i.name}
                            type={i.type}
                            name={i.name}
                            label={i.label}
                            value={_data[i.name]}
                            data={_data}
                            func={editData}
                            mode={mode}
                            location={location}
                            index={k}
                            goto={setState}
                            model={i}
                            modal={type}
                        />
                    )
                })
        )

    }

    const CheckRequired = (e) => {
        let result = e.target.validity.valid ? "Thank you" : "Required";

        return result;

    }



    const fileUpload = async (e) => {
        let file = e.target.files[0];
        let ext = file.name.split(".")[1];
        let result = await uploadFileToBlob(file, `${itemName.name}-${brand.name}.${ext}`);
        console.log("file upload ", result)
        setIsUpload(result);

    }

    const createData = (e) => {
        try {
           
            
            //console.log(e)

            if(typeof(e) == "object" && e.target == undefined){
                let _value = Object.assign(_data, e)
                setData(_value)
            } else {

                if (e.target.type == "file") {
                    console.log('uploading file')
                    fileUpload(e)
    
                }

                if (e.target.name == 'name') {
                    setItemName({ [e.target.name]: e.target.value })
                    // setData({ [e.target.name]: e.target.value })
                }


                let _value = Object.assign(_data, { [e.target.name]: e.target.value })
                setData(_value)

                let elmText = document.getElementById(e.target.name);
                elmText.innerText = CheckRequired(e);
            }
          

        } catch (err) {
            console.error("unable to edit form line 113 Modern Form", err)
        }
    }


    //to be used now with form edit
    const editData = async (e) => {
        try {
            if (e.target.type == "file") {
                fileUpload(e)

            } else {
                if (e.target.name == 'name') {
                    setItemName({ [e.target.name]: e.target.value })
                    // setData({ [e.target.name]: e.target.value })
                } else {

                    let _value = Object.assign(_data, { [e.target.name]: e.target.value })
                    setData(_value)
                    // setData({ [e.target.name]: e.target.value })
                }
            }
        } catch (e) {
            console.error("unable to edit form", e)
        }


    }

    const formState = (states) => (state == length ? "" : states);


    const changeState = () => {
        setState(state + 1)

        if (state == (length - 1)) {
            console.log("in edit mode")
            setMode(false)
        }
    }

    const  formBack = () =>{

        if(state > 0){
            setState(state - 1)
        }else{
            router.back()
        }
       
    }

    return (
    
    <>
            <form action={url} method="GET" className={`w-full h-screen flex flex-col  `}>

                <div className={`flex flex-col w-full h-full lg:w-screen lg:h-screen realtive py-2 lg:py-4`}>

                    <div  className="absolute w-full px-4 flex justify-end z-20">
                        <div className="font-default-accent  cursor-emoji " onClick={() => formBack()}>go back</div>
                        
                        </div>
                    <div className="flex-grow w-full overflow-y-scroll hidescroll py-4 lg:py-0">
                        <div className={(isMode ? "w-full flex justify-center flex-grow h-auto lg:flex-col" : "w-full flex flex-wrap lg:max-w-lg")}>

                            {renderForm(_data)}


                        </div>
                    </div>



                    <div className={`w-full h-20 lg:h-12 sticky inset-x-0 bottom-0 flex p-2 transition duration-500 ease-in-out justify-center lg:justify-start ${theme}`}>
                        {
                            modal == "identity" ? <></> :
                            state < length ? (<a href={"#" + state} className={styles.form_button} onClick={() => changeState()}>next</a>) : (

                                <div className={styles.form_submit}><button className="cursor-emoji" type="submit">
                                    {mode == "create" ? "submit" : "update"}

                                </button></div>)
                                
                        }

                    </div>

                </div>



                <HiddenField type={type} dataId={_dataId} mode={mode} data={data} custom={custom} location={location} />
            </form>


        </> 
    )
}