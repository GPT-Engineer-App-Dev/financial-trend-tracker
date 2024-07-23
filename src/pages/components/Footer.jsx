import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF1E5] text-black p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">FT</h3>
            <p className="text-sm">Financial Times - Your trusted source for financial news and analysis.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Contact", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer" />
              <Twitter className="h-6 w-6 cursor-pointer" />
              <Linkedin className="h-6 w-6 cursor-pointer" />
              <Instagram className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Financial Times. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;