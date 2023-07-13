/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html"],
   darkMode: "class",
   theme: {
      extend: {
         screen: {
            xs: "475px",
         },
         colors: {
            clifford: "#da373d",
         },
         fontFamily: {
            jakarta: ["Plus Jakarta Sans"],
            poppins: ["Poppins"],
         },
         spacing: {
            13: "3.25rem",
         },
      },
   },
   plugins: [],
};

