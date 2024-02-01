// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // App
    "./src/App.jsx",
    // dashboard
    "./src/dashboard/dashboard.jsx",
        // dashboard/dashboard-items/
        "./src/dashboard/dashboard-items/dashboardNavbar.jsx",
        "./src/dashboard/dashboard-items/dashboardProjectBar.jsx",
        "./src/dashboard/dashboard-items/dashboardMain.jsx",
        "./src/dashboard/dashboard-items/dashboardSidebar.jsx",
        // dashboard/dashboard-items/dashboardMainItems
        "./src/dashboard/dashboard-items/dashboardMainItems/Advanced.jsx",
        "./src/dashboard/dashboard-items/dashboardMainItems/Backup.jsx",
        "./src/dashboard/dashboard-items/dashboardMainItems/DatabaseAccess.jsx",
        "./src/dashboard/dashboard-items/dashboardMainItems/Databases.jsx",
        "./src/dashboard/dashboard-items/dashboardMainItems/NetworkAccess.jsx",
        "./src/dashboard/dashboard-items/dashboardMainItems/Overview.jsx",
        // dashboard/dashboard-items/dashboardMainItems/Quickstart
            "./src/dashboard/dashboard-items/dashboardMainItems/Quickstart.jsx",
    // docs 
    "./src/docs/docsPage1.jsx",
        // docs/CreateAnAccount/tabs-contents
        "./src/docs/documents/CreateAnAccount/tabs-contents/LocoCLI.jsx",
        "./src/docs/documents/CreateAnAccount/tabs-contents/LocoUI.jsx",
        // docs/documents/DeployAFreeCluster
        "./src/docs/documents/DeployAFreeCluster/DeployAFreeCluster.jsx",
        // docs/doc-components
        "./src/docs/doc-components/note.jsx",
        "./src/docs/doc-components/codeSnippet.jsx",
        "./src/docs/doc-components/tip.jsx",
        "./src/docs/doc-components/important.jsx",
        "./src/docs/doc-components/inlineCodeSnippet.jsx",
        "./src/docs/doc-components/tabs/TitlesBar.jsx",
        "./src/docs/doc-components/tabs/TabsContentSection.jsx",
    // landing-page
    "./src/landing-page/betEverythingOnCDB.jsx",
    "./src/landing-page/blazingFast.jsx",
    "./src/landing-page/blazingFastText.jsx",
    "./src/landing-page/buildAppsOfTomorrow.jsx",
    "./src/landing-page/companiesUsingCDB.jsx",
    "./src/landing-page/footer.jsx",
    "./src/landing-page/Hero.jsx",
    "./src/landing-page/serverAndGraph.jsx",
    "./src/landing-page/terminal.jsx",
    // guided-tour
    "./src/guided-tour/tour.jsx",
    // loco
    "./src/loco/loco.jsx",
    "./src/loco/Loco-serverSVG.jsx",
    "./src/loco/loco-4.jsx",
    "./src/loco/Hero-Loco.jsx",
    "./src/loco/loco-2.jsx",
    // login
    "./src/login/login.jsx",
    // signup
    "./src/signup/SignUp.jsx",
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

