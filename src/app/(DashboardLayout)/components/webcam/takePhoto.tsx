import { Box, Button, Modal, styled } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

const TakePhoto = (props: any) => {

  const [click, setClick] = useState(0)
  const [image, setImage] = useState('');
  const webcamRef: any = useRef(null);

  const style = {
    position: 'absolute' as 'absolute',
    top: '25%',
    right: '15%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #000',
  }

  const style2 = {
    position: 'absolute' as 'absolute',
    top: '37%',
    right: '23%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',

  }

  const btn = {
    background: "#E15A11",
    "&:hover": {
      backgroundColor: "#E15A11",
    },
  }

  const style3 = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    height: '40px',
    border: '1px solid #000',
    boxShadow: 24,
    display: "grid"
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImage(imageSrc);
    props.setPicture(imageSrc)
    props.setOpen(false)
  }, [])

  const handleSubmit = async () => {
    // props.setPicture(image)
    // props.setOpen(false)
    // alert("Photo is saved")
  };

  return (
    <>
      {/* <Modal
        keepMounted
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      > */}
        <>
          <Box sx={style}>
            {image == '' 
            ? <Webcam  audio={false} height={200} ref={webcamRef} screenshotFormat="image/jpeg" width={220} videoConstraints={videoConstraints}/> 
            : <img src={image} />}
          </Box>

          <Box sx={style2}>
            {image != '' 
            ? <button className="webcam-btn" onClick={(e) => {
                e.preventDefault();
                setImage('');
                setClick(0);
              }}
              >Retake</button> 
            : <button className="webcam-btn" onClick={(e) => {
                e.preventDefault();
                capture();
                setClick(click + 1);
              }}
              >Capture</button>
            }
          </Box>
        </>
      {/* </Modal> */}
    </>
  );
}

export default TakePhoto;