export default function Footer() {
  return (
    <footer className="bg-naftal-blue dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <p>الهاتف: 000-000-000</p>
            <p>البريد الإلكتروني: info@naftal.dz</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-naftal-yellow">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-naftal-yellow">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-naftal-yellow">الشروط والأحكام</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex justify-center md:justify-end space-x-4 space-x-reverse">
              <a href="#" className="hover:text-naftal-yellow">فيسبوك</a>
              <a href="#" className="hover:text-naftal-yellow">تويتر</a>
              <a href="#" className="hover:text-naftal-yellow">لينكد إن</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <div className="flex justify-between items-center">
            <p> 2025 نفطال. جميع الحقوق محفوظة</p>
            <p>Creat by ahmed.limam</p>
          </div>
        </div>
      </div>
    </footer>
  );
}