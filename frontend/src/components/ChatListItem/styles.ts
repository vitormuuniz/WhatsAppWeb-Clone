import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;

  :hover {
      background-color: #F5F5F5;
  }
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
`;

export const Lines = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin-left: 15px;

    flex-wrap: wrap;
    min-width: 0;
`;

export const Line = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const LineContactName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const LineDate = styled.div`
    font-size: 12px;
    color: #999;
`;

export const LineLastMsg = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;

    & > p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
    }
`;