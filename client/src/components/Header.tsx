

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About us', to: '/' },
  { name: 'Pro bono lawyer', to: '/pro-bono' },
  { name: 'Eye witness', to: '/' },
  { name: 'Community', to: '/community' },
  { name: 'contact Us', to: '/' },
  { name: 'Faq', to: '/Faq' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">H.O.P.E</span>
              <img
                alt=""
                src="/public/assets/H.O.P.E.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                <Link
                to="/donate"
                className="rounded-sm broder border-r-blue-400  px-4 py-2
                 text-sm font-semibold text-blue-500 shadow-sm hover:bg-blue-100"
              >
                Donate
              </Link>
              </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="/assets/H.O.P.E.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                   <a
                href="/donate"
                className="rounded-sm broder border-r-blue-400  px-4 py-2
                 text-sm font-semibold text-blue-500 shadow-sm hover:bg-blue-100"
              >
                Donate
              </a>
                </div>
                {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                <a
                href="#"
                className="rounded-sm broder border-r-blue-400  px-4 py-2
                 text-sm font-semibold text-blue-500 shadow-sm hover:bg-blue-100"
              >
                Donate
              </a>
              </div>*/}
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

     
    </div>
  )
}
