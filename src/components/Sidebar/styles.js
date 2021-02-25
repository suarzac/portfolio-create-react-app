import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  background: rgba(102, 141, 201, .3);
  @media (max-width: 640px) {
    display: none;
  }
`
