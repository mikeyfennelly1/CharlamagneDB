// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App
    "./src/App.jsx",
    // dashboard
    "./src/dashboard/dashboard.jsx",
    "./src/dashboard/dashboardNavbar.jsx",
    "./src/dashboard/dashboardProjectBar.jsx",
    "./src/dashboard/dashboardMain.jsx",
    // docs
    "./src/docs/docsPage1.jsx",
      // docs/CreateAnAccount/tabs-contents
      "./src/docs/documents/CreateAnAccount/tabs-contents/AtlasCLI.jsx",
      "./src/docs/documents/CreateAnAccount/tabs-contents/AtlasUI.jsx",
      // docs/doc-components
      "./src/docs/doc-components/note.jsx",
      "./src/docs/doc-components/codeSnippet.jsx",
      "./src/docs/doc-components/tip.jsx",
      "./src/docs/doc-components/inlineCodeSnippet.jsx",
      "./src/docs/doc-components/tabs/TitlesBar.jsx",
      "./src/docs/doc-components/tabs/TabsContentSection.jsx",
    // landing-page
    "./src/landing-page/2.jsx",
    "./src/landing-page/4.jsx",
    "./src/landing-page/5.jsx",
    "./src/landing-page/6.jsx",
    "./src/landing-page/7.jsx",
    "./src/landing-page/8.jsx",
    "./src/landing-page/Hero.jsx",
    "./src/landing-page/terminal.jsx",
    // loco
    "./src/loco/loco.jsx",
    "./src/loco/Loco-serverSVG.jsx",
    "./src/loco/loco-4.jsx",
    "./src/loco/Hero-Loco.jsx",
    "./src/loco/loco-2.jsx",
    // login
    "./src/login/login.jsx",
    // misc
    "./src/misc/Navbar.jsx",
    "./src/misc/heroSVG.jsx",
    "./src/misc/serverSVG.jsx",
    // pricing
    "./src/pricing/pricing1.jsx",
    "./src/pricing/pricingCards-Enterprise.jsx",
    "./src/pricing/pricingCards-Loco.jsx",
    "./src/pricing/pricing2.jsx",

  ],
  theme: {
    extend: {
      colors: {
        mainPink: '#DC00FF',
      },
      scale: {
        '300': '3'
      },
    },
  },
  plugins: [],
}

