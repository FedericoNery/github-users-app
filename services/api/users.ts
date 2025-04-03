const baseGithubApiUrl = 'https://api.github.com'

export const getUsersByUsername = async (username: String) => {
    try {
      const response = await fetch(
        `${baseGithubApiUrl}/users/search?term=${username}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };


  export const getUserByUsername = async (username: String) => {
    try {
      const response = await fetch(
        `${baseGithubApiUrl}/users/${username}`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  export const getUsers = async () => {
    try {
      const response = await fetch(
        `${baseGithubApiUrl}/users`,
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };