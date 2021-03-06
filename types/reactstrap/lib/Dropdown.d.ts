import { CSSModule } from '../index';

export type Direction = 
  | "up"
  | "down"
  | "left"
  | "right"

export interface UncontrolledProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
  cssModule?: CSSModule;
  nav?: boolean;
  inNavbar?: boolean;
}
export interface UncontrolledDropdownProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface Props extends UncontrolledProps {
  disabled?: boolean;
  direction?: Direction;
  group?: boolean;
  size?: string;
  tag?: React.ReactType;
  addonType?: boolean | 'prepend' | 'append';
}
export interface DropdownProps extends Props {
  /* intentionally blank */
}

declare const Dropdown: React.StatelessComponent<DropdownProps>;
export default Dropdown;
