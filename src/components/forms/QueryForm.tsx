"use client";

export default function QueryForm() {
  return (
    <div className="w-full justify-right px-3">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="font-[var(--font-dm-serif)] text-3xl font-bold md:text-4xl">
          Send Your Query
        </h2>

        <p className="mt-3 text-gray-600">
          Have a question? Feel free to get in touch with us.
        </p>
      </div>

      {/* Form */}
      <form className="rounded-lg p-6 shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg">
<div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Contact Number */}
        <div className="mb-5">
          <label
            htmlFor="contactNumber"
            className="mb-2 block text-sm font-medium"
          >
            Contact Number
          </label>

          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            required
            placeholder="Enter your contact number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
</div>
        {/* Subject */}
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium"
          >
            Subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Enter subject"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Query */}
        <div className="mb-6">
          <label
            htmlFor="query"
            className="mb-2 block text-sm font-medium"
          >
            Query
          </label>

          <textarea
            id="query"
            name="query"
            required
            rows={5}
            placeholder="Enter your query..."
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="rounded-lg px-6 py-3 font-semibold transition hover:opacity-80"
        >
          Send Query
        </button>

      </form>
    </div>
  );
}
