const OpalAndSagePage = () => {
    return (
      <section className="w-full bg-[#FAF9F6] text-black">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#3D5229] via-[#566B37] to-[#7A8450] text-[#FAF9F6] py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/leaves-pattern.svg')] opacity-10 bg-cover bg-center" />
          <div className="relative max-w-5xl mx-auto px-6 z-10">
            <img
              src="/image/opal-and-sage.png"
              alt="Opal and Sage Logo"
              className="mx-auto h-62 w-auto object-contain drop-shadow-lg "
            />

            <p className="mt-6 text-2xl italic font-light text-[#FAF9F6]/90">
              "Rooted in Care, Flowing in Grace"
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-4xl mx-auto py-20 px-6 text-center">
          <p className="text-lg md:text-xl text-black leading-relaxed">
            Are you looking for care, but not ready to commit to a full-time
            residence? <br />
            <span className="font-semibold text-[#566B37]">
              Opal and Sage Care Services
            </span>{" "}
            is a compassionate branch of{" "}
            <span className="font-semibold text-[#3D5229]">Rivers Residence</span>,
            providing personalized and professional care—right in the comfort of
            your home.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-[#FFFDF7] py-20 border-t border-[#D9D6C3]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-[#3D5229] mb-12">
              Our Services
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                "Respite Care (In-home)",
                "Companionship Care",
                "Private Duty Care",
                "Transitional Care Services – Meal Preparation",
                "Mobility Assistance and Personal Care",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-[#FAF9F6] rounded-3xl shadow-md p-8 border border-[#E2E0D0] hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#3D5229] mb-2">
                    {service}
                  </h3>
                  <p className="text-black/70 text-sm leading-relaxed">
                    Compassionate support to ensure comfort, safety, and
                    independence for our clients and their families.
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-black/60 mt-10 italic">
              * Home Health Care will be available once Medicaid Application is
              approved.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative py-20 bg-gradient-to-br from-[#3D5229] to-[#7A8450] text-[#FAF9F6] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/texture.svg')] opacity-10 bg-cover bg-center" />
          <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-12 text-[#FAF9F6]/90">
              Whether you'd like to schedule a tour, ask a question, or learn more
              about our care services, our team is always here to help. Reach us
              anytime — we'd love to hear from you.
            </p>

            <div className="bg-[#FAF9F6] text-[#3D5229] rounded-3xl shadow-xl p-10 mx-auto w-full max-w-lg border border-[#D1D0B5]">
              <p className="font-medium mb-3">
                <span className="font-semibold">Address:</span> 7617 Sandyridge St.
                Portage, MI 49024
              </p>
              <p className="font-medium mb-3">
                <span className="font-semibold">Phone:</span> (269) 371-2901
              </p>
              <p className="font-medium mb-3">
                <span className="font-semibold">Phone:</span> (312) 350-4801
              </p>
              <p className="font-medium">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@riversresidence.com"
                  className="underline hover:text-[#7A8450] transition-colors duration-200"
                >
                  info@riversresidence.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default OpalAndSagePage;
