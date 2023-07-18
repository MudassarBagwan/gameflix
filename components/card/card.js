import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import cls from "classnames";
import { motion } from "framer-motion";


const Card = (props) => {
  
  const { imgUrl="https://images.unsplash.com/photo-1592839719941-8e2651039d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=525&q=80",
   size="medium", id,shouldScale = true, } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {

    setImgSrc("https://images.unsplash.com/photo-1592839719941-8e2651039d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=525&q=80");
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scaleY: 1.1 };
  const shouldHover = shouldScale && {
    whileHover: { ...scale },
  };



  return (
    <div className={styles.container}>
        
        <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        {...shouldHover}
      >

      <Image
         src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
        </motion.div>
    </div>
    
  );
};

export default Card;