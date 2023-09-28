import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoBackButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const MovieImage = styled.img`
  width: 250px;
  height: auto;
  margin-right: 1rem;
`;

export const MovieText = styled.div`
  flex-grow: 1;
  text-align: left;
`;

export const MovieTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const MovieDescription = styled.p`
  font-size: 1rem;
`;
