import axios from 'axios';

export const ambilDataUserAxios = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = response.data.data
    console.log(users.map(user => '${user.first_name} ${user.last_name}'));
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};