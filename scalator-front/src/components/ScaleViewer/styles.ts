import styled from "styled-components";

export const Table = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: 2fr repeat(${(p) => p.cols}, 1fr);
`;

export const Col = styled.span<{ color?: string }>`
  background-color: ${(p) => p.color || "#D3D3D3"};
  padding: 1rem;
  text-align: center;
  font-weight: bold;
`;

export const Cel = styled.span<{ color?: string }>`
  background-color: ${(p) => p.color || "#D3D3D3"};
  padding: 1rem;
  text-align: center;
`;
