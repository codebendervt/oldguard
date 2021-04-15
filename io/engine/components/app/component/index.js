import { useEffect, useState } from 'components'

export default function App({ children,header,mobileOnly }) {

    const [visibile, setVisble] = useState(false)
    const [view, setView] = useState(!mobileOnly)

    useEffect(() => {

        var intFrameWidth = window.innerWidth;

        //console.log(intFrameWidth <= 640)
        let isMobile = intFrameWidth <= 640
        if(mobileOnly){
            setView(isMobile)
        }
     
        window.addEventListener('scroll', function (e) {


            let y = this.scrollY

            //let yMax = window.scrollMaxY

            console.log("new", y)

            let scrollUp = this.oldScroll > this.scrollY;
            this.oldScroll = this.scrollY;
            console.log(scrollUp)

            if (scrollUp) {

                setVisble(false)
            } else {


                setVisble(true)
            }



        });


        return () => {

        }
    }, [])

    return (



        view ? <div className="h-full w-full bg-black text-white flex flex-col relative">

            <div className={`h-auto w-full bg-black flex-grow ${header ? "sticky top-0 " : ""}`}>

                {children[0]}
            </div>

            <div className="h-full w-full bg-black">
                {children[1]}


                <div className={`w-full bg-white sticky bottom-0 text-black  ${visibile ? "p-2" : "h-0"}`}>
                    {children[2]}

                </div>
            </div>

        </div> : <>not supported</>










    )
}


//window.scrollTo(0, 0)