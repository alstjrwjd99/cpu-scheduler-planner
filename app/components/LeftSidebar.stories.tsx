import { Meta, StoryFn } from '@storybook/react';
import LeftSidebar from './LeftSidebar';

// Meta 타입 설정
const meta: Meta<typeof LeftSidebar> = {
  title: 'Components/LeftSidebar',
  component: LeftSidebar,
};

export default meta;

type StoryArgs = {
  initialOpen?: boolean;
};

// 기본 스토리
export const Default: StoryFn<StoryArgs> = (args) => <LeftSidebar {...args} />;

// 스토리 구성
Default.args = {
  initialOpen: true,
};