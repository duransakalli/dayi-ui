import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    companyName: 'My Company',
    links: [ {
        label: 'About',
        href: '#'
    },{
        label: 'Contact',
        href: '#'
    }
    ],
  },
};
