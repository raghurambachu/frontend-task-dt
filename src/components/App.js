import React from "react";
import Layout from "./Layout";

class App extends React.Component {
  render() {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gray-200 ">
        <Layout />
        <div className="absolute top-0 right-0 z-0 bg-blue-200 top-circle-o">
          <div className="absolute right-0 bg-gray-100 top-circle-i"></div>
        </div>

        <div className="absolute bottom-0 left-0 hidden w-64 h-64 bg-blue-200 rounded-t-full rounded-b-none rounded-l-none rounded-r-full md:block bottom-design bottom-circle ">
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-gray-100 rounded-t-full rounded-b-none rounded-l-none rounded-r-full"></div>
        </div>
      </div>
    );
  }
}

export default App;
