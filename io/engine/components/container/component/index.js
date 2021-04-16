import { useRouter, useEffect,useState } from 'components'

export default function Layout({ children, auth,dark,app }) {

    const router = useRouter();

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

        if(dark){
            localStorage.theme = 'dark'
        }else{
            localStorage.theme = 'light'
        }

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
