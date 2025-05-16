import  { useState } from 'react';

const faqs = [
  {
    question: 'What should I do if I or someone I know is experiencing GBV?',
    answer:
      'If you or someone close to you is experiencing gender-based violence, your first priority is safety. Immediately seek help from trusted individuals—a family member, neighbor, or friend—and move to a safe place if possible. Do not remain silent. Speak up. Survivors should not feel ashamed or isolated.You can also contact national emergency services or specialized organizations offering GBV assistance. Document any abuse (photos, voice notes, messages, etc.) discreetly. Encourage professional intervention, such as speaking with a counselor or legal advisor.',
  },

  {
    question: 'How can I report an incident of gender-based violence?',
    answer:
      'Reporting GBV is a courageous act that protects others as well as yourself. You can:*Call emergency numbers (e.g., 112 or 911 depending on your country).*Visit the nearest police station or human rights commission office.*Use GBV helplines or hotlines provided by NGOs or government bodies.*In many countries, you can report anonymously through hotlines or mobile apps.*In Nigeria, you can report to the National Human Rights Commission (NHRC) or contact the H.O.P.E Centre for rape and sexual assault.'
  },
  {
    question: 'Are there support services available for survivors of GBV?',
    answer:
      'Yes, many governments and NGOs offer holistic support services, including:*Medical care and post-rape kits *Psychological counseling and trauma support *Legal aid and representation *Vocational training for economic empowerment *In Nigeria, some notable organizations include:WARIF (Women at Risk International Foundation) – https://warifng.org and Stand to End Rape Initiative (STER) – https://standtoendrape.org',
  },
  {
    question: 'How can I help prevent gender-based violence?',
    answer:
      'Preventing GBV is a collective cultural shift. Here’s what you can do: *Speak out against sexist jokes, abuse, and harmful traditions. *Educate yourself and others on consent, gender rights, and respectful relationships. *Support gender equality at home, school, workplace, and religious settings. Raise boys and girls with equal dignity and opportunity. *Volunteer or support organizations that combat GBV. Change begins in the home, is reinforced by schools, and must be championed in our communities.',
  },
  {
    question: 'Where can survivors find safe shelter or refuge?',
    answer:
      'Survivors can find refuge in *Government-funded shelters.*Faith-based organizations offering sanctuary. *Specialized crisis centres like the H.O.P.E Centre or WARIF in Nigeria.'
  },

  {
    question: 'What should I avoid saying to a survivor of GBV?',
    answer:
      ' Please avoid words: *Why didn’t you leave? *What were you wearing? *Are you sure it happened? *You must forgive and forget. But instead, say: *I believe you. *It wasn’t your fault. *You are not alone. *What can I do to help?',
  },

  {
    question: ' Steps to Follow in a Case of Potential False GBV Accusation',
    answer:
      '🔹Remain Calm and Do Not Retaliate🔹Secure Legal Representation Immediately🔹 Gather Evidence and Witnesses🔹 Cooperate with the Investigation 🔹 Respect the Accuser’s Rights (Even If Innocent)🔹 Request a Formal Hearing or Mediation 🔹 Clear Your Name with Dignity🔹 Consider Legal Action for Defamation Note:False accusations should never be used to discredit real survivors. Investigate each case independently. Justice is not about taking sides, but uncovering  the truth. ',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index : number) => {
    // @ts-ignore
    setOpenIndex( index === openIndex ? null : index);
  };

  return (
    <section className="pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="font-bold text-center text-2xl max-sm:text-lg mb-10">
        Get Answers to Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="rounded-lg border border-blue-400 bg-white px-4 py-2 
              text-base text-gray-900 shadow-sm focus:border-blue-400 focus:outline-none 
              focus:ring-2 focus:ring-blue-300 mb-3 max-sm:text-sm max-md:text-base ">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-3 bg-white text-blue-800 
              font-medium focus:outline-none "
            >
              {item.question}
            </button>
            {openIndex === index && (
              <ul className="px-6 py-4 bg-blue-50 text-gray-700 text-sm">
               <li itemType='circle'> {item.answer} </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
