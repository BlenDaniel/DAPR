import CoverLetterViewModel from "./ViewModel";
import Footer from "../../components/Footer";
import PDFDesigner from "./PDFDesigner";
import Error from "../../components/Error";
import { generate } from "@pdfme/generator";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextareaAutosize from "react-textarea-autosize";
import HeaderHome from "../../components/HeaderHome";
import { useCoverStore } from "../../../State";
import { fontData } from "../../../utils/Utils";

export default function CoverLetter() {
  const { loading, validationSchema, initialValues, handleUpdatePDF } =
    CoverLetterViewModel();

  const { template, company } = useCoverStore();

  const generatePDF = async () => {
    const unfilterd = template.sampledata;

    const inputs = [
      {
        letterTo: "Dear Hiring Manager,",
        introduction: unfilterd[0].introduction
          .replaceAll("{{ ", "")
          .replaceAll(" }}", ""),
        body: unfilterd[0].body.replaceAll("{{ ", "").replaceAll(" }}", ""),
        end: unfilterd[0].end.replaceAll("{{ ", "").replaceAll(" }}", ""),
        bullets: unfilterd[0].bullets
          .replaceAll("{{ ", "")
          .replaceAll(" }}", ""),
        signiture: "Sincerely, \n\nBlen Assefa",
      },
    ];

    fontData().then(async (font) => {
      const pdf = await generate({
        template,
        inputs,
        options: { font },
      });

      // Node.js
      // fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

      // Browser
      const blob = new Blob([pdf.buffer], { type: "application/pdf" });

      // Create a download link for the Blob.
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Cover_letter_${company}.pdf`;

      // Trigger the click event on the link to initiate the download.
      link.click();

      // Clean up the URL object after the download is complete.
      URL.revokeObjectURL(url);

      return () => {
        pdf.destroy();
      };
    });
  };

  return (
    <>
      <HeaderHome />

      <main
        className="w-full h-full p-0 m-0 flex items-center justify-center"
        style={{ marginTop: "66px" }}
      >
        <div className="grid grid-cols-3  w-full text-black">
          <div className="px-9 bg-gray-100">
            <div className="text-center pb-3">
              <div className="mt-5">
                <h3 className="text-gray-800 text-xl font-bold sm:text-md">
                  Enter details
                </h3>
              </div>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleUpdatePDF}
            >
              <Form>
                <div className="text-left mt-5">
                  <label className="">Position Name</label>
                  <Field
                    name="position"
                    type="text"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Enter the position"
                  />
                  <ErrorMessage
                    name="position"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>

                <div className="text-left mt-5">
                  <label className=" ">Company Name</label>
                  <Field
                    name="company"
                    type="text"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Enter the company name"
                  />
                  <ErrorMessage
                    name="company"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>
                <div className="text-left mt-5">
                  <label className=" ">Addressed to</label>
                  <Field
                    name="letterTo"
                    type="text"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Letter to"
                  />
                  <ErrorMessage
                    name="letterTo"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>
                <div className="text-left mt-5">
                  <label className=" ">Position Extras</label>
                  <Field
                    name="positionExtras"
                    as={TextareaAutosize}
                    type="text"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Position Extra Details"
                  />
                  <ErrorMessage
                    name="positionExtras"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>
                <div className="text-left mt-5">
                  <label className=" ">Experience Detail</label>
                  <Field
                    name="experienceDetail"
                    as={TextareaAutosize}
                    type="text"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Experience Detail"
                  />
                  <ErrorMessage
                    name="experienceDetail"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>

                <div className="text-left mt-5">
                  <label className=" ">Company Summary</label>
                  <Field
                    name="companySummary"
                    as={TextareaAutosize}
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Enter some words about the company"
                  />
                  <ErrorMessage
                    name="companySummary"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>
                <div className="text-left mt-5">
                  <label className=" ">Requirement Matches</label>
                  <Field
                    as={TextareaAutosize}
                    id="requirementMatches"
                    name="requirementMatches"
                    className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg"
                    placeholder="Enter some words that match some skills with requirements"
                  />
                  <ErrorMessage
                    name="requirementMatches"
                    render={(msg: string) => <Error message={msg}></Error>}
                  />
                </div>
                {/* <div className="m-3 flex">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-2 mr-2  text-black   bg-white hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Update</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-8 py-2 ml-2 text-black   bg-white hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
                    disabled={loading}
                  >
                  
                    <span>Save</span>
                  </button>
                </div> */}

                <div className="m-3 pb-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-2 my-2  text-black   bg-white hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Update</span>
                  </button>
                  <button
                    type="submit"
                    onClick={generatePDF}
                    className="w-full px-8 py-2 my-2  text-black   bg-white hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
                  >
                    <span>Download</span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="col-span-2 p-4 bg-gray-100">
            <PDFDesigner />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
