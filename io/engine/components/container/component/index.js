import { useRouter, useEffect,useState } from 'components'

export default function Layout({ children, auth,dark,app }) {

    const router = useRouter();
    const [isDark,setDark] = useState();

    useEffect(() => {

        if(!auth){
            console.log('not authenticated')
            router.push('/signin')
        }

        return () => {
            console.log("clean up")
        }
    }, [auth])

    useEffect(() => {

        //this is a shock to know that i can access local storage like this
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }

        return () => {
            console.log("clean up")
        }
    }, [dark])


    return (

        <div  className={`w-full h-full flex   ${app? "flex-col":"flex-row"} dark:bg-primary-900 dark:text-white ${auth ? "" : "hidden"}`}>

            {children}

        </div>

    )
}
