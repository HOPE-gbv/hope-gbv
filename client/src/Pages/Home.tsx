import {} from 'react';

export default function Home() {
  return (
    <>
      <article className="max-w-3xl mx-auto px-6 text-center max-sm:px-4 max-md:px-5">
        <h1 className="font-bold text-2xl sm:text-3xl leading-tight mt-30 items-stretch max-sm:text-xl max-md:text-2xl">
          Shattering the Cycle of Violence: A Global Movement to End Gender-Based Abuse and Ensure Safety, Equality, and Justice for All
        </h1>
        <h2 className="font-light text-lg sm:text-xl leading-relaxed mt-0 mb-6 items-stretch max-sm:text-base max-md:text-lg">
          Raising Awareness, Amplifying Voices, and Taking Action Against Gender-Based Violence to Build a Future Where Every Individual Lives with Dignity, Respect, and Freedom from Fear
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-sm:gap-2 max-md:gap-3">
          <a href="#" className="text-sm rounded-full bg-blue-500 text-black hover:bg-blue-100 transition px-4 py-2 inline-block max-sm:text-xs max-md:text-sm">
            Report Abuse
          </a>
          <a href="#" className="text-sm rounded-full text-black bg-blue-500 hover:bg-blue-100 transition px-4 py-2 inline-block max-sm:text-xs max-md:text-sm">
            Emergency Call
          </a>
        </div>
      </article>

      <div className="relative py-8 px-4 bg-gray-50  max-sm:px-2 max-md:px-3">
        <div className="relative z-10 flex justify-center gap-1 items-start flex-wrap  max-sm:justify-center">
            <div  className= "flex-col-reverse flex items-center w-[180px] max-sm:w-[120px] max-md:w-[150px]">
            <img
                src="/assets/image.png"
                className="w-40 h-40 object-cover"
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </div>

            <div  className= "flex-col-reverse flex items-center w-[180px] max-sm:w-[120px] max-md:w-[150px]">
            <img
                src="/assets/image (5).png"
                className="w-40 h-40 object-cover mt-5  "
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </div>

            <div  className= "flex-col-reverse flex items-center w-[180px] max-sm:w-[120px] max-md:w-[150px]">
            <img
                src="/assets/image (6).png"
                className="w-40 h-40 object-cover "
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </div>

            <div  className= "flex-col-reverse flex items-center w-[180px] max-sm:w-[120px] max-md:w-[150px]">
            <img
                src="/assets/image (7).png"
                className="w-40 h-40 object-cover mt-5 "
                alt="Photo of a dimly lit room with a computer interface terminal."
              />
            </div>
        </div>
      </div>

      <section className="max-w-3xl mx-auto max-sm:px-4 max-md:px-5">        
        <article className="py-6 px-3 lg:px-0">
          <h1 className="font-bold text-2xl px-3 lg:px-0 gap-1 flex items-center justify-center">Gender-Based Violence (GBV) Statistics You Need to Know</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 pr-4 order-2 lg:order-1">
                <h2 className="text-sm leading-relaxed font-serif">
                  1 in 3 women experience physical or sexual violence in their lifetime—most often by an intimate partner (WHO, UN Women). 
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                  1 in 4 girls worldwide are married before the age of 18, increasing their risk of domestic abuse and sexual violence (UNICEF).
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                  Every 11 minutes, a woman or girl is killed by an intimate partner or family member (UNODC). 
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                  Less than 40% of women who experience violence seek help, and fewer than 10% go to the police (UN Women).
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                  82 million girls worldwide have undergone Female Genital Mutilation (FGM), a harmful practice that violates human rights (UNFPA). 
                </h2>
                <h2 className="text-sm leading-relaxed font-serif"> 
                  1 in 6 men experience sexual violence before the age of 18 (RAINN).
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                  1 in 10 men have experienced intimate partner violence (CDC).
                </h2>
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-2 mb-4 lg:mb-0">
                <img
                  src="/assets/image (1).png"
                  className="w-full h-auto object-cover"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
            </div>
            {/* Buttons on the left and right */}
            <div className="flex justify-between mt-4">
              <button className="text-sm rounded-full text-black  bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">Get help</button>
             
            </div>
          </article>
        
          <article className="mt-4">
          <h1 className="font-bold text-2xl px-3 lg:px-0 gap-1 flex items-center justify-center">Report Abuse Anonymously – See something, say something</h1>
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/5 pr-4 mb-4 lg:mb-0">
                  <img
                    src="/assets/image (2).png"
                    className="w-full h-auto object-cover"
                    alt="Photo of a dimly lit room with a computer interface terminal."
                  />
                </div>
                <div className="w-full lg:w-3/5 pl-4">
                <h2 className="text-sm leading-relaxed font-serif">
                Gender-based violence thrives in silence, and many survivors are too afraid to report their abusers due to fear, stigma, or threats.        If you know someone who is suffering but feels powerless to seek help, you can take action anonymously.      </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Why Report? 
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Protect a life – Your report could be the reason someone escapes abuse.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Hold abusers accountable – Many perpetrators continue harming others because no one speaks up.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif"> 
                Break the cycle – Reporting abuse helps create a safer world for everyone.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                How It Works
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                 Completely Anonymous – We do not track your identity, location, or contact details.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Easy & Secure – Fill out a simple form with details of the abuse. 
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                 Confidential Handling – Your report will be forwarded to the right authorities or organizations that can help. 
                </h2>
                </div>
              </div>
            <div className="flex justify-end mt-4">
              <button className="text-sm rounded-full text-black bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">Report Abuse</button>
            </div>
          </article>
        
          <article className="py-6 px-3 lg:px-0">
          <h1 className="font-bold text-2xl px-3 lg:px-0 gap-1 flex items-center justify-center">You Are Not Alone – Join a Safe Space</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 pr-4 order-2 lg:order-1">
                <h2 className="text-sm leading-relaxed font-serif">
                Surviving abuse is a journey, and you don’t have to walk it alone. No matter what you’ve been through, there is a community of survivors who understand your pain, your strength, and your resilience. Here, you’ll find support, encouragement, and a safe space to heal.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Why Join the Survivor Community?
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Connect with Others – Share your story or simply listen; you are among people who truly understand.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Safe & Judgment-Free – This is a space built on respect, trust, and healing.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif"> 
                Find Strength & Hope – See how others have overcome their trauma and rebuilt their lives.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Access Resources – Get expert advice, mental health support, and legal guidance.
                </h2>
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-2 mb-4 lg:mb-0">
                <img
                  src="/assets/image (3).png"
                  className="w-full h-auto object-cover"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
            </div>
            {/* Buttons on the left and right */}
            <div className="flex justify-between mt-4">
              <button className="text-sm rounded-full text-black  bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">Join our community</button>
             
            </div>
          </article>
        
          <div>
          <h1 className="font-bold text-2xl px-3 lg:px-0 gap-1 flex items-center justify-center">
            Know the faces of abusers and avoid them
          </h1>
          <img
                  src="/assets/Group 17 (2).png"
                  className="w-full h-auto object-cover"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
          </div>
        
          <article className="py-6 px-3 lg:px-0">
          <h1 className="font-bold text-2xl px-3 lg:px-0 gap-1 flex items-center justify-center">Free Legal Support for Survivors – Get lawyers on pro bono</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 pr-4 order-2 lg:order-1">
                <h2 className="text-sm leading-relaxed font-serif">
                  Lack of finances should never stop you from seeking justice.Our pro bono legal services connect you with compassionate lawyers and legal experts who will fight for your rights at no cost.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                How We Can Help
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Legal Advice & Consultation – Understand your rights and legal options.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Filing Police Reports & Protection Orders – Get guidance on reporting abuse safely.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif"> 
                Court Representation – Qualified lawyers will represent you in legal proceedings.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Assistance with Safe Relocation – Legal help for restraining orders, divorce, or child custody cases.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Help with Documentation – Assistance with evidence gathering, affidavits, and other legal paperwork.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Completely Confidential – Your information stays secure and private.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                Supportive Legal Experts – Lawyers trained in handling GBV cases with empathy and care.
                </h2>
                <h2 className="text-sm leading-relaxed font-serif">
                You are not alone, and you don’t have to fight this battle by yourself.
                   Our legal team is ready to stand with you, fight for you, and help you reclaim your rights.
                </h2>
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-2 mb-4 lg:mb-0">
                <img
                  src="/assets/image (4).png"
                  className="w-full h-auto object-cover"
                  alt="Photo of a dimly lit room with a computer interface terminal."
                />
              </div>
            </div>
            {/* Buttons on the left and right */}
            <div className="flex justify-between mt-4">
              <button className="text-sm rounded-full text-black  bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">
                Contact our Lawyers
                </button>
            </div>
          </article>
      </section>

      <section className="max-w-3xl mx-auto max-sm:px-4 max-md:px-6">
          <h2 className="font-serif text-3xl font-bold mb-4 space-y-4 text-center pb-4">
            Read Educational Blogs On Abuse
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          {/* Card 1 */}
          <div className=" border border-blue-300 rounded-2xl shadow-lg p-4 flex items-start">
              <img
                src="/assets/Rectangle 14.png"
                alt="Card Image"
                className="w-24 h-24 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-between w-full">
                <h1 className="text-lg font-semibold text-gray-800">Common Myth About GBV And The Truth Behind Them</h1>
                <p className="text-gray-600 mt-1 mb-3">
                  Gender-based violence (GBV) remains a global issue, yet many misconceptions still surround it.
                            These myths often prevent survivors from seeking help and allow perpetrators to escape accountability.
                </p>
              
                <div className="flex justify-start mt-4">
                <button className="text-sm rounded-full text-black bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">Keep Reading</button>
              </div>
                <p className="text-sm text-gray-500 mt-4">
                          By<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.803 4.121 2.059M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> <span className="uppercase tracking-wide">Robin Darnell</span>
                          <time className="text-sm text-gray-500 block">Nov. 21, 2016</time>
                        </p>
              </div>
          </div>
          {/* Card 2 */}
          <div className="border border-blue-300 rounded-2xl shadow-lg p-4 flex items-start">
            <img
              src="/assets/Rectangle 15.png"
              alt="Card Image"
              className="w-24 h-24 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-lg font-semibold text-gray-800">A Survivor’s Guide to Recovery</h1>
              <p className="text-gray-600 mt-1 mb-3">
                Surviving gender-based violence is a courageous step, but the journey to healing takes time, patience, and support.
                 Recovery is not linear, and every survivor’s experience is unique.
              </p>
             
              <div className="flex justify-start mt-4">
              <button className="text-sm rounded-full text-black bg-blue-500  hover:bg-blue-100 transition px-4 py-2 inline-block">Keep Reading</button>
            </div>
              <p className="text-sm text-gray-500 mt-4">
                        By<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.803 4.121 2.059M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> <span className="uppercase tracking-wide">Robin Darnell</span>
                        <time className="text-sm text-gray-500 block">Nov. 21, 2016</time>
                      </p>
            </div>
          </div>
        </div>
      </section>

      
       

    </>
  );
}
