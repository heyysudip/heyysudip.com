export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-10rem)] layout flex items-center justify-center gap-4 flex-col">
      <h1 className="text-6xl font-bold text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500">
          Eat.
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-800">
          Code.
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-800 to-violet-800">
          Sleep
        </span>
      </h1>
      <p className="text-lg text-center text-secondary tracking-wide">
        This is a blog about web development and programming
      </p>
    </main>
  );
}
