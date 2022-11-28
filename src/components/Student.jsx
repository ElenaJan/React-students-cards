import React from "react";

const Student = (props) => {
    return (
        <div className="student-card">
            <h1 className="student-card__h1">Карта ученика</h1>
            <p className="students-card__p">Имя: {props.name}</p>
            <p className="students-card__p">Ник в telegram: {props.telegram}</p>
        </div>
    );
}

export default Student;
