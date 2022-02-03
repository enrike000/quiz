import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      shekitxva: "ramdeni wlisaa dzroxa",
      kitxvisoption: [
        { pasuxi: "7", iscorect: true },
        { pasuxi: "71", iscorect: false },
        { pasuxi: "31", iscorect: false },
        { pasuxi: "31", iscorect: false },
      ],
    },
    {
      shekitxva: "ramdeni wlisaa cxeni",
      kitxvisoption: [
        { pasuxi: "74", iscorect: true },
        { pasuxi: "71", iscorect: false },
        { pasuxi: "31", iscorect: false },
        { pasuxi: "31", iscorect: false },
      ],
    },
    {
      shekitxva: "ramdeni wlisaa iviri",
      kitxvisoption: [
        { pasuxi: "73", iscorect: true },
        { pasuxi: "71", iscorect: false },
        { pasuxi: "31", iscorect: false },
        { pasuxi: "31", iscorect: false },
      ],
    },
    {
      shekitxva: "ramdeni wlisaa fefefe",
      kitxvisoption: [
        { pasuxi: "17", iscorect: true },
        { pasuxi: "71", iscorect: false },
        { pasuxi: "31", iscorect: false },
        { pasuxi: "31", iscorect: false },
      ],
    },
  ];
  const [nowquest, setNowquest] = useState(0);
  return (
    <>
      <div>{questions[nowquest].shekitxva}</div>
      <div>
        {questions[nowquest].kitxvisoption.map((e) => (
          <button>{e.pasuxi}</button>
        ))}
      </div>
    </>
  );
};
export default Quiz;
