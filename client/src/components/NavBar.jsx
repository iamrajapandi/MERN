import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'Contact', href: '/contact' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <>
      {login && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 text-white flex justify-center items-center z-50">
          <div className="h-[60%] w-[30%] z-50 flex flex-col bg-white">
            <div className="h-[40%] w-full flex flex-row justify-center text-black bg-violet-600 items-center border-2">
             Login
            </div>
            <div className="h-[90%] w-full flex flex-col justify-center text-black items-center">
              <form action="" className='flex flex-col gap-7 '>
             <input type="text" placeholder='name'  className=' p-2 focus:outline-none hover:border-2 border-b-slate-400  rounded-md '  required/>
             <input type="email" placeholder='mail' className='p-2 focus:outline-none hover:border-2 border-b-slate-400  rounded-md' required/>
             </form>
            </div>
            <div className="w-full h-[30%] flex flex-row justify-center items-center">
            <button
                onClick={() => setLogin(false)}
                className="p-3 h-[6 %] w-[50%] flex justify-center rounded-md items-center bg-green-500"
              >
                submit
              </button>
              
            </div>
          </div>
        </div>
      )}

      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex translate-4  items-center justify-between p-4 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-700 ">
            <div className="flex lg:flex-1 text-white">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h2 className="font-semibold leading-6 text-white">Portfolio</h2>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:animate-bounce ">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button onClick={() => setLogin(true)} className="bg-blue-500 text-white p-2 rounded">
                Log in
              </button>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
            <div className="fixed inset-0 z-50 " />
            <DialogPanel className="fixed inset-y-0 right-10 top-4 bottom-6 z-50 w-[90%] overflow-y-auto bg-white px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h1 className='font-extrabold font-sans'>Portfolio</h1>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <button
                      onClick={() => setLogin(true)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
    </>
  );
}
