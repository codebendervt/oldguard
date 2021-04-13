import { useRouter, useEffect, Head } from 'components'


export default function Standard() {

    const router = useRouter();

    useEffect(() => {

        try {
            console.log(router.query)
        } catch (e) {
            console.log(e)

        }

        return () => {
            console.log("clean up")
        }
    }, [router])

    return (
        <div className="w-full h-full">
            <Head title={"Standard"} />


        </div>
    )
}
