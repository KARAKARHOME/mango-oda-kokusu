'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Droplet, Clock, Ruler, Shield, Leaf, ThermometerSun, Wind, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProductDetailPage() {
  const specifications = [
    { icon: Package, label: 'Hacim', value: '100ml' },
    { icon: Droplet, label: 'Çubuk Sayısı', value: '6 Adet' },
    { icon: Clock, label: 'Kullanım Süresi', value: '3 Ay' },
    { icon: Ruler, label: 'Kapsama Alanı', value: '25-30 m²' },
    { icon: ThermometerSun, label: 'Saklama', value: '15-25°C' },
    { icon: Wind, label: 'Koku Yoğunluğu', value: 'Orta-Yüksek' }
  ];

  const ingredients = [
    { name: 'Parfüm Esansı', percentage: '15%', desc: 'Tropikal mango aroması' },
    { name: 'Alkol Bazlı Çözücü', percentage: '70%', desc: 'Koku taşıyıcı sıvı' },
    { name: 'Gliserin', percentage: '10%', desc: 'Nem dengeleyici' },
    { name: 'Doğal Katkılar', percentage: '5%', desc: 'Stabilizatörler' }
  ];

  const usageSteps = [
    'Ürünü kutusundan dikkatlice çıkarın',
    'Şişenin kapağını saat yönünün tersine çevirerek açın',
    'Çubukları şişenin içine yerleştirin',
    'İlk 24 saat içinde çubukları bir kez ters çevirin',
    'Koku yoğunluğunu ayarlamak için çubuk sayısını değiştirin',
    'Düzenli aralıklarla çubukları ters çevirerek kokuyu tazeleyin'
  ];

  const benefits = [
    'Tropikal meyve notalarıyla egzotik atmosfer yaratır',
    'Uzun süreli kullanım ile ekonomik avantaj sağlar',
    'Elektrik veya ısı gerektirmeden çalışır',
    'Dekoratif şişe tasarımı ile estetik görünüm sunar',
    'Alerjik reaksiyon riski minimize edilmiştir',
    'Çocuklar ve evcil hayvanlar için güvenli formül'
  ];

  const warnings = [
    'Doğrudan güneş ışığından uzak tutun',
    'Çocukların ulaşamayacağı yerlerde saklayın',
    'Gözle temasından kaçının',
    'Yutmayın - yutulması halinde doktora başvurun',
    'Alevli kaynaklardan uzak tutun',
    'Kapalı ortamda saklamayın'
  ];

  const productFeatures = [
    {
      title: 'Premium Parfüm Esansı',
      content: 'Ürünümüzde kullanılan mango parfüm esansı, uluslararası standartlarda üretilmiş premium kalite bir bileşendir. Fransa\'dan ithal edilen bu esans, doğal mango meyvesinin tatlı, sulu ve tropikal notalarını mükemmel şekilde yansıtır. Sentetik kokulardan farklı olarak, bu esans uzun süre kalıcıdır ve zamanla kokusu değişmez.'
    },
    {
      title: 'Bambu Çubuk Teknolojisi',
      content: 'Ürünümüzle birlikte gelen 6 adet bambu çubuk, özel olarak seçilmiş ve işlenmiştir. Bambu, doğal gözenekli yapısı sayesinde parfüm esansını mükemmel şekilde emer ve havaya yayar. Çubukların uzunluğu ve kalınlığı, 100ml şişe için optimize edilmiştir. Bambu, çevre dostu, sürdürülebilir ve antibakteriyel özelliklere sahip bir malzemedir.'
    },
    {
      title: 'Uzun Ömürlü Formül',
      content: 'Özel formülümüz, parfüm esansının yavaş ve dengeli şekilde buharlaşmasını sağlar. Bu sayede, 100ml ürün yaklaşık 3 ay süreyle kesintisiz koku verir. Formülde kullanılan gliserin, nem dengesini koruyarak esansın hızla buharlaşmasını engeller. Alkol bazlı çözücü ise kokuyu eşit şekilde dağıtır.'
    }
  ];

  const usageAreas = [
    { area: 'Oturma Odası', desc: 'Misafirlerinizi tropikal bir atmosferle karşılayın. Mango kokusu, oturma odanızda rahatlatıcı ve davetkar bir ortam yaratır.' },
    { area: 'Yatak Odası', desc: 'Uyku kalitenizi artırın. Mango aroması, stresi azaltarak daha huzurlu bir uyku ortamı sağlar.' },
    { area: 'Banyo', desc: 'Banyonuzu spa atmosferine dönüştürün. Ferah mango kokusu, banyo deneyiminizi lüks hale getirir.' },
    { area: 'Ofis', desc: 'Çalışma verimliliğinizi artırın. Mango kokusu, konsantrasyonu artırır ve zihinsel yorgunluğu azaltır.' },
    { area: 'Giriş Holü', desc: 'İlk izlenim önemlidir. Evinize giren herkes tropikal ferahlığı hemen hisseder.' },
    { area: 'Mutfak', desc: 'Yemek kokularını nötralize edin. Mango aroması, mutfağınızı her zaman taze tutar.' }
  ];

  const faqs = [
    {
      q: 'Mango oda kokusu ne kadar süre dayanır?',
      a: 'Normal kullanım koşullarında 100ml şişe yaklaşık 3 ay süreyle koku verir. Kullanım süresi, oda sıcaklığı ve havalandırma durumuna göre değişiklik gösterebilir.'
    },
    {
      q: 'Kaç çubuk kullanmalıyım?',
      a: 'Orta büyüklükte bir oda için 4-6 çubuk yeterlidir. Daha yoğun koku istiyorsanız tüm çubukları, hafif koku tercih ediyorsanız 2-3 çubuk kullanabilirsiniz.'
    },
    {
      q: 'Çubukları ne sıklıkla ters çevirmeliyim?',
      a: 'Haftada bir kez çubukları ters çevirmek, koku yoğunluğunu korumak için yeterlidir. Daha sık ters çevirme, ürünün daha hızlı tükenmesine neden olur.'
    },
    {
      q: 'Alerjik reaksiyon yapar mı?',
      a: 'Ürünümüz dermatolojik testlerden geçmiştir. Ancak hassas cilde sahip kişilerin doğrudan temas etmemesi önerilir. Alerjik bir durumunuz varsa önce test edin.'
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mango opacity-10"></div>
        
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
                Premium Kalite Ürün
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ürün Detayları</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-medium)' }}>
              <Link href="/" className="text-gradient hover:underline"><strong>Mango çubuklu oda kokusu</strong></Link> hakkında <em>bilmeniz gereken</em> 
              <u>tüm detaylar</u> burada. <Link href="/hakkimizda" className="text-gradient hover:underline">Hakkımızda</Link> sayfamızı ziyaret edin veya <Link href="/iletisim" className="text-gradient hover:underline">bize ulaşın</Link>.
            </p>
          </motion.div>
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
              <span className="text-gradient">Teknik Özellikler</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Ürünümüzün</strong> <em>detaylı özellikleri</em> ve <u>teknik bilgileri</u>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass-effect hover-lift"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-mango flex items-center justify-center flex-shrink-0">
                    <spec.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm mb-1" style={{ color: 'var(--text-medium)' }}>
                      {spec.label}
                    </p>
                    <p className="text-xl font-bold" style={{ color: 'var(--text-dark)' }}>
                      {spec.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">İçerik Bilgisi</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Doğal ve güvenli</strong> bileşenlerle hazırlanan <em>özel formül</em>. 
                Her madde <u>dikkatle seçilmiştir</u>.
              </p>

              <div className="space-y-4">
                {ingredients.map((ingredient, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl glass-effect"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold" style={{ color: 'var(--text-dark)' }}>
                        {ingredient.name}
                      </h4>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: 'var(--mango-light)', color: 'var(--mango-primary)' }}>
                        {ingredient.percentage}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-medium)' }}>
                      {ingredient.desc}
                    </p>
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
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-gradient">Kullanım Talimatları</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                <strong>Doğru kullanım</strong> ile <em>maksimum verim</em> alın. 
                Adımları <u>sırasıyla uygulayın</u>.
              </p>

              <div className="space-y-4">
                {usageSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 rounded-full gradient-mango flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="pt-1" style={{ color: 'var(--text-dark)' }}>{step}</p>
                  </motion.div>
                ))}
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
              <span className="text-gradient">Ürün Avantajları</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Mango oda kokusunun</strong> <em>sunduğu faydalar</em> ve <u>özel özellikler</u>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-xl glass-effect"
              >
                <CheckCircle2 size={24} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--fresh-green)' }} />
                <p style={{ color: 'var(--text-dark)' }}>{benefit}</p>
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
              <span style={{ color: 'var(--text-dark)' }}>Güvenlik ve</span>{' '}
              <span className="text-gradient">Uyarılar</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Güvenli kullanım</strong> için <em>dikkat edilmesi</em> gereken <u>önemli noktalar</u>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warnings.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-xl border-2"
                style={{ borderColor: 'var(--soft-coral)', backgroundColor: 'rgba(255, 112, 67, 0.05)' }}
              >
                <AlertCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--soft-coral)' }} />
                <p className="text-sm" style={{ color: 'var(--text-dark)' }}>{warning}</p>
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
              <span className="text-gradient">Ürün Özellikleri</span>{' '}
              <span style={{ color: 'var(--text-dark)' }}>Detayları</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Premium kalite</strong> mango oda kokusunun <em>teknik detayları</em> ve 
              <u>özel özellikleri</u> hakkında bilgiler.
            </p>
          </motion.div>

          <div className="space-y-8">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl glass-effect"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-justify" style={{ color: 'var(--text-medium)' }}>
                  {feature.content}
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
              <span style={{ color: 'var(--text-dark)' }}>Kullanım</span>{' '}
              <span className="text-gradient">Alanları</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-medium)' }}>
              <strong>Mango çubuklu oda kokusu</strong>, evinizin <em>her köşesinde</em> 
              <u>mükemmel sonuçlar</u> verir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usageAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-effect hover-lift"
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                  {item.area}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: 'var(--mango-cream)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-medium)' }}>
              <strong>Merak edilenler</strong> ve <em>cevapları</em>
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-effect"
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-dark)' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-medium)' }}>
                  {faq.a}
                </p>
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
            <Shield size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hemen Sipariş Verin
            </h2>
            <p className="text-lg mb-8 opacity-90">
              <strong>100ml şişede</strong> sunulan <em>premium kalite</em> mango oda kokusu. 
              <u>Hızlı kargo</u> ile kapınızda!
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
              Sipariş Ver
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

