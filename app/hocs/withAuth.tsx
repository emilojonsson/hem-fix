import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        // Om det inte finns en authToken, omdirigera användaren till inloggningssidan
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    }, []);

    return isLoading ? null : <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
