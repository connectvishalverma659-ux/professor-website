import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/contact";
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
       title="About Professor"
       description="Professor profile, academic journey, achievements, and research interests."
      />

      <div className="grid md:grid-cols-3 gap-10">

        {/* Photo Section */}
        <div>
          <img
            src={contact.profileImage}
            alt={contact.name}
            className="w-64 h-64 object-cover rounded-lg"
          /> 
        </div>

        {/* Details Section */}
        <div className="md:col-span-2">

          <h2 className="text-2xl font-semibold mb-4">
            {contact.name}
          </h2>

          <p className="mb-6 text-gray-700">
            Short biography of the professor will be displayed here.
            This section will include academic background,
            research interests, achievements, and contributions.
          </p>

          <div className="space-y-4">

            <div>
              <h3 className="font-semibold">
                <p>{contact.designation}</p>
              </h3>
              <p>Professor</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Department
              </h3>
              <p>{contact.department}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Research Interests
              </h3>
              <p>
                Artificial Intelligence, Machine Learning,
                Sustainable Systems, Data Analytics
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Areas of Expertise
              </h3>
              <p>
                Advanced Computing, Optimization,
                Engineering Applications
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Academic Journey */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Academic Journey
        </h2>

        <div className=" rounded-lg p-6">
          Academic qualifications and career progression
          will be displayed here.
        </div>
      </section>

      {/* Achievements */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Professional Achievements
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Award / Achievement 1</li>
          <li>Award / Achievement 2</li>
          <li>Award / Achievement 3</li>
        </ul>
      </section>

      {/* Social Profiles */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
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

          <button className="px-6 py-3 font-bold rounded-lg hover:opacity-50">
            Download CV
          </button>

        </div>
      </section>

    </div>
  );
}