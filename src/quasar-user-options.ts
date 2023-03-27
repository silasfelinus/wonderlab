import type { QuasarLanguage, QuasarIconSet } from 'quasar';

const quasarUserOptions = {
  lang: QuasarLanguage['en-us'],
  iconSet: QuasarIconSet['material-icons'],
  components: {},
  directives: {},
  plugins: {},
  screen: {
    xs: 0,
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920,
  },
  autoImportComponentCase: 'kebab',
  autoImportDirectiveCase: 'kebab',
};

export default quasarUserOptions;