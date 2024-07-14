import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from './loader.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LoaderComponent> = {
  component: LoaderComponent,
  title: 'LoaderComponent'
};
export default meta;
type Story = StoryObj<LoaderComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/loader works!/gi)).toBeTruthy();
  }
};
