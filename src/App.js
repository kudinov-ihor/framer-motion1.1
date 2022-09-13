import {motion} from 'framer-motion';
import {useState} from 'react';

import Acordeon from './assets/acordeon.png';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const boxAnimate = {
    offscreen: {
      opacity: 0, 
      scale: 0
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1
      }
    }
  }

  const sectionAnimate = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 1
      }
    }
  }

  const circleAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.7
      }
    }
  }

  const imgAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0
    },
    onscreen: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <>
      <div className="App">
        <motion.div
          transition={{duration: 1, layout: {duration: 2, type: 'spring', bounce: 0.4}}}
          layout
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{rotate: [0 ,10, 0, 20, 0, 30, 0], transition: {type: 'spring', bounce: 0.3}}} 
          className='card'
        >
          <motion.h2 layout="position">
            Framer motion 🚀
          </motion.h2>
          {isOpen && ( 

          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            style={{width: '20rem'}}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quod! Ad corrupti non quasi enim totam assumenda aut tenetur maiores?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia obcaecati nobis illum perspiciatis consequatur.</p>
            <button>Read more</button>
          </motion.div>

          )}
        </motion.div>
      </div>

        <motion.div
          style={{backgroundColor: '#1f9225', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}
          variants={sectionAnimate}
          viewport={{amount: 0.7}}
          initial={"offscreen"}
          whileInView={"onscreen"}

        >
          <motion.div 
            style={{padding: '2rem', backgroundColor: '#fff'}}
            variants={boxAnimate}
          >

          </motion.div>
          <motion.div 
              style={{padding: '2rem', backgroundColor: '#000'}}
              variants={boxAnimate}
            >
          </motion.div>
          <motion.div 
            style={{padding: '2rem', backgroundColor: '#fff'}}
            variants={boxAnimate}
          >

          </motion.div>
          <motion.div 
              style={{padding: '2rem', backgroundColor: '#000'}}
              variants={boxAnimate}
            >
          </motion.div>
          <motion.div 
            style={{padding: '2rem', backgroundColor: '#fff'}}
            variants={boxAnimate}
          >

          </motion.div>
          <motion.div 
              style={{padding: '2rem', backgroundColor: '#000'}}
              variants={boxAnimate}
            >
          </motion.div>
        </motion.div>



        <motion.div
          style={{backgroundColor: '#1f9225', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}
          variants={sectionAnimate}
          viewport={{amount: 0.7}}
          initial={"offscreen"}
          whileInView={"onscreen"}

        >
          <motion.div 
            style={{padding: '2rem', backgroundColor: '#fff', borderRadius: '100%'}}
            variants={circleAnimate}
          >

            <motion.img src={Acordeon} variants={imgAnimate} style={{maxHeight: '300px'}} />

          </motion.div>
        </motion.div>
    </>
  );
}

export default App;
