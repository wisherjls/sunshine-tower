import Footer from "../components/Footer";

export default function Join() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Join the Server</h1>

      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🖥️ Server Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Sunshine Tower</strong> - WIP</li>
          <li><strong>Sunshine Tower Classic</strong> - connect sunshinetower.org</li>
        </ul>
      </section>

      <section className="mb-8 justify-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🔧 Helpful Fixes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><a href="https://www.solsticegamestudios.com/fixmedia/" className="text-blue-600 hover:underline">YouTube Codec Fix</a> by Solstice Game Studios</li>
          <li><a href="https://steamcommunity.com/groups/SunshineTower/discussions/0/4851029059846810674/" className="text-blue-600 hover:underline">Linux Font Installation Guide</a> by Asterisk</li>
        </ul>
      </section>

      <section className="mb-8 justify-center flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">⭐ Community Guides!</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>🔍 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3021204481" className="text-blue-600 hover:underline">Smooth Detective Award</a> by Scienti[-] It's Dead</li>
          <li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3311573697" className="text-blue-600 hover:underline">Ball Race Secret Banana Guide</a> by anthony39</li>
          <li>🏆 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3361375536" className="text-blue-600 hover:underline">Golden Trophy Awards Guide</a> by Cute-The-Sylveon</li>
          <li>💰 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3368126394" className="text-blue-600 hover:underline">Item Awards Guide</a> by Cute-The-Sylveon</li>
          <li>🧋 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3396352348" className="text-blue-600 hover:underline">Smoothie Guide</a> by Cute-The-Sylveon</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 text-center italic">
        We are not affiliated or endorsed by Pixeltail Games.
      </p>

    </div>
  );
}
