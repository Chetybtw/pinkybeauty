/* JavaScript */
const barraNavButton = document.querySelector('.barra-nav-button');
const barraNavResponsive = document.querySelector('.barra-nav-responsive');

barraNavButton.addEventListener('click', () => {
    barraNavResponsive.classList.toggle('active');
});

// Cerrar el menú responsive al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-li-responsive a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        barraNavResponsive.classList.remove('active');
    });
});

const products = [
    {
      productName: "Dior Addict Lip Glow Oil",
      price: 960,
      img: "/imagenes/productos/Dior Addict Lip Glow Oil- Nourishing Glossy Lip Oil color-1.jpg",
      category: 'makeup'
    },
    {
        productName: "DIOR Backstage Rosy Glow Blush",
        price: 1000,
        img: "/imagenes/productos/DIOR Backstage Rosy Glow Blush 012 ROSEWOOD-color1.jpg",
        category: 'todos'
      },
    {
      productName: "DIOR Backstage Glow Face Palette",
      price: 1150,
      img: "/imagenes/productos/DIOR Backstage Glow Face Palette-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Dior Forever Velvet Veil",
      price: 1330,
      img: "/imagenes/productos/Dior Forever Velvet Veil.jpg",
      category: 'makeup'
    },
    {
      productName: "Lip Sugar Scrub",
      price: 960,
      img: "/imagenes/productos/Lip Sugar Scrub.jpg",
      category: 'makeup'
    },
    {
      productName: "Gel limpiador para piel grasa",
      price: 960,
      img: "/imagenes/productos/Gel limpiador para piel grasa.jpg",
      category: 'skincare'
    },
    
    {
      productName: "Mascara de pestañas",
      price: 820,
      img: "/imagenes/productos/Mascara de pestañas-DIORSHOW-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Dior Backstage Face and Body Primer",
      price: 940,
      img: "/imagenes/productos/Dior Backstage Face and Body Primer.jpg",
      category: 'makeup'
    },
    {
      productName: "Soft Pinch Luminous Powder Blush",
      price: 590,
      img: "/imagenes/productos/Soft Pinch Luminous Powder Blush-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Soft Pinch Liquid Blush",
      price: 525,
      img: "/imagenes/productos/Soft Pinch Liquid Blush-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Effaclar Serum Anti Imperfecciones",
      price: 570,
      img: "/imagenes/productos/Effaclar Serum Anti-Imperfecciones.jpg",
      category: 'skincare'
    },
    
    {
      productName: "Warm Wishes Effortless Bronzer Stick",
      price: 590,
      img: "/imagenes/productos/Warm Wishes Effortless Bronzer Stick-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Perfect Universal Volumizing Mascara",
      price: 460,
      img: "/imagenes/productos/Perfect Strokeo Universal Volumizing.jpg",
      category: 'makeup'
    },
    {
      productName: "Positive Light Under Eye Brightener",
      price: 550,
      img: "/imagenes/productos/Positive Light Under Eye Brightener-color2.jpg",
      category: 'makeup'
    },
    {
      productName: "Puffy Toiletry bag",
      price: 850,
      img: "/imagenes/productos/Puffy Toiletry bag.jpg",
      category: 'todos'
    },
    {
      productName: "Anti imperfecciones Effaclar Duo FPS 30",
      price: 560,
      img: "/imagenes/productos/Anti imperfecciones Effaclar Duo FPS 30.jpg",
      category: 'skincare'
    },
    {
      productName: "Pawfecr Stroked Mascara Dog Toy",
      price: 390,
      img: "/imagenes/productos/Pawfecr Stroked Mascara Dog Toy.jpg",
      category: 'makeup'
    },
    {
      productName: "Find Comfort Hydrating Hand Cream",
      price: 420,
      img: "/imagenes/productos/Find Comfort Hydrating Hand Cream.jpg",
      category: 'skincare'
    },
    {
      productName: "Anthelios Bruma Invisible FPS 50",
      price: 300,
      img: "/imagenes/productos/Anthelios Bruma Invisible FPS 50.jpg",
      category: 'skincare'
    },
    
    {
      productName: "Liquid Touch Weightless Foundation",
      price: 675,
      img: "/imagenes/productos/Liquid Touch Weightless Foundation-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Always an Optimist Four in 1 Mist",
      price: 610,
      img: "/imagenes/productos/Always an Optimist 4 in 1 Mist.jpg",
      category: 'skincare'
    },
    {
      productName: "Urban Decay Naked Heat Palette",
      price: 1063,
      img: "/imagenes/productos/Urban Decay Naked Heat Palette.jpg",
      category: 'makeup'
    },
    {
      productName: "Efflaclar Gel Microexfoliante Limpiador",
      price: 480,
      img: "/imagenes/productos/Efflaclar Gel Microexfoliante Limpiador.jpg",
      category: 'skincare'
    },
    
    {
      productName: "moondust eyeshadow",
      price: 550,
      img: "/imagenes/productos/24-7 moondust eyeshadow.jpg",
      category: 'makeup'
    },
    {
      productName: "All nightery lasting makeup spray",
      price: 673,
      img: "/imagenes/productos/All nightery long lasting makeup setting.jpg",
      category: 'makeup'
    },
    {
      productName: "Stay Naked Quickle Corrector Base",
      price: 600,
      img: "/imagenes/productos/Stay Naked Quickle (Corrector-Base).jpg",
      category: 'makeup'
    },
    {
      productName: "Naked Palette Metal Mania",
      price: 1320,
      img: "/imagenes/productos/Naked Palette Metal Mania.jpg",
      category: 'makeup'
    },
    {
      productName: "Vice Lip Bond ",
      price: 590,
      img: "/imagenes/productos/Vice Lip Bond-color1.jpg",
      category: 'makeup'
    },
    {
      productName: "Stay Naked Threesome",
      price: 930,
      img: "/imagenes/productos/Stay Naked Threesome.jpg",
      category: 'makeup'
    },
    {
      productName: "Slick Day brow",
      price: 670,
      img: "/imagenes/productos/Slick Day brow.jpg",
      category: 'makeup'
    },
    {
      productName: "Protector Solar",
      price: 370,
      img: "/imagenes/productos/Protector Solar.jpg",
      category: 'skincare'
    },
    {
      productName: "Serum Acido Hialuronico con Vitamina B5",
      price: 650,
      img: "/imagenes/productos/Serum Acido Hialuronico con Vitamina B5.jpg",
      category: 'skincare'
    },
    
    {
      productName: "Blockbuster MAC",
      price: 3040,
      img: "/imagenes/productos/Blockbuster MAC.jpg",
      category: 'makeup'
    },
    {
      productName: "Silky matte lipstick",
      price: 550,
      img: "/imagenes/productos/Silky matte lipstick.jpg",
      category: 'makeup'
    },
    {
      productName: "Corrector liquid studio fix 24hrs ",
      price: 540,
      img: "/imagenes/productos/Corrector liquid studio fix 24-hour.jpg",
      category: 'makeup'
    },
    {
      productName: "Base en polvo Studio fix",
      price: 750,
      img: "/imagenes/productos/Base en polvo Studio fix.jpg",
      category: 'makeup'
    },
    {
      productName: "Spay fijador fix it",
      price: 650,
      img: "/imagenes/productos/Spay fijador fix it.jpg",
      category: 'makeup'
    },
    {
      productName: "Mela B3 Serum Antimanchas",
      price: 860,
      img: "/imagenes/productos/Mela B3 Serum Antimanchas.jpg",
      category: 'skincare'
    },
    {
      productName: "Agua Termal Para Piel Sensible",
      price: 440,
      img: "/imagenes/productos/Agua Termal Para Piel Sensible.jpg",
      category: 'skincare'
    },
    {
      productName: "Powder blush",
      price: 650,
      img: "/imagenes/productos/Powder blush.jpg",
      category: 'makeup'
    },
    {
      productName: "Eye brows big boost fibre girl",
      price: 390,
      img: "/imagenes/productos/Eye brows big boost fibre girl.jpg",
      category: 'makeup'
    },
   {
      productName: "Superstay lumi-matte base",
      price: 225,
      img: "/imagenes/productos/Superstay lumi-matte base.jpg",
      category: 'makeup'
    },
    {
      productName: "Efflacar Agua Micelar",
      price: 590,
      img: "/imagenes/productos/Efflacar Agua Micelar.jpg",
      category: 'skincare'
    },
  ]
  
  const displayProducts = (productsToShow) => {
    const shopContent = document.getElementById("shopContent")
  
    shopContent.innerHTML = ""
    productsToShow.forEach(product => {
      const div = document.createElement("div")
      div.className = 'productos-home'
      div.innerHTML = `
        <img src="${product.img}" alt="algun-alt">
        <h3 class="titulo-producto">${product.productName}</h3>
        <p class="precio-producto"> $${product.price}</p>
      `
      shopContent.append(div)
    })
  }
  // Filtrar productos por categoría "skincare" y mostrarlos
const skincareProducts = products.filter(product => product.category === 'skincare');
displayProducts(skincareProducts);