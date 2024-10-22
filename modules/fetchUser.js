export const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((users) => {
        console.log(users.data.map(user => '${user.first_name} ${user.last_name}'));
      });
  };
  
