import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10  ">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        Privacy Policy
      </h1>
      <p className="text-center mb-10 text-sm">
        Last Updated: October 2025
      </p>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>
          Welcome to <strong>ExploreWorld Tours</strong>! We value your privacy
          and are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website and use our services.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
        <p className="mb-3">
          We collect information from you when you use our website, register an
          account, or make a booking. The types of data we collect include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal details (name, email, contact number, photo URL)</li>
          <li>Booking details (selected package, travel dates, special notes)</li>
          <li>Guide details (for guides who add/manage packages)</li>
          <li>Firebase authentication information</li>
          <li>Usage data such as pages visited and time spent on our site</li>
        </ul>
      </section>

      {/* How We Use Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
        <p className="mb-3">
          We use your personal information for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and manage tour bookings and services</li>
          <li>To personalize user experience and improve our platform</li>
          <li>To send booking confirmations and important updates</li>
          <li>To verify user identity and ensure secure login via Firebase</li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p>
          We use industry-standard encryption and authentication methods to
          protect your personal data. Firebase Authentication and MongoDB Atlas
          are used with secured environment variables (.env) to ensure safe data
          storage and access. However, no method of transmission over the internet
          is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* Sharing Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share limited
          information only with:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Service providers assisting in system operation (Firebase, MongoDB)</li>
          <li>Regulatory bodies if required by law</li>
          <li>Other users only when you act as a guide and publish your tour packages</li>
        </ul>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
        <p className="mb-3">
          You have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access, update, or delete your personal information</li>
          <li>Withdraw your consent at any time</li>
          <li>Request details of data we hold about you</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Cookies</h2>
        <p>
          Our website uses cookies to enhance user experience and analyze site
          performance. You can disable cookies in your browser settings if you
          prefer not to share this data.
        </p>
      </section>

      {/* Policy Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. All changes will
          be posted on this page with the updated date.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:  
          <br />
           <strong>support@exploreworldtours.com</strong>  
          <br />
           Dhaka, Bangladesh
        </p>
      </section>

      {/* Back to Home */}
      <div className="text-center mt-12">
        <a
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
