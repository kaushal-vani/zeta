import type { Meta, StoryObj } from '@storybook/angular';
import { AddEmailComponent } from './add-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AddEmailComponent> = {
  component: AddEmailComponent,
  title: 'AddEmailComponent'
};
export default meta;
type Story = StoryObj<AddEmailComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/add-email works!/gi)).toBeTruthy();
  }
};
