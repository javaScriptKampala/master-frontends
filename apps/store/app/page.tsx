import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
interface Props {}

const StorePage = (props: Props) => {
  const [user, setUser] = useState<null | string>(null);

  const router = useRouter();
  const { param } = router.query;

  let expectedUserId = '123';

  useEffect(() => {
    if (param === expectedUserId) {
      setUser('John');
    } else {
      router.push('localhost:3000');
    }
  }, []);

  return (
    <div>
      <h1>{user}</h1>
      <p>store</p>
    </div>
  );
};

export default StorePage;
