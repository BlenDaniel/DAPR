import AuthService from "../../../services/auth/AuthService";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { useCoverStore } from "../../../State";

interface CoverLetterModel {
  loading: boolean;
  message: string;
  validationSchema: any;
  initialValues: any;
  handleUpdatePDF: (formValue: {
    position: string;
    company: string;
    letterTo: string;
    companySummary: string;
    requirementMatches: string;
    positionExtras: string;
    experienceDetail: string;
  }) => void;
  checkCurrentUser: () => void;
}

export default function CoverLetterViewModel(): CoverLetterModel {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { template, replaceables,  setCompany, setTemplate, setReplaceables, setTriggerRender } =
    useCoverStore();

  // Create refs to hold the latest values of template and setTemplate
  const templateRef = useRef(template);
  const setTemplateRef = useRef(setTemplate);
  const replaceablesRef = useRef(replaceables);
  const setReplaceablesRef = useRef(setReplaceables);

  // Update the refs whenever template or setTemplate changes
  templateRef.current = template;
  setTemplateRef.current = setTemplate;
  replaceablesRef.current = replaceables;
  setReplaceablesRef.current = setReplaceables;

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

  const checkCurrentUser = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      navigate(`/home/`);
    }
  };

  const handleUpdatePDF = (formValue: {
    position: string;
    company: string;
    letterTo: string;
    companySummary: string;
    requirementMatches: string;
    positionExtras: string;
    experienceDetail: string;
  }) => {
    const {
      position,
      positionExtras,
      company,
      letterTo,
      experienceDetail,
      companySummary,
      requirementMatches,
    } = formValue;

    setMessage("");
    setLoading(true);

    // Access the latest values of template and setTemplate using the refs
    const currentTemplate = templateRef.current;
    const currentSetTemplate = setTemplateRef.current;

    const currentReplaceables = replaceablesRef.current;
    const currentSetReplaceables = setReplaceablesRef.current;

    const introduction = currentTemplate.sampledata[0].introduction
      .replace(currentReplaceables.position, `{{ ${position} }}`)
      .replace(currentReplaceables.positionExtras, `{{ ${positionExtras} }}`)
      .replace(
        currentReplaceables.experienceDetail,
        `{{ ${experienceDetail} }}`
      );

    const body = currentTemplate.sampledata[0].body
      .replace(currentReplaceables.positionExtras, `{{ ${positionExtras} }}`)
      .replace(
        currentReplaceables.requirementMatches,
        `{{ ${requirementMatches} }}`
      );

    const end = currentTemplate.sampledata[0].end
      .replace(currentReplaceables.company, `{{ ${company} }}`)
      .replace(currentReplaceables.companySummary, `{{ ${companySummary} }}`)
      .replace(currentReplaceables.position, `{{ ${position} }}`);

    const newSampleData = [
      {
        letterTo: "Dear Hiring Manager,",
        introduction: introduction,
        body: body,
        end: end,
        bullets: currentTemplate.sampledata[0].bullets,
        signiture: "Sincerely, \n\nBlen Assefa",
      },
    ];

    const newReplaceables = {
      position: `{{ ${position} }}`,
      positionExtras: `{{ ${positionExtras} }}`,
      experienceDetail: `{{ ${experienceDetail} }}`,
      requirementMatches: `{{ ${requirementMatches} }}`,
      company: `{{ ${company} }}`,
      companySummary: `{{ ${companySummary} }}`,
    };

    const newTemplate = {
      schemas: currentTemplate.schemas,
      basePdf: currentTemplate.basePdf,
      sampledata: newSampleData,
      columns: currentTemplate.columns,
    };


    // Update the template using the currentSetTemplate function
    currentSetReplaceables(newReplaceables);
    setCompany(company);
    setTriggerRender(true);
    currentSetTemplate(newTemplate);
    setLoading(false);
    setMessage("Updated!");
  };



  return {
    loading,
    message,
    initialValues,
    validationSchema,
    handleUpdatePDF,
    checkCurrentUser,
  };
}
