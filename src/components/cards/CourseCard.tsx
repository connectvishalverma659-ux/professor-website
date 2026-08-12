import { Course } from "@/types/course";

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-3">
        {course.name}
      </h3>

      <p className="mb-2">
        <strong>Course Code:</strong> {course.code}
      </p>

      <p>
        <strong>institute:</strong> {course.institute}
      </p>
    </div>
  );
}