import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks/navLinks";

export default function Footer() {
  return (
    <div>
      <div className="relative w-full h-[100px] sm:h-[160px]">
        <Image src="/Images/aboveFooterImg.png" alt="footerPicture" fill />
      </div>
      <div className="relative bg-[#003049]">
        <div
          className="absolute inset-0 bg-[url('/Images/footerBackground.png')] bg-no-repeat bg-cover bg-center pointer-events-none"
          style={{ opacity: 0.12 }}
        ></div>
        <div className="max-w-[1180px] flex flex-col gap-7 sm:flex-row sm:gap-11 md:gap-18 mx-auto px-5 xl:px-0 pt-20 pb-28">
          <h3 className="font-grotesk text-[#669BBC] text-[17px] text-center sm:text-start sm:text-xl font-bold">
            KÖCHMÖN ART: ADAM IZI
          </h3>
          <div className="flex flex-col gap-15 sm:flex-row sm:justify-between flex-1">
            <ul>
              {navLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    className="font-normal text-base text-white px-7 py-3 flex flex-col gap-2 hover:text-amber-200"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-5 justify-center max-h-[40px]">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/telegramIcon.svg"
                  alt="Telegram"
                  width={40}
                  height={40}
                />
              </a>

              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/whatsappIcon.svg"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/instagramIcon.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
