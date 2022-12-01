import { useEffect, useState } from "react";
import Title from "../components/Title";
import InputForm from "../components/InputForm";
import Results from "../components/Results";

const MCalcContainer = () => {
  const [maxMortgage, setMaxMortgage] = useState(0)
  // const [person1Sal, setPerson1Sal] = useState(0);
  // const [person2Sal, setPerson2Sal] = useState(0);
  // const [deposit, setDeposit] = useState(0);
  // const [monthlyOutgoings, setMonthlyOutgoings] = useState(0);
  // const [interesRate, setInterestRate] = useState(0);


  return (
    <>
      <Title />
      <InputForm
      />
    </>
  );
};

export default MCalcContainer;
