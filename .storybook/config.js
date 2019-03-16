import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import requireContext from 'require-context.macro';

addDecorator(withA11y);

addParameters({
  viewport: {
    defaultViewport: "responsive"
  }
});

const req = requireContext("../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
