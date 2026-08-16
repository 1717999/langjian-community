import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { COURSES } from '../data/coursesData'
import './Courses.css'

function CourseNavItem({ course, index, selected, onClick }) {
  return (
    <div
      className={`courses__nav-item${selected ? ' courses__nav-item--selected' : ''}`}
      onClick={() => onClick(index)}
    >
      <div className="courses__nav-index">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <div className="courses__nav-main">
        <h3 className="courses__nav-title">{course.title}</h3>
        <p className="courses__nav-subtitle">{course.subtitle}</p>
        <div className="courses__nav-tags">
          <span className="courses__nav-tag">{course.tag}</span>
          <span className="courses__nav-level">{course.level}</span>
        </div>
      </div>
      <span className="courses__nav-duration">⏱ {course.duration}</span>
      <span className="courses__nav-arrow">→</span>
    </div>
  )
}

function SubCourseCard({ subCourse, index }) {
  return (
    <div className="courses__sub-card">
      <div className="courses__sub-index">
        {(index + 1).toString().padStart(2, '0')}
      </div>
      <div className="courses__sub-main">
        <h4 className="courses__sub-title">{subCourse.title}</h4>
        <div className="courses__sub-footer">
          <span className="courses__sub-subtitle">{subCourse.subtitle}</span>
          <span className="courses__sub-duration">⏱ {subCourse.duration}</span>
          <span className="courses__sub-play">▶</span>
        </div>
      </div>
    </div>
  )
}

export default function Courses() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0)

  const selectedCourse = COURSES[selectedCourseIndex]

  return (
    <section id="courses" className="courses section">
      <div className="courses__bg-text">COURSES</div>
      <div className="courses__inner container">
        {/* Top: Title Block */}
        <motion.div
          className="courses__title-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="courses__title-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="courses__title-line" />
            知识共享
          </motion.div>
          <h2 className="courses__title">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >社区 </motion.span>
            <motion.span
              className="courses__title-accent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >课程</motion.span>
          </h2>
          <motion.p
            className="courses__title-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            由学长学姐亲自授课，分享最实用的技能与经验。
          </motion.p>
          <motion.div
            className="courses__title-decoration"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="courses__decoration-line" />
            <div className="courses__decoration-dot" />
          </motion.div>
        </motion.div>

        {/* Bottom: Two-column course list */}
        <motion.div
          className="courses__view-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="courses__two-col">
            {/* Left column: Course title navigation */}
            <div className="courses__nav-column">
              <div className="courses__nav-header">课程列表</div>
              <div className="courses__nav-list">
                {COURSES.map((course, index) => (
                  <CourseNavItem
                    key={course.id}
                    course={course}
                    index={index}
                    selected={index === selectedCourseIndex}
                    onClick={setSelectedCourseIndex}
                  />
                ))}
              </div>
            </div>

            {/* Right column: Sub-course details */}
            <div className="courses__sub-column">
              <div className="courses__sub-header">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`header-${selectedCourse.id}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <h3 className="courses__sub-heading">{selectedCourse.title}</h3>
                    <p className="courses__sub-heading-sub">{selectedCourse.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="courses__sub-list">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`list-${selectedCourse.id}`}
                    className="courses__sub-list-inner"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {selectedCourse.subCourses.map((subCourse, index) => (
                      <SubCourseCard
                        key={subCourse.id}
                        subCourse={subCourse}
                        index={index}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
