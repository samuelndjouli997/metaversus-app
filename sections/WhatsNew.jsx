'use client';

// import framer motion
import { motion } from 'framer-motion';

// import styles
import styles from '../styles';

// import components
import { NewFeatures, TitleText, TypingText } from '../components';

// import utils
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

// import data
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth}} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's new ?" />
        <TitleText title={<>What's new about Merversus ?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] ">
          {
            newFeatures.map((feature) => (
              <NewFeatures
                key={feature}
                {...feature}
              />
            ))
          }
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>

);

export default WhatsNew;
