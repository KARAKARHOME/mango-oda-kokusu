'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Heart, Home, Shield, Leaf, Clock, Wind, Droplets, Sun, Moon, Coffee, Flower2, TreeDeciduous } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Sparkles,
      title: 'Tropikal Mango Aroması',
      description: 'Egzotik meyve notaları ile ferahlatıcı koku deneyimi'
    },
    {
      icon: TreeDeciduous,
      title: 'Doğal Bambu Çubuklar',
      description: 'Premium kalite bambu çubuklar ile eşit dağılım'
    },
    {
      icon: Clock,
      title: '3 Ay Sürekli Koku',
      description: 'Uzun ömürlü formül ile kesintisiz ferahlık'
    },
    {
      icon: Droplets,
      title: '100ml Premium Sıvı',
      description: 'Yoğun ve kalıcı parfüm esansı'
    },
    {
      icon: Wind,
      title: 'Hava Temizleyici Etki',
      description: 'Kötü kokuları nötralize eder'
    },
    {
      icon: Shield,
      title: 'Güvenli Formül',
      description: 'Alerjik reaksiyon riski minimize edilmiş'
    }
  ];

  const bambooStickBenefits = [
    'Doğal bambu çubuklar kokuyu eşit şekilde dağıtır',
    'Gözenekli yapısı sayesinde parfümü hızlıca emer',
    'Çevre dostu ve sürdürülebilir malzeme',
    'Dekoratif görünüm ile estetik zenginlik',
    'Uzun ömürlü kullanım dayanıklılığı',
    'Çubuk sayısını ayarlayarak koku yoğunluğunu kontrol edin'
  ];

  const usageSteps = [
    {
      step: 1,
      title: 'Şişeyi Açın',
      desc: 'Kapağı dikkatlice çevirerek açın ve güvenli bir yere koyun'
    },
    {
      step: 2,
      title: 'Bambu Çubukları Yerleştirin',
      desc: '6 adet bambu çubuğu şişenin içine dik olarak yerleştirin'
    },
    {
      step: 3,
      title: 'İlk Aktivasyon',
      desc: '24 saat sonra çubukları ters çevirerek kokuyu aktive edin'
    },
    {
      step: 4,
      title: 'Düzenli Bakım',
      desc: 'Haftada bir çubukları ters çevirerek koku yoğunluğunu koruyun'
    }
  ];

  const aromaBenefits = [
    {
      icon: Sun,
      title: 'Sabah Enerjisi',
      desc: 'Tropikal mango kokusu günü enerjik başlatır'
    },
    {
      icon: Coffee,
      title: 'Gün İçi Ferahlık',
      desc: 'Çalışma ortamında konsantrasyonu artırır'
    },
    {
      icon: Moon,
      title: 'Akşam Rahatlığı',
      desc: 'Dinlendirici etki ile huzurlu atmosfer yaratır'
    },
    {
      icon: Flower2,
      title: 'Doğal Hava Temizliği',
      desc: 'Ortamdaki kötü kokuları etkili şekilde giderir'
    }
  ];

  const blobs = [
    { w: 80, h: 90, l: 10, t: 15, c: 'mango-accent', d: 6 },
    { w: 120, h: 130, l: 85, t: 25, c: 'fresh-green', d: 7 },
    { w: 70, h: 100, l: 40, t: 70, c: 'mango-accent', d: 8 },
    { w: 95, h: 85, l: 65, t: 5, c: 'fresh-green', d: 5 },
    { w: 110, h: 75, l: 25, t: 80, c: 'mango-accent', d: 9 },
  ];

  const mangoFacts = [
    {
      title: 'Tropikal Meyvelerin Kralı',
      content: 'Mango, binlerce yıldır Güney Asya\'da yetiştirilen ve dünya çapında sevilen tropikal bir meyvedir. Tatlı, sulu ve aromatik yapısıyla bilinen mango, sadece lezzetiyle değil, kokusuyla da insanları büyüler. Mango aroması, doğal olarak ferahlatıcı, enerji verici ve ruh halini yükselten özelliklere sahiptir.'
    },
    {
      title: 'Aromaterapi ve Mango',
      content: 'Aromaterapi uzmanları, mango kokusunun stres azaltıcı ve motivasyon artırıcı etkilerini vurgular. Tropikal meyve aromalarının beyin üzerindeki olumlu etkileri bilimsel araştırmalarla desteklenmiştir. Mango kokusu, serotonin seviyelerini artırarak mutluluk hissi yaratır ve zihinsel yorgunluğu azaltır.'
    },
    {
      title: 'Evde Tropikal Atmosfer',
      content: 'Mango çubuklu oda kokusu, evinize tatil havasını getirir. Tropikal adaların egzotik atmosferini yaşam alanınıza taşıyan bu koku, günlük stresten uzaklaşmanıza yardımcı olur. Özellikle kış aylarında, mango aroması sizi sıcak iklim bölgelerine götürerek ruh halinizi olumlu etkiler.'
    }
  ];

  const roomFragranceBenefits = [
    {
      title: 'Oda Kokusu Nedir?',
      content: 'Oda kokusu, yaşam alanlarınıza hoş kokular yayan, atmosferi iyileştiren ve psikolojik rahatlık sağlayan ev aksesuarlarıdır. Çubuklu oda kokuları, elektrik veya ısı gerektirmeden, doğal buharlaşma yöntemiyle çalışır. Bambu çubuklar, parfüm esansını emerek havaya yayar ve sürekli bir koku deneyimi sunar.'
    },
    {
      title: 'Çubuklu Oda Kokusu Avantajları',
      content: 'Çubuklu oda kokuları, güvenli ve pratik kullanım sunar. Elektrikli difüzörlerin aksine, enerji tüketmez ve yangın riski taşımaz. Mum gibi sürekli gözetim gerektirmez. Koku yoğunluğunu çubuk sayısını ayarlayarak kontrol edebilirsiniz. Dekoratif şişe tasarımı, odanıza estetik bir dokunuş katar.'
    },
    {
      title: 'Bambu Çubukların Önemi',
      content: 'Bambu, doğal gözenekli yapısı sayesinde parfüm esansını mükemmel şekilde emer ve dağıtır. Çevre dostu, sürdürülebilir bir malzeme olan bambu, sentetik alternatiflere göre çok daha sağlıklıdır. Bambu çubuklar, uzun ömürlüdür ve düzenli kullanımda bile yapısal bütünlüğünü korur.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mango opacity-10"></div>
        <div className="absolute inset-0">
          {blobs.map((blob, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: blob.w,
                height: blob.h,
                left: `${blob.l}%`,
                top: `${blob.t}%`,
                background: `radial-gradient(circle, var(--${blob.c}) 0%, transparent 70%)`,
                opacity: 0.1,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: blob.d,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass-effect mb-6"
              >
                <span className="text-sm font-medium" style={{ color: 'var(--mango-primary)' }}>
                  ✨ Premium Kalite Oda Kokusu
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Mango</span>
                <br />
                <span style={{ color: 'var(--text-dark)' }}>Çubuklu</span>
                <br />
                <span style={{ color: 'var(--text-medium)' }}>Oda Kokusu</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Bambu çubuklarla donatılmış</strong> tropikal <Link href="/urun-detay" className="text-gradient hover:underline">mango oda kokusu</Link>, evinize <em>egzotik bir atmosfer</em> katar. 
                100ml premium formül ile <u>3 ay kesintisiz</u> ferahlık deneyimi yaşayın. <Link href="/hakkimizda" className="text-gradient hover:underline">Doğal bambu çubuklar</Link> sayesinde 
                koku evinizin her köşesine eşit şekilde yayılır. <Link href="/iletisim" className="text-gradient hover:underline">İletişime geçin</Link> ve detaylı bilgi alın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.a
                  href="https://www.karakarhome.com.tr/mango-oda-kokusu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full gradient-mango text-white text-lg font-semibold shadow-mango hover:shadow-xl transition-all text-center"
                >
                  Hemen Sipariş Ver
                </motion.a>
                <motion.a
                  href="/urun-detay"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full glass-effect text-lg font-semibold transition-all text-center"
                  style={{ color: 'var(--text-dark)' }}
                >
                  Ürün Detayları
                </motion.a>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white gradient-mango flex items-center justify-center text-white font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-dark)' }}>
                    1000+ Mutlu Müşteri
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="ml-2 text-sm" style={{ color: 'var(--text-medium)' }}>
                      4.9/5.0
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div className="w-full rounded-3xl glass-effect shadow-mango p-8 flex items-center justify-center">
                  <Image
                    src="/mango-product.webp"
                    alt="Mango Çubuklu Oda Kokusu - Bambu Çubuklu 100ml"
                    width={400}
                    height={500}
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full gradient-fresh opacity-20 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full gradient-mango opacity-20 blur-3xl"
              />
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
              <span className="text-gradient">Neden Mango</span>
              <span style={{ color: 'var(--text-dark)' }}> Oda Kokusu?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Tropikal meyvelerin kralı</strong> olarak bilinen mango, <em>ferahlatıcı ve enerji verici</em> 
              özellikleriyle yaşam alanlarınıza <u>pozitif enerji</u> katar. <Link href="/urun-detay" className="text-gradient hover:underline">Ürün detaylarını</Link> inceleyin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl glass-effect hover-lift"
              >
                <div
                  className="w-14 h-14 rounded-full gradient-mango flex items-center justify-center mb-4"
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-medium)' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span style={{ color: 'var(--text-dark)' }}>Bambu Çubukların</span>
                <br />
                <span className="text-gradient">Üstün Özellikleri</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Doğal bambu çubuklar</strong>, oda kokusu deneyiminin <em>en kritik bileşenidir</em>. 
                Gözenekli yapısı sayesinde parfümü <u>eşit şekilde emer</u> ve ortama yayar. Çevre dostu bambu, 
                hem estetik hem de fonksiyonel bir çözüm sunar.
              </p>

              <div className="space-y-4">
                {bambooStickBenefits.map((benefit, index) => (
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
                    <p style={{ color: 'var(--text-dark)' }}>{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl glass-effect shadow-mango">
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--text-dark)' }}>
                  Ürün Özellikleri
                </h3>
                <table className="w-full">
                  <tbody className="divide-y" style={{ borderColor: 'var(--mango-light)' }}>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Hacim
                      </td>
                      <td className="py-3 text-right" style={{ color: 'var(--text-medium)' }}>
                        100ml
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Kullanım Süresi
                      </td>
                      <td className="py-3 text-right" style={{ color: 'var(--text-medium)' }}>
                        3 Ay
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Çubuk Sayısı
                      </td>
                      <td className="py-3 text-right" style={{ color: 'var(--text-medium)' }}>
                        6 Adet
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Kapsama Alanı
                      </td>
                      <td className="py-3 text-right" style={{ color: 'var(--text-medium)' }}>
                        25-30 m²
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Üretim
                      </td>
                      <td className="py-3 text-right" style={{ color: 'var(--text-medium)' }}>
                        Türkiye
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold" style={{ color: 'var(--text-dark)' }}>
                        Marka
                      </td>
                      <td className="py-3 text-right font-bold" style={{ color: 'var(--mango-primary)' }}>
                        KARAKAR HOME
                      </td>
                    </tr>
                  </tbody>
                </table>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Gün Boyu Ferahlık</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Sabahtan akşama</strong> mango aroması ile <em>yaşam kalitenizi</em> artırın. 
              Her an <u>tropikal bir atmosfer</u> deneyimleyin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aromaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-2xl glass-effect text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-mango flex items-center justify-center">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: 'var(--text-dark)' }}>
                  {benefit.title}
                </h4>
                <p className="text-sm" style={{ color: 'var(--text-medium)' }}>
                  {benefit.desc}
                </p>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ color: 'var(--text-dark)' }}>Nasıl</span>{' '}
              <span className="text-gradient">Kullanılır?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Bambu çubuklu oda kokusu</strong> kullanımı oldukça basittir. 
              <em>Dört adımda</em> evinize <u>tropikal ferahlık</u> getirin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl glass-effect hover-lift"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-mango flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-4" style={{ color: 'var(--text-dark)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-medium)' }}>{item.desc}</p>
              </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Mango Aroması</span>{' '}
              <span style={{ color: 'var(--text-dark)' }}>Hakkında</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Tropikal meyvelerin kralı</strong> olarak bilinen mango, <em>binlerce yıldır</em> 
              insanlığın <u>en sevilen meyvelerinden</u> biridir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mangoFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass-effect hover-lift"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
                  {fact.title}
                </h3>
                <p className="leading-relaxed text-justify" style={{ color: 'var(--text-medium)' }}>
                  {fact.content}
                </p>
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
              <span style={{ color: 'var(--text-dark)' }}>Çubuklu</span>{' '}
              <span className="text-gradient">Oda Kokusu Rehberi</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Oda kokuları</strong>, yaşam alanlarınızı <em>daha hoş ve konforlu</em> 
              hale getiren <u>pratik çözümlerdir</u>.
            </p>
          </motion.div>

          <div className="space-y-12">
            {roomFragranceBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="p-8 rounded-2xl glass-effect">
                    <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-justify" style={{ color: 'var(--text-medium)' }}>
                      {benefit.content}
                    </p>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-64 rounded-2xl gradient-mango opacity-20"></div>
                </div>
              </motion.div>
            ))}
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
            className="p-12 rounded-3xl gradient-mango text-white shadow-mango"
          >
            <Heart size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bambu Çubuklu Mango Kokusu ile Evinizi Dönüştürün
            </h2>
            <p className="text-lg mb-8 opacity-90">
              <strong>6 adet doğal bambu çubuk</strong> ve <em>100ml premium parfüm esansı</em> ile 
              3 ay boyunca <u>kesintisiz tropikal ferahlık</u>. Hemen sipariş verin!
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
              Sipariş Ver - Hızlı Teslimat
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
