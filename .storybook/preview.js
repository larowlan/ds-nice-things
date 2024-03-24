/** @type { import('@storybook/html').Preview } */
import '../src/base/reset.css';
import '../src/base/base.css';
import '../src/docs/docs.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    order: {
      storySort: (a, b) => {
        if (a.id === b.id) {
          return 0;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 1;
      }
    }
  },
};

export default preview;
