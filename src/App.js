import "./styles.css";
import Students from "./Students";

export default function App() {
  let students = [
    {
      name: "Kevin",
      school: "Carnegie Mellon",
      graduationYr: 2015,
      favoriteColor: "blue",
      favoriteGenre: "pop",
      favoriteVideo: "https://www.youtube.com/watch?v=a6Fl1Xl1ogg",
      social: "instagram",
      place: "beach"
    },
    {
      name: "Ana",
      school: "CSUEB",
      graduationYr: 2016,
      favoriteColor: "green",
      favoriteGenre: "reggae",
      favoriteVideo: "https://www.youtube.com/watch?v=gt8WMMQFDRU",
      social: "",
      place: ""
    },
    {
      name: "Karin",
      school: "UC Berkeley",
      graduationYr: 2017,
      favoriteColor: "#8A9A5B",
      favoriteGenre: "country",
      favoriteVideo: "https://www.youtube.com/watch?v=oOlDewpCfZQ",
      social: "",
      place: ""
    },
    {
      name: "Maya",
      school: "UC San Diego",
      graduationYr: 2016,
      favoriteColor: "Purple",
      favoriteGenre: "pop",
      favoriteVideo: "",
      social: "",
      place: ""
    }
  ];

  return (
    <div className="App">
      <Students list={students} />
    </div>
  );
}
