import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        this is just some random bs about the website.
      </p>

      <p className="text-sm text-gray-500 text-center italic">
        We are not affiliated or endorsed by Pixeltail Games.
      </p>

      <Footer />

    </div>
  );
}
