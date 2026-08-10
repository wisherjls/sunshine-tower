export default function Home() {
  const letters = "Welcome".split("");
  
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-blue-800 mb-4 flex items-center justify-center gap-2">
        <span>
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block motion-preset-bounce motion-delay-(--delay)"
              style={{ "--delay": `${index * 100}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>

      <h2
        className="text-2xl font-semibold text-blue-800 mb-8"
      >
        to Sunshine Tower!
            </h2>


      <footer className="gap-4 mt-8 flex flex-wrap justify-center text-sm">
        <a href="https://sunshinetower.org" className="text-blue-600 hover:underline">🌐 Website</a>
        <a href="https://www.youtube.com/channel/UCaiRXidJGVY89n7wOW_shGA" className="text-blue-600 hover:underline">▶️ YouTube</a>
        <a href="https://bsky.app/profile/sunshinetower.org" className="text-blue-600 hover:underline">🦋 Bluesky</a>
        <a href="https://steamcommunity.com/groups/SunshineTower" className="text-blue-600 hover:underline">Steam Group</a>
        <a href="https://discord.gg/mbeaVGpnXp" className="text-blue-600 hover:underline">Discord Invite</a>
      </footer>

    </div>

    
  );
}
