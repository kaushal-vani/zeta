import type { Meta, StoryObj } from '@storybook/angular';
import { VerificationFailureComponent } from './verification-failure.component';


const meta: Meta<VerificationFailureComponent> = {
  component: VerificationFailureComponent,
  title: 'VerificationFailureComponent'
};
export default meta;
type Story = StoryObj<VerificationFailureComponent>;


export const VerificationFailed: Story = {
  args: {}
};


