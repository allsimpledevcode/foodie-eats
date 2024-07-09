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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
          <Avatar>
            <AvatarImage src={user?.name || ''} />
            <AvatarFallback className='bg-slate-800 text-white'>L</AvatarFallback>
          </Avatar>
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
