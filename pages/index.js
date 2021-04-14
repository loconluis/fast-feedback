import { useAuth } from '../lib/auth';

const IndexPage = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Fast Feedback</h1>
      <button onClick={() => auth.signinWithGithub()}>Sign In</button>
      {auth?.user && <button onClick={() => auth.signout()}>Sign Out</button>}
      <div>{auth?.user?.email}</div>
    </div>
  );
};

export default IndexPage;
