'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { PersonIcon } from '@radix-ui/react-icons';
import { useCallback, useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import fetchHook from '@/lib/fetchHook';

export function UserLoginForm({ onSubmit }: { onSubmit: Function }) {
  const [data, setData] = useState({
    email: null,
    passwordHash: null
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    passwordHash: ''
  });

  const { makeRequest, data: userData } = fetchHook('/api/auth/user', {
    method: 'POST',
    body: JSON.stringify(registerForm)
  });

  useEffect(() => {
    if(userData && userData.length > 0 && userData[0]?.email) {
      onSubmit(userData[0])
    }
  }, [userData])

  const signup = async () => {
    await makeRequest();;    
  };

  const onRegisterFormChange = useCallback(
    (key: string, value: string) => {
      setRegisterForm({
        ...registerForm,
        [key]: value
      });
    },
    [registerForm]
  );

  const onChange = useCallback(
    (key: string, value: string) => {
      setData({
        ...data,
        [key]: value
      });
    },
    [data]
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center"
        >
          <PersonIcon /> Sign In
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Tabs defaultValue="account" className="w-[320px] mt-4">
          <TabsList>
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Create an Account</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <SheetHeader>
              <SheetTitle>Login</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="name" className="text-right">
                  Email
                </Label>
                <Input
                  id="name"
                  value={data.email || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onChange('email', e?.target?.value);
                  }}
                />
              </div>
              <div>
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="username"
                  type="password"
                  value={data?.passwordHash || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onChange('passwordHash', e?.target?.value);
                  }}
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  type="submit"
                  onClick={() => {
                    onSubmit(data);
                  }}
                >
                  Signin
                </Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
          <TabsContent value="password">
            <SheetHeader>
              <SheetTitle>Create an Account</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label htmlFor="name" className="text-right">
                  First Name
                </Label>
                <Input
                  id="name"
                  value={registerForm.firstName || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onRegisterFormChange('firstName', e?.target?.value);
                  }}
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="name"
                  value={registerForm.lastName || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onRegisterFormChange('lastName', e?.target?.value);
                  }}
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-right">
                  Email
                </Label>
                <Input
                  id="name"
                  value={registerForm.email || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onRegisterFormChange('email', e?.target?.value);
                  }}
                />
              </div>
              <div>
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="username"
                  type="password"
                  value={registerForm?.passwordHash || ''}
                  className="col-span-3"
                  // @ts-ignore
                  onChange={(e: Event) => {
                    onRegisterFormChange('passwordHash', e?.target?.value);
                  }}
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button
                  type="submit"
                  onClick={() => {
                    signup();
                  }}
                >
                  Register
                </Button>
              </SheetClose>
            </SheetFooter>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
