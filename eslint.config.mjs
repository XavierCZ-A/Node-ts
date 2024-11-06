import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  // Archivos a incluir
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    ignores: ["node_modules/"], // Excluir node_modules
    languageOptions: {
      parser: tsParser, // Usar el parser de TypeScript
      globals: globals.browser, // Permitir globales del navegador si estás trabajando con frontend
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // Reglas recomendadas de TypeScript
      ...tseslint.configs.recommended.rules,

      // Buenas prácticas generales
      "no-unused-vars": "warn", // Advertencia por variables no usadas
      "import/order": ["error", { // Asegura el orden correcto de imports
        "groups": [["builtin", "external", "internal"]],
        "newlines-between": "always"
      }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignora variables que empiecen con "_"
      "@typescript-eslint/explicit-module-boundary-types": "off", // Desactiva la regla de tipado explícito en las funciones exportadas
    },
  },
];

// import globals from "globals";
// import tseslint from "typescript-eslint";


// export default [
//   { files: ["**/*.{js,mjs,cjs,ts}"] },
//   { languageOptions: { globals: globals.browser } },
//   ...tseslint.configs.recommended,
// ];
