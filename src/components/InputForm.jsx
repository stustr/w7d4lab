import { useState, useEffect } from "react";
import Results from "./Results";

const InputForm = () => {
  const [formValues, setFormValues] = useState({
    person1Sal: 0,
    person2Sal: 0,
    deposit: 0,
    monthlyOutgoings: 0,
    interestRate: 0,
  });

  const handleChange = (event) => {
    const thingToChange = event.target.name;
    const change = event.target.value;
    setFormValues({ ...formValues, [thingToChange]: change });
  };

  return (
    <>
      <div>
        <form action="submit">
          <label htmlFor="person-1-salary">
            <input
              id="person-1-salary"
              name="person1Sal"
              type="number"
              step="0.01"
              placeholder="Person 1 salary"
              onChange={handleChange}
              autoFocus
            />
          </label>
          <label htmlFor="person-2-salary">
            <input
              name="person2Sal"
              type="number"
              step="0.01"
              id="person-2-salary"
              placeholder="Person 2 salary"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="deposit">
            <input
              name="deposit"
              type="number"
              step="0.01"
              id="deposit"
              placeholder="Deposit"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="monthly-outgoings">
            <input
              name="monthlyOutgoings"
              type="number"
              step="0.01"
              id="monthly-outgoings"
              placeholder="Monthly outgoings"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="interest-rate">
            <input
              name="interestRate"
              type="number"
              step="0.01"
              id="interest-rate"
              placeholder="Interest rate"
              onChange={handleChange}
            />
          </label>
        </form>
        <Results formValues={formValues}/>
      </div>
    </>
  );
};

export default InputForm;
