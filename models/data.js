const Images = [
  {image: require('../assets/banners/vegburger.jpeg')},
  {image: require('../assets/banners/nonvegburger.jpeg')},
  {image: require('../assets/banners/burger-king.png')},
  {image: require('../assets/banners/food-banner1.jpg')},
  {image: require('../assets/banners/dosa.jpeg')},
  {image: require('../assets/banners/food-banner2.jpg')},
  {image: require('../assets/banners/manchurian.jpeg')},
  {image: require('../assets/banners/food-banner5.jpg')},
  {image: require('../assets/banners/sweets.gif')},
  {image: require('../assets/banners/chinese.jpeg')},
  {image: require('../assets/banners/food-banner3.jpg')},
  {image: require('../assets/banners/dominos.png')},
  {image: require('../assets/banners/fast-food.jpeg')},
  {image: require('../assets/banners/hardiram.png')},
  {image: require('../assets/banners/idli.jpeg')},
  {image: require('../assets/banners/indian.jpeg')},
  {image: require('../assets/banners/laddoo.png')},
  {image: require('../assets/banners/mcd.png')},
  {image: require('../assets/banners/noodles.jpeg')},
  {image: require('../assets/banners/rajma.jpeg')},
  {image: require('../assets/banners/samosa.jpeg')},
  {image: require('../assets/banners/wow-momo.png')},
  {image: require('../assets/banners/food-banner4.jpg')},
  {image: require('../assets/banners/cold-drink.jpeg')},
  {
    image: {
      uri: 'https://picsum.photos/seed/picsum/200/300',
    },
  },
];

export const data = [
  {
    id: '1',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Burger King',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor.`,
    image: Images[2].image,
    rating: 4.0,
    reviews: 99,
    categories: 'Pizza',
    budget: 300,
    menu: [
      {
        id: 1,
        image: Images[1].image,
        name: 'Aloo tikki burger',
        price: 49,
        dishType: 'veg',
      },
      {
        id: 2,
        image: Images[1].image,
        name: 'Veg burger',
        price: 79,
        dishType: 'veg',
      },
      {
        id: 3,
        image: Images[0].image,
        name: 'Chicken burger',
        price: 99,
        dishType: 'non-veg',
      },
      {
        id: 4,
        image: Images[1].image,
        name: 'Veg supreme',
        price: 109,
        dishType: 'veg',
      },
      {
        id: 5,
        image: Images[0].image,
        name: 'Non-veg supreme',
        price: 139,
        dishType: 'non-veg',
      },
    ],
  },
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'Sharma Restaurant',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[15].image,
    rating: 5.0,
    reviews: 102,
    categories: 'Restaurant',
    budget: 250,
    menu: [
      {
        id: 1,
        image: Images[4].image,
        name: 'Dal makhni',
        price: 199,
        dishType: 'veg',
      },
      {
        id: 2,
        image: Images[15].image,
        name: 'Shahi Paneer',
        price: 239,
        dishType: 'veg',
      },
      {
        id: 3,
        image: Images[10].image,
        name: 'Butter naan',
        price: 49,
        dishType: 'veg',
      },
      {
        id: 4,
        image: Images[4].image,
        name: 'Mushroom Tikka',
        price: 199,
        dishType: 'veg',
      },
    ],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'Dosa Junction',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[4].image,
    rating: 3.5,
    reviews: 220,
    categories: 'Indian',
    budget: 350,
    menu: [
      {
        id: 1,
        image: Images[2].image,
        name: 'paper dosa',
        price: 49,
        dishType: 'veg',
      },
      {
        id: 2,
        image: Images[2].image,
        name: 'Rawa Dosa',
        price: 79,
        dishType: 'veg',
      },
      {
        id: 3,
        image: Images[2].image,
        name: 'Masala Dosa',
        price: 109,
        dishType: 'veg',
      },
      {
        id: 4,
        image: Images[12].image,
        name: 'Idli Sambar',
        price: 139,
        dishType: 'veg',
      },
    ],
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'Amazing Food Place',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
        
        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[3].image,
    rating: 4.0,
    reviews: 48,
    categories: 'Indian',
    budget: 300,
    menu: [
      {
        id: 1,
        image: Images[3].image,
        name: 'Dal',
        price: 129,
        dishType: 'veg',
      },
      {
        id: 2,
        image: Images[3].image,
        name: 'Paneer',
        price: 179,
        dishType: 'veg',
      },
      {
        id: 3,
        image: Images[3].image,
        name: 'Butter Chicken',
        price: 299,
        dishType: 'non-veg',
      },
      {
        id: 4,
        image: Images[3].image,
        name: 'Butter Roti',
        price: 29,
        dishType: 'veg',
      },
      {
        id: 5,
        image: Images[3].image,
        name: 'Raita',
        price: 99,
        dishType: 'veg',
      },
    ],
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: 'China Town',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

        Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[18].image,
    rating: 4.5,
    reviews: 178,
    categories: 'Fast-Food',
    budget: 260,
    menu: [
      {
        id: 1,
        image: Images[16].image,
        name: 'noodles',
        price: 129,
        dishType: 'veg',
      },
      {
        id: 2,
        image: Images[4].image,
        name: 'manchurian',
        price: 179,
        dishType: 'veg',
      },
      {
        id: 3,
        image: Images[12].image,
        name: 'fried rice',
        price: 29,
        dishType: 'veg',
      },
      {
        id: 4,
        image: Images[19].image,
        name: 'Momos',
        price: 99,
        dishType: 'veg',
      },
    ],
  },
  // {
  //   id: '6',
  //   coordinate: {
  //     latitude: 22.6293867,
  //     longitude: 88.4354486,
  //   },
  //   title: 'Craving Bowls',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[4].image,
  //   rating: 4.6,
  //   reviews: 99,
  //   categories: ['Restaurant'],
  //   budget: 400,
  // },
  // {
  //   id: '7',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'RamKishan Sweets',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[7].image,
  //   rating: 3.9,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
  // {
  //   id: '8',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'Sizzler Point',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[8].image,
  //   rating: 4.2,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 500,
  // },
  // {
  //   id: '9',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'Shri Ram Dhaba',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[8].image,
  //   rating: 5.0,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
  // {
  //   id: '10',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: "Domino's Pizza",
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[9].image,
  //   rating: 3.5,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
  // {
  //   id: '11',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'RamKishan Sweets',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[7].image,
  //   rating: 4.7,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
  // {
  //   id: '12',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'RamKishan Sweets',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[7].image,
  //   rating: 3.2,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
  // {
  //   id: '13',
  //   coordinate: {
  //     latitude: 22.6345648,
  //     longitude: 88.4377279,
  //   },
  //   title: 'RamKishan Sweets',
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.

  //       Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
  //   image: Images[7].image,
  //   rating: 4.0,
  //   reviews: 102,
  //   categories: ['Restaurant'],
  //   budget: 300,
  // },
];
