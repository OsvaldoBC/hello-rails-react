import { useEffect, useState } from "react";

function Greeting() {
    const [greeting, setGreeting] = useState("");
    
    useEffect(() => {
        fetch("/api/greeting")
        .then((response) => response.json())
        .then((data) => setGreeting(data.greeting));
    }, []);
    
    return (
      <div>
        <h1>Greeting: {greeting}</h1>
      </div>
    );
}

export default Greeting;