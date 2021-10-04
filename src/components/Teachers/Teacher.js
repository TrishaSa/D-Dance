import React, { useEffect, useState } from "react";
import './Teacher.css'
const Teacher = () => {
	const [teachers, setTeachers] = useState([])
   useEffect(() => {
    fetch('./Teacher.JSON')
      .then(res => res.json())
      .then(data => setTeachers(data));
  }, []);

	return(
		<div className="teacher-container">
		<h3>Our Teachers</h3>
		<div className="teacher">
		<div className="row">
          {teachers?.map((teacher) => (
            <div className="col-md-4">
               <img className="w-75" src={teacher.img} alt="" />
            </div>
          ))}
        </div>
         </div>
		</div>
	)
}

export default Teacher