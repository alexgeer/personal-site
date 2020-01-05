import React, { useState } from "react";
import styled from "styled-components";

let Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
  .input {
    width: 50px;
    padding: 10px;
  }

  p {
  }
`;

let TextBoxWrapper = styled.div`
  padding: 10px;

  input {
    border: 1px solid rgba(100,100,100,0.8);
    border-radius: 20px;
  }
`;
let TextBox = ({ handleChange, value, id }) => {
  return (
    <TextBoxWrapper>
      <input type="text" id={id} value={value} onChange={handleChange} />
    </TextBoxWrapper>
  );
};

let Badge = styled.div`
  display: block;
  font-size: 45px;
`;

//calc levenstein distance
let ld = (source, target) => {
  let rows = source.length + 1;
  let cols = target.length + 1;
  //create an MxN array, M,N = respective length w1,w2
  let matrix = [];

  let n = rows;
  while (n--) {
    let row = [];
    let size = cols;
    while (size--) row[size] = 0;
    matrix.push(row);
  }

  //the distance from the empty string
  let i = rows;
  while (i--) {
    matrix[i][0] = i;
  }
  //the distance from the empty string
  let j = cols;
  while (j--) {
    matrix[0][j] = j;
  }

  for (j = 1; j < cols; j++) {
    for (i = 1; i < rows; i++) {
      let cost = 1;
      console.log(source[i - 1], target[j - 1]);
      if (source[i - 1] === target[j - 1]) cost = 0;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  //return the last element as solution
  console.log(matrix);
  console.log(matrix[rows - 1][cols - 1]);
  return matrix[rows - 1][cols - 1];
};

let Lev = () => {
  let [source, setSource] = useState("");
  let [target, setTarget] = useState("");

  let [levDistance, setLevDistance] = useState(0);

  let handleChange1 = event => {
    setSource(event.target.value);
    setLevDistance(ld(event.target.value, target));
  };
  let handleChange2 = event => {
    setTarget(event.target.value);
    setLevDistance(ld(source, event.target.value));
  };

  return (
    <Container>
      <h3>Levenshtein distance</h3>
      <p>
        This is the 'edit' distance between two words. Precisely, this means the
        number of insertions, substitutions, or deletions required for the
        source string to match the target. e.g. The distance between 'lore' and
        'bored' is 2; by substituting 'b' for 'l' and inserting 'd' at the end'
      </p>
      <div>
        <TextBox id="word1" handleChange={handleChange1} value={source} />
        <TextBox id="word2" handleChange={handleChange2} value={target} />
        <Badge>{levDistance}</Badge>
      </div>
    </Container>
  );
};

export default Lev;
