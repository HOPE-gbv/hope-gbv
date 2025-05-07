//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Example() {
  return (
    <form>    
      <div className="space-y-12 ">

      <div className=" pt-20 px-8">
      <img
              src="/assets/image 8.png"
              className="w-400 h-100 object-cover justify-center"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
      </div>

        <div className="#"> 
        <p className="text-sm/6 px-4 mb-5 text-gray-900  font-roboto text-center justify-center">The sole purpose of our pro bono services is to ensure that victims of GBV who are not financially capable would have have legal support, kindly note that our services are free and your information are confidential ,
        we are available 24/7 to attend to you, please, fill the form below and our lawyers will contact you immediately</p>
          <h1 className="mt-5 text-base font-semibold px-8">Personal Information (please
            , ensure your details are correct as we will be contacting you immediately).</h1>

          <div className="mt-4 grid grid-cols-1 gap-x-6 px-8 justify-center gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-110 h-15 rounded-md bg-white px-3 py-1.5  text-base text-gray-900 outline-1 -outline-offset-1
                   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                Gender
              </label>
              <div className="mt-2 grid grid-cols-1 ">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  className="col-start-1 row-start-1 w-full h-15
                   appearance-none rounded-md bg-white py-1.5  px-10 pr-8 pl-3 
                   text-base outline-1 
                   text-gray-900  -outline-offset-1  outline-gray-300  
                   focus:outline-2 focus:-outline-offset-2
                    focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 
                  size-5 self-center justify-self-end text-gray-500 
                  sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-110 h-15 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300
                   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm/6 font-medium text-gray-900">
              Phone Number
              </label>
              <div className="mt-2">
              <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block w-110 h-15 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300
                   placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
              Preferred contact method
              </label>
              <div className="mt-2 grid grid-cols-1 ">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  className="col-start-1 row-start-1 w-full h-15
                   appearance-none rounded-md bg-white py-1.5  px-10 pr-8 pl-3 
                   text-base outline-1 
                   text-gray-900  -outline-offset-1  outline-gray-300  
                   focus:outline-2 focus:-outline-offset-2
                    focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Call</option>
                  <option>Email</option>
                  <option>Text</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 
                  size-5 self-center justify-self-end text-gray-500 
                  sm:size-4"
                />
              </div>
            </div>
            </div>

            <div className=" pb-12 px-8">
          <h1 className="mt-1 text-base font-semibold">Case Information (please, give a detailed information about the case)</h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="experienced" className="block text-sm/6 
              font-medium text-gray-900">
              Type of GBV experienced 
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="experienced"
                  name="experienced"
                  autoComplete="experienced"
                 className="col-start-1 row-start-1 w-full h-15 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 
                  outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Physical Violence</option>
                  <option>Sexual Violence</option>
                  <option>Emotional / Psychological Violence</option>
                  <option> Economic / Financial Violence</option>
                  <option>Cultural / Harmful Traditional Practices</option>
                  <option> Human Trafficking & Exploitation</option>
                  <option>  Neglect</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
            
              <div className="sm:col-span-3">
                <label htmlFor="datetime-local" className="block text-sm/6 font-medium text-gray-900">
                When did this incidence happen 
                </label>
                <div className="mt-2">
                  <input
                    id="datetime-local"
                    type="datetime-local"
                    autoComplete="date-time-year"
                    className="block w-110 h-15 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1
                     outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
              </div>

            <div className="sm:col-span-2">
              <label htmlFor="currently-danger" className="block text-sm/6 font-medium text-gray-900">
              Are you currently in danger
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="currently-danger"
                  name="currently-danger"
                  autoComplete="currently-danger"
                  className="col-start-1 row-start-1 w-full h-15 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 
                  outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="locattion" 
                  type="text"
                  placeholder=" No.3 Ademola street, Ikeja, Lagos"
                  autoComplete="location"
                  className="block w-full h-15 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1
                   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full h-15 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1
                   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="currently-danger" className="block text-sm/6 font-medium text-gray-900">
              Have you reported to the closet authority
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="currently-danger"
                  name="currently-danger"
                  autoComplete="currently-danger"
                  className="col-start-1 row-start-1 w-full h-15 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1
                   -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="currently-danger" className="block text-sm/6 font-medium text-gray-900">
              Would you need urgent shelter
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="currently-danger"
                  name="currently-danger"
                  autoComplete="currently-danger"
                  className="col-start-1 row-start-1 w-full h-15 appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1
                   -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>

          <div className=" space-y-5 px-8">
            <fieldset>
              <div className="">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        defaultChecked
                        id="comments"
                        name="comments"
                        type="checkbox"
                        aria-describedby="comments-description"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <p id="comments-description" className="text-gray-500">
                    Do you give consent for us to contact you regarding your case?
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        
      <div className="flex flex-col pb-40 sm:flex-row items-center justify-center gap-4 max-sm:gap-2 max-md:gap-3">
          <button  type="submit"
            className="text-sm rounded-full bg-blue-500 text-black hover:bg-blue-300 transition px-4 py-2 inline-block max-sm:text-xs max-md:text-sm">
            Submit
          </button>
        </div>
      </div>

      
    </form>
  )
}
