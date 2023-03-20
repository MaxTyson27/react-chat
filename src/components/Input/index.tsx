import React, { FC } from 'react'
import './input.sass'
import sendIcon from '../../images/icons/send.svg'
import fileIcon from '../../images/icons/file.svg'



const Input: FC = () => {

  const handleTextInput = () => {

  }

  return (
    <form className='form'>
      <div className="input_fake" onClick={handleTextInput} contentEditable='true'
          suppressContentEditableWarning={true}  >
        <p
          className="input_fake-text"> 
          Type messsage
        </p>
      </div>
      <div className="form_box">
        <label className="input_file">
          <input type="file" />
          <img src={fileIcon} alt="file input" />
        </label>
        <button type='button' className="input_send">
          <img src={sendIcon} alt="send" />
        </button>
      </div>
    </form>
  )
}

export default Input
