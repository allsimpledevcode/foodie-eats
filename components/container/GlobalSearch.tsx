'use client';

import {
  MagnifyingGlassIcon,
  EnvelopeClosedIcon,
  GearIcon,
  PersonIcon,
  FileTextIcon,
  IdCardIcon
} from '@radix-ui/react-icons';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,

} from '@/components/ui/command';
import { useCallback, useState } from 'react';

export function GlobalSearch() {
  const [open, setOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <a className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center" onClick={toggleSearch}>
        <MagnifyingGlassIcon />
        Search
      </a>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Restaretents">
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Menu items">
            <CommandItem>
              <IdCardIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <IdCardIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <IdCardIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
