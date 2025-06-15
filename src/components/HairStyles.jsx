import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function Hairstyles({ addToCart }) {
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
      id: 58,
      name: "44 Pieces Accessories",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳990"],
      oldPrice: [""],
      image: "/img/ms177.jpg",
      images: ["/img/ms177.jpg", "/img/ms178.jpg", "/img/ms179.jpg"],

      model: {},

      stock: "out-of-stock",
      link: "https://www.amazon.com/Wedding-Accessories-U-shaped-Rhinestone-Bridesmaid/dp/B07S189X14/ref=sr_1_2?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRQbgy4_CYIWpOd0uyy2nDB_GPQ-tsPSQglJNcjSoUaKrqLyUPqOia-syudmAb2bGAVxm81N1VAG0B_whgl1oeBsPYSTK_6foeL4nJFbwxydHJquLnu1gNv8iQvNQ3catx1DK79d8c9Ej7mWfJ5Mosupeijm9CCxofb7WRafNf2jbCyUfefjgjT-GqOfKHKDo0jtMU32RJBmCnq7JXHxoeeXacjJdduIbVpZF0mGU-SNsoMRnA1EcsNagAXLilVpVOI.1sDRqkuKD1_r-b_qd1aL1r1wjchZr6w4hYJD0whcu4M&dib_tag=se&keywords=prom%2Bhair%2Baccessories&qid=1745856788&sr=8-2&th=1",
      features:
        "44 Pieces Wedding Hair Accessories: Faux Pearl Crystal Comb Clips, U-shaped Flower Rhinestone Pearl Hair Clips for Bride and Bridesmaids (Classic Style)",

      specifications: {
        Material: "Metal",
        Brand: "Maitys",
        HairType: "fine, All",
        Size: "Small (44 Count)",
        PowerSource: "Manual",
      },
    },
    {
      id: 59,
      name: "5 Pieces Accessories",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms180.jpg",
      images: ["/img/ms180.jpg", "/img/ms181.jpg", "/img/ms182.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Pieces-Rhinestone-Crystal-Accessories-Bridesmaids/dp/B0CCVGJF4D/ref=sr_1_3?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRS9tf8vdOO3AEsCnIrkObsjYV6U2rhEXoqcq4PQvetQ0H7R9RdDxe9GL9kysf3qcZEzpR0fqxkbuOAuCYsyv0Ue_XE7G5D5gP48zavXkm-MAZquLnu1gNv8iQvNQ3catx1DK79d8c9Ej7mWfJ5MosupTcljoYWfHfgK4GjlTrgy2q4_9spQyHddRkHMZa08kgsYfTjjYSm4xYjFM4EHBeEfeysRZnJKbZyJocfscgh7lfvXza_DfOuQfgiHZHXj5js.Jj4gB2nnSqrwlaxx_GpcRalqPL9jhYaAcdGY6wIi0xQ&dib_tag=se&keywords=prom%2Bhair%2Baccessories&qid=1745858101&sr=8-3&th=1",
      features:
        "5 Pieces Bride Hair Pins Rhinestone Bridal Hair Piece for Women Crystal Hair Accessories for Bride Bridesmaids Flower Girls(Silver)",

      specifications: {
        Brand: "LAPOHI",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Embellishment: "Rhinestone",
      },
    },
    {
      id: 60,
      name: "JAKAWIN Pearl",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms185.jpg",
      images: ["/img/ms185.jpg", "/img/ms183.jpg", "/img/ms184.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/JAKAWIN-Wedding-Rhinestone-Crystal-Accessories/dp/B0BQ2XN5SS/ref=sxin_16_pa_sp_search_thematic_sspa?content-id=amzn1.sym.e1fd0544-6483-4e4f-b389-bc90db9d388a%3Aamzn1.sym.e1fd0544-6483-4e4f-b389-bc90db9d388a&cv_ct_cx=prom%2Bhair%2Baccessories&keywords=prom%2Bhair%2Baccessories&pd_rd_i=B0BQ2XN5SS&pd_rd_r=a5857547-d275-48e3-af99-adc08476a6e8&pd_rd_w=4An0K&pd_rd_wg=ib0co&pf_rd_p=e1fd0544-6483-4e4f-b389-bc90db9d388a&pf_rd_r=5YWQF9WPNBZD5JHC2H2D&qid=1745858101&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-2-9428117c-b940-4daa-97e9-ad363ada7940-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
      features:
        "JAKAWIN Pearl Wedding Hair Vine Silver Rhinestone Bridal Prom Hair Piece Accessories for Women HV192 (1 Silver)",

      description: `• High-Quality Material: Bridal hair vine is crafted with pearls, crystal rhinestones, and durable alloy for a stunning, long-lasting design.
• Elegant Color Options: Available in silver, rose gold, and gold, these pearl hair accessories offer a beautiful and elegant touch to any look.
• Perfect for Special Occasions: This hair jewelry for women is ideal for weddings, engagements, and proms, and is sure to win you many compliments.
• Thoughtful Gift Idea: Prom hair accessories make wonderful gifts for moms, daughters, sisters, and best friends—bringing joy with their delicate beauty.
• Versatile and Stylish: The bride headpiece can enhance any hairstyle, adding a delicate sparkle to an up-do or any formal style effortlessly.
`,
    },

    {
      id: 61,
      name: "Wedding Hair Comb",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳650"],
      oldPrice: [""],
      image: "/img/ms186.jpg",
      images: ["/img/ms186.jpg", "/img/ms187.jpg", "/img/ms188.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Casdre-Crystal-Wedding-Bridal-Accessories/dp/B09MLX8LJ5/ref=sr_1_6?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRS9tf8vdOO3AEsCnIrkObsjYV6U2rhEXoqcq4PQvetQ0H7R9RdDxe9GL9kysf3qcZEzpR0fqxkbuOAuCYsyv0Ue_XE7G5D5gP48zavXkm-MAZquLnu1gNv8iQvNQ3catx1DK79d8c9Ej7mWfJ5MosupTcljoYWfHfgK4GjlTrgy2q4_9spQyHddRkHMZa08kgsYfTjjYSm4xYjFM4EHBeEfeysRZnJKbZyJocfscgh7lfvXza_DfOuQfgiHZHXj5js.Jj4gB2nnSqrwlaxx_GpcRalqPL9jhYaAcdGY6wIi0xQ&dib_tag=se&keywords=prom%2Bhair%2Baccessories&qid=1745858101&sr=8-6&th=1",
      features:
        "Casdre Crystal Bride Wedding Hair Comb Pearl Bridal Hair Piece Hair Accessories for Women and Girls (A Silver)",

      specifications: {
        Material: "Pearl, Crystal",
        Brand: "CASDRE",
        HairType: "All",
        Size: "Small",
        PowerSource: "Manual",
      },
    },
    {
      id: 62,
      name: "CASDRE Flower",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳780"],
      oldPrice: [""],
      image: "/img/ms189.jpg",
      images: ["/img/ms189.jpg", "/img/ms190.jpg", "/img/ms191.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B08GC7TNQH/ref=sspa_dk_detail_0?pd_rd_i=B08GC7TNQH&pd_rd_w=hcn6g&content-id=amzn1.sym.e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_p=e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_r=JH6XKR29WZZ76M05VK01&pd_rd_wg=TASbF&pd_rd_r=5265499e-7279-4fc8-a782-3ca4a385090c&s=beauty&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
      features:
        "CASDRE Flower Bride Wedding Hair Vine Pearl Bridal Headpiece Leaf Hair Accessories Hair Piece for Women and Girls (A Silver)",

      specifications: {
        Color: "A Silver",
        AgeRangeDescription: "Adult",
        Occasion: "Wedding",
        Material: "Crystal",
        NumberOfItems: "1",
      },
    },
    {
      id: 63,
      name: "2Pcs Rhinestone",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳800"],
      oldPrice: [""],
      image: "/img/ms192.jpg",
      images: ["/img/ms192.jpg", "/img/ms193.jpg", "/img/ms194.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/AOREAS-Rhinestone-Barrettes-Bridesmaid-Accessories/dp/B0CPF317RZ/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRS9tf8vdOO3AEsCnIrkObsjYV6U2rhEXoqcq4PQvetQ0H7R9RdDxe9GL9kysf3qcZEzpR0fqxkbuOAuCYsyv0Ue_XE7G5D5gP48zavXkm-MAZquLnu1gNv8iQvNQ3catx1DK79d8c9Ej7mWfJ5MosupTcljoYWfHfgK4GjlTrgy2q4_9spQyHddRkHMZa08kgsYfTjjYSm4xYjFM4EHBeEfeysRZnJKbZyJocfscgh7lfvXza_DfOuQfgiHZHXj5js.Jj4gB2nnSqrwlaxx_GpcRalqPL9jhYaAcdGY6wIi0xQ&dib_tag=se&keywords=prom%2Bhair%2Baccessories&qid=1745858101&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
      features:
        "2Pcs Rhinestone Hair Clips Crystal Pearl Hair Barrettes for Women Wedding Bridesmaid Flower Hair Accessories Jewerly for Bridal,Wedding,Party,Prom (Gold Gold)",

      specifications: {
        Brand: "AOREAS",
        HairType: "All",
        Color: "Gold+Gold",
        AgeRangeDescription: "Adult",
        Style: "Classic",
      },
    },
    {
      id: 64,
      name: "10 Pcs Mini Pearl ",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳700"],
      oldPrice: [""],
      image: "/img/ms195.jpg",
      images: ["/img/ms195.jpg", "/img/ms196.jpg", "/img/ms197.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Flower-Design-Artificial-Decorative-Accessories/dp/B09HGVGMS9/ref=sr_1_7?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRS9tf8vdOO3AEsCnIrkObsjYV6U2rhEXoqcq4PQvetQ0H7R9RdDxe9GL9kysf3qcZEzpR0fqxkbuOAuCYsyv0Ue_XE7G5D5gP48zavXkm-MAZquLnu1gNv8iQvNQ3catx1DK79d8c9Ej7mWfJ5MosupTcljoYWfHfgK4GjlTrgy2q4_9spQyHddRkHMZa08kgsYfTjjYSm4xYjFM4EHBeEfeysRZnJKbZyJocfscgh7lfvXza_DfOuQfgiHZHXj5js.Jj4gB2nnSqrwlaxx_GpcRalqPL9jhYaAcdGY6wIi0xQ&dib_tag=se&keywords=prom+hair+accessories&qid=1745858101&sr=8-7",
      features:
        "10 Pcs Small Mini Pearl Claw Clips with Flower Design, Sweet Artificial Bangs Clips Decorative Hair Accessories for Women Girls",

      specifications: {
        Brand: "LINXI",
        HairType: "curly, All",
        Color: "Golden,White",
        AgeRangeDescription: "Adult",
        Style: "Elegant",
      },
    },

    {
      id: 65,
      name: "6 Pcs Bridal Hair Pins",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms198.jpg",
      images: ["/img/ms198.jpg", "/img/ms199.jpg", "/img/ms200.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Gorgeous-Rhinestone-Wedding-Bridesmaids-Birthday/dp/B0DPJWN1XK/ref=sr_1_17_sspa?dib=eyJ2IjoiMSJ9.JFon8naOML27DvdSfRZj_Ydp5Ea7Hd_EfViqfmKfaRS61faK0P30tw1L5ie2le8i7hmnOCh5LuOeK7iEp6Ra0jVMC2XI7C6y8FYW4lfga03OslbP0QhN3Zvh-4ZQ9g1GwTC9SMJWEcseVFq2CjnRciAtUUePJ8JyRUeBf-qzY8WaleBVxQUHd9RfiRQd-damTcljoYWfHfgK4GjlTrgy2q4_9spQyHddRkHMZa08kgvLYj7-dkrH2xWzcJihaqCWTxFbXGFj307iijAfVej99N58QiX-5ZJJtvdmj8-Iaqo._w7UihDKKohtD00WkAzUushqBihUMA31eNB4CFnNDyA&dib_tag=se&keywords=prom+hair+accessories&qid=1745862400&sr=8-17-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
      features:
        "6 Pcs Bridal Hair Pins, Gorgeous Rhinestone Wedding Hair Clips with Crystal Pearl Flowers, Silver Leaf Wedding Hairpin Bride Hair Clip for Women Bridesmaids Party Dance Prom Birthday Favors",

      specifications: {
        Brand: "WYVAS",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Style: "Modern",
      },
    },
    {
      id: 66,
      name: "4Pcs Rhinestone",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳850"],
      oldPrice: [""],
      image: "/img/ms201.jpg",
      images: ["/img/ms201.jpg", "/img/ms202.jpg", "/img/ms203.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/Rhinestone-Barrettes-Hairpins-Communion-Accessories/dp/B0DL5XFYSF/ref=pd_ci_mcx_pspc_dp_2_i_1?pd_rd_w=sBdFw&content-id=amzn1.sym.cd152278-debd-42b9-91b9-6f271389fda7&pf_rd_p=cd152278-debd-42b9-91b9-6f271389fda7&pf_rd_r=ZJ8ZG2G95AEE53Z5KWB4&pd_rd_wg=yX7Pi&pd_rd_r=7bcee4fc-e8ad-41de-a0bd-7d272616366a&pd_rd_i=B0DL5XFYSF",
      features:
        "4Pcs Rhinestone Hair Clips Silver Gold Crystal Prom Barrettes Fancy Flower French Hairpins Sparkle Wedding Prom First Communion Accessories for Women Girls Bridal Thick Long Hair",

      specifications: {
        Brand: "Evherv",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Style: "Classic",
      },
    },
    {
      id: 67,
      name: "SWEETV Crystal",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳750"],
      oldPrice: [""],
      image: "/img/ms204.jpg",
      images: ["/img/ms204.jpg", "/img/ms205.jpg", "/img/ms206.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CRVF49P7/ref=sspa_dk_detail_5?psc=1&pd_rd_i=B0CRVF49P7&pd_rd_w=dcq8f&content-id=amzn1.sym.85ceacba-39b1-4243-8f28-2e014f9512c7&pf_rd_p=85ceacba-39b1-4243-8f28-2e014f9512c7&pf_rd_r=059XXZXEG5V67NQPXEWG&pd_rd_wg=TbnPh&pd_rd_r=31059446-49d0-4422-9bde-277ffb38385d&s=beauty&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",
      features:
        "SWEETV Crystal Bride Wedding Hair Comb Silver Rhinestone Hair Pieces Leaf Bridal Side Combs Headpiece for Women and Girls",

      specifications: {
        Material: "Metal",
        Brand: "SWEETV",
        HairType: "All",
        Size: "6.29*12.59 Inch",
        PowerSource: "Manual",
      },
    },
    {
      id: 68,
      name: "SWEETV Wedding",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳760"],
      oldPrice: [""],
      image: "/img/ms207.jpg",
      images: ["/img/ms207.jpg", "/img/ms208.jpg", "/img/ms209.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0DS57VLCX/ref=sspa_dk_detail_2?pd_rd_i=B0DS57VLCX&pd_rd_w=Bo3f7&content-id=amzn1.sym.e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_p=e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_r=E5SNYXGWM5SE711FHC5E&pd_rd_wg=NjTH5&pd_rd_r=73d8dfaf-b0f6-41a7-9598-b9012f7655d4&s=beauty&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
      features:
        "SWEETV Wedding Hair Comb Bridal Hair Pieces Rhinestone Bride Hair Clips Crystal Bridal Headband Elegant Hair Vine Sparkling Wedding Hair Accessories for Women and Girls",

      specifications: {
        Brand: "SWEETV",
        Color: "Silver-B",
        AgeRangeDescription: "Adult",
        UnitCount: "1.0 Count",
        NumberOfItems: "1",
      },
    },
    {
      id: 69,
      name: "SWEETV Bridal",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳870"],
      oldPrice: [""],
      image: "/img/ms210.jpg",
      images: ["/img/ms210.jpg", "/img/ms211.jpg", "/img/ms212.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CRV4F78H/ref=sspa_dk_detail_1?pd_rd_i=B0CRV4F78H&pd_rd_w=Bo3f7&content-id=amzn1.sym.e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_p=e1bd46f6-106d-4001-8a1f-c5226d6c67ac&pf_rd_r=E5SNYXGWM5SE711FHC5E&pd_rd_wg=NjTH5&pd_rd_r=73d8dfaf-b0f6-41a7-9598-b9012f7655d4&s=beauty&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
      features:
        "SWEETV Bridal Hair Comb, Rhinestone & Alloy Wedding Hair Accessories, Pearl Bridal Hair Pieces, Hair Side Comb for Women and Girls",

      specifications: {
        Brand: "SWEETV",
        HairType: "All",
        Size: "5.9*2.36 Inch",
        PowerSource: "Manual",
        NumberOfItems: "1",
      },
    },
  ];

  // Filter products based on the selected filter
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
        <h2>Hairstyles</h2>
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {[].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
              disabled={filterLoading}
              style={{
                fontFamily: "'Montserrat', sans-serif", // Add your desired font family here
                fontWeight: selectedFilter === filter ? "bold" : "bold",
                // Add any other consistent styles you want to maintain
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
                    {product.price}{" "}
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
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

export default Hairstyles;
