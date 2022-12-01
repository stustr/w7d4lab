const Results = ({ formValues }) => {
  // person1Sal: 0,
  //   person2Sal: 0,
  //   deposit: 0,
  //   monthlyOutgoings: 0,
  //   interestRate: 0,
  // });

  const mortgageOnIncome =
    (parseInt(formValues.person1Sal) + parseInt(formValues.person2Sal)) * 3;

  const mortgageAvail =
    mortgageOnIncome - parseInt(formValues.monthlyOutgoings);

  const compoundInterest = (
    (mortgageAvail - parseInt(formValues.deposit)) *
    (1 + parseFloat(formValues.interestRate / 100)) ** 25
  ).toFixed(2);

  const monthlyRepayments = (compoundInterest / 25 / 12).toFixed(2);

  return (
    <div>
      <h3>Max loan: £{mortgageAvail}</h3>
      <h3>Monthly repayments: £{monthlyRepayments}</h3>
      <h3>Total repayment cost: £{compoundInterest}</h3>
    </div>
  );
};

export default Results;
