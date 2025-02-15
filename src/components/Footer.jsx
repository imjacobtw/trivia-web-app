export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="min-h-1/10 min-w-screen absolute bottom-0 flex justify-between items-center px-4 sm:px-12 text-center px-4">
      <p className="text-left">
        <a
          className="text-red-orange hover:text-red-orange/60 transition duration-300 ease-in-out"
          href="https://github.com/imjacobtw"
        >
          @imjacobtw
        </a>{" "}
        &copy; {currentYear}
      </p>
      <p className="text-right">
        Built using the{" "}
        <a
          className="text-red-orange hover:text-red-orange/60 transition duration-300 ease-in-out"
          href="https://opentdb.com/"
        >
          Open Trivia Database API
        </a>
        .
      </p>
    </footer>
  );
}
