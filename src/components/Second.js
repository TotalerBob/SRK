import React from "react";
import styled from "styled-components";

function Second() {
  return (
    <Wrapper>
      <span>Second</span>
      <section>
        <p>
          Morbi sodales at enim sed porttitor.
          {/* omitted */}
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Second;