// components/AuthenticatedRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getCookie } from "@/actions/session";

const async AuthenticatedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const user = await getCookie();

    if (!user) {
      router.push('/login-register');
    }
  }, []);

  return <>{children}</>;
};

export default AuthenticatedRoute;
