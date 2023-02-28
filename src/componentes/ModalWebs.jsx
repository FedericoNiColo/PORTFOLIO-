import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useProyectosProvider from '../hooks/useProyectosProvider'

const ModalWebs = () => {

    const { modificarModalWeb, modalWeb, proyecto } = useProyectosProvider()

    const { url, nombre, descripcion, imagen, github, web } = proyecto

    return (
        <>
            <Transition appear show={modalWeb} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={modificarModalWeb}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full 2xl:w-2/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                                    <Dialog.Title
                                        as="h3"
                                        className=" p-1 text-start md:text-6xl text-4xl border-b-2 border-b-emerald-700 font-medium uppercase leading-6 text-gray-900"
                                    >
                                        {nombre}
                                    </Dialog.Title>
                                    <div className=" sm:block absolute top-0 right-0 pt-4 pr-4 border-red-800 ">
                                        <button
                                            type="button"
                                            className="md:p-3 rounded-md items-center text-red-600  hover:text-gray-500 "
                                            onClick={modificarModalWeb}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-9 h-9">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </button>
                                    </div>
                                    <div className="mt-6 overflow-x-hidden">
                                        <iframe
                                            src={`https://${web}`}
                                            width="100%"
                                            height="700"
                                            className='overflow-x-hidden 2xl:h-900'
                                        ></iframe>
                                    </div>

                                    <div className='mt-10'>
                                        <p>{descripcion}</p>
                                    </div>

                                    <div className="mt-6 flex flex-row justify-center gap-10 p-2">
                                        <div
                                            className="flex items-center g-3 rounded-md border border-transparent px-4 py-4 text-2xl md:text-3xl font-medium text-gray-900 hover:border-b-emerald-700 hover:border-b-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B8C674" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="17" y1="7" x2="7" y2="17" />
                                                <polyline points="8 7 17 7 17 16" />
                                            </svg>
                                            <a href={`https://${web}`} target="_blank">Visitar web</a>
                                        </div>
                                        <div
                                            className="flex items-center g-3 rounded-md border border-transparent px-4 py-4 text-2xl md:text-3xl font-medium text-gray-900 hover:border-b-emerald-700 hover:border-b-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#B8C674" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                            </svg>
                                            <a href={`https://${github}`} target="_blank">Ver código</a>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ModalWebs
