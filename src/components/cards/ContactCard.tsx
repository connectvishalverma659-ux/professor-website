import { Contact } from "@/types/contact";

type ContactCardProps = {
  contact: Contact;
};

export default function ContactCard({
  contact,
}: ContactCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">

      <h2 className="px-2 text-2xl font-semibold mb-4">
        {contact.name}
      </h2>

      <p className="px-1">
        <strong>Designation:</strong>{" "}
        {contact.designation}
      </p>

      <p className="px-1">
        <strong>Department:</strong>{" "}
        {contact.department}
      </p>

      <p className="px-1">
        <strong>Email:</strong>{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-blue-600 underline"
        >
          {contact.email}
        </a>
      </p>

      <p className="px-1">
        <strong>Phone:</strong>{" "}
        {contact.phone}
      </p>

      <p className="px-1">
        <strong>Office:</strong>{" "}
        {contact.officeAddress}
      </p>

      <p className="px-1">
        <strong>Department Address:</strong>{" "}
        {contact.departmentAddress}
      </p>

      <p className="px-1">
        <strong>Office Hours:</strong>{" "}
        {contact.officeHours}
      </p>

    </div>
  );
}