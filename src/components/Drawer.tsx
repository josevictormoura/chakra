// 'use client';

// import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react';
// import { useState } from 'react';

// interface IComponenteDrawer {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// }

// const ComponenteDrawer: React.FC<IComponenteDrawer> = ({ open, setOpen }) => {
//   //   const [open, setOpen] = useState(false);

//   return (
//     <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
//       <Drawer.Trigger asChild>
//         <Button variant="outline" size="sm">
//           Open Drawer
//         </Button>
//       </Drawer.Trigger>
//       <Portal>
//         <Drawer.Backdrop />
//         <Drawer.Positioner>
//           <Drawer.Content>
//             <Drawer.Header>
//               <Drawer.Title>Drawer Title</Drawer.Title>
//             </Drawer.Header>
//             <Drawer.Body>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua.
//               </p>
//             </Drawer.Body>
//             <Drawer.Footer>
//               <Button variant="outline">Cancel</Button>
//               <Button>Save</Button>
//             </Drawer.Footer>
//             <Drawer.CloseTrigger asChild>
//               <CloseButton size="sm" />
//             </Drawer.CloseTrigger>
//           </Drawer.Content>
//         </Drawer.Positioner>
//       </Portal>
//     </Drawer.Root>
//   );
// };

// export default ComponenteDrawer;
'use client';

import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react';

export const DrawerComponente = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Context>
              {(store) => (
                <Drawer.Body pt="6" spaceY="3">
                  <p>Drawer is open: {store.open ? 'true' : 'false'}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button onClick={() => store.setOpen(false)}>Close</button>
                </Drawer.Body>
              )}
            </Drawer.Context>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
