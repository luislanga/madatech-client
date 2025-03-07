import styled from "styled-components";

export const TableMain = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  background-color: #f4f4f9;
  color: #333;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #e0e0e0;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`;

export const TableCell = styled.td`
  padding: 12px;
  text-align: left;
  color: #555;
`;

export const ActionsCell = styled(TableCell)`
  display: flex;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;