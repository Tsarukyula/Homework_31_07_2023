import { useEffect, useState } from "react";

export default function DataComponent():JSX.Element {

    const [url, setUrl] = useState('');
    const [activity, setActivity] = useState('');

    useEffect(() => {
        fetchActivity()}, []);

    async function fetchActivity() {
        try {
            const response = await fetch('https://www.boredapi.com/api/activity');
            const data = await response.json();
            setActivity(data.activity);
        } catch (error) {
            console.log('Error', error);
        }
    };
   


    return (
        <>
        <h1>Random activity:</h1>
        <p>{activity}</p>
        </>
    )

}