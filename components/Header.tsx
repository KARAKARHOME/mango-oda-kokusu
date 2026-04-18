'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/urun-detay', label: 'Ürün Detayı' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-mango' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/logo.webp"
              alt="Mango Çubuklu Oda Kokusu"
              width={48}
              height={48}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient">Mango Çubuklu Oda Kokusu</span>
              <span className="text-xs" style={{ color: 'var(--text-medium)' }}>
                Bambu Çubuklu • 100ml
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium transition-colors hover:text-[var(--mango-primary)] group"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-mango transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="tel:+905451814040"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{ 
                backgroundColor: 'var(--mango-light)', 
                color: 'var(--text-dark)' 
              }}
            >
              <Phone size={16} />
              <span>0545 181 4040</span>
            </motion.a>
            <motion.a
              href="https://www.karakarhome.com.tr/mango-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full gradient-mango text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Sipariş Ver
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text-dark)' }}
            aria-label="Menü"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t"
            style={{ borderColor: 'var(--mango-light)' }}
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium transition-colors hover:text-[var(--mango-primary)]"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:+905451814040"
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg text-sm font-medium"
                  style={{ 
                    backgroundColor: 'var(--mango-light)', 
                    color: 'var(--text-dark)' 
                  }}
                >
                  <Phone size={16} />
                  <span>0545 181 4040</span>
                </a>
                <a
                  href="https://www.karakarhome.com.tr/mango-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 rounded-lg gradient-mango text-white text-sm font-semibold text-center"
                >
                  Sipariş Ver
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
