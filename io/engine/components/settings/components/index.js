import { Popover, Transition, Switch } from "@headlessui/react";
import { DotsHorizontalIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import * as service from '../service/'

export default function Settings({ enabled, setEnabled,title,subtitle }) {
    return (


        <Popover className="relative w-full h-full max-w-sm ">
            {({ open }) => (
                <>
                    <Popover.Button className={`flex ${open ? "" : "p-2"} items-end`}>
                        <DotsHorizontalIcon className="w-6" />
                        {/* <ChevronRightIcon
                            className={`w-4 ${open ? "transform rotate-90" : ""}`}
                        /> */}
                    </Popover.Button>

                    <Popover.Overlay
                        className={`${open ? "opacity-30 fixed inset-0" : "opacity-0"
                            } bg-black`}
                    />

                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >

                        <Popover.Panel className="absolute z-10 bg-white p-2 rounded lg:mx-2 w-full h-auto dark:bg-primary-800 bg-gradient-to-r dark:from-primary-800">
                            <Header title={title} subtitle={subtitle} />

                            <Body />

                            <Footer enabled={enabled} setEnabled={setEnabled} />
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}

const Header = ({title,subtitle}) => {

    return (
        <div className="w-full flex h-12 items-start ">
            <div className="w-1/2 flex flex-col
            ">
                <p className="leading-4 text-lg">{title}</p>
                <p className="leading-5 text-sm">{subtitle}</p>
            </div>
            <div className="w-1/2 flex py-0 justify-end"><div className="w-8 h-8 rounded-full bg-gray-200"></div></div>
        </div>
    )
}

const Body = () => {

    return (
        <div className="w-full h-auto h-auto rounded">
            <div className="grid grid-cols-2">

                {service.menu().map((i, k) => {

                    return (
                        <div className="p-2">
                            <a href={i.url} className="w-full h-12 bg-gray-200 dark:bg-primary-700 flex items-center justify-center rounded">
                                <span className="">{i.name}</span>
                            </a>
                        </div>
                    )

                })}



            </div>
        </div>
    )
}


const Footer = ({ enabled, setEnabled }) => {

    return (
        <div className="w-full flex flex-wrap h-auto items-start pt-2">

            <div className="w-1/2 flex h-14 ">

            </div>
            <div className="w-1/2 flex flex-col h-14  items-end">
                <h1 className=" px-4 text-center text-sm">Mode</h1>
                <div className="flex flex-col items-end px-4">

                    <div className="flex">
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? "bg-blue-900" : "bg-blue-700"}
                        switch-outer focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${enabled ? "translate-x-4" : "translate-x-0"}
                             switch-inner`}
                            />
                        </Switch>
                    </div>




                </div>
                <div className="flex justify-end px-0">
                    <div className="mx-1 text-xs">Original</div>
                    <div className="mx-1 text-xs">Color</div>
                </div>

            </div>

            <div className="flex w-full text-sm lg:text-lg pt-2">
                {
                    service.links().map((i, k) => {

                        return (
                            <a href={i.url} className="flex mx-1">
                                <ExternalLinkIcon className="w-4 h-4" />
                                {i.name}</a>
                        )


                    })
                }
            </div>
        </div>
    )
}