'use client';

// import framer motion
import { motion } from 'framer-motion';

// import styles
import styles from '../styles';

// import components
import { InsightCard, TitleText, TypingText } from '../components';

// import utils
import { staggerContainer } from '../utils/motion';

// import data
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth}} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Insight"
        textStyles="text-center"
      />
      <TitleText
        title="Insight about metaverse" textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {
          insights.map((insight, index) => (
            <InsightCard
              key={`insight-${index}`}
              {...insight}
              index={index + 1}
            />
          ))
        }
      </div>
    </motion.div>
  </section>
);

export default Insights;
