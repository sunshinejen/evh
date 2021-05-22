import React from "react";
const Step2 = (props) => {
  const { data, handleChange, next, back } = props;
  return (
    <form>
      <p>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          name="street"
          value={data.street}
          onChange={handleChange}
        />
      </p>
      <p>
      <label htmlFor="medication">Dog:
          <select value={data.medication}onChange={handleChange}>
            <option value="puppy">Puppy</option>
            <option value="adult">Adult</option>
            <option value="old pup">Old Pup</option>
          </select>
            </label>
      </p>
      <p>
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="number"
          name="postcode"
          value={data.postcode}
          onChange={handleChange}
        />
      </p>
      <button onClick={back}>Back</button> 
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step2;