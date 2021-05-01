const Choices = ({ choices, func }) => {

    return (
        <>

            {
                choices.map((i) => {
                    return (
                        <div key={i} className="w-1/2 lg:w-1/3 h-32 flex my-4 p-2 cursor-emoji" onClick={(() => func(i))}>
                            <div className="w-32 bg-gray-200 flex items-end rounded animated  p-2  fadeIn">
                                {i}
                            </div>
                        </div>
                    )

                })
            }


        </>
    )
}

export default Choices;