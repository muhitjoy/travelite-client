import React from "react";

const TermsandConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 ">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
        Terms & Conditions
      </h1>
      <p className="text-center mb-10 text-sm">
        Last Updated: October 2025
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>
          Welcome to <strong>ExploreWorld Tours</strong>. By accessing or using
          our website and services, you agree to comply with and be bound by the
          following Terms and Conditions. Please read these terms carefully
          before using our platform.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
        <p>
          To use our booking services, you must be at least 18 years old or have
          the permission of a legal guardian. By using our site, you represent
          that you meet these requirements.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. Account Registration & Security
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            You must create an account using valid information via Firebase
            Authentication.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
          <li>
            Any unauthorized use of your account must be reported immediately.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          4. Tour Packages & Bookings
        </h2>
        <p className="mb-3">
          All bookings are subject to availability and confirmation by the
          respective guide or agency. When you make a booking:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            You agree to provide accurate information while completing the
            booking form.
          </li>
          <li>
            Bookings will initially be marked as “pending” until confirmed by
            the guide.
          </li>
          <li>
            Any updates to booking status will be visible in your dashboard under
            “My Bookings.”
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          5. Payments & Refund Policy
        </h2>
        <p className="mb-3">
          Currently, our system supports offline payment verification through
          guides. In future updates, online payments may be introduced. Please
          note:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Refund eligibility depends on the guide’s or agency’s individual
            policy.
          </li>
          <li>
            ExploreWorld Tours acts only as a platform provider and is not
            responsible for payment disputes.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          6. Guide Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Guides must provide accurate and up-to-date information.</li>
          <li>Guides are solely responsible for managing their packages.</li>
          <li>
            False or misleading tour information may lead to account suspension.
          </li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. User Conduct</h2>
        <p>
          You agree not to misuse our platform or upload harmful, abusive, or
          illegal content. Violation of these rules may result in immediate
          account termination.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and materials available on our site are
          the property of ExploreWorld Tours. You may not reproduce or
          redistribute any part of the website without permission.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
        <p>
          ExploreWorld Tours is not responsible for any loss, injury, or damage
          arising from the use of our platform, including but not limited to
          issues caused by third-party services, guides, or technical failures.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">10. Modifications</h2>
        <p>
          We reserve the right to modify or update these Terms at any time.
          Continued use of our platform means you accept the revised Terms and
          Conditions.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
        <p>
          For any questions about these Terms & Conditions, please contact us at:
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

export default TermsandConditions;
