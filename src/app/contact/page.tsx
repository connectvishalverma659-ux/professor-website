import PageHeader from "@/components/PageHeader";
import ContactCard from "@/components/cards/ContactCard";
import { contact } from "@/data/contact";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="Contact"
        description="Get in touch with the professor."
      />

      <ContactCard
        contact={contact}
      />

    </div>
  );
}