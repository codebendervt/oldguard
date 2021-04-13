import { Container, App } from 'components'

export default function Index() {


    const a = () => {
        return(
            <div>1</div>
        )
      
    }

    const b = () => {
        return(
            <div>2</div>
        )
    }

    const app =  {home:a, content:b}
    return app
}
