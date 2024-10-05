import { useRef, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Example() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(false);
    localStorage.setItem('userName', emailRef.current.value);
    console.log(emailRef.current.value, passRef.current.value);
  };

  return (
    <>
     {login && (
  <div className="fixed inset-0 bg-black/20 text-white flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/3 lg:w-1/4 z-50 flex flex-col">
      <div className="text-black text-lg font-semibold text-center bg-violet-600 rounded-t-lg p-4">
        Login
      </div>
      <div className="p-4 flex flex-col justify-center text-black">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Name"
            ref={emailRef}
            className="p-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passRef}
            className="p-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-700">
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
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:animate-bounce">
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
