import { Button } from '@/components/ui/button';
import { auth, signIn, signOut } from '@/lib/auth';
import { UserAuth } from '@/components/container/UserAuth';
import { PersonIcon } from '@radix-ui/react-icons';

export async function User() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
          await signIn('credentials', {
            email: 'test@test.com'
          });
        }}
      >
        <Button variant={"link"} className='text-gray-600 hover:text-black cursor-pointer flex gap-1 items-center'><PersonIcon/>Sign In</Button>
      </form>
    );
  }
  
  const signOutUser = async () => {
    'use server'
    await signOut();
  }

  return (      
    <UserAuth user={user} signOut={signOutUser}/>
  );
}
