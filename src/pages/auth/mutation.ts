export const mutationLogin = async () => {
  const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzk2MjVkYTdhZWVlOWRhNjRmMWFmZjMzODU5NDg0MSIsInN1YiI6IjY2MzM0ZTE0MmEwOWJjMDEyMzU4OTVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wikr4R6_z_PVEfr0hUuiyanjcGFWEwFXlB1oxHvsQmg",
    },
  });
  const fetchedData = res.json();
  // console.log(fetchedData);
  return fetchedData;
};
