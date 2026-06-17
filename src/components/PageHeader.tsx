type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>

      <p className="text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
}