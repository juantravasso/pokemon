import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    position: relative;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const SummaryInput = styled.input`
    padding-right: 40px;
    font-family: Arial, Helvetica, sans-serif;
    width: 800px;
    height: 53px;
    border-radius: 30px;
    font-size: 16px;
    padding: 0px 20px;
`;

export const SummaryButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 80%;
    }

    img {
        width: 20px;
        height: 20px;
    }
`;
