const ATMDeposit = ({ onChange, isDeposit }) => {
    const choice = ["Deposit", "Cash Back"];
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input type="number"  width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit"></input>
      </label>
    );
  };
  
  const Account = () => {
    let deposit = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);
    //

    let status = `Account Balance $ ${totalState}`;
    //console.log("Account Rendered");
    const handleChange = event => {
      console.log(`handleChange ${event.target.value}`);
      deposit = Number(event.target.value);
    };
    const handleSubmit = () => {
      let newTotal = totalState;

      if(isDeposit){
          newTotal = totalState + deposit;
      } else {
          if(totalState - deposit < 0) {
              alert("Isufficient Funds");
          } else {
              newTotal = totalState - deposit;
          }
      }

      setTotalState(newTotal);
      event.preventDefault();
    };
    const handleModeSelect = (e) => {
        if(e.target.value == "Deposit"){
            setIsDeposit(true);
        } else if (e.target.value == "Cash Back") {
            setIsDeposit(false);
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
            <option id="no-selection" value=""></option>
            <option id="deposit-selection" value="Deposit">Deposit</option>
            <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select><br></br>
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
        <h2 id="total">{status}</h2>
      </form>
    );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
  
