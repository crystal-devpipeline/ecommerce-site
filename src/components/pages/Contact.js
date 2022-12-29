//TODO: httpbin ?

export default function Contact() {
 function handleSubmit(){
    alert("sent!")
 }

    return (
        <div>
            <h1>Contact me!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name"/><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email"/><br />
                <label htmlFor="ssn">SSN</label><br />
                <input type="text" id="ssn"/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}