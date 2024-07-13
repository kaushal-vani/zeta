import type { Meta, StoryObj } from '@storybook/angular';
import { CalenderComponent } from './calender.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CalenderComponent> = {
  component: CalenderComponent,
  title: 'CalenderComponent'
};
export default meta;
type Story = StoryObj<CalenderComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/calender works!/gi)).toBeTruthy();
  }
};
