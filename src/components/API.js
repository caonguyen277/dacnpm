export const apiLogin = async (acc) => {
    const response = await fetch(`https://backendcnpmem.herokuapp.com/api/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(acc),
      });
      let data = await response.json();
      return data;
}
export const apiLoadUsers = async () => {
  const response = await fetch(`https://backendcnpmem.herokuapp.com/api/ThongTinCaNhan`, {
        method: "GET",
      });
      let data = await response.json();
      return data;
};