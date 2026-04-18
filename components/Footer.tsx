'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { 
      href: 'https://www.facebook.com/KARAKARHOME/', 
      icon: FacebookIcon, 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      href: 'https://www.instagram.com/karakarhome', 
      icon: InstagramIcon, 
      label: 'Instagram',
      color: '#E4405F'
    },
    { 
      href: 'https://x.com/karakarhome', 
      icon: TwitterIcon, 
      label: 'Twitter',
      color: '#1DA1F2'
    },
    { 
      href: 'https://www.youtube.com/@KARAKARHOME', 
      icon: YoutubeIcon, 
      label: 'YouTube',
      color: '#FF0000'
    },
  ];

  const quickLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/urun-detay', label: 'Ürün Detayı' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <footer className="relative mt-20" style={{ backgroundColor: 'var(--mango-cream)' }}>
      <div className="absolute top-0 left-0 right-0 h-1 gradient-mango"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.webp"
                alt="Mango Çubuklu Oda Kokusu"
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg text-gradient">Mango Çubuklu Oda Kokusu</h3>
                <p className="text-xs" style={{ color: 'var(--text-medium)' }}>
                  Bambu Çubuklu • 100ml
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-medium)' }}>
              Tropikal mango aroması ile evinize ferahlık katın. Bambu çubuklarla uzun süre kalıcı koku deneyimi.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                  style={{ backgroundColor: social.color }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-dark)' }}>
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--mango-primary)] inline-flex items-center group"
                    style={{ color: 'var(--text-medium)' }}
                  >
                    <span className="w-0 h-0.5 bg-gradient-mango transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.karakarhome.com.tr/oda-kokulari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-[var(--mango-primary)] inline-flex items-center group"
                  style={{ color: 'var(--text-medium)' }}
                >
                  <span className="w-0 h-0.5 bg-gradient-mango transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Oda Kokusu Koleksiyonu
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-dark)' }}>
              İletişim Bilgileri
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+905451814040"
                  className="flex items-start space-x-3 text-sm transition-colors hover:text-[var(--mango-primary)] group"
                  style={{ color: 'var(--text-medium)' }}
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0 group-hover:text-[var(--mango-primary)]" />
                  <span>+90 545 181 4040</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mangosabunodakokusu.com.tr"
                  className="flex items-start space-x-3 text-sm transition-colors hover:text-[var(--mango-primary)] group"
                  style={{ color: 'var(--text-medium)' }}
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0 group-hover:text-[var(--mango-primary)]" />
                  <span className="break-all">info@mangosabunodakokusu.com.tr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-sm" style={{ color: 'var(--text-medium)' }}>
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--mango-primary)' }} />
                  <span>Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul</span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4" style={{ color: 'var(--text-dark)' }}>
              Destek
            </h4>
            <div className="space-y-3">
              <motion.a
                href="https://wa.me/905451814040?text=Merhaba"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-center transition-all shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: '#25D366', 
                  color: 'white' 
                }}
              >
                WhatsApp Destek
              </motion.a>
              <motion.a
                href="https://tawk.to/karakar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-center transition-all shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--mango-primary)', 
                  color: 'white' 
                }}
              >
                Canlı Destek
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t pt-6" style={{ borderColor: 'var(--mango-light)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left" style={{ color: 'var(--text-medium)' }}>
              © 2024 Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-center md:text-right" style={{ color: 'var(--text-light)' }}>
              mangoodakokusu.com.tr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
