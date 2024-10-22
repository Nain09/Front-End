export const ambilDataUserAsync = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      console.log(users.data.map(user => '${user.first_name} ${user.last_name}'));
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  