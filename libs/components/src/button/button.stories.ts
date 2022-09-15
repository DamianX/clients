import { Meta, Story } from "@storybook/angular";

import { ButtonComponent } from "./button.component";

export default {
  title: "Component Library/Button",
  component: ButtonComponent,
  args: {
    buttonType: "primary",
    disabled: false,
    loading: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/f32LSg3jaegICkMu7rPARm/Tailwind-Component-Library-Update?node-id=1881%3A16733",
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <button bitButton [disabled]="disabled" [buttonType]="buttonType" [block]="block">Button</button>
    <a bitButton [disabled]="disabled" [buttonType]="buttonType" [block]="block" href="#" class="tw-ml-2">Link</a>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  buttonType: "danger",
};

const AllStylesTemplate: Story = (args) => ({
  props: args,
  template: `
    <button bitButton [disabled]="disabled" [loading]="loading" [block]="block" buttonType="primary" class="tw-mr-2">Primary</button>
    <button bitButton [disabled]="disabled" [loading]="loading" [block]="block" buttonType="secondary" class="tw-mr-2">Secondary</button>
    <button bitButton [disabled]="disabled" [loading]="loading" [block]="block" buttonType="danger" class="tw-mr-2">Danger</button>
  `,
});

export const Disabled = AllStylesTemplate.bind({});
Disabled.args = {
  disabled: true,
  loading: false,
};

export const Loading = AllStylesTemplate.bind({});
Loading.args = {
  disabled: false,
  loading: true,
};
