import styled from 'styled-components';
import { applyFontStyles } from '../../styles/fontStyle';

export const Filter = styled.div`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  background-color: var(--myspec-gray-scalegray-100);
  gap: 8px;
  padding: 4px 12px;

  &.isActive {
    background-color: var(--myspec-primaryblue-1);
    gap: 8px;
    padding: 4px 12px;
  }

  &:hover {
    cursor: pointer;
  }

  & > .mainCategory {
    ${applyFontStyles({
      font: 'body-01',
      color: 'var(--myspec-gray-scalegray-600)',
    })};
    background-color: var(--myspec-gray-scalegray-100);
    border: none;
    width: 47px;
    height: 18px;
    cursor: pointer;
    pointer-events: none;
    &::placeholder {
      ${applyFontStyles({
        font: 'body-01',
        color: 'var(--myspec-gray-scalegray-600)',
      })};
    }
    &:focus {
      outline-width: 0;
    }
    &.isActive {
      width: 24px;
      background-color: var(--myspec-primaryblue-1);
      color: var(--myspec-gray-scalewhite);
    }
  }
`;

export const TextWarpper = styled.div`
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  &.isActive {
    color: var(--myspec-gray-scalewhite);
  }
`;

export const InputWarpper = styled.div`
  ${applyFontStyles({
    font: 'body-01',
    color: 'var(--myspec-gray-scalegray-600)',
  })};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;

  &.isActive {
    color: var(--myspec-gray-scalewhite);
  }
`;

export const Img = styled.div`
  height: 7.06px;
  margin-right: -0.35px;
  width: 12.71px;
  position: relative;
  background-size: 100%;
  background-image: url('https://c.animaapp.com/hs22pPSO/img/vector-9-3.svg');
  &.isActive {
    background-image: url('https://c.animaapp.com/hs22pPSO/img/vector-8.svg');
  }
`;
