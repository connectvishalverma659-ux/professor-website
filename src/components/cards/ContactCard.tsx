import { Contact } from "@/types/contact";

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({
  contact,
}: ContactCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">

      <h2 className="text-2xl font-semibold mb-4">
        {contact.name}
      </h2>

      <p>
        <strong>Designation:</strong>{" "}
        {contact.designation}
      </p>

      <p>
        <strong>Department:</strong>{" "}
        {contact.department}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 underline"
        >
          {contact.email}
        </a>
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {contact.phone}
      </p>

      <p>
        <strong>Office:</strong>{" "}
        {contact.officeAddress}
      </p>

      <p>
        <strong>Department Address:</strong>{" "}
        {contact.departmentAddress}
      </p>

      <p>
        <strong>Office Hours:</strong>{" "}
        {contact.officeHours}
      </p>

    </div>
  );
}