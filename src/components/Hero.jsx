export default function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-naftal-blue dark:text-white mb-6">
            مرحباً بكم في نفطال
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            شريككم الموثوق في مجال الطاقة والوقود
          </p>
          <button className="bg-naftal-yellow text-naftal-blue font-bold py-3 px-8 rounded-full hover:bg-naftal-yellow/90 transition-colors">
            اكتشف خدماتنا
          </button>
        </div>
      </div>
    </section>
  );
}