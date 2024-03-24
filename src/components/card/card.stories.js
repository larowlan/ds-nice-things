import card from "./card.twig";
import "./card.css";

export default {
  title: "Components/Card",
  component: card,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
}

export const Default = {
  args: {
    title: 'Drupal South 2024',
    href: '#',
    teaser: 'Come and meet the community!',
    image_alt: 'Image of Sydney opera house',
    image_uri: "/logo.png",
  }
};

export const Content = {
  args: {
    modifier_class: 'card--content',
    title: 'Drupal South 2024',
    href: '#',
    teaser: 'DrupalSouth is the regional Drupal conference for Australia and New Zealand. Originally started in New Zealand in 2008, the DrupalSouth name was adopted by Australia in 2014 after running as Drupal Downunder and Drupalcon Sydney in earlier years. A separate DrupalGov conference has also been run by DrupalSouth organisers on an intermittent basis. The conference typically attracts 200-400 attendees and features local and international speakers who are selected by a panel of their peers for each event.',
    image_alt: 'Image of Sydney Harbour Bridge',
    image_uri: "/logo2.png",
  }
};

export const CardGrid = {
  name: 'Grid',
  render: () => {
    const args = {
      title: 'My card',
      href: '#',
      teaser: 'Lorem ipsum dolor sit amet.',
      image_alt: 'Image of beach',
      image_uri: "/logo.png",
    }
    return `<div class="grid">${new Array(12).fill(card(args), 0, 12).join("\n")}</div>`
  }
};
