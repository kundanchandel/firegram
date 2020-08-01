import React from 'react'
import {motion } from 'framer-motion'

export default function Modal({selectedImage,setSelectedImage}) {

    const handleClick = (evt) => {
        if(evt.target.classList.contains('backdrop')){
            setSelectedImage(null);
        }
    }
    return (
            <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
            >
                <motion.img src={selectedImage} alt="Modal Pic"
                initial={{y:"-100vh"}}
                animate={{y:0}}
                />
            </motion.div>
    )
}
