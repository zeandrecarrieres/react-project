import React, { useState } from 'react';
import List from '../components/List'
import data from '../data';


function Home() {
    const [student, setStudent] = useState(data);
    return (
        <div>
            <h2>Attendance List for {student.length} student</h2>
                <List student={student} />
                <button className ="button" onClick={() => setStudent([])}>Clear list</button>
        </div>
    )
}

export default Home
