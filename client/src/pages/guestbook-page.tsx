
import Navigation from "@/components/navigation";
import Guestbook from "@/components/guestbook";

export default function GuestbookPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Guestbook />
      </div>
    </div>
  );
}
