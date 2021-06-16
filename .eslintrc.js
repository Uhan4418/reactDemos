module.exports = {
  // extends: [require.resolve('@umijs/fabric/dist/eslint')],
  extends: [require.resolve('eslint/bin/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
  // root: true,
  //   parserOptions: {
  //       sourceType: 'module'
  //   },
  //   // required to lint *.vue files
  //   plugins: [
  //       'html'
  //   ],
  //   // add your custom rules here
  //   'rules': {
  //       // allow debugger during development
  //       'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  //   }
};
