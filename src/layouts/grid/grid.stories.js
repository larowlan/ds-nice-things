import grid from "./grid.twig";
import './grid.css'
import './grid.storybook.css'

export default {
  title: "Layout/Grid",
  component: grid,
  parameters: {
    layout: "fullscreen",
  },
  // tags: ["autodocs"],
}

export const Default = {
  args: {
    content: new Array(10).fill(`<div class="__debug"></div>`, 0, 10).join(' '),
  }
};
