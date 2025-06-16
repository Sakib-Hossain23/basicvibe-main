import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function Nails2({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 12;
  const navigate = useNavigate();
  const productsContainerRef = useRef(null);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  const handleOutOfStockClick = (productId) => {
    setOutOfStockClicked(productId);
    setTimeout(() => {
      setOutOfStockClicked(null);
    }, 5000);
  };

  const products = [
   {
    id: 1,
    name: "BTArtbox Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳440"],
    oldPrice: [""],
    image: "/img/ms1.jpg",
    images: ["/img/ms1.jpg", "/img/ms2.jpg", "/img/ms3.jpg"],

    model: {
      phoneName: "iPhone 16 Plus",
    },

    stock: "in-stock",
    features:
      "BTArtbox Short Press On Nails - Soft Gel French Tip Press On Nails, Supremely Fit & Natural Square Glue On Nails with Nail Glue, Reusable Stick On Nails in 15 Sizes, Pastel Curves",
    colors: ["Light Pink", "Blue"],
    specifications: {
      Color: "Classic",
      Size: "0.03 Fl Oz (Pack of 30)",
      Material: "soft gel",
      Brand: "BTArtbox",
      Style: "Protective",
    },
    description: `• Made by Gel: We made these short press on nails completely follow the handmade process (base coat, color gel, pattern, top coat). The color and patterns are made by gel polish instead of printed by ink. Get salon-like nails in 5 mins
  • How Natural They Are: These short press on nails are made by soft gel which is soft and flexible, zero pressure on your nail beds and feel like real nails. Supremely fit the nail bed with a gentle flex and a seamless cuticle line
  • Do Everything You Normally Would: All BTArtbox french tip press on nails offer feature protective building gel finish so that you are able to do everything you normally would, such as typing, gardening, houseworking or playing with your pet. They will not budged a bit and still feel as perfectly intact as they did on day one
  • What's Included: 15 nail sizes ensure a totally custom fit, plus we give you everything needed just in case! Each set comes complete with a storage box, nail glue, adhesive tabs, double-sided nail file, cuticle stick, and prep pad
  • Wear Them Weeks Straight or A Few Days, You Decide! If you want to get more than 14 days long lasting, we recommend using nail glue and adhesive tabs together. If you want to change the design weekly, only using glue is best choice. Adhesive tab is best for a date night or a little event`,
  },

  {
    id: 2,
    name: "BTArtbox Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳460"],
    oldPrice: [""],
    image: "/img/ms4.jpg",
    images: ["/img/ms4.jpg", "/img/ms5.jpg", "/img/ms6.jpg"],
    model: {},
    stock: "in-stock",
    features:
      "BTArtbox French Tip Press On Nails - Lamp-Curable Chrome Short Almond Press On Nails with Glue for Women, Semi-Transparent Soft Gel Glue On Nails in 16 Sizes - 32 Stick On Nails Kit, Mermaid Tail",

    specifications: {
      Color: "Mermaid Tail",
      Size: "1 Count (Pack of 1)",
      Material: "Soft Gel",
      Brand: "BTArtbox",
      Style: "French",
    },

    description: `• 28-Day Stay-Power with Gel Glue: X-COAT technology and BTMMA material work with gel glue to cure instantly under UV/LED lamps. Stays securely fitted for up to 28 days – no salon visits needed
  • Feels Like Your Real Nails: Crafted from ultra-soft, flexible BTMMA material. Zero pressure on nail beds, gentle flexing, and seamless cuticle blending for a natural look that moves with you
  • Salon-Quality Manicure at Home: Skip the salon hassle! Our press on nails use breakthrough innovations for flawless DIY application in minutes. Save time and money without sacrificing style
  • Live Life Unfiltered: Built tough with builder gel & top coat. Type, garden, scrub, or play with pets – these nails stay chip-free through daily adventures
  • Everything You Need Included: 32 nails (16 sizes), nail glue, adhesive tabs, nail file, wooden stick, alcohol pads, and easy guide. No guesswork – just perfect nails in a box`,
  },

  {
    id: 3,
    name: "BTArtbox Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳490"],
    oldPrice: [""],
    image: "/img/ms7.jpg",
    images: ["/img/ms7.jpg", "/img/ms8.jpg", "/img/ms9.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "BTArtbox White Press On Nails Short - Soft Gel Press on Nails Almond, White Glue on Nails with Nail Glue, Reusable Stick on Nails in 16 Sizes, Cream Puff",

    specifications: {
      Color: "Classic",
      Size: "1 Count (Pack of 1)",
      Material: "soft gel",
      Brand: "BTArtbox",
      Style: "Protective",
    },

    description: `• Made by Gel: We made these white press on nails completely follow the handmade process (base coat, color gel, pattern, top coat). The color and patterns are made by gel polish instead of printed by ink. Get salon-like nails in 5 mins
  • How Natural They Are: These white press on nails are made by soft gel which is soft and flexible, zero pressure on your nail beds and feel like real nails. Supremely fit the nail bed with a gentle flex and a seamless cuticle line
  • Do Everything You Normally Would: All BTArtbox press on nails short offer feature protective building gel finish so that you are able to do everything you normally would, such as typing, gardening, houseworking or playing with your pet. They will not budge a bit and still feel as perfectly intact as they did on day one
  • What's Included: 16 nail sizes ensure a totally custom fit, plus we give you everything needed just in case! Each set comes complete with a storage box, nail glue, adhesive tabs, double-sided nail file, cuticle stick, and prep pad
  • Wear Them Weeks Straight or A Few Days, You Decide: If you want to get more than 14 days long-lasting, we recommend using nail glue and adhesive tabs together. If you want to change the design weekly, only using glue is the best choice. Adhesive tab is best for a date night or a little event`,
  },

  {
    id: 4,
    name: "BTArtbox Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳620"],
    oldPrice: [""],
    image: "/img/ms10.jpg",
    images: ["/img/ms10.jpg", "/img/ms11.jpg", "/img/ms12.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "BTArtbox White Press On Nails Short - Soft Gel Press on Nails Almond, White Glue on Nails with Nail Glue, Reusable Stick on Nails in 16 Sizes, Cream Puff",

    specifications: {
      Color: "Golden Tail",
      Size: "0.03 Fl Oz (Pack of 37)",
      Material: "Soft Gel, Acrylic",
      Brand: "ShangMeng",
      Style: "French",
    },

    description: `• Made by Soft Gel: ShangMeng created these acrylic press on nails entirely through a handmade 7-layer process (soft gel tip, base gel, color gel, pattern, handmade 3D layer, double-layer gel finish). The colors and patterns are made with gel polish instead of being printed with ink. Get salon-like nails in 5 minutes
    • How Natural They Are: We chose to make these almond french fake nails short from soft gel, which is soft and flexible. They put zero pressure on the nail bed, fit perfectly like real nails, and have gentle curves and seamless cuticle lines. Add a beautiful touch to your girlfriend, wife, or women
    • Do Everything You Normally Do: All SHANGMENG nails press ons short have a protective building gel coating so it won't prevent you from doing anything, such as typing, gardening, housework, or playing with your pets. It won't budge at all and will stay as good as day one
    • What's Included: Everything you need, all in one package. With 16 nail sizes to fit most people, while each set comes with a storage box, nail glue, adhesive tab, double-sided nail file, cuticle stick, and prep pad
    • Decide How Long to Wear Them by Yourself: If you want to get more than 14 days long-lasting, we recommend using nail glue and adhesive tabs together. If you want to change the design every week, we recommend using nail glue. Adhesive tabs are more suitable for various activities and date nights`,
  },

  {
    id: 45,
    name: "Nail Polish",
    brand: "Nail Polish",
    subBrand: "Nail Polish",
    price: ["৳220"],
    oldPrice: [""],
    image: "/img/ms137.jpg",
    images: ["/img/ms137.jpg", "/img/ms138.jpg", "/img/ms139.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "modelones Jelly Nail Polish of 6 Colors Sheer Nude Mini Nail Polish Set Natural Jelly Red Pink Brown Colors Quick Dry Nail Polish Kit for DIY Easter Nail Art Salon Home Gift for Women Girl",

    specifications: {
      Brand: "modelones",
      Color: "A0-A Jelly Park",
      LiquidVolume: "1 Fluid Ounces",
      SpecialFeature: "Quick Dry",
      Type: "gel",
      ModelName: "Modelones Jelly Nail Polish",
      ItemForm: "Jelly",
      MaterialTypeFree: "Non-Toxic, Denatured drugs",
      FinishType: "Glossy",
      MaterialFeature: "Non-Toxic, Fragrance Free",
    },
  },
  {
    id: 46,
    name: "Nail Polish",
    brand: "Nail Polish",
    subBrand: "Nail Polish",
    price: ["৳460"],
    oldPrice: [""],
    image: "/img/ms140.jpg",
    images: ["/img/ms140.jpg", "/img/ms141.jpg", "/img/ms142.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Morovan 15 Bright Color 0.27oz Air Quick Dry Nail Polish Gift Set for Women",

    specifications: {
      Brand: "Morovan",
      Color: "Bright Color",
      LiquidVolume: "3.75 Fluid Ounces",
      SpecialFeature: "Non Toxic",
      Type: "gel",
      ItemForm: "Gel",
      MaterialTypeFree: "Non Toxic",
      FinishType: "Glossy",
      IncludedComponents: "15 mini nail polish bottles",
      MaterialFeature: "Non-Toxic",
    },
  },
  {
    id: 47,
    name: "Nail Polish",
    brand: "Nail Polish",
    subBrand: "Nail Polish",
    price: ["৳230"],
    oldPrice: [""],
    image: "/img/ms143.jpg",
    images: ["/img/ms143.jpg", "/img/ms144.jpg", "/img/ms145.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "modelones Chameleon Nail Polish Set 6 Colors, Green Glitter Pink Blue Purple Holographic Quick Dry Mini Nail Lacquer Kit Gray Aurora Shimmer DIY Nail Art Manicure Gift For Women Girls",

    specifications: {
      Brand: "modelones",
      Color: "A1 Galaxy Aurora",
      LiquidVolume: "1 Fluid Ounces",
      SpecialFeature: "Holographic, Quick Dry, Chip Resistant",
      Type: "gel",
      ItemForm: "Liquid",
      FinishType: "Glossy",
      MaterialFeature: "Non-Toxic",
      AgeRangeDescription: "Adult",
      UnitCount: "1.0 Fluid Ounces",
    },
  },

  {
    id: 5,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳430"],
    oldPrice: [""],
    image: "/img/ms13.jpg",
    images: ["/img/ms13.jpg", "/img/ms14.jpg", "/img/ms15.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "Glamnetic Press On Nails - Fairy Dust | Short Oval Beige-Pink Nails with a Mesmerizing Metallic Finish | 15 Sizes - 30 Nail Kit with Glue",

    specifications: {
      Color: "9-Fairy Dust",
      Size: "1 Count (Pack of 1)",
      Material: "Plastic",
      Brand: "Glamnetic",
      Style: "Fairy Dust",
    },

    description: `• Made by Gel: We made these BTArtbox press on nails completely follow the handmade process (base coat, color gel, pattern, top coat). The color and patterns are made from gel polish instead of printed plastic, resulting in a super shiny and durable finish. You'll get a lot of compliments for their easy application and natural appearance that looks straight from the salon.
  • Embrace a Fun Pop of Color: The Pearl Glaze Nail Set features a bright pearl-white hue with a trend-driven glazed finish you'll love. Plus, our always in-demand short round shape instantly elevates your weekday to weekend looks.
  • Do Everything You Normally Would: All BTArtbox stick-on nails feature a protective building gel finish so that you can do everything you normally would, such as typing, gardening, house working, or playing with your pet. They will not budge a bit and still feel as perfectly intact as they did on day one.
  • What's Included: 15 nail sizes ensure a totally custom fit, plus we give you everything needed just in case! Each set comes complete with a storage box, nail glue, adhesive tabs, double-sided nail file, cuticle stick, and prep pad.
  • Wear Them Weeks Straight or A Few Days – You Decide! If you want to get more than 14 days of long-lasting wear, we recommend using nail glue and adhesive tabs together. If you want to change the design weekly, only using glue is the best choice. Adhesive tabs are best for a date night or a little event.
  `,
  },

  {
    id: 6,
    name: "BTArtbox Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["$990"],
    oldPrice: [""],
    image: "/img/ms16.jpg",
    images: ["/img/ms16.jpg", "/img/ms17.jpg", "/img/ms18.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "BTArtboxnails XCOATTIPS French Gel Nails - Skin Tones Short Press On Nails Almond, Soft Gel Nail Tips with Nail Gel, French Protecting Duo, Nail Lamp, All in One Fake Nails",

    specifications: {
      Color: "Skin Tones",
      Size: "Short",
      Material: "Soft Gel",
      Brand: "btartboxnails",
      Style: "French",
    },

    description: `• Ideal for French Manicure: BTArtboxnails XCOATTIPS French Nails Series offers neutral hues and classic styles. 150/160 Pcs nail tips, nail gel, builder gel, top coat, nail lamp, and file included. Enables easy French manicure creation for DIYers and Pros.
  • Patented X-COAT Process: These short almond nail tips feature patented X-COAT tech paired with BTMMA materials. UV rays can penetrate during curing, even for complex designs like French, ombre, gradient, or cat eye. Ensures a flawless finish every time.
  • 30+ Days Long-Lasting French Protecting Duo: High-quality nail gel glue, builder gel, and top coat provide over 30 days of durable protection for French tips. Resists peeling, chipping, fading, and cracking, maintaining a great look. (Both need curing.)
  • Healthy Material Meeting SGS/MSDS Standards: This press on nails gel kit adheres to SGS & MSDS standards. Made of natural resin with vegan, cruelty-free ingredients, impurity-free. The non-toxic formula is safe for nails and skin, allowing worry-free manicures.
  • Super Time & Money Saving: This french gel nail kit comes with pre-applied tip primer and base coat. Beginners can get salon-quality nail extensions in just 20 minutes. Create amazing manicures at home, saving time and money without frequent salon visits.
  `,
  },

  {
    id: 7,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["$450"],
    oldPrice: [""],
    image: "/img/ms19.jpg",
    images: ["/img/ms19.jpg", "/img/ms20.jpg", "/img/ms21.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nails - Whipped | Short Almond 3D Metallic Silver Swirl Design in a Glossy Finish | 15 Sizes - 30 Nail Kit with Glue",

    specifications: {
      Color: "French Butter",
      Size: "30 Count (Pack of 1)",
      Material: "ABS Plastic",
      Brand: "Glamnetic",
      Style: "French Tips",
    },

    description: `• High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer high-quality salon style and feature a protective UV coating to ensure your nails will never break or split!
  • Embrace Spring’s Creamy Cool-Girl Shade: The French Butter Nail Set features pastel yellow French tips and a sleek, glossy finish on short round press-on nails. Effortlessly chic, this almost-neutral shade brings salon-quality durability for up to 2 weeks.
  • 30 Nails in 15 Sizes: Various nail sizes ensure a totally custom fit, plus we include extras just in case! Each set comes complete with a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad.
  • Gentle On The Hands: Soak hands in warm water for 10 minutes for easy, damage-free removal by gently lifting nails from the side. Remove excess glue with a nail buffer and store for reuse.
  `,
  },
  {
    id: 49,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳270"],
    oldPrice: [""],
    image: "/img/ms150.jpg",
    images: ["/img/ms150.jpg", "/img/ms151.jpg", "/img/ms152.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Modelones Nail Polish Remover Pads, Acetone Nail Polish Remover Wipes 50 PCS Professional Individually Wrapped Wet Wipes Easily & Quickly Lemon Smell Glycerin Moisturizing Big Size Portable",

    description: `• [Note]: Professional & Works with Air-Dried Nail Polish Only (Not for Lamp-Cured Gel)!
  • 2 In 1 Remove & Pre-Disinfect: Modelones Acetone Nail Polish Remover Pads quickly remove stubborn polish (press for 3-5 seconds to dissolve, then rub clean). These pads also disinfect nails and prep for the next painting.
  • Cost-Effective & Dual-Use Wipe: Larger 7x7cm wipes remove polish from 10 nails with just 1-2 pads, saving time and money. Dual sides: Textured side for friction-based removal, flat side for cleaning residue.
  • Lemon Scent, Less Odor: Fresh osmanthus and lemon scent effectively mask the acetone odor for a pleasant experience. (Note: Acetone-based, with a mild odor).
  • Deep Moisturizing & Nourish: Glycerin Oil & Plus-Aqua keep wipes moist, nourishing nails and preventing dryness during polish removal. Upgraded thickened aluminum foil packaging locks in liquid, extending shelf life up to 12 months.
  • Convenient: Individually wrapped for on-the-go use, these wipes help remove polish anytime, anywhere—ideal for quick style changes, travel, or avoiding embarrassing nail moments.
  `,
  },

  {
    id: 50,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳340"],
    oldPrice: [""],
    image: "/img/ms153.jpg",
    images: ["/img/ms153.jpg", "/img/ms154.jpg", "/img/ms155.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Nail Polish Remover Pads 100% Non Acetone - 200 Pack of Individually Wrapped Bulk Set Gel Nail Polish Remover Wipes - Fingernail Travel Kit to Clear Nail Polish for Home & Professional Removal",

    description: `• Non-Toxic Efficient Cleaning: Each pad is pre-soaked and designed to effectively remove gel nail polish quickly and efficiently, saving you time and effort during your nail care routine.
  • Moisturizing & Nourishing Formula: Infused with natural ingredients like rose oil and glycerin (more effective than aloe vera and panthenol), these pads not only remove gel polish but also nourish and hydrate nails and cuticles.
  • Budget & Travel Size: The compact mini packaging makes each non-acetone pad perfect for on-the-go use. Easily tuck them into your purse or travel bag for quick nail polish changes anywhere. Our 200-piece pack is more cost-effective than buying 100 or 50 pieces per package.
  • No Harsh Chemicals: Free from acetone, phthalates, and parabens, our non-toxic nail polish remover pads are designed to be safe and gentle without compromising on effectiveness. The inner foil layer prevents the wipes from drying out for up to 3 years.
  • All Nail Types: Effective on various types of nail polish, these pads are ideal for natural, gel, and even acrylic nails, providing versatile use with wipes individually packed.
  `,
  },

  {
    id: 8,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳780"],
    oldPrice: [""],
    image: "/img/ms22.jpg",
    images: ["/img/ms22.jpg", "/img/ms23.jpg", "/img/ms24.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Harry Potter™ x Glamnetic Press On Nails - Luna Lovegood™ | Blue Celestial 3D Graphic Short Oval False Nails, Reusable Stick On Fake Nails with Glue | Salon Quality | 15 Sizes - 30 Nail Kit",

    specifications: {
      Color: "4-Luna Lovegood",
      Size: "30 Count (Pack of 1)",
      Material: "Resin, Plastic",
      Brand: "Glamnetic",
      Pattern: "Stars",
    },

    description: `• High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer high-quality salon style and feature a protective UV coating to ensure your nails will never break or split!
  • Blue Celestial Moon & Star 3D Graphic: Embrace the mystical side in you with the Luna Lovegood Nail Set! This playful design features a bright blue hue elevated with silver foil moon and star accents on each nail. Our in-demand short oval shape adds serious cool-girl vibes to your natural nails.
  • Reusable With Up To 2 Weeks Per Wear: This premium nail set is reusable and can be trimmed, filed, or polished to your liking for multiple stylish wears.
  • 30 Nails in 15 Sizes: Various nail sizes ensure a totally custom fit, plus we give you extras just in case! Each set comes complete with a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad.
  • Gentle On The Hands: Soak hands in warm water for 10 minutes for easy, damage-free removal by gently lifting nails from the side. Remove excess glue with a nail buffer and store for reuse.
  `,
  },

  {
    id: 9,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳670"],
    oldPrice: [""],
    image: "/img/ms25.jpg",
    images: ["/img/ms25.jpg", "/img/ms26.jpg", "/img/ms27.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nails - Fan Faves Press On Gift Set | Two Top-Selling Nails in Cherry Glaze & MaDamn, Brush-On Nail Glue and Travel Pouch Included | Compact, Perfect for Holiday Gifting",

    specifications: {
      Color: "Best Of Gift Set",
      Size: "3 Count (Pack of 1)",
      Brand: "Glamnetic",
      Pattern: "Solid",
      Coverage: "Full Well Tips",
    },

    description: `• High-Quality Press-On Nail Gift Set: All Glamnetic Press-On Nail Sets offer high-quality salon style and feature a protective UV coating to ensure your nails will never break or split!
  • Holiday Press-On Nail & Glue Gift Set: Unwrap flawless nails this season with our Fan Faves Press-On Gift Set—perfect as a gift or a festive treat for yourself! This limited-edition set includes 2 top-selling designs, Cherry Glaze and MaDamn, along with our long-lasting Brush-On Nail Glue, all packed in a stylish travel-friendly pouch.
  • Safe & Clean Beauty: 100% vegan and cruelty-free. Our Brush-On Nail Glue is free of parabens, formaldehydes, phthalates, and sulfates. The travel bag is made from durable PVC material. Dimensions: 13.5cm x 20.5cm x 8.5cm.
  • MaDamn & Cherry Glaze Styles: MaDamn Press-On Nails feature a timeless French tip design in a short almond shape. Cherry Glaze brings vibrant, shimmery red nails with a glazed finish in a short round shape.
  • 30 Nails in 15 Sizes: Each design comes with 30 nails in 15 different sizes to ensure a flawless fit. The set includes a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad—everything you need for the perfect mani.
  `,
  },

  {
    id: 10,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳470"],
    oldPrice: [""],
    image: "/img/ms28.jpg",
    images: ["/img/ms28.jpg", "/img/ms29.jpg", "/img/ms30.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nails - Unicorn Tears | Short Oval, Misty-Grey Nails with a Mesmerizing Metallic Finish | 15 Sizes - 30 Nail Kit with Glue",

    specifications: {
      Color: "Unicorn Tears",
      Size: "30 Count (Pack of 1)",
      Material: "Plastic",
      Brand: "Glamnetic",
      Style: "Unicorn Tears",
    },

    description: `• High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer salon-quality style and feature a protective UV coating to ensure your nails never break or split.
  • Mystical Vibes with Unicorn Tears: Get your mythical look on with the Unicorn Tears Nail Set! This multidimensional hue features a dreamy gray-blue shade with a mesmerizing velvet metallic finish that’s totally trending. Our new short oval shape adds an elegant touch to your everyday mani.
  • Reusable & Customizable: Designed to last up to 2 weeks per wear, this set can be trimmed, filed, or polished to match your personal style. Glam quality that lasts.
  • 30 Nails in 15 Sizes: A wide range of nail sizes ensures a flawless fit. Each set includes a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad—everything you need for a complete manicure.
  • Gentle On The Hands: For damage-free removal, soak nails in warm water for 10 minutes and gently lift from the sides. Buff off any excess glue and reuse the nails anytime!
  `,
  },

  {
    id: 11,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳460"],
    oldPrice: [""],
    image: "/img/ms31.jpg",
    images: ["/img/ms31.jpg", "/img/ms32.jpg", "/img/ms33.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nails - Fairy Dust | Short Oval Beige-Pink Nails with a Mesmerizing Metallic Finish | 15 Sizes - 30 Nail Kit with Glue",

    specifications: {
      Color: "9-Fairy Dust",
      Size: "1 Count (Pack of 1)",
      Material: "Plastic",
      Brand: "Glamnetic",
      Style: "Fairy Dust",
    },

    description: `• High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer salon-level quality and come with a protective UV coating to prevent breaking or splitting.
  • Mystical Beige-Pink Glow: Make your mystical fantasies come true with the Fairy Dust Nail Set! Featuring a dreamy beige-pink hue and trending velvet metallic finish, this short oval design adds a touch of magic to your everyday manicure.
  • Reusable With Up To 2 Weeks Per Wear: Made to last, these nails can be trimmed, filed, or polished to match your unique style and reused as needed.
  • 30 Nails in 15 Sizes: Ensures a fully customized fit. The complete kit includes a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad—everything you need for an easy, flawless application.
  • Gentle On The Hands: For safe and easy removal, soak in warm water for 10 minutes and gently lift from the side. Buff off leftover glue and store the nails for your next glam moment!
  `,
  },

  {
    id: 12,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳420"],
    oldPrice: [""],
    image: "/img/ms34.jpg",
    images: ["/img/ms34.jpg", "/img/ms35.jpg", "/img/ms36.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nail Remover | Odorless, No Acetone, Gentle Press-On Nail Remover Serum for Fake Nails | 30 ml/1.01 fl. oz.",

    specifications: {
      Brand: "Glamnetic",
      ItemForm: "Liquid",
      ItemVolume: "30 Milliliters",
      MaterialFeature: "Cruelty Free, Vegan",
      MaterialTypeFree: "Acetone Free",
    },

    description: `• Quick, Hassle-Free and Gentle Nail Remover Serum: Glamnetic's gentle, odorless serum allows you to remove press-on nails in minutes, keeping your natural nails healthy and strong between applications.
  • Gentle Press-On Nail Remover Serum: Say goodbye to the hassle of removing press-on nails! This serum lets you gently, quickly, and painlessly remove your nails, without harming your natural nails, so you’re always ready for your next set.
  • Removes Press-On Nail and Nail Glue Residue: No more worrying about leftover glue or struggling with removal. This serum takes care of everything!
  • Quick Removal, Odorless & Formulated without Acetone: Our 100% vegan and cruelty-free formula is free of acetone and harsh chemicals, ensuring your natural nails stay hydrated and healthy.
  • Gentle On Your Nails & Hands: To use, gently push a cuticle stick under the edges of your press-on nails to create a gap, then apply 1-2 drops of the remover. Wait 5-7 minutes for the serum to dissolve the glue, then gently lift off the press-ons with the cuticle stick.
  `,
  },

  {
    id: 13,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳260"],
    oldPrice: [""],
    image: "/img/ms37.jpg",
    images: ["/img/ms37.jpg", "/img/ms38.jpg", "/img/ms39.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Super Strong Brush On Nail Glue | Brush Tip Applicator, Mess Free, Travel Friendly, Vegan | Durable & Long-Lasting | .24 fl. oz.",

    specifications: {
      Brand: "Glamnetic",
      SpecificUsesForProduct: "Nail",
      Material: "Glue",
      CompatibleMaterial: "Plastic, Acrylic",
      ItemForm: "Liquid",
    },

    description: `• Top-Quality Brush On Nail Glue: Ensure your Press-On Nails stay on for weeks with this easy-to-apply, mess-free glue that guarantees long-lasting wear.
  • Easy, Mess-Free Brush On Nail Glue: Forget about messy applications! This one-step solution gives you a flawless DIY nail look every time. The high-quality formula ensures mega durability for your Press-On Nails.
  • Simple to Use Brush Tip Applicator: This vegan and cruelty-free, travel-friendly bottle makes applying Glamnetic Press-On Nails a breeze, with no mess involved.
  • Gentle and Fast: Clean nails thoroughly, then brush a thin layer of glue onto your natural nails using the precise brush tip. Apply a layer of glue onto the Press-On Nails for a longer-lasting hold.
  • Soft On The Hands: For easy, damage-free removal, soak hands in warm water for 10 minutes. Gently lift nails from the side, remove excess glue with a nail buffer, and store for reuse.
  `,
  },

  {
    id: 14,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳430"],
    oldPrice: [""],
    image: "/img/ms40.jpg",
    images: ["/img/ms40.jpg", "/img/ms41.jpg", "/img/ms42.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Toenails - Creamer | Neutral Nude and White Ombre Fake Toe Nails with a Glossy Finish | 16 Sizes - 32 Toe Nail Kit with Glue",

    specifications: {
      Color: "Creamer",
      Size: "32 Count (Pack of 1)",
      Material: "Plastic",
      Brand: "Glamnetic",
      Style: "Creamer",
    },

    description: `• High-Quality Press-On Toenail Kit: All Glamnetic Press-On Toenail Kits offer high-quality salon style and feature protective UV coating, ensuring your set won't break or split for up to 2 weeks.
  • Neutral Nude to White Ombre Toenails: Perfect for a subtle glam look, this design features a semi-transparent nude to white ombre gradient, ideal for both weekdays and weekends. Save time and money while enjoying a flawless pedi.
  • Breakaway Tabs for Easiest Application: This toe nail set can be trimmed, filed, or polished to your liking once you remove the easy-to-use breakaway tabs.
  • 32 Nails in 16 Sizes: Various toe nail sizes ensure a totally custom fit, with extras included just in case! Each set comes complete with a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad.
  • Gentle On Your Toenails: Soak feet in warm water for 10 minutes for easy, damage-free removal by gently lifting nails from the side. Remove excess glue with a nail buffer, and store for reuse.
  `,
  },

  {
    id: 15,
    name: "Glamnetic Nails",
    brand: "Nails",
    subBrand: "Spring Nails",
    price: ["৳470"],
    oldPrice: [""],
    image: "/img/ms43.jpg",
    images: ["/img/ms43.jpg", "/img/ms44.jpg", "/img/ms45.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Glamnetic Press On Nails - Tarot | Short Almond Purple Nails with Ombre Design, Reusable Stick On Fake Nails with Glue | Salon Quality | 15 Sizes - 30 Nail Kit",

    specifications: {
      Color: "Tarot",
      Size: "30 Count (Pack of 1)",
      Material: "ABS Plastic",
      Brand: "Glamnetic",
      Pattern: "Abstract",
    },

    description: `• High-Quality Press-On Nail Kit: All Glamnetic Press-On Nail Sets offer high-quality salon style and feature protective UV coating, ensuring your nails will never break or split.
  • Tarot Nail Set: Discover what’s in the cards for you with the Tarot Nail Set. These purple press-on nails feature an abstract, light ombre design with 3D gold metallic starburst accents. Designed in our most-loved almond shape, these purple nails give you the ultimate “cool girl” look.
  • Reusable With Up To 2 Weeks Per Wear: High-quality is our middle name. This reusable nail set can be trimmed, filed, or polished to your liking.
  • 30 Nails in 15 Sizes: Various nail sizes ensure a totally custom fit, plus we give you extras just in case! Each set comes complete with a storage box, nail glue, double-sided nail file, cuticle stick, and alcohol pad.
  • Gentle On The Hands: Soak hands in warm water for 10 minutes for easy, damage-free removal by gently lifting nails from the side. Remove excess glue with a nail buffer, and store for reuse.
  `,
  },

  {
    id: 48,
    name: "Nail Polish",
    brand: "Nail Polish",
    subBrand: "Nail Polish",
    price: ["৳290"],
    oldPrice: [""],
    image: "/img/ms146.jpg",
    images: [
      "/img/ms146.jpg",
      "/img/ms147.jpg",
      "/img/ms148.jpg",
      "/img/ms149.jpg",
    ],

    model: {},

    stock: "in-stock",

    features:
      "Beetles Holographic Gel Polish - 15ml Reflective Silver Iridescent Nail Polish with Flash Glitter, Soak Off, UV LED Lamp",

    specifications: {
      Brand: "beetles Gel Polish",
      Color: "A-Digital Error",
      LiquidVolume: "0.51 Fluid Ounces",
      SpecialFeature: "Long Lasting",
      Type: "gel",
      ItemForm: "Gel",
      MaterialTypeFree: "Gluten Free",
      FinishType: "Holographic",
      IncludedComponents: "1 piece of 15ml Digital Error Glitter gel polish",
      MaterialFeature: "Natural",
    },
  },

  {
    id: 51,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳560"],
    oldPrice: [""],
    image: "/img/ms156.jpg",
    images: ["/img/ms156.jpg", "/img/ms157.jpg", "/img/ms158.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Diamond Wipes Nail Polish Remover Wipes with Aloe Vera, Acetone Nail Polish Remover Pads, 50 Individually Wrapped Nail Polish Wipes",

    specifications: {
      Brand: "Diamond Wipes",
      ItemForm: "Pad",
      MaterialFeature: "pre-soak wet wipes",
      MaterialTypeFree: "Resin Free",
      ItemWeight: "5.61 Ounces",
    },
  },

  {
    id: 52,
    name: "Nail Remover",
    brand: "Nails Remover",
    subBrand: "Nail Remover",
    price: ["৳320"],
    oldPrice: [""],
    image: "/img/ms159.jpg",
    images: ["/img/ms159.jpg", "/img/ms160.jpg", "/img/ms161.jpg"],

    model: {},

    stock: "in-stock",

    features:
      "Pronto Nail Polish Remover Pads - 10 Pcs. Individually Wrapped Acetone Nail Polish Remover Wipes, Quick Gel Nail Polish Nail Soak Off Pads Pure Acetone Nail Wipes Polish Remover For Salon & Home",

    specifications: {
      Brand: "Pronto",
      ItemForm: "Wipe",
      NumberOfItems: "1",
      UnitCount: "1.0 Count",
      Manufacturer: "Eternal Cosmetics LLC",
    },
  },

  {
    id: 53,
    name: "Chrome Nails",
    brand: "Chrome Nails",
    subBrand: "Chrome Nails",
    price: ["৳220"],
    oldPrice: [""],
    image: "/img/ms162.jpg",
    images: ["/img/ms162.jpg", "/img/ms163.jpg", "/img/ms164.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "Artdone White Pearl Chrome Nail Powder,Iridescent Aurora Powder Metallic Mirror Effect Pigment Pearlescent Mermaid Pigment Pearl Glitter Dust Kit,Nail Art Decoration, Resin Craft",

    specifications: {
      Color: "White 1 Jar",
      Brand: "Artdone",
      ItemWeight: "20 Grams",
      NumberOfPieces: "1",
      ItemForm: "Powder",
      RecommendedUsesForProduct: "Crafts, Nail Arts",
      Manufacturer: "Artdone",
    },
  },
  {
    id: 54,
    name: "Chrome Nails",
    brand: "Chrome Nails",
    subBrand: "Chrome Nails",
    price: ["৳320"],
    oldPrice: [""],
    image: "/img/ms165.jpg",
    images: ["/img/ms165.jpg", "/img/ms166.jpg", "/img/ms167.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "Artdone 16 Jars Chrome Nail Powder Nail Art Fimo Striping Tape Lines Decoration Metallic Mirror Effect Holographic Aurora Chameleon Pigment Powder 1g/Jar Pearl for Resin Craft & Nail Art",

    specifications: {
      Color: "16jars",
      Brand: "Artdone",
      ItemWeight: "209 Grams",
      Shape: "Powder",
      NumberOfPieces: "16",
      ItemForm: "Powder",
      RecommendedUsesForProduct: "Nail Arts",
      Manufacturer: "Artdone",
    },
  },

  {
    id: 55,
    name: "Chrome Nails",
    brand: "Chrome Nails",
    subBrand: "Chrome Nails",
    price: ["৳340"],
    oldPrice: [""],
    image: "/img/ms170.jpg",
    images: ["/img/ms170.jpg", "/img/ms169.jpg", "/img/ms168.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "Chrome Nail Powder Set 14 Colors Pink Blue Silver Metallic Effect Mirror Powder for Nails With Brushes Holographic Pigment Chameleon Flakes for Nails Gold Leaf Decoration Nail Supplies",

    specifications: {
      Brand: "Fcozpjk",
      Color: "Chrome Powder set",
      FinishType: "Glossy",
      ItemWeight: "1 Grams",
      Manufacturer: "Kafei",
    },
  },
  {
    id: 56,
    name: "Chrome Nails",
    brand: "Chrome Nails",
    subBrand: "Chrome Nails",
    price: ["৳240"],
    oldPrice: [""],
    image: "/img/ms171.jpg",
    images: ["/img/ms171.jpg", "/img/ms172.jpg", "/img/ms173.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "BORN PRETTY Chrome Nail Powder,White Pearl Metallic Mirror Holographic Chrome Powder for Nails,Pearl Glitter Pigment Dust Kit Nail Art Decoration Sets",

    specifications: {
      Brand: "Born Pretty",
      Color: "A-nail powder set",
      FinishType: "Glossy",
      ItemWeight: "30 Grams",
      Manufacturer: "Born Pretty",
    },
  },
  {
    id: 57,
    name: "Chrome Nails",
    brand: "Chrome Nails",
    subBrand: "Chrome Nails",
    price: ["৳270"],
    oldPrice: [""],
    image: "/img/ms174.jpg",
    images: ["/img/ms174.jpg", "/img/ms175.jpg", "/img/ms176.jpg"],

    model: {},

    stock: "in-stock",
    features:
      "Artdone Chrome Nail Powder Magic White Pearl Kit Mirror Effect Silver Metallic Holographic Dip Nail Powder For Resin Craft & Nail Art Decoration Iridescent Aurora Mermaid Pigment",

    specifications: {
      Brand: "Artdone",
      Color: "4 colors",
      FinishType: "Chrome",
      Manufacturer: "Artdone",
    },
  },
  ];

  const filteredProducts =
    selectedFilter === "All"
      ? products
      : selectedFilter === "Shoes"
      ? products.filter((product) => product.brand === "Shoes")
      : products.filter((product) => product.subBrand === selectedFilter);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -220;
      const elementPosition =
        productsContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setLoading(true);
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

  const handleFilterChange = (filter) => {
    setFilterLoading(true);
    setSelectedFilter(filter);

    setTimeout(() => {
      setFilterLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  useEffect(() => {
    if (currentPage !== 1 || selectedFilter !== "All") {
      scrollToProductsContainer();
    }
  }, [currentPage, selectedFilter]);

  const handleProductClick = (product, e) => {
    const isOutOfStockButton = e.target.closest(".btn.out-of-stock");
    if (isOutOfStockButton) {
      e.preventDefault();
      e.stopPropagation();
      handleOutOfStockClick(product.id);
      return;
    }
    const isViewDetailsButton = e.target.closest(".btn.buy-now");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();

    // Extract the first price if price is an array, otherwise use the price directly
    const price = Array.isArray(product.price)
      ? product.price[0]
      : product.price;

    // Remove dollar sign if present and convert to number
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));

    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: numericPrice,
      displayPrice: price, // Keep the original formatted price
      image: product.image,
      quantity: 1,
      stock: product.stock,
      model: product.model || {},
      selectedColor: product.model?.color || "",
      selectedStorage: product.model?.GB || "",
    });

    showAlert();
  };

  return (
    <div className="wrapper">
      <div className="products-container" style={{ marginTop: "78px" }}>
        <h2>Nail Collection</h2>
        <div className="filter-buttons">
          {[
            "All",
            "Spring Nails",
            "Nail Polish",
            "Nail Remover",
            "Chrome Nails",
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
              disabled={filterLoading}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: selectedFilter === filter ? "bold" : "bold",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {(loading || filterLoading) && <div className="loading-spinner"></div>}

        <div
          className={`products-grid ${
            loading || filterLoading ? "loading" : ""
          }`}
          ref={productsContainerRef}
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={(e) => handleProductClick(product, e)}
              style={{
                cursor: product.stock === "in-stock" ? "pointer" : "default",
              }}
            >
              {product.stock === "out-of-stock" && (
                <div className="out-of-stock-badge">Out of Stock</div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 style={{ fontSize: "14px" }}>{product.name}</h3>
                <p style={{ fontSize: "12px", color: "#666" }}>
                  <span style={{ display: "none" }}>{product.brand}</span>
                  {product.subBrand && ` ${product.subBrand}`}
                </p>
                <div>
                  <p className="product-price">
                    {Array.isArray(product.price)
                      ? product.price[0]
                      : product.price}{" "}
                    {product.oldPrice && (
                      <span className="old-price">
                        {Array.isArray(product.oldPrice)
                          ? product.oldPrice[0]
                          : product.oldPrice}
                      </span>
                    )}
                  </p>
                </div>
                <div className="product-buttons">
                  <button
                    style={{
                      backgroundColor: "#f27f20",
                      color: "#ffffff",
                      border: "none",
                    }}
                    className="btn buy-now"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`, {
                        state: { product },
                      });
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length > itemsPerPage && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`pagination-button ${
                currentPage === 1 ? "disabled" : ""
              }`}
              disabled={currentPage === 1 || loading}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`pagination-button ${
                      currentPage === page ? "active" : ""
                    }`}
                    disabled={loading}
                  >
                    {page}
                  </button>
                );
              } else if (
                (page === 2 && currentPage > 4) ||
                (page === totalPages - 1 && currentPage < totalPages - 3)
              ) {
                return (
                  <span key={page} className="pagination-dots">
                    ...
                  </span>
                );
              }
              return null;
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`pagination-button ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              disabled={currentPage === totalPages || loading}
            >
              Next
            </button>
          </div>
        )}

        {alertVisible && (
          <div className="custom-alert">
            <img
              className="alert-image"
              src="./img/right.png"
              alt="Success Icon"
            />
            <div className="alert-message">Successfully added product</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nails2;
