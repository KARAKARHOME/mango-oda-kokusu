'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 545 181 4040',
      link: 'tel:+905451814040',
      desc: 'Haftanın 7 günü arayabilirsiniz'
    },
    {
      icon: Mail,
      title: 'E-Posta',
      value: 'info@mangosabunodakokusu.com.tr',
      link: 'mailto:info@mangosabunodakokusu.com.tr',
      desc: '24 saat içinde yanıt veriyoruz'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Esenyalı Mah. Edebali Cad. No:13/A 34903 Pendik / İstanbul',
      link: 'https://maps.google.com/?q=Esenyalı+Mah+Edebali+Cad+No13A+Pendik+Istanbul',
      desc: 'Ziyaret için randevu alabilirsiniz'
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '09:00 - 18:00' },
    { day: 'Cumartesi', hours: '10:00 - 16:00' },
    { day: 'Pazar', hours: 'Kapalı' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/KARAKARHOME/',
      color: '#1877F2',
      desc: 'Kampanyalardan haberdar olun'
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/karakarhome',
      color: '#E4405F',
      desc: 'Güncel içeriklerimizi takip edin'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/karakarhome',
      color: '#1DA1F2',
      desc: 'Duyurularımızı kaçırmayın'
    },
    { 
      name: 'Pinterest', 
      url: 'https://tr.pinterest.com/karakarhome/',
      color: '#E60023',
      desc: 'İlham veren fikirler keşfedin'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@KARAKARHOME',
      color: '#FF0000',
      desc: 'Video içeriklerimizi izleyin'
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-fresh opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass-effect mb-6"
            >
              <span className="text-sm font-medium" style={{ color: 'var(--mango-primary)' }}>
                Bize Ulaşın
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">İletişim</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-medium)' }}>
              <strong>Sorularınız için</strong> <em>her zaman yanınızdayız</em>. 
              <u>İletişim kanallarımızdan</u> bize ulaşabilirsiniz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl glass-effect hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-mango flex items-center justify-center">
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {method.title}
                </h3>
                <p className="text-sm mb-2 break-all" style={{ color: 'var(--mango-primary)' }}>
                  {method.value}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-medium)' }}>
                  {method.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--mango-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Hızlı Destek</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Anında yardım</strong> almak için <em>canlı destek</em> ve 
                <u>WhatsApp hattımızı</u> kullanabilirsiniz.
              </p>

              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/905451814040?text=Merhaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle size={32} className="text-white flex-shrink-0" />
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">WhatsApp Destek</h3>
                    <p className="text-sm opacity-90">Hemen mesaj gönderin</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://tawk.to/karakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl gradient-mango shadow-lg hover:shadow-xl transition-all text-white"
                >
                  <Send size={32} className="flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Canlı Destek</h3>
                    <p className="text-sm opacity-90">Online danışmanlarımızla görüşün</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Çalışma Saatleri</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Müşteri hizmetlerimiz</strong> aşağıdaki <em>saatler arasında</em> 
                <u>hizmetinizdedir</u>.
              </p>

              <div className="p-6 rounded-2xl glass-effect">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock size={24} style={{ color: 'var(--mango-primary)' }} />
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-dark)' }}>
                    Çalışma Takvimi
                  </h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--mango-cream)' }}
                    >
                      <span className="font-semibold" style={{ color: 'var(--text-dark)' }}>
                        {schedule.day}
                      </span>
                      <span className="font-bold" style={{ color: 'var(--mango-primary)' }}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Sosyal Medya</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Sosyal medya hesaplarımızdan</strong> <em>bizi takip edin</em>. 
              <u>Kampanya ve duyurulardan</u> haberdar olun.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-6 rounded-2xl glass-effect hover-lift text-center"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: social.color }}
                >
                  <span className="text-2xl font-bold text-white">
                    {social.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {social.name}
                </h3>
                <p className="text-xs" style={{ color: 'var(--text-medium)' }}>
                  {social.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--mango-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Konum</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Pendik, İstanbul'da</strong> bulunan <em>ofisimize</em> 
              <u>kolayca ulaşabilirsiniz</u>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-mango"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.2345678901234!2d29.2344!3d40.8767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzM2LjEiTiAyOcKwMTQnMDMuOCJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KARAKAR HOME Konum"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 p-6 rounded-2xl glass-effect text-center"
          >
            <MapPin size={32} className="mx-auto mb-4" style={{ color: 'var(--mango-primary)' }} />
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
              Esenyalı Mah. Edebali Cad. No:13/A
            </h3>
            <p className="text-lg mb-4" style={{ color: 'var(--text-medium)' }}>
              34903 Pendik / İstanbul
            </p>
            <a
              href="https://maps.google.com/?q=Esenyalı+Mah+Edebali+Cad+No13A+Pendik+Istanbul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full gradient-mango text-white font-semibold hover:shadow-xl transition-all"
            >
              Yol Tarifi Al
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl gradient-mango text-white shadow-mango"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mango Oda Kokusunu Deneyin
            </h2>
            <p className="text-lg mb-8 opacity-90">
              <strong>Tropikal ferahlık</strong> arayanlar için <em>ideal seçim</em>. 
              100ml şişede <u>premium kalite</u> deneyimi.
            </p>
            <motion.a
              href="https://www.karakarhome.com.tr/mango-oda-kokusu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full bg-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
              style={{ color: 'var(--mango-primary)' }}
            >
              Hemen Sipariş Ver
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

