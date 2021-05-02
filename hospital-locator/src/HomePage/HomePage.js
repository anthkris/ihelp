import SearchBar from "../SearchBar/SearchBar";
import "./HomePage.css";
import "../SearchBar/SearchBar";
import { HospitalList } from "../HospitalList/HospitalList";
import { LocationWidget } from "../Location/LocationWidget";
import testData from "../__mocks__/testData.json";

function HomePage() {
  return (
    <div className="homepage-root">
      <SearchBar />
      <LocationWidget />
      <HospitalList hospitals={testData} />
    </div>
  );
}

export default HomePage;