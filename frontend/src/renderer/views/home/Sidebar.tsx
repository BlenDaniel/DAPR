import { Formik, Form, Field, ErrorMessage } from "formik";
import Error from "../../components/Error";
import TextareaAutosize from "react-textarea-autosize";
import * as Yup from "yup";

export default function SideBar() {
  const initialValues = {
    position: "",
    positionExtras: " software development ",
    company: "",
    letterTo: "Dear Hiring Manager,",
    experienceDetail:
      " and over two years of experience in full-stack web and mobile app development.",
    companySummary: "",
    requirementMatches:
      "I believe I'm a perfect fit for this position because ....",
  };

  const validationSchema = Yup.object().shape({
    position: Yup.string().required("This field is required!"),
    company: Yup.string().required("This field is required!"),
    letterTo: Yup.string().required("This field is required!"),
    companySummary: Yup.string().required("This field is required!"),
    requirementMatches: Yup.string().required("This field is required!"),
    positionExtras: Yup.string().required("This field is required!"),
    experienceDetail: Yup.string().required("This field is required!"),
  });

  const handleUpdatePDF = (formValue: {
    position: string;
    company: string;
    letterTo: string;
    companySummary: string;
    requirementMatches: string;
    positionExtras: string;
    experienceDetail: string;
  }) => {
    return;
  };

  return (
    <>
      <div className="side-bar">
        <button
          type="submit"
          onClick={() => null}
          className=" w-full px-8 py-2 my-2  text-black  bg-gray hover:bg-emerald-600 active:bg-gray-500 rounded-lg duration-150"
        >
          <span>Update</span>
        </button>

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
          </Form>
        </Formik>
      </div>
    </>
  );
}
