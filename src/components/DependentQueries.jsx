import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

function DependentQueries({ email }) {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;
  //   console.log(user)

  const { data: channels } = useQuery(
    ["channels", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId, // Only after the channelID is retrieved before we can get the channels
    }
  );


  return (
    <main className="container">
      <ul>
        {
            channels?.data?.courses.map((item)=>{
                return(
                    <li key={item}>
                        {
                            item
                        }
                    </li>
                )
            })
        }
      </ul>
    </main>
  );
}

export default DependentQueries;
