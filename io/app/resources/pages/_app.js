import 'style/index.css'
import { App, Container } from 'components'
// import 'sauveur_style/animate.css'


function MyApp({Component,pageProps}) {

  //console.log("props", pageProps)
  //console.log("component", Component().home)
  return (

     Component().home ? (
      <Container auth={true} app={true} >
      <App>

        {Component().home({...pageProps})}
        {Component().content({...pageProps})}
        <div className="text-black">
          <div>3</div>
        </div>

      </App>
    </Container>
    ) : <Component {...pageProps}/>
    
    
    

  )
}

export default MyApp