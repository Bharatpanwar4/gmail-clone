import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Body from "./components/common/Body";
import Inbox from "./screen/inbox";
import Mail from "./screen/mail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Inbox />,
        },
        {
          path: "/mail/:id",
          element: <Mail/>,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="bg-[#F6F8FC] w-screen h-screen overflow-hidden">
        <Header />
        <RouterProvider router={router}/>
      </div>
    </>
  );
}

export default App;
