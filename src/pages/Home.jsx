const sections = [
  {
    title: "Community",
    image: "/images/Community.jpg",
    alt: "Community",
    text: "Welcome! Make new friends, jump into fun conversations, and hang out with the rest of the community.",
  },
  {
    title: "Suites",
    image: "/images/suites.jpeg",
    alt: "Suites",
    text: "Check out the different suites and make your space feel more like home.",
  },
  {
    title: "Customization",
    image: "/images/customization.jpg",
    alt: "Customization",
    text: "Customize your experience and make everything feel unique to you.",
  },
  {
    title: "Games",
    image: "/images/games.jpg",
    alt: "Games",
    text: "Jump into games, have fun, and enjoy the community together.",
  },
];

// title animation
export default function Home() {
  const title = "Welcome to sunshine tower";
  const letters = title.split("");

  return (
    <div className="py-16 text-center">
      <section className="mb-8 text-blue-800">
        <h1 className="mb-4 flex items-center justify-center gap-2 text-5xl font-bold text-blue-800">
          <span className="whitespace-pre">
            {letters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block motion-opacity-in-0 motion-preset-bounce motion-delay-(--delay)"
                style={{ "--delay": `${index * 180}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </h1>
      </section>

      {/* section cards */}
      {sections.map((section, index) => (
        <section
          key={section.title}
          className="mx-auto mb-8 max-w-3xl rounded-4xl bg-blue-300 p-8 shadow-lg motion-opacity-in-0 motion-preset-bounce motion-delay-(--delay)"
          style={{ "--delay": `${index * 230}ms` }}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
            <div className="w-full shrink-0 overflow-hidden rounded-2xl md:w-56">
              <img
                src={section.image}
                alt={section.alt}
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="text-left">
              <h3 className="mb-3 text-3xl font-bold text-blue-700">
                {section.title}
              </h3>
              <p className="leading-relaxed text-gray-700">{section.text}</p>
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
