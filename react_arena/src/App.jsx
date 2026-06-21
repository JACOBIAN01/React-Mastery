import { useQuery } from "@tanstack/react-query";

export default function App() {
  const {data} = useQuery({
    queryKey: ["jokes"],
    queryFn: getJoke,
  });

  return (<div>
    {JSON.stringify(data.setup)}
    </div>);
}

async function getJoke() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    ).then((res) => res.json());
    return res;
  } catch (err) {
    console.log(err);
  }
}
