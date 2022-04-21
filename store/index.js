export const state = () => ({
  products: [
    {
      title: 'باتری انواع دستگاه ها',
      description: 'موبایل، تبلت، ساعت هوشمند',
      image: require('@/static/battery-charging.png'),
    },
    {
      title: 'قطعات سخت افزاری',
      description: 'صفحه نمایش، حافظه، دوربین',
      image: require('@/static/cpu-setting.png'),
    },
    {
      title: 'انواع لوازم جانبی',
      description: 'قاب، هندزفری، انواع کابل شارژ',
      image: require('@/static/headphones.png'),
    },
  ],
})
