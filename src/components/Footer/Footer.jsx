import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

const socialIcons = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaTwitter: <FaTwitter />,
  FaLinkedinIn: <FaLinkedinIn />,
};

const hoverColors = {
  Facebook: 'hover:text-blue-500',
  Instagram: 'hover:text-pink-500',
  Twitter: 'hover:text-sky-400',
  LinkedIn: 'hover:text-blue-700',
};

const Footer = ({ content }) => {
  const columns = content.columns || [];
  const socials = content.socials || [];

  return (
    <footer className="bg-[linear-gradient(135deg,_#024f4f,_#012f2f)] text-white">
      {/* Grid with all columns including the new one */}
      <div className="pt-12 ml-20 grid grid-cols-[0.275fr_0.120fr_0.150fr_0.150fr_0.150fr_auto] gap-x-8">

        {/* First column with address */}
        {columns[0]?.title && columns[0]?.address && (
          <div className="space-y-2 text-left border-r border-white">
            <h3 className="text-6xl font-extrabold italic">{columns[0].title}</h3>
            <div className="text-1xl text-white leading-relaxed">
              {columns[0].address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        )}

        {/* Next 3 columns: Company, Need Help, More Info */}
        {columns.slice(1, 4).map((col, index) => (
          <div key={index} className="space-y-2 text-left">
            <h3 className="text-2xl font-bold">{col.title}</h3>
            <ul className="space-y-1">
              {col.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-1xl font-semibold hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Socials column */}
        <div className="text-3xl font-bold space-y-2 text-left">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className={`flex items-center space-x-2 text-sm font-semibold transition-colors duration-200 ${hoverColors[social.platform] || 'hover:text-yellow-400'}`}
              >
                <span>{socialIcons[social.icon]}</span>
                <span>{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Subscribe column */}
        <div className="pl-6 border-l border-slate-200 text-left mr-20">
          <h3 className="text-2xl font-semibold">{columns[4]?.title}</h3>
          {columns[4]?.subscribe && (
            <form className="mt-4 flex flex-col items-end gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email to stay trendy!"
                className="px-4 py-2 rounded text-black text-lg w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 text-1xl bg-white text-black font-semibold rounded-md hover:bg-gray-200"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom copyright */}
      <div className=" ml-20 mr-20 border-t border-slate-200 text-lg text-white text-center mt-8">
        <p className='py-5'>{content?.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
