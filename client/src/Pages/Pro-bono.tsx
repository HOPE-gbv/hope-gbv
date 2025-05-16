import {useState} from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid'

// type FormData = {
//   firstname: string;
//   gender: string;
//   email: string;
//   phonenumber: string;
//   contactmethod: string;
//   experienced: string;
//   date: string;
//   danger: string;
//   location: string;
//   state: string;
//   authority: string;
//   shelter: string;
// }
export default function Pro() {
  const [email, setEmail] = useState <string>('');
    const [gender, setGender] = useState <string>('');
    const [location, setLocation] = useState <string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [phonenumber, setPhonenumber] = useState<string>('');
    const [contactmethod, setContactmethod] = useState<string>('');
    const [experienced, setExperienced] = useState<string>('');
    const [ date, setDate] = useState<string>('');
    const [danger, setDanger] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [authority, setAuthority] = useState<string>('');
    const [shelter, setShelter]= useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      // const Data = {
      //   firstname,
      //   gender,
      //   email,
      //   phonenumber,
      //   contactmethod,
      //   experienced,
      //   date,
      //   danger,
      //   location,
      //   state,
      //   authority,
      //   shelter,
       
      // };
      
    };
  return (
    <form onSubmit={handleSubmit} className="space-y-12 px-4 max-sm:px-2 max-md:px-6 py-10 p-8" >    
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

          <div className="mt-4 grid grid-cols-1 
          gap-x-6 px-8 justify-center gap-y-8 sm:grid-cols-6 max-sm:px-4">
            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm/6 font-medium 
              text-gray-900  max-sm:text-xs">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base 
            text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 
            focus:outline-2 focus:outline-blue-600 max-md:text-sm max-sm:text-xs 
            max-sm:h-12"
                />
              </div>
            </div>

            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                Gender
              </label>
              <div className="mt-2 grid grid-cols-1 ">
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  autoComplete="gender-name"
                  className="col-start-1 row-start-1 w-full
                   appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
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
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="block w-full  rounded-md bg-white px-3 py-4 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300
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
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="123-456-7890"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base 
                  text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400 
                  focus:outline-2 focus:outline-blue-600 max-md:text-sm max-sm:text-xs 
                  max-sm:h-12"
                />
              </div>
            </div>

            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
              Preferred contact method
              </label>
              <div className="mt-2 grid grid-cols-1 ">
                <select
                  id="contactmethod"
                  name="contactmethod"
                  value={contactmethod}
                  onChange={(e) => setContactmethod(e.target.value)}
                  autoComplete="gender-name"
                  className="col-start-1 row-start-1 w-full
                   appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
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

            <div className=" #">
          <h1 className="mt-1 text-base font-semibold px-8">Case Information (please, give a detailed information about the case)</h1>

          <div className="mt-4 grid grid-cols-1 gap-x-6 px-8 gap-y-8 justify-center 
          sm:grid-cols-6 max-sm:px-4">
            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="experienced" className="block text-sm/6 
              font-medium text-gray-900">
              Type of GBV experienced 
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="experienced"
                  name="experienced"
                  autoComplete="experienced"
                  value={experienced}
                  onChange={(e) => setExperienced(e.target.value)}
                  className="col-start-1 row-start-1 w-full
                   appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
                   text-base outline-1 
                   text-gray-900  -outline-offset-1  outline-gray-300  
                   focus:outline-2 focus:-outline-offset-2
                    focus:outline-blue-600 sm:text-sm/6"
                   
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
                  className="pointer-events-none col-start-1 row-start-1 
                  size-5 self-center justify-self-end text-gray-500 
                  sm:size-4"
                />
               
              </div>
            </div>
            
              <div className="sm:col-span-3 max-sm:col-span-6">
                <label htmlFor="datetime-local" className="block text-sm/6 font-medium
                 text-gray-900 max-sm:text-xs">
                When did this incidence happen 
                </label>
                <div className="mt-2">
                  <input
                    id="datetime-local"
                    type="datetime-local"
                    autoComplete="date-time-year"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="block w-full  rounded-md bg-white px-3 py-4 text-base text-gray-900 outline-1 -outline-offset-1
                     outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                     focus:-outline-offset-2 focus:outline-blue-600 max-md:text-sm max-sm:text-xs 
            max-sm:h-12"
                  />
                </div>
              </div>

            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="currently-danger" className="block text-sm/6 font-medium
               text-gray-900 max-sm:text-xs">
              Are you currently in danger
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="currently-danger"
                  name="currently-danger"
                  autoComplete="currently-danger"
                  value={danger}
                  onChange={(e) => setDanger(e.target.value)}
                  className="col-start-1 row-start-1 w-full
                  appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
                  text-base outline-1 
                  text-gray-900  -outline-offset-1  outline-gray-300  
                  focus:outline-2 focus:-outline-offset-2
                   focus:outline-blue-600 sm:text-sm/6"
               >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 
                  size-5 self-center justify-self-end text-gray-500 
                  sm:size-4"
                  />
              </div>
            </div>

            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="location" className="block text-sm/6 font-medium
               text-gray-900 max-sm:text-xs">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="locattion" 
                  type="text"
                  placeholder=" No.3 Ademola street, Ikeja, Lagos"
                  autoComplete="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full  rounded-md bg-white px-3 py-4 text-base text-gray-900 outline-1 -outline-offset-1
                   outline-gray-300 placeholder:text-gray-400 focus:outline-2 
                   focus:-outline-offset-2 focus:outline-blue-600 max-md:text-sm max-sm:text-xs 
                   max-sm:h-12"
                />
              </div>
            </div>

            <div className="sm:col-span-3 max-sm:col-span-6">
              <label htmlFor="region" className="block text-sm/6 font-medium
               text-gray-900 max-sm:text-xs"> 
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="block w-full  rounded-md bg-white px-3 py-4 text-base text-gray-900 outline-1 -outline-offset-1
                   outline-gray-300 placeholder:text-gray-400 focus:outline-2 f
                   ocus:-outline-offset-2 focus:outline-blue-600 max-md:text-sm max-sm:text-xs 
            max-sm:h-12"
                />
              </div>
            </div>

            <div className="sm:col-span-3  max-sm:col-span-6">
              <label htmlFor="authority" className="block text-sm/6 font-medium
               text-gray-900">
              Have you reported to the closet authority
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="authority"
                  name="authority"
                  autoComplete="authority"
                  value={authority}
                  onChange={(e) => setAuthority(e.target.value)}
                  className="col-start-1 row-start-1 w-full
                  appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
                  text-base outline-1 
                  text-gray-900  -outline-offset-1  outline-gray-300  
                  focus:outline-2 focus:-outline-offset-2
                   focus:outline-blue-600 sm:text-sm/6"
               >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
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
              <label htmlFor="shelter" className="block text-sm/6 font-medium text-gray-900">
              Would you need urgent shelter
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="shelter"
                  name="shelter"
                  autoComplete="currently-danger"
                  value={shelter}
                  onChange={(e) => setShelter(e.target.value)}
                  className="col-start-1 row-start-1 w-full
                   appearance-none rounded-md bg-white py-4  px-3 pr-8 pl-3 
                   text-base outline-1 
                   text-gray-900  -outline-offset-1  outline-gray-300  
                   focus:outline-2 focus:-outline-offset-2
                    focus:outline-blue-600 sm:text-sm/6"
                >
                  <option>-:-</option>
                  <option>Yes</option>
                  <option>No</option>
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
        </div>

        <div className="space-y-5 px-8 max-sm:px-4 mt-8">
  <fieldset>
    <legend className="sr-only">Consent</legend>
    <div className="flex items-start gap-3">
      <div className="flex h-6 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
          />
          <svg
            viewBox="0 0 14 14"
            fill="none"
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
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
      <div className="text-sm text-gray-700">
        <label htmlFor="consent" className="font-medium text-gray-900 cursor-pointer">
          Do you give consent for us to contact you regarding your case?
        </label>
      
      </div>
    </div>
  </fieldset>
</div>

        </div>
        
      </div>
      <div className="mt-10 text-center">
  <button
    type="submit"
    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 max-sm:w-full"
  >
    Submit
  </button>
</div>


      
    </form>
  )
}
