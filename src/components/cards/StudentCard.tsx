import { Student } from "@/types/student";
type StudentCardProps = {
  student: Student;
};

export default function StudentCard({
  student,
}: StudentCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2">
        {student.name}
      </h3>

      <p>
        <strong>Degree:</strong> {student.degree}
      </p>

      <p>
        <strong>Research Topic:</strong> {student.topic}
      </p>

      <p>
        <strong>Year:</strong> {student.year}
      </p>
    </div>
  );
}