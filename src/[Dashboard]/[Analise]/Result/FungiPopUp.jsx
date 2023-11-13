import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function FungiPopUp({dados, passChildState}) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        passChildState(open);
      }, [open, passChildState]);

    const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="relative z-40" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-4/6">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base leading-6 mb-5 text-gray-900">
                            <span className='font-semibold'>{dados.nome}</span> <span className='text-sm italic'>({dados.nome_cientifico})</span>
                        </Dialog.Title>
                            <Carousel className="popup-carousel flex rounded-xl mr-7 float-left">
                                {dados.imagem_fungo.map((img_fungo) => (
                                    <img
                                        key={img_fungo}
                                        src={img_fungo.img}
                                        alt="O fungo em ação"
                                        className="h-full w-full object-cover"/>
                                ))}
                            </Carousel>
                                <div className="popup-content">
                                    <p className="text-sm text-gray-700 text-justify mr-2">{dados.descricao}</p>
                                </div>
                    </div>
                </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}>Fechar</button>
                </div>
            </Dialog.Panel>
            </Transition.Child>
        </div>
        </div>
    </Dialog>
    </Transition.Root>
  )
}
