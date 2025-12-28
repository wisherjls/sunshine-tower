export default function Home() {
  const letters = "Welcome".split("");
  
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
        <span>
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block motion-preset-bounce motion-delay-[var(--delay)]"
              style={{ "--delay": `${index * 100}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>

    </div>
  );
}
