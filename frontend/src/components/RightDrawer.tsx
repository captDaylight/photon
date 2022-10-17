import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { ReactNode, RefObject } from 'react';

type RightDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  ref: RefObject<HTMLButtonElement>;
  header?: string;
  children: ReactNode;
};

const RightDrawer = ({
  isOpen,
  onClose,
  ref,
  header,
  children,
}: RightDrawerProps) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    finalFocusRef={ref}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      {header && <DrawerHeader>{header}</DrawerHeader>}
      <DrawerBody>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default RightDrawer;
