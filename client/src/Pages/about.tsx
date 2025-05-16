import React from 'react';
import { FaBalanceScale,  FaLock,  FaHandsHelping, FaExclamationTriangle, FaEye } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto space-y-12 p-8">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600 p-4">About H.O.P.E</h1>
        <p className="text-lg text-gray-600">
          A global platform committed to ending gender-based violence through technology, community, and access to justice.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌟 Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>H.O.P.E</strong> is a global movement and digital platform dedicated to ending gender-based violence through technology, community support, and access to justice. 
          We aim to build a comprehensive ecosystem that raises awareness, amplifies voices, and takes concrete action to ensure safety, equality, and justice for all.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">🔍 Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Feature icon={<FaExclamationTriangle />} title="Emergency Response System" description="Connect survivors with emergency services instantly for urgent help." />
          <Feature icon={<FaBalanceScale />} title="Pro Bono Legal Support" description="Match survivors with legal professionals for justice and representation." />
          <Feature icon={<FaEye />} title="Secure Witness Reporting" description="Allow witnesses to safely submit statements with anonymity." />
          <Feature icon={<FaHandsHelping />} title="Community Support Network" description="Connect with a safe space of peers, mentors, and advocates." />
          <Feature icon={<FaLock />} title="Privacy-First Architecture" description="We prioritize your safety with end-to-end encryption and strong data protection." />
          {/* <Feature icon={<FaGlobe />} title="Multi-Language & Offline Support" description="Accessible globally with language support and offline capabilities." /> */}
          {/* <Feature icon={<FaMobileAlt />} title="Cross-Platform Access" description="Use the platform on web, mobile, and in areas with limited connectivity." /> */}
        </div>
      </section>

      {/* Contribution */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🤝 How You Can Contribute</h2>
        <p className="text-gray-700 mb-4">
          We welcome support from developers, designers, legal professionals, and community members. You can:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Report issues or suggest features</li>
          {/* <li>Contribute code or documentation</li> */}
          <li>Offer legal or advocacy support</li>
          <li>Join our community outreach efforts</li>
        </ul>
      </section>

      {/* Community */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌐 Join Our Community</h2>
        <p className="text-gray-700">
          Connect with other advocates and allies:
        </p>
        <ul className="list-disc pl-6 text-blue-600 space-y-2 mt-2">
          <li><a href="https://discord.gg/example" target="_blank">Join our Discord</a></li>
          <li><a href="https://twitter.com/example" target="_blank">Follow us on Twitter</a></li>
          <li><a href="https://example.com/newsletter" target="_blank">Subscribe to our Newsletter</a></li>
        </ul>
      </section>

      {/* Acknowledgements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🙏 Acknowledgements</h2>
        <p className="text-gray-700">
          We are grateful to all survivors, legal professionals, and volunteers who have contributed to shaping this platform.
        </p>
      </section>

      {/* Footer Quote */}
      <footer className="text-center mt-12 border-t pt-6">
        <p className="italic text-gray-600">
          Together, we can build a future where every individual lives with dignity, respect, and freedom from fear.
        </p>
      </footer>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.JSX.Element; title: string; description: string }) {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
      <div className="text-blue-500 text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
