export default function Contact() {

    const formStyle = { maxWidth: '75%' };

    return (
        <div className="Contact d-flex flex-column align-items-center" style={{ minHeight: '100vh' }}>
            <h2 className="h2-responsive font-weight-bold text-center my-4">Contact us</h2>
            <form className="mx-auto" style={{ maxWidth: '75%' }}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="Enter your phone number" />
                    <small id="emailAssurance" className="form-text text-muted">We'll never share your contact info with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" placeholder="Enter your country" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <input type="text" className="form-control" id="message" placeholder="Enter your message" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}