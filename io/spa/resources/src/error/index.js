import { AppFooter, AppHeader, ReactDOM, AppMessage } from 'components';


const Error = () => {


    return (
        <div className="app-container">

            <div className="max-w-md app-content-showcase ">

                <AppMessage
                    title="uh oh"
                    message="I hate to be that app, but you clearly have made a mistake and somehow landed here, we need to have a conversation"
                    action="Go Home" />
            </div>

        </div>

    )
}

ReactDOM.render(
    <Error></Error>,
    document.getElementById('root')
);