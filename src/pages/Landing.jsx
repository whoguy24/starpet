import { useAuth } from "../auth/AuthProvider";

function Landing() {

  const { user } = useAuth();

  return (
    <div>
       <h2>Welcome to StarPet</h2> 
       <p>You are currently logged in as:</p>
       <p>{user.email}</p>
    </div>
  );
};

export default Landing;