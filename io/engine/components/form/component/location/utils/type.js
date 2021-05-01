import Location from '../here'
import Collection from '../collection'
import options from '../options'
import Pep from '../pep'

const setLocation = (key,location) => {

    switch (key) {
        case options.door:
            return <Location location={location} />
        case options.collect:
                return <Collection location={location} />
        case options.pep:
            return <Pep location={location}/>
        default:
            return <></>
    }

}

export default setLocation;