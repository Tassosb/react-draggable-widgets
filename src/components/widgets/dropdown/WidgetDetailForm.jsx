import React from 'react';
import styled from 'styled-components';


const WidgetDetailFormWrapper = styled.section`
  margin-top: 28px;
  display: flex;
  flex-direction: column;

  width: 268px;

  h3 {
    width: 179px;
    height: 19px;
    font-family: HelveticaNeue;
    font-size: 16px;
    letter-spacing: -0.1px;
    text-align: left;
    color: #333333;
    margin-bottom: 18px;
  }

  textarea {
    margin-top: 10px;
    margin-bottom: 18px;
    width: 268px;
    height: 30px;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #bbbbbb;
    resize: none;
  }

  textarea.title-input {
    height: 30px;
  }

  textarea.description-input {
    height: 60px;
  }

  label {
    height: 16px;
    font-family: HelveticaNeue;
    font-size: 12px;
    letter-spacing: -0.1px;
    text-align: left;
    color: #333333;
  }

  strong {
    font-family: HelveticaNeue;
    font-size: 12px;
    letter-spacing: -0.1px;
    text-align: left;
    color: #333333;
    font-weight: bold;
  }
`

const WidgetDetailForm = ({inProgress, update}) => {
  const handleInput = (field) => (e) => {
    e.preventDefault();
    const input = e.currentTarget.value;
    const updated = Object.assign({}, inProgress, {[field]: input})
    update(updated);
  }

  return (
    <WidgetDetailFormWrapper>
      <h3>Widget Header (Optional)</h3>
      <label><strong>Widget Title</strong> (25 characters max)</label>
      <textarea className='title-input' onChange={handleInput('title')} value={inProgress.title} />
      <label><strong>Widget Description</strong> (50 characters max)</label>
      <textarea className='description-input' onChange={handleInput('description')} value={inProgress.description} />
    </WidgetDetailFormWrapper>
  )
}

export default WidgetDetailForm;
