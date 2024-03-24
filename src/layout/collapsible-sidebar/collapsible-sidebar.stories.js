import { userEvent, waitFor, within } from '@storybook/testing-library'; // 👈️
import { expect } from '@storybook/jest'; // 👈️

import collapsibleSidebar from "./collapsible-sidebar.twig";
import "./collapsible-sidebar.css";
import "./collapsible-sidebar.js";

export default {
  title: "Layouts/Collapsible-Sidebar",
  component: collapsibleSidebar,
  parameters: {
    layout: "centered",
  },
}

export const Default = {}

export const Collapsed = {
  play: async ({ canvasElement, step }) => { // 👈️
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    await step('Collapse sidebar', async () => {
      userEvent.click(canvas.getByRole('button'));
    });

    await waitFor(() => expect(canvasElement.querySelector('aside')).not.toBeVisible());
  },
};
