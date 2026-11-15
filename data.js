// ==========================================================================
// ALITAS MZ - BANCO DE DADOS DO MENU E CONFIGURAÇÕES
// Estrutura modular para permitir adicionar facilmente novos pratos, preços e descrições
// ==========================================================================

const ALITAS_DATA = {
  restaurant: {
    name: "ALITAS",
    tagline: "Sabor Que Dá Vontade de Voltar",
    handle: "@alitasmz",
    instagramUrl: "https://www.instagram.com/alitasmz/",
    hours: "Segunda a Domingo: 11h00 – 22h00",
    badge: "100% Halal حلال",
    description: "Referência gastronómica em Maputo e Matola com os melhores hambúrgueres artesanais, burritos mexicanos autênticos, asinhas crocantes e opções para toda a família."
  },

  branches: [
    {
      id: "maputo",
      name: "Alitas Maputo (Central / Resotel)",
      address: "Avenida Karl Marx / Próximo ao Resotel, Maputo",
      city: "Maputo",
      phones: ["+258 84 710 4132", "+258 86 810 4132"],
      whatsapp: "258847104132",
      hours: "11h00 - 22h00",
      mapQuery: "Avenida+Karl+Marx+Maputo+Mozambique",
      badge: "Sede Principal"
    },
    {
      id: "ronil",
      name: "Alitas Ronil",
      address: "Avenida de Moçambique, Ronil, Maputo",
      city: "Maputo",
      phones: ["+258 85 792 4173", "+258 87 012 4173"],
      whatsapp: "258857924173",
      hours: "11h00 - 22h00",
      mapQuery: "Avenida+de+Mocambique+Maputo+Mozambique",
      badge: "Drive & Takeaway"
    },
    {
      id: "matola",
      name: "Alitas Matola",
      address: "Matola Cidade, Matola",
      city: "Matola",
      phones: ["+258 84 391 0408", "+258 87 921 0408"],
      whatsapp: "258843910408",
      hours: "11h00 - 22h00",
      mapQuery: "Matola+Mozambique",
      badge: "Zona Nobre Matola"
    },
    {
      id: "jardim",
      name: "Alitas Jardim",
      address: "Bairro do Jardim / Estrada Nacional, Maputo",
      city: "Maputo",
      phones: ["+258 84 519 1537", "+258 87 291 8662"],
      whatsapp: "258845191537",
      hours: "11h00 - 22h00",
      mapQuery: "Bairro+do+Jardim+Maputo+Mozambique",
      badge: "Atendimento Rápido"
    }
  ],

  categories: [
    { id: "all", name: "Todos os Pratos", icon: "utensils" },
    { id: "hamburgueres", name: "Hambúrgueres", icon: "burger" },
    { id: "mexicanos", name: "Hambúrgueres Mexicanos", icon: "flame" },
    { id: "burritos", name: "Burritos Mexicanos", icon: "wrap" },
    { id: "burrito-carne", name: "Burrito de Carne", icon: "beef" },
    { id: "sanduiches", name: "Sanduíches", icon: "sandwich" },
    { id: "peixe", name: "Peixe", icon: "fish" },
    { id: "infantil", name: "Hambúrgueres Infantis", icon: "smile" },
    { id: "alitas-wings", name: "Alitas & Wings", icon: "drumstick" }
  ],

  // Itens do menu estruturados com flexibilidade total para preços e detalhes futuros
  menuItems: [
    {
      id: 1,
      title: "Hambúrguer Clássico Alitas",
      category: "hamburgueres",
      categoryLabel: "Hambúrgueres",
      description: "Carne bovina suculenta grelhada na chama viva, queijo derretido, alface fresca, tomate selecionado e molho especial exclusivo da casa em pão brioche tostado.",
      tags: ["Mais Pedido", "100% Halal"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Hambúrguer Mexicano Picante",
      category: "mexicanos",
      categoryLabel: "Hambúrgueres Mexicanos",
      description: "Explosão de temperos ao estilo mexicano com jalapeños fatiados, guacamole cremoso artesanal, queijo cheddar derretido e molho picante especial.",
      tags: ["Estilo Mexicano", "Spicy 🔥"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Burrito Mexicano Especial",
      category: "burritos",
      categoryLabel: "Burritos Mexicanos",
      description: "Tortilla de trigo generosamente recheada com feijão temperado, arroz mexicano com ervas frescas, pico de gallo vibrante, mix de queijos e sour cream da casa.",
      tags: ["Autêntico", "Generoso"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 4,
      title: "Burrito de Carne (Beef Burrito)",
      category: "burrito-carne",
      categoryLabel: "Burrito de Carne",
      description: "Carne bovina desfiada marinada com especiarias secretas, queijo derretido, feijão especial e molho barbecue rústico envolto em tortilla macia e dourada na chapa.",
      tags: ["Destaque da Casa", "Carne Suculenta"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 5,
      title: "Sanduíche de Frango Crocante",
      category: "sanduiches",
      categoryLabel: "Sanduíches",
      description: "Filé de frango empanado ultra crocante com tempero especial, maionese temperada, picles estaladiços e salada crocante no pão macio.",
      tags: ["Super Crocante", "Halal"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 6,
      title: "Prato Especial de Peixe Dourado",
      category: "peixe",
      categoryLabel: "Peixe",
      description: "Filé de peixe fresco em crosta dourada e crocante, servido com batatas fritas estaladiças, molho tártaro caseiro com toque de limão fresco e salada da época.",
      tags: ["Fresco do Dia", "Leve & Saboroso"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 7,
      title: "Hambúrguer Infantil (Kids Meal)",
      category: "infantil",
      categoryLabel: "Hambúrgueres Infantis",
      description: "Mini hambúrguer macio com carne selecionada 100% bovina, queijo suave derretido, pão leve e fofo, acompanhado de porção de batatinhas douradas crocantes.",
      tags: ["Para os Mais Pequenos", "Kids Fun"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 8,
      title: "Alitas Wings Douradas & Molhos",
      category: "alitas-wings",
      categoryLabel: "Alitas & Wings",
      description: "As famosas asinhas crocantes por fora e tenras por dentro, banhadas nos molhos signature da Alitas: BBQ Defumado, Buffalo Picante ou Mel & Mostarda.",
      tags: ["Assinatura da Casa", "Wings Lovers"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 9,
      title: "Double Smash Bacon Burger",
      category: "hamburgueres",
      categoryLabel: "Hambúrgueres",
      description: "Dois smash burgers com crostinha caramelizada, queijo cheddar duplo, fatias crocantes e cebola caramelizada artesanal.",
      tags: ["Double Burger", "Sabor Intenso"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1583032015879-bf7280bfa15c?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 10,
      title: "Burrito Veggie Mexicano",
      category: "burritos",
      categoryLabel: "Burritos Mexicanos",
      description: "Combinação colorida de vegetais grelhados na chapa, guacamole fresco, feijão preto temperado, milho doce e arroz temperado.",
      tags: ["Opção Vegetariana", "Leve & Fresco"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1640974866657-6953ca0997f3?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 11,
      title: "Sanduíche Philly Steak Alitas",
      category: "sanduiches",
      categoryLabel: "Sanduíches",
      description: "Tiras macias de carne salteadas com pimentos aromáticos, cebola tostada e queijo abundante fundido numa baguete artesanal tostada.",
      tags: ["Clássico Supremo", "Suculência"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 12,
      title: "Fish Burger com Molho Tártaro",
      category: "peixe",
      categoryLabel: "Peixe",
      description: "Hambúrguer de filé de peixe crocante em pão brioche dourado, alface americana fresca e generosa camada de molho tártaro especial.",
      tags: ["Peixe Crocante", "Menu Especial"],
      priceFormatted: "Consulte o Menu Oficial",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ],

  gallery: [
    {
      title: "Hambúrgueres Artesanais Feitos na Hora",
      category: "Hambúrgueres",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      caption: "Ingredientes frescos e sabor incomparável grelhado ao ponto perfeito."
    },
    {
      title: "Burrito Mexicano com Pico de Gallo",
      category: "Mexicano",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
      caption: "A autêntica explosão de sabores Tex-Mex no coração de Maputo."
    },
    {
      title: "Asas de Frango Crocantes Alitas",
      category: "Alitas Wings",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      caption: "Crocantes por fora, suculentas por dentro com temperos secretos."
    },
    {
      title: "Batatas Fritas Estaladiças e Rústicas",
      category: "Acompanhamentos",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      caption: "O par perfeito para qualquer hambúrguer ou burrito da ALITAS."
    },
    {
      title: "Sanduíches e Wraps Gourmet",
      category: "Sanduíches",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
      caption: "Praticidade, frescura e generosidade para a sua refeição."
    },
    {
      title: "Ambiente Descontraído e Familiar",
      category: "Experiência",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      caption: "Espaços modernos e acolhedores para reunir amigos e família."
    }
  ],

  instagramPosts: [
    {
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
      likes: "1,248",
      comments: "84",
      caption: "Aquele hambúrguer que faz o seu dia valer a pena! Já pediu o seu hoje? 🔥🍔 #AlitasMZ #Maputo"
    },
    {
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
      likes: "982",
      comments: "56",
      caption: "Burritos recheados de puro sabor e ingredientes de primeira qualidade! 🌯🌶️ #TexMexAlitas"
    },
    {
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
      likes: "1,530",
      comments: "112",
      caption: "Alitas crocantes e bem temperadas. Impossível comer só uma! 🍗✨ #AlitasWings"
    },
    {
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
      likes: "874",
      comments: "43",
      caption: "Seja no almoço ou no jantar, o sabor do Alitas marca presença na sua mesa! 💛🛵 #MaputoFood"
    }
  ]
};
