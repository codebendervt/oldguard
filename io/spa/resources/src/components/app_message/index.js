

const AppMessage = ({ title, message, action }) => {




    return (
        < >
            <h1 className="text-3xl lg:text-6xl text-white font-default-title p-2">
                {title}
            </h1>
            <p className="text-white text-xl lg:text-3xl p-2 font-default-paragraph-bold">
                {message}
            </p>

            <p className="text-white text-xl lg:text-3xl p-2 font-default-paragraph-bold">
                {action}
            </p>
        </>
    )
}

export default AppMessage;