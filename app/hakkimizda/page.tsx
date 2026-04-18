'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, Target, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Kalite Odaklı',
      description: 'Premium hammaddelerle üretim yapıyoruz'
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Her zaman önceliğimiz sizsiniz'
    },
    {
      icon: Target,
      title: 'Yenilikçi Yaklaşım',
      description: 'Sürekli gelişim ve iyileştirme'
    },
    {
      icon: TrendingUp,
      title: 'Sürdürülebilirlik',
      description: 'Çevre dostu üretim anlayışı'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Kuruluş', desc: 'Mango oda kokusu üretimi başladı' },
    { year: '2019', title: 'Büyüme', desc: 'Bambu çubuklu ürün gamı genişletildi' },
    { year: '2021', title: 'Yenilik', desc: 'Premium mango serisi piyasaya sürüldü' },
    { year: '2024', title: 'Liderlik', desc: 'Tropikal oda kokuları sektöründe öncü marka olduk' }
  ];

  const features = [
    'Yerli üretim ile ekonomiye katkı sağlıyoruz',
    'Laboratuvar testlerinden geçmiş formüller kullanıyoruz',
    'Alerjik reaksiyon riski minimize edilmiş içerikler sunuyoruz',
    'Çocuklar ve evcil hayvanlar için güvenli ürünler geliştiriyoruz',
    'Uzun ömürlü kullanım ile ekonomik çözümler üretiyoruz',
    'Estetik tasarımlarla dekoratif değer katıyoruz'
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
                Mango Oda Kokusu Hikayesi
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Hakkımızda</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-medium)' }}>
              <strong>Yaşam alanlarınıza değer katmak</strong> için yola çıktık. <Link href="/urun-detay" className="text-gradient hover:underline">Premium kalite bambu çubuklu oda kokuları</Link> 
              ile evlerinize <u>ferahlık ve huzur</u> getiriyoruz. <Link href="/iletisim" className="text-gradient hover:underline">Bizimle iletişime geçin</Link> ve <Link href="/" className="text-gradient hover:underline">ürünlerimizi</Link> keşfedin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-dark)' }}>
                <strong>Tropikal Aromaların</strong> <span className="text-gradient">Öncü Markası</span>
              </h2>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>KARAKAR HOME</strong>, ev tekstili ve dekorasyon sektöründe <em>yenilikçi çözümler</em> 
                sunan köklü bir markadır. Pendik, İstanbul'da bulunan tesislerimizde, <u>modern üretim teknikleri</u> 
                ile kaliteli ürünler üretiyoruz.
              </p>
              <p className="text-lg mb-4 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                Mango çubuklu oda kokusu, <strong>en çok tercih edilen ürünlerimizden</strong> biridir. 
                <em>Tropikal meyve notaları</em> ile dikkat çeken bu ürün, yaşam alanlarınıza 
                <u>egzotik bir dokunuş</u> katar.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                100ml şişede sunulan formülümüz, <strong>3 ay boyunca</strong> kesintisiz koku deneyimi sağlar. 
                <em>Doğal içerikler</em> kullanarak ürettiğimiz ürünlerimiz, <u>sağlığınıza zarar vermez</u>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl glass-effect shadow-mango">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-mango flex items-center justify-center">
                    <Star size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text-dark)' }}>
                    Misyonumuz
                  </h3>
                </div>
                <p className="text-center leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                  <strong>Evleri güzel kokularla</strong> buluşturmak, <em>yaşam kalitesini artırmak</em> 
                  ve müşterilerimize <u>unutulmaz deneyimler</u> sunmak için çalışıyoruz.
                </p>
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Değerlerimiz</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>İlkelerimiz</strong>, işimizin <em>temel taşlarını</em> oluşturur. 
              Her üründe <u>bu değerleri</u> yansıtıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl glass-effect hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-mango flex items-center justify-center">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-medium)' }}>{value.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: 'var(--text-dark)' }}>Gelişim</span>{' '}
              <span className="text-gradient">Yolculuğumuz</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Kuruluşumuzdan bugüne</strong>, sürekli <em>büyüyen ve gelişen</em> 
              bir marka olarak <u>sektörde iz</u> bıraktık.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 gradient-mango opacity-30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-6 rounded-2xl glass-effect hover-lift">
                      <div className="text-3xl font-bold mb-2 text-gradient">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                        {milestone.title}
                      </h3>
                      <p style={{ color: 'var(--text-medium)' }}>{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-mango flex items-center justify-center z-10 shadow-mango">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--mango-cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Neden</span>{' '}
                <span style={{ color: 'var(--text-dark)' }}>KARAKAR HOME?</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Sektördeki tecrübemiz</strong> ve <em>kalite anlayışımız</em> ile 
                müşterilerimize <u>en iyi hizmeti</u> sunuyoruz.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--mango-light)' }}
                    >
                      <span style={{ color: 'var(--mango-primary)' }}>✓</span>
                    </div>
                    <p style={{ color: 'var(--text-dark)' }}>{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-3xl glass-effect shadow-mango">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-dark)' }}>
                  İletişim Bilgilerimiz
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--mango-cream)' }}>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Adres</p>
                    <p className="text-sm" style={{ color: 'var(--text-medium)' }}>
                      Esenyalı Mah. Edebali Cad. No:13/A<br />34903 Pendik / İstanbul
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--mango-cream)' }}>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Telefon</p>
                    <a href="tel:+905451814040" className="text-sm hover:text-[var(--mango-primary)]" style={{ color: 'var(--text-medium)' }}>
                      +90 545 181 4040
                    </a>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--mango-cream)' }}>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>E-Posta</p>
                    <a href="mailto:info@mangosabunodakokusu.com.tr" className="text-sm hover:text-[var(--mango-primary)] break-all" style={{ color: 'var(--text-medium)' }}>
                      info@mangosabunodakokusu.com.tr
                    </a>
                  </div>
                </div>
                <Link
                  href="/iletisim"
                  className="block mt-6 px-6 py-3 rounded-full gradient-mango text-white text-center font-semibold hover:shadow-xl transition-all"
                >
                  İletişime Geç
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 rounded-3xl gradient-fresh text-white shadow-mango"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mango Oda Kokusunu Keşfedin
            </h2>
            <p className="text-lg mb-8 opacity-90">
              <strong>Tropikal ferahlık</strong> arayanlar için <em>mükemmel seçim</em>. 
              100ml şişede <u>premium kalite</u> deneyimi yaşayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/urun-detay"
                className="px-8 py-4 rounded-full bg-white font-semibold shadow-xl hover:shadow-2xl transition-all"
                style={{ color: 'var(--fresh-green)' }}
              >
                Ürün Detayları
              </Link>
              <a
                href="https://www.karakarhome.com.tr/mango-oda-kokusu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white transition-all"
                style={{ 
                  '--hover-color': 'var(--fresh-green)' 
                } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--fresh-green)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Hemen Sipariş Ver
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

