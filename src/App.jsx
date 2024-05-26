import { RouterProvider } from "react-router-dom";
import Routes from "./work/Routes/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="max-w-[1700px]  mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
