import { FuelIcon, OilIcon, MaintenanceIcon } from './Icons';

export default function Services() {
  const services = [
    {
      icon: <FuelIcon />,
      title: 'خدمات الوقود',
      description: 'نقدم أجود أنواع الوقود لسياراتكم'
    },
    {
      icon: <OilIcon />,
      title: 'زيوت المحركات',
      description: 'زيوت عالية الجودة لجميع أنواع المركبات'
    },
    {
      icon: <MaintenanceIcon />,
      title: 'خدمات الصيانة',
      description: 'صيانة شاملة ومتكاملة لمركبتك'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-naftal-blue dark:text-white mb-12">
          خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
              <div className="text-naftal-blue dark:text-naftal-yellow mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-naftal-blue dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}