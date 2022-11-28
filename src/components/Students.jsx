import Student from "./Student";

const students = [
    {
        name: 'Азат',
        telegram: '@azatprojazz'
    },
    {
        name: 'Анна',
        telegram: '@permanent_Kaliningrad_zk_vostok'
    },
    {
        name: 'Елена',
        telegram: '@eCorneja'
    },
    {
        name: 'Ксения',
        telegram: '@ksenya_sukhova'
    },
    {
        name: 'Людмила',
        telegram: '@Opavoo'
    },
    {
        name: 'Елена',
        telegram: '@Elena_Luyk'
    },
    {
        name: 'Роман',
        telegram: '@Roma_n11'
    }
];



const ShowStudents = () => {
    return (
        <>
                {students.map((student) => {
                    return <Student name={student.name} telegram={student.telegram}/>
                })}
        </>
    )
}

export { ShowStudents };
