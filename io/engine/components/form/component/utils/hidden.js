
export default function HiddenFields({ type, dataId = false, mode, data, custom = false }) {

    return (

        <>
            {
                type ? <input hidden type="text" defaultValue={type} name="model" hidden ></input> : <></>
            }

            {
                custom ? <input hidden type="text" defaultValue={JSON.stringify(custom)} name="custom" hidden ></input> : <></>
            }

            {
                dataId ?
                    <input hidden type="text" defaultValue={dataId} name="dataID" hidden ></input> : <></>
            }
{/* 
            {
                mode ?
                    <input hidden type="text" defaultValue={mode} name="mode" hidden ></input> : <></>
            } */}
             {
                data ?
                <input hidden type="text" defaultValue={JSON.stringify(data)} name="data" hidden ></input>: <></>
            }


        </>

    )
}


