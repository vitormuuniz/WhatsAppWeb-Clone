import styled from "styled-components";

export const StySidebarContainer = styled.div`
  width: 35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`;

export const StyHeader = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const StyHeaderImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const StyHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyHeaderButtonArea = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StySearch = styled.div`
  background-color: #f6f6f6;
  border-bottom: 1px solid #eee;
  padding: 5px 15px;
`;

export const StySearchInputArea = styled.div`
  background-color: #fff;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const StySearchInput = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background-color: transparent;
  margin-left: 10px;
`;

export const StyChatList = styled.div`
  flex: 1;
  background-color: #fff;
  overflow-y: auto;
  transition: all ease 5s;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
