import {useState} from 'react';
export default function Footer() {
  const [email, setEmail] = useState('');
  const [, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }
    // Simulate submission or send to API
    console.log('Subscribed with:', email);
    setMessage('Thank you for subscribing!');
    setEmail('');
  };
    return (
<footer className="bg-black text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">H.O.P.E</h3>
        <p className="text-slate-300 mb-4">
          Emergency response platform for gender-based violence in Nigeria.
        </p>
        <div className="flex space-x-4">
          {/** Social Media Icons **/}
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-slate-300 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-slate-300 hover:text-white">Home</a></li>
          <li><a href="/emergency" className="text-slate-300 hover:text-white">Emergency Help</a></li>
          <li><a href="/lawyers" className="text-slate-300 hover:text-white">Find a Lawyer</a></li>
          <li><a href="/resources" className="text-slate-300 hover:text-white">Resources</a></li>
          <li><a href="/contact" className="text-slate-300 hover:text-white">Contact Us</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
        <ul className="space-y-2">
          {/* <li className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-red-500" />
            <span>112 (National Emergency)</span>
          </li>
          <li className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-red-500" />
            <span>199 (Police)</span>
          </li>
          <li className="flex items-center">
            <MailIcon className="h-5 w-5 mr-2 text-slate-300" /> */}
            {/* <Link to="mailto:help@safehavennigeria.org" className="text-slate-300 hover:text-white">help@safehavennigeria.org</Link> */}
          {/* </li> */}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Subscribe</h3>
        <p className="text-slate-300 mb-4">
          Stay updated with our newsletter
        </p>
        <form className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 bg-slate-700 text-white rounded focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
            onClick={() => handleSubscribe}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    
    <div className="border-t border-slate-700 mt-8 pt-8 text-center">
      <p className="text-slate-400">
        &copy; {new Date().getFullYear()} H.O.P.E, Nigeria. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-6">
        {/* <Link to="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link>
        <Link to="/terms" className="text-slate-400 hover:text-white">Terms of Service</Link>
        <Link to="/cookies" className="text-slate-400 hover:text-white">Cookie Policy</Link> */}
      </div>
    </div>
  </div>
</footer>
    );
  };