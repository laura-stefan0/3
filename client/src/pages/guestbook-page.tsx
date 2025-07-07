
import Navigation from "@/components/navigation";
import Guestbook from "@/components/guestbook";

export default function GuestbookPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <div className="pt-20 pb-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Guestbook
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Share your thoughts, feedback, or just say hi! Your messages help make this project better.
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-gray-50">
        <Guestbook />
      </div>
    </div>
  );
}
