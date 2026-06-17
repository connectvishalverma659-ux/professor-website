import PageHeader from "@/components/PageHeader";
import StudentCard from "@/components/cards/StudentCard";
import { students } from "@/data/currentStudents";

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
        title="Students & Team"
        description="Current students and research team members."
      />

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}

      </div>

    </div>
  );
}