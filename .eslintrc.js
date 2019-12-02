module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 'es5',
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "array-callback-return": 0,
    "arrow-body-style": [0, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "consistent-return": 0,
    "func-names": 0,
    "global-require": 0,
    "import/default": 2,
    "import/export": 2,
    "import/extensions": 0,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": 0,
    "import/no-unresolved": [
      0,
      {
        amd: true,
        commonjs: true
      }
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "external",
          "internal",
          "parent",
          "builtin",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ],
    "import/prefer-default-export": 0,
    indent: "off",
    "lines-between-class-members": 1,
    "max-len": [0, 100],
    "no-mixed-operators": [
      "error",
      {
        allowSamePrecedence: true,
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ]
      }
    ],
    "no-new": 0,
    "no-param-reassign": 0,
    "no-prototype-builtins": 0,
    "no-return-assign": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-useless-escape": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": ["warn", "never"],
    "prefer-destructuring": 0,
    "prettier/prettier": "warn",
    semi: [1, "always"]
  }
};
