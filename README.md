# ALITAS MZ — Landing Page Oficial

Landing page moderna, premium, responsiva e de alto impacto visual desenvolvida para a marca gastronómica **ALITAS MZ**, presente em Maputo e Matola, Moçambique.

---

## 🌟 Características Principais

- **Identidade Visual Marcante**: Inspirada no perfil oficial [@alitasmz](https://www.instagram.com/alitasmz/), utilizando contrastes entre preto carvão, vermelho brasa, amarelo ouro e verde menta/halal.
- **Tipografia Premium**: Google Fonts (`Outfit` para títulos impactantes e `Plus Jakarta Sans` para leitura nítida).
- **100% Responsiva**: Experiência fluida em smartphones, tablets, notebooks e ecrãs widescreen.
- **Estrutura Modular (`data.js`)**: Todos os pratos, categorias, filiais, telefones e links do Instagram estão centralizados num único ficheiro de dados para fácil atualização de preços e novos produtos sem mexer no design.
- **Menu Digital & Filtro em Tempo Real**: Filtros por categoria e modal com motor de busca instantâneo.
- **QR Code Interativo**: Secção de alto destaque com QR Code vetorial e botão para copiar link direto.
- **Atendimento e Pedidos via WhatsApp**: Integração direta com mensagens pré-formatadas para as 4 unidades:
  - Maputo Central (Karl Marx / Resotel)
  - Ronil (Avenida de Moçambique)
  - Matola
  - Jardim
- **Mapa Interativo**: Seleção de filial que atualiza o Google Maps em tempo real com botão de rotas ("Como Chegar").
- **Galeria Gastronómica com Lightbox**: Imagens em alta resolução com ampliação em ecrã inteiro.
- **Feed Estilo Instagram**: Secção dedicada para impulsionar seguidores no perfil oficial `@alitasmz`.

---

## 📁 Estrutura de Ficheiros

```text
├── index.html        # Estrutura semântica e acessível (HTML5)
├── styles.css        # Folha de estilos moderna com variáveis CSS e micro-animações
├── script.js         # Lógica da interface, modais, filtros e integração WhatsApp
├── data.js           # Base de dados modular de pratos, filiais e redes sociais
└── README.md         # Documentação de uso e manutenção
```

---

## 🛠️ Como Adicionar Novos Pratos e Preços

Abra o ficheiro [data.js](file:///c:/V-F/markting/Alitas/data.js) e adicione ou edite qualquer item na lista `menuItems`:

```javascript
{
  id: 13,
  title: "Nome do Novo Prato",
  category: "hamburgueres", // id da categoria correspondente
  categoryLabel: "Hambúrgueres",
  description: "Descrição detalhada e apetitosa dos ingredientes.",
  tags: ["Novidade", "100% Halal"],
  priceFormatted: "450 MT", // Preço oficial quando disponível
  image: "URL_DA_FOTO_OU_LOCAL",
  featured: true
}
```

---

## 🚀 Como Executar

Basta abrir o ficheiro [index.html](file:///c:/V-F/markting/Alitas/index.html) em qualquer navegador web moderno.
