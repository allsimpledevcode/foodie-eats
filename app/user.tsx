import { auth, signIn, signOut } from '@/lib/auth';
import { UserAuth } from '@/components/container/UserAuth';
import { UserLoginForm } from '@/components/container/UserLoginForm';

export async function User() {
  const session = await auth();

  const user = session?.user;

  const onSubmitLogin = async (data: {
    email: string;
    passwordHash: string;
  }) => {
    'use server';

    await signIn('credentials', data);
  };

  if (!user) {
    return <UserLoginForm onSubmit={onSubmitLogin} />;
  }

  const signOutUser = async () => {
    'use server';
    await signOut();
  };

  return <UserAuth user={user} signOut={signOutUser} />;
}
