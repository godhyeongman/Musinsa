import styled from 'styled-components';

type TabBarProps = {
  children: React.ReactNode;
};

function TabBar({ children }: TabBarProps) {
  return <TabBarWrapper>{children}</TabBarWrapper>;
}

const TabBarWrapper = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  padding: 10px 7px;
`;

export default TabBar;
