import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

const ImageUploadTestScreen = () => {
  const url = 'your API Base URL'
    const preset = 'your Upload presets'
    
    
  return (
    <Container>
      <h1 className='text-center'>Test Image Upload</h1>
      <p className='text-center'>Uploading Image To Cloudinary</p>

      <Container>
        <form>
          <div class='mb-3'>
            <label for='formFile' class='form-label'>
              Select Image To Upload
            </label>
            <input class='form-control' type='file' id='formFile' />
          </div>
        </form>
      </Container>
    </Container>
  )
}

export default ImageUploadTestScreen
