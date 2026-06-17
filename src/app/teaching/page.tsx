import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export default function TeachingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <PageHeader
         title="Teaching"
         description="Current and previous courses taught by the professor."
      />

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {courses.map((course) => (
          <CourseCard
            key={course.name}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}