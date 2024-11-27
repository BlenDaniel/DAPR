import { useCoverStore } from "../../../State";
import Footer from "../../components/Footer";
import HeaderHome from "../../components/HeaderHome";
import LetterPage from "../letter/LetterPage";
import SideBar from "../home/Sidebar";
import InvoicePage from "../letter/InvoicePage";
import MyPDFViewer from "../letter/MyPdfViewer";

export default function Home() {
  const { headerPdfContent } = useCoverStore();
  return (
    <>
      <HeaderHome />
      <div className="app">
        <SideBar />
        <LetterPage/>
      </div>
      <Footer />
    </>
  );
}
