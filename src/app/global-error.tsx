"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>Check your internet connection or contact the website owner</p>
        <button
          onClick={() => reset()}
          className="bg-green-600 text-white py-2 px-3 rounded-md text-center"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
