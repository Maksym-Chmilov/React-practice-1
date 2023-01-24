import styled from 'styled-components';

// export const Text = styled.p`
//   font-size: 30px;
//   color: green;
//   background-color: orange;

//   &:hover {
//     color: white;
//   }
// `;

// export const NativeText = styled.span`
// font-size: 25px;
// color: blue;

// ${Text}:hover & {
//     background-color: black;
// }
// `

export const NativeText = styled.span`
  font-size: 25px;
  color: blue;
  background-color: ${({ isRed }) => (isRed ? 'red' : 'yellow')};
`;

export const Text = styled.p`
  font-size: 30px;
  color: green;
  background-color: orange;

  &:hover {
    color: white;
  }
  &:hover ${NativeText} {
    background-color: black;
  }
`;
