import { useEffect, useState } from 'components'
import styles from '../../style/'

export default function Location({location}) {

    const [service, setService] = useState();
    const [results, setResults] = useState();
    const [ready, setReady] = useState();
    const [_location, setLocation] = useState(false);
    const [init, setInit] = useState();

    useEffect(() => {

        try{
            let platform = new H.service.Platform({
                'apikey': 'z3lriJH_PFrGzcCLAhZeCgmL-DwQKCAF6MZJFBlBMTw'
            });
    
            let _service = platform.getSearchService()
            //console.log("current service",_service)
            setService(_service)
            setReady(true)
    
        }catch(e){
            console.log('setting up service',e.message)
            setReady(false)
        }
        

        return () => {
            cleanup
        }
    }, [ready])



    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [service])


    // useEffect(() => {

    //     console.log(service)


    //     return () => {
    //         cleanup
    //     }
    // }, [results])



    const geoCode = (term) => {

        service.geocode({
            q: term,
            in: "countryCode:ZAF"
        }, (result) => {
            console.log(result)
            setResults(result.items)
        }, cleanup)
    }

    const cleanup = () => {
        console.log("location figured")
        location(init)
        console.log(init)
    }


    const Option = ({ title, address }) => {
        return (
            <div className="w-1/3 h-32 flex my-4 p-2 cursor-emoji">
                <div className="w-32 bg-gray-100 flex items-end rounded animated  p-2  fadeIn text-xs lg:text-sm" onClick={() => initLocation(title,address) }>
                    <a>{title}</a>
                </div>
            </div>
        )

    }

    const search = (term) => {


        if (term.target.value.length > 6) {
            geoCode(term.target.value)
        } else {
            console.log("need more for the search")
        }

    }

    const initLocation = (title, address) => {
        setLocation(title)

        let _init = {}

        _init.location = title;
        _init.address = address;
        setInit(_init)

        location(_init)
    }

    const Searching = ({toSearch}) => {
        return (

            <>

          

            {
            toSearch ? toSearch.map((i) => <Option key={i.title} title={i.title} address={i.address} />) : <></>

        }

        </>
        )
}


const fallBackInput = (e) => {

    let loc = {}
    loc.location = e.target.value;
    location(loc)
}

return (

    <div className="w-full flex flex-wrap">

          {ready ? <input key={'search'} className={styles.input} placeholder="32 taurus rd" type="text" name="search" onChange={search} hidden={_location}></input> : <input className={styles.input} placeholder={'32 Taurus Rd 0000 Province'} name="search" onChange={fallBackInput}/>}

        {
            !_location ? <Searching  toSearch={results}/> : <div className=" mx-3 p-2 text-lg ">your adress has been set to <span className="font-bold">{_location}</span></div>
        }
        

    </div>
)
}
