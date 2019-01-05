import { configure } from "@storybook/react";

const components = require.context("../src/components/", true, /story\.js$/);

function loadStories() {
  components.keys().forEach(components);
}

configure(loadStories, module);
