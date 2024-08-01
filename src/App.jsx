import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/common/Body";
import Header from "./components/common/Header";
import Inboxx from "./screen/inbox";
import Mail from "./screen/mail";
import SendMail from "./screen/sendMail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Inboxx />,
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

        <div className="absolute w-[30%] bottom-0 z-10 right-20">
          <SendMail/>
        </div>
      </div>
    </>
  );
}

export default App;
