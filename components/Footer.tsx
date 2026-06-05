const footerLinks = {
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Products: ['Crop Monitor', 'Smart Irrigation', 'Yield Forecast', 'Soil Analytics'],
  Resources: ['Documentation', 'Blog', 'Case Studies', 'Support'],
}

export default function Footer() {
  return (
    <footer className="bg-[#060d06] border-t border-white/5 px-6 md:px-14 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="text-white font-bold tracking-widest text-sm uppercase mb-4"
              style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '0.18em' }}
            >
              PAULVANTE
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6" style={{ fontFamily: 'DM Sans' }}>
              Smart technology for sustainable agriculture. Growing the future, one farm at a time.
            </p>
            <div className="flex gap-3">
              {['tw', 'in', 'fb', 'yt'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/40 text-xs hover:border-[#b8f225]/40 hover:text-[#b8f225] cursor-pointer transition-all"
                  style={{ fontFamily: 'DM Sans' }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="text-white font-semibold text-sm mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-[#b8f225] transition-colors duration-200"
                      style={{ fontFamily: 'DM Sans' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs" style={{ fontFamily: 'DM Sans' }}>
            © 2026 Paulvante. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/25 text-xs hover:text-white/50 transition-colors"
                style={{ fontFamily: 'DM Sans' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
