import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 lg:flex">
      <a
        href="https://wa.me/919392893933"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919392893933"
        aria-label="Call us"
        className="grid h-14 w-14 place-items-center rounded-full bg-royal-deep text-white shadow-[0_10px_30px_-10px_rgba(27,95,167,0.7)] transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
