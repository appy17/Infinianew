// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/door1.jpg';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.jpg';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'home',
    href: '/',
    drop: false,
  },
  {
    name: 'about us',
    href: 'about',
    drop: false,
  },
];

export const hero = {
  title: 'Welcome to  Infinia Industries Private Limited',
  subtitle:
    "Infinia Industries Pvt Ltd  Central India's Premier Manufacturer of Innovative Building Solutions!we take pride in being the forefront of innovation, carving a niche as the leading manufacturer of Wood Polymer Composite Regenerated Plastic  and Terra Cotta products in Central India",
  buttonText: 'Shop Now',
};

export const stats = [
  {
    value: '7',
    text: 'Year Experience',
  },
  {
    value: '8',
    text: 'Serving in the country',
  },
  {
    value: '10',
    text: 'Products sold',
  },
  // {
  //   value: '260+',
  //   text: 'Variant Products',
  // },
];

export const features = {
  image: <Features1Img />,
  title: 'We Create your home more aesthetic',
  subtitle:
    'Furniture power is a software as services for multipurpose business management system',
  buttonText: 'Show Now',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Valuation Services',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Development of Furniture Models',
      subtitle:
        'Sometimes features require a short description.  This can be detailed description',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Recycel plastic sheets WPC Door frames and Particle Boards',
    subtitle:
      'We are counted amongst the known manufacturer of Recycel plastic sheets WPC Door frames and Wood Polymer Composite, Recycled Regenerated Plastic and Terracotta Clay Products etc. We offer these products at most affordable prices. always Ready to give services to our all customers.',
  },
};

export const newInStore = {
  title: 'Our Material Offering',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'WPC',
      image: <ChairImg />,
    },
    {
      name: 'UPR',
      image: <BedImg />,
    },
    {
      name: 'SPF',
      image: <CupboardImg />,
    },
    {
      name: 'RRP',
      image: <LightingImg />,
    },
    {
      name: 'Terracotta',
      image: <ChairImg />,
    },
    {
      name: 'WPC',
      image: <BedImg />,
    },
    {
      name: 'SPF',
      image: <CupboardImg />,
    },
    {
      name: 'RRP',
      image: <LightingImg />,
    },
    {
      name: 'Terracotta',
      image: <ChairImg />,
    },
  ],
};

export const products = {
  title: 'Ecomagix',
  subtitle:
    'Each category seems to have different variants or types of products within them, ranging from panels, doors, door frames, window profiles, claddings, planks, pallets, storage solutions, formwork, and porta cabins. If you need more detailed information about any specific product or category, feel free to ask.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'EM01 Boards & Panels',
          point1: "EM01A RRP Panels -regular Variants - Sizes",
          point2: "EM01B RRP Panels UHD Varient -Size,colours",
          point3: ""
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'EM02 RRP Doors',
          point1: "EM02A Panel Doors",
          point2: "EM02B Flush Doors",
          point3: ""
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'EM03 RRP Door Frames',
          point1: "EM03A 3x2",
          point2: "EM03B 4x2",
          point3: "EM03C 4x2.5"
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'EM04 RRP Window Profiles',
          point1: "EM04A 3x2",
          point2: "EM04B 4x2",
          point3: "EM04C Shutter 50x18"
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'EM05 RRP Claddings',
          point1: "EM05A Wall Panels",
          point2: "EM05B Partition Walls",
          point3: ""
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'EM06 Planks & Battens',
          point1: "EM06A",
          point2: "",
          point3: ""
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'EM07 Flyash Bricks/Pavers Pallets',
          point1: "",
          point2: "",
          point3: ""
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'EM08 RRP Storage Pallets',
          point1: "EM08A Warehouse storage pallets",
          point2: "EM08B Warehouse storage pallets",
          point3: ""
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'EM09 RRP Shuttering Formwork',
          point1: "EM09A Column/Beam Panel",
          point2: "EM09B Slab Panel",
          point3: ""
        }
      
        // {
        //   image: <Product10Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Roofing & Flooring',
        //   price: 75,
        //   oldPrice: 82,
        // },
        // {
        //   image: <Product10Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Construction Blocks',
        //   price: 75,
        //   oldPrice: 82,
        // },
        // {
        //   image: <Product10Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Combustion Fuel',
        //   price: 75,
        //   oldPrice: 82,
        // },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'EM01 Boards & Panels',
          point1: "EM01A RRP Panels -regular Variants - Sizes",
          point2: "EM01B RRP Panels UHD Varient -Size,colours",
          point3: ""
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'EM02 RRP Doors',
          point1: "EM02A Panel Doors",
          point2: "EM02B Flush Doors",
          point3: ""
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'EM03 RRP Door Frames',
          point1: "EM03A 3x2",
          point2: "EM03B 4x2",
          point3: "EM03C 4x2.5"
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'EM04 RRP Window Profiles',
          point1: "EM04A 3x2",
          point2: "EM04B 4x2",
          point3: "EM04C Shutter 50x18"
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'EM05 RRP Claddings',
          point1: "EM05A Wall Panels",
          point2: "EM05B Partition Walls",
          point3: ""
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'EM06 Planks & Battens',
          point1: "EM06A",
          point2: "",
          point3: ""
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'EM07 Flyash Bricks/Pavers Pallets',
          point1: "",
          point2: "",
          point3: ""
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'EM08 RRP Storage Pallets',
          point1: "EM08A Warehouse storage pallets",
          point2: "EM08B Warehouse storage pallets",
          point3: ""
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'EM09 RRP Shuttering Formwork',
          point1: "EM09A Column/Beam Panel",
          point2: "EM09B Slab Panel",
          point3: ""
        }
        // {
        //   image: <Product7Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'XORA corner desk',
        //   price: 320,
        //   oldPrice: 325,
        // },
        // {
        //   image: <Product8Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Black Forest Series Wood',
        //   price: 225,
        //   oldPrice: 240,
        // },
        // {
        //   image: <Product9Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Papper Cupboard',
        //   price: 105,
        //   oldPrice: 120,
        // },
        // {
        //   image: <Product10Img />,
        //   icon: <IoMdAddCircle />,
        //   name: 'Ole Gundorse Spring',
        //   price: 75,
        //   oldPrice: 82,
        // },
      ],
    },
  ],
};

export const testimonial = {
  title: 'What people are saying about us',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Mayuri Yerche',
      occupation: 'Nagpur, Maharashtra',
      date: '06-February-24',
      message:
        '“Best quality products at a reasonable”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Pallavi Rawte',
      occupation: 'Nagpur, Maharashtra',
      date: '08-April-23',
      message:
        '“Thanks INFINIAFOR YOUR RESPONSE,RATE & SERVICE”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Ankit Meshram',
      occupation: 'Nagpur, Maharashtra',
      date: '13-June-23',
      message:
        '“Thank you,sir give a best solution for me and pleaser to talked to you”',
    },
  ],
};

export const newsletter = {
  title: 'Get more discount Off your order',
  subtitle: 'Join our mailing list',
  placeholder: 'Your email address',
  buttonText: 'Shop Now',
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: 'https://www.youtube.com/@InfiniaIndia',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },

    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwww.infiniaindia.in%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=mr_IN',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};
