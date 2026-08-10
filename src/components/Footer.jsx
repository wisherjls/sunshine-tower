const footerLinks = [
  { href: "https://sunshinetower.org", label: "🌐 Website" },
  { href: "https://www.youtube.com/channel/UCaiRXidJGVY89n7wOW_shGA", label: "▶️ YouTube" },
  { href: "https://bsky.app/profile/sunshinetower.org", label: "🦋 Bluesky" },
  { href: "https://steamcommunity.com/groups/SunshineTower", label: "Steam Group" },
  { href: "https://discord.gg/mbeaVGpnXp", label: "Discord Invite" },
];

export default function Footer() {
  return (
    <footer className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
      {footerLinks.map((link) => (
        <a key={link.href} href={link.href} className="text-blue-600 hover:underline">
          {link.label}
        </a>
      ))}
    </footer>
  );
}