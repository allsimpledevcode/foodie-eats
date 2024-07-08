'use client';

import * as React from 'react';
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { User } from 'next-auth';

type Checked = DropdownMenuCheckboxItemProps['checked'];

export function UserAuth({
  user,
  signOut
}: {
  user: User;
  signOut: Function;
}) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'link'}>
          <Image
            className="h-8 w-8 rounded-full"
            src={user.image!}
            height={32}
            width={32}
            alt={`${user.name} avatar`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" side='bottom' align='end'>
        <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={(value: boolean) => {
            setShowPanel(value);
            signOut();
          }}
        >
          Logout
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
