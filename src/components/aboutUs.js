import React from "react";
import BoxStack from "../assets/imgs/boxStack.png";

const AboutUs = ({ setRef }) => {
  const yearsInService = new Date().getFullYear() - 2011;

  return (
    <div className="about-container" id="aboutContainer" ref={setRef}>
      <h1>
        Home-Aid Moving: Professional and Reliable Moving Services for
        Residential and Commercial Clients
      </h1>
      <div className="container">
        <div className="right-about">
          <h2 className="about-title">Your Trusted Tennessee Moving Company</h2>
          <div className="description-container">
            <p className="about-description indent">
              Based in Spring Hill, Tennessee, Home-Aid Moving is a locally
              owned and operated moving company serving Williamson County and
              beyond. We specialize in a full range of professional moving
              services for both local and long-distance moves. Our team is
              dedicated to delivering a stress-free, white-glove moving
              experience tailored to the unique needs of every client, from
              small apartments to large family homes and business relocations.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left-about">
          <img className="box-stack-img" src={BoxStack} alt="" />
        </div>
        <div className="right-about">
          <h2 className="about-title">Our Vision</h2>
          <div className="description-container">
            <p className="about-description indent">
              At Home-Aid Moving, our vision is to be Tennessee's top moving
              company, known for our dependability, safety, and efficiency. We
              work tirelessly to make moving as smooth and simple as possible,
              guiding clients from the initial planning stages through to the
              careful delivery of their belongings.
            </p>
          </div>
          <h2 className="about-title">Core Values that Set Us Apart</h2>
          <div className="description-container">
            <ul className="about-description">
              <li>
                <strong>Hard Work:</strong> We tackle every job with dedication,
                from handling fragile items to moving large furniture.
              </li>
              <li>
                <strong>Honesty and Transparency:</strong> We believe in fair
                pricing with no hidden fees, so you always know exactly what to
                expect.
              </li>
              <li>
                <strong>Kindness:</strong> We treat each client and their
                belongings with respect and care.
              </li>
              <li>
                <strong>Going the Extra Mile:</strong> We ensure we do
                everything possible to make our clients' lives easier.
              </li>
              <li>
                <strong>Continuous Learning:</strong> Our team stays current on
                the latest moving techniques and packing methods.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="" className="services-container" ref={setRef}>
        <h1 className="service-header">Comprehensive Moving Services</h1>

        <div className="">
          <h2 className="service-title">Full-Service Moving</h2>
          <p className="about-description indent">
            Our full-service moving includes optional packing, loading,
            transport, unloading, and unpacking. We cater to residential moves,
            office relocations, senior living moves, in-home moving, and
            specialty moving services for items like upright pianos, antiques,
            and artwork. With our white-glove service, we treat each item as if
            it were our own. Our team ensures all furniture assembly and
            disassembly is handled with care. We take pride in being clean-cut,
            personable, and dedicated to making each client's day.
          </p>

          <h2 className="service-title">Local Moving Services</h2>
          <p className="about-description indent">
            Our local moving services are perfect for apartment moves, condo
            moves, and single-family home moves. Whether it's a large mansion or
            a one-bedroom apartment, we have the trucks and team to handle it.
            We offer multiple 26-foot truck rates that go up to 8 movers and
            down to a 12-foot enclosed trailer with 2 movers. This versatility
            allows us to move your belongings efficiently across the city.
          </p>

          <h2 className="service-title">Long-Distance Moving</h2>
          <p className="about-description indent">
            Ideal for clients relocating out of state, our long-distance moving
            services handle moves up to 10 hours away. Unlike freight companies,
            which can delay delivery for a week or more, we guarantee immediate
            delivery with the same team loading and unloading your belongings
            for added peace of mind.
          </p>

          <h2 className="service-title">Labor-Only Moving</h2>
          <p className="about-description indent">
            For clients who need assistance loading or unloading a truck, moving
            heavy furniture, or rearranging items within their home, our
            labor-only moving services offer skilled movers who handle each item
            with care. This service is ideal for property managers, stagers,
            realtors, and more, and supports moves involving PODS, storage
            units, or in-home relocations.
          </p>

          <h2 className="service-title">Packing and Unpacking Services</h2>
          <p className="about-description indent">
            Our team provides professional packing services, using high-quality
            materials and specialized techniques to protect your belongings. We
            carefully pack each item, label boxes, and offer a seamless
            unpacking experience upon request, ensuring your new space is set up
            with ease.
          </p>

          <h2 className="service-title">Junk Removal and Cleanout Services:</h2>
          <p className="about-description indent">
            As an add-on to an ongoing move, we offer junk removal and cleanout
            services to help clear out unwanted items. While we don't offer junk
            removal as a standalone service, this add-on makes your transition
            even easier.
          </p>

          <h2 className="service-title">Specialty Moves</h2>
          <p className="about-description indent">
            From upright pianos and infrared saunas to delicate antiques and
            fine art, our team is trained in specialty moving services. Using
            specialized equipment and techniques, we ensure the safe transport
            of all valuable or fragile items.
          </p>

          <h2 className="service-title">Senior Assisted Living Moves</h2>
          <p className="about-description indent">
            Moving can be especially challenging for older adults. Our senior
            moving services are compassionate and considerate, providing the
            extra support needed to reduce stress for seniors and their
            families.
          </p>
        </div>
      </div>

      <div id="" className="services-container" ref={setRef}>
        <h1 className="service-header why-header">
          Why Choose Home-Aid Moving?
        </h1>

        <ul className="about-description why-choose">
          <li>
            <strong>Licensed and Insured Movers:</strong> We are fully licensed
            and insured, giving you peace of mind.
          </li>
          <li>
            <strong>Experienced and Trained Professionals:</strong> Our locally
            owned company takes pride in sending out well-trained movers who
            embody our standards for quality and safety.
          </li>
          <li>
            <strong>Free Moving Estimates:</strong> We offer free, no-obligation
            estimates, giving you clarity on costs upfront.
          </li>
          <li>
            <strong>Flexible Scheduling:</strong> We accommodate your schedule,
            offering weekend moves, same-day moves, and last-minute
            availability.
          </li>
          <li>
            <strong>Customized Moving Plans:</strong> Whether you're moving a
            single room or an entire office building, we tailor our services to
            meet your unique needs.
          </li>
        </ul>

        <p>
          Simply put, we believe we are in a class of our own. The professional
          experience we bring, combined with the energy and charisma of our
          team, is something you just have to experience. Our approach—from the
          initial booking call to final follow-up—centers on transparency,
          communication, and connection.
        </p>

        <p>
          As a family-owned and operated business right here in Spring Hill,
          Tennessee, next to Franklin, we're proud of our deep roots in the
          community and our commitment to serving the area where we grew up.
        </p>

        <div className="">
          <h2 className="service-title">Our Proven Moving Process</h2>
          <p className="about-description indent">
            From the initial consultation to the final delivery, we work closely
            with you to ensure a smooth, organized move. Our step-by-step moving
            process includes packing, disassembly, loading, transport,
            unloading, reassembly, and unpacking, guaranteeing that every detail
            is handled with care. Moving is ranked among the top 5 most
            stressful life events. Allow Home-Aid Moving to step in and relieve
            that stress for you.
          </p>

          <h2 className="service-title">Our Guarantee</h2>
          <p className="about-description indent">
            We're committed to being a top-rated moving company in Tennessee,
            dedicated to making every move a positive experience. Our team
            operates with a strong moral compass, building lasting relationships
            based on trust and dependability.
          </p>

          <h2 className="service-title">Mission Statement:</h2>
          <p className="about-description indent mission-statement">
            “At Home-Aid Moving, we create a positive impact by combining hard
            work, transparency, and compassion. Our mission is to elevate the
            moving experience and provide a service that genuinely makes a
            difference in people's lives.”
          </p>

          <p>
            At the end of the day, what we bring to the table is truly unique.
            We care deeply about our clients, their stories, and their moves. We
            move with purpose, getting to know each client along the way.
            Home-Aid Moving is your go-to moving solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
