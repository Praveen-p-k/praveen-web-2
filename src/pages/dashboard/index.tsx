import {
  Banner,
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Praveen,
} from "../../assets/images";

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-gray-100 overflow-auto">
      <div className="flex flex-col">
        <img className="h-full w-full" src={Banner} />
        <div className="flex flex-col">
          <div className="bg-white-5 p-20">
            <div className="flex flex-col bg-gray-100 border border-solid border-gray-400 rounded-lg p-20 gap-y-8">
                <div className="flex flex-col font-bold font-mono">
                    <p className="text-red text-4xl">HELLO, I'M</p>
                    <p className="text-gray-600 text-6xl">PRAVEEN</p>
                </div>
                <div className="divide-y divide-red">
                    <div></div>
                    <div></div>
                </div>
              <p className="text-gray-600 text-2xl font-sans font-light">
                A Dedicated Full-STACK developer with the capacity to create
                reliable applications. data structure programming expertise and
                dedication to providing high-caliber software solutions. My time
                was largely spent learning new things, pushing myself, and
                creating new apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
