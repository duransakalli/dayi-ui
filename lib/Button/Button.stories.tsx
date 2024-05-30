import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button'
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    }
};

export const Submit: Story = {
    args: {
        children: 'Submit',
        variant: 'submit'
    }
};

export const Reset: Story = {
    args: {
        children: 'Reset',
        variant: 'reset'
    }
};

export const ClickMe: Story = {
    args: {
        children: 'ClickMe',
        variant: 'clickMe'
    }
};

export const Download: Story = {
    args: {
        children: 'Download',
        variant: 'download'
    }
};

export const SignUp: Story = {
    args: {
        children: 'Sign up',
        variant: 'signUp'
    }
};