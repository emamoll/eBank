import HomeContainer from "../../components/HomeContainer/HomeContainer";

const Home = ({ user, setUser }) => {
  return (
    <HomeContainer user={user} setUser={setUser} />
  )
};

export default Home