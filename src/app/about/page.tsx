import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/contact";
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">


       <div className="min-h-screen ">
     {/* <PageHeader
       title="About Professor"
       description="Professor profile, academic journey, achievements, and research interests."
      />
      */}

      <div className="grid md:grid-cols-3 gap-10">

        {/* Photo Section */}
        <div className="py-25 ">
          <img
            src={contact.profileImage}
            alt={contact.name}
            className="w-64 h-64 object-cover rounded-lg"
            style={{
              backgroundAttachment: "fixed",
            backgroundPosition: "center",
            }}
          /> 
        </div>

        {/* Details Section */}
        <div className="md:col-span-2">

          <h2 className="font-[var(--font-playfair)] text-2xl font-semibold mb-4">
            {contact.name}
          </h2>

          <p className="mb-6 text-gray-700 rounded-lg p-6 text-justify">
            Dr. Akash Kaithal was born in Kanpur, India. He obtained his Integrated M.Sc. degree from the
National Institute of Science Education and Research (NISER), Bhubaneswar, India, where he carried
out his master&#39;s thesis under the supervision of Prof. Chidambaram Gunanathan. He received his
Ph.D. with Summa Cum Laude honors from RWTH Aachen University, Germany, and Claude Bernard
University Lyon 1, France, where he conducted his doctoral research under the supervision of Prof.
Walter Leitner and Prof. Elsje Alessandra Quadrelli, respectively.
Following his doctoral studies, Dr. Kaithal pursued his first postdoctoral research at the Max Planck
Institute for Chemical Energy Conversion, Germany, under the guidance of Prof. Walter Leitner and
Dr. Christophe Werlé. He subsequently joined the University of Münster, Germany, as a postdoctoral
researcher in the group of Prof. Frank Glorius. He also served as a Chemical Scientist at C1 Green
Chemicals AG, Berlin, Germany, where he contributed to the development of sustainable methanol
production technologies.
His research has been recognized with several prestigious awards, including the Chinese-German
Chemical Association (CGCA) Young Researchers Award (2021), the Borchers-Plakette Ph.D. Award
(2021) from RWTH Aachen University, and the Ernst Haage Prize (2020) from the Max Planck
Society.
Currently, Dr. Kaithal is an Assistant Professor in the Department of Chemistry at Indian Institute of
Technology Roorkee, India. His research focuses on homogeneous and heterogeneous catalysis,
organometallic chemistry, and the sustainable conversion of renewable feedstocks into fuels and
value-added chemicals.
          </p>

          <div className="space-y-4">

            <div>
              <h3 className="font-[var(--font-playfair)] font-semibold">
                Designation
              </h3>
              <p>{contact.designation}</p>
            </div>

            <div>
              <h3 className="font-[var(--font-playfair)]font-semibold">
                Department
              </h3>
              <p>{contact.department}</p>
            </div>

            <div>
              <h3 className="font-[var(--font-playfair)]font-semibold">
                Research Interests
              </h3>
              <p>
                Homogeneous and Heterogeneous Catalysis, Synthetic Organic and
                Organometallic Chemistry, Conversion of Renewable Feedstocks and Waste to Sustainable Fuels
                and Chemical Products.
              </p>
            </div>

            <div>
              <h3 className="font-[var(--font-playfair)] font-semibold">
                Areas of Expertise
              </h3>
              <p>
                Catalysis, Organometallic Chemistry, Sustainable Chemistry, (Re)Hydrogenation,
                Syngas and CO 2 Utilization, Renewable Feedstocks, Catalyst Design.
              </p>
            </div>

          </div>

        </div>

      </div>

      <div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />

      </div>
      {/* Academic Journey */}
      <section className="mt-16">
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold mb-6">
          Academic Journey
        </h2>

        <div className="rounded-lg p-6 rounded-lg p-6 text-justify">
  <div className="mb-4">
    <span className="font-bold">December 2024 – Present:</span>{" "}
    Assistant Professor, Department of Chemistry, Indian Institute of Technology (IIT) Roorkee, India
  </div>

  <div className="mb-4">
    <span className="font-bold">July 2024 – November 2024:</span>{" "}
    Assistant Professor, Department of Chemistry, Indian Institute of Technology (Indian School of Mines), Dhanbad, India
  </div>

  <div className="mb-4">
    <span className="font-bold">February 2023 – June 2024:</span>{" "}
    Chemical Scientist, C1 Green Chemicals AG, Berlin, Germany
  </div>

  <div className="mb-4">
    <span className="font-bold">June 2021 – January 2023:</span>{" "}
    Postdoctoral Research Fellow, University of Münster, Germany
    <br />
    Advisor: Prof. Dr. Frank Glorius
  </div>

  <div className="mb-4">
    <span className="font-bold">August 2020 – May 2021:</span>{" "}
    Postdoctoral Research Fellow, Max Planck Institute for Chemical Energy Conversion, Germany
    <br />
    Advisor: Prof. Walter Leitner and Dr. Christophe Werlé
  </div>

  <div className="mb-4">
    <span className="font-bold">October 2016 – April 2020:</span>{" "}
    Ph.D. in Chemistry (Summa Cum Laude)
    <br />
    RWTH Aachen University, Germany &amp; Claude Bernard University Lyon 1, France
    <br />
    Supervisors: Prof. Walter Leitner and Prof. Elsje Alessandra Quadrelli
  </div>

  <div>
    <span className="font-bold">2011 – 2016:</span>{" "}
    Integrated M.Sc. in Chemistry
    <br />
    National Institute of Science Education and Research (NISER), Bhubaneswar, India
    <br />
    Thesis Supervisor: Prof. Chidambaram Gunanathan
  </div>
</div>
      </section>

<div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />

      {/* Achievements */}
      <section className="mt-16">
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold mb-6">
          Professional Achievements
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>"Chinese-German Chemical Association (CGCA)" Young Researchers Award 2021 
(1st position out of three finalist) </li>
          <li>Borchers-Plakette" Doctor of Philosophy (Ph.D.) award 2021 from RWTH Aachen University</li>
          <li>Ernst-Haage Prize" Doctor of Philosophy (Ph.D.) award 2020 from Max-Planck Society </li>
          <li>Doctor of Philosophy (Ph.D.), Honors: "Summa Cum Laude"</li>
          <li>Erasmus+ (the European Doctoral Program on Sustainable Industrial Chemistry (SINCHEM)) 
Scholarship for Doctoral Studies. (Oct 2016 to Oct 2019) </li>
          <li>Innovation in Science Pursuit for Inspired Research (INSPIRE) Scholarship for Integrated Master 
of Science (M.Sc.). (Jun 2011 – Jun 2016)</li>
           <li>Gas Authority of India Limited Scholarship (GAIL) for Integrated Master of Science (M.Sc.). 
(Jun 2011 – Jun 2015)</li>
        </ul>
      </section>

      <div className="my-12 h-[3px] w-full rounded-full bg-gray-300 shadow-[0_2px_0_rgba(255,255,255,0.8),0_-1px_0_rgba(0,0,0,0.15)]" />

      {/* Social Profiles */}
      <section className="mt-16">
        <h2 className="font-[var(--font-playfair)] text-3xl font-bold mb-6">
          Professional Profiles
        </h2>

        <div className="flex flex-wrap gap-4">
          
          <a
            href="https://orcid.org/0000-0003-3328-3003"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            ORCID
          </button>
          </a>

          <a
            href="https://scholar.google.com/citations?user=RHwRT7kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            Google Scholar Profile
          </button>
          </a>

          <a
            href="https://www.linkedin.com/in/akash-kaithal-599abb86/ "
            target="_blank"
            rel="noopener noreferrer"
          >
          <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            LinkedIn
          </button>
          </a>

         {/*} <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            Download CV
          </button>
          */}

        </div>
      </section>

    </div>
  );
}