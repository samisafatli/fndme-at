import React, { useState } from 'react';
import './ProfilePicture.css';
import Button from '@material-ui/core/Button'

const ProfilePicture = () => {
  const cloudinary_url = 'https://api.cloudinary.com/v1_1/fndme/image/upload'
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'f1bsqjys')
    setLoading(true)
    const res = await fetch(
      cloudinary_url, { method: 'POST', body: data }
    )
    
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div>
      <input
        id="file"
        type="file"
        name="file"
        onChange={uploadImage}
      />
      {loading ? ( <h3>Loading...</h3>) : ( <img src={image} alt="" />)}
      <Button style = {{marginLeft:"20px", backgroundColor:"#777777"}} variant="contained">
        <label htmlFor="file">Add Profile Picture</label>
      </Button>
    </div>
  )
}

export default ProfilePicture