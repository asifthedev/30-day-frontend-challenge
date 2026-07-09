import { PropertyCard, propertyCardDemo } from "../days/day-03";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-30">
      <PropertyCard {...propertyCardDemo} />
    </div>
  );
}

export default App;
