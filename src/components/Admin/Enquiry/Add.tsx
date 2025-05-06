import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../common/ShowMessage';

const AddEnquiry = () => {
    const SubmittedForm = Yup.object().shape({
        hospitalName: Yup.string().required('Please fill the Field'),
        fullAddress: Yup.string().required('Please fill the Field'),
        city: Yup.string().required('Please fill the Field'),
        state: Yup.string().required('Please fill the Field'),
        pinCode: Yup.string().required('Please fill the Field'),
        contactPerson: Yup.string().required('Please fill the Field'),
        emailAddress: Yup.string().email('Invalid email').required('Please fill the Email'),
        contactNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Field'),
        designation: Yup.string().required('Please fill the Field'),
        urgency: Yup.string().required('Please select an urgency'),
    });
    const submitForm = () => {
        showMessage('Form submitted successfully', 'success');
    };
    return (
        <>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                <li>
                    <Link to="/" className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        Dashboard
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <Link to="/admin/enquiry" className="text-primary">
                        Enquiry
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <Link to="#" className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        Add Enquiry
                    </Link>
                </li>
            </ol>

            <h2>Enquiry Form</h2>

            <Formik
                initialValues={{
                    hospitalName: '',
                    fullAddress: '',
                    city: '',
                    state: '',
                    pinCode: '',
                    contactPerson: '',
                    emailAddress: '',
                    contactNumber: '',
                    designation: '',
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <h5 className="font-semibold text-lg mb-4">Basic Details</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className={submitCount ? (errors.hospitalName ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="hospitalName">Hospital Name </label>
                                <Field name="hospitalName" type="text" id="hospitalName" placeholder="Enter Hospital Name" className="form-input" />
                                {submitCount ? errors.hospitalName ? <div className="text-danger mt-1">{errors.hospitalName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.fullAddress ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="fullAddress">Full Address </label>
                                <Field name="fullAddress" type="number" id="phone" placeholder="Enter Full Address" className="form-input" />
                                {submitCount ? errors.fullAddress ? <div className="text-danger mt-1">{errors.fullAddress}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="city">City</label>
                                <Field name="city" type="text" id="city" placeholder="Enter City Name" className="form-input" />
                                {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="state">State</label>
                                <Field name="state" type="text" id="state" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.pinCode ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="pinCode">PIN Code</label>
                                <Field name="pinCode" type="text" id="pinCode" placeholder="Enter PIN Code" className="form-input" />
                                {submitCount ? errors.pinCode ? <div className="text-danger mt-1">{errors.pinCode}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.contactPerson ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="contactPerson">Contact Person Name</label>
                                <Field name="contactPerson" type="text" id="email" placeholder="Enter Contact Person Name" className="form-input" />
                                {submitCount ? errors.contactPerson ? <div className="text-danger mt-1">{errors.contactPerson}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>

                            <div className={submitCount ? (errors.emailAddress ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="emailAddress">Email Address</label>
                                <Field name="emailAddress" type="text" id="emailAddress" placeholder="Enter Address" className="form-input" />
                                {submitCount ? errors.emailAddress ? <div className="text-danger mt-1">{errors.emailAddress}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>

                            <div className={submitCount ? (errors.contactNumber ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="contactNumber">Contact Number</label>
                                <Field name="contactNumber" type="text" id="contactNumber" placeholder="Enter Contact Number." className="form-input" />
                                {submitCount ? errors.contactNumber ? <div className="text-danger mt-1">{errors.contactNumber}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>

                            <div className={submitCount ? (errors.designation ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="designation">Designation</label>
                                <Field name="designation" type="text" id="designation" placeholder="Enter Equipment ID" className="form-input" />
                                {submitCount ? errors.designation ? <div className="text-danger mt-1">{errors.designation}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                        </div>

                        <div className={submitCount ? (errors.designation ? 'has-error' : 'has-success') : ''}>
                            <h5 className="font-semibold text-lg mb-4">Urgency</h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/2 gap-4">
                                {['Immediantely (within 1-2 days)', 'Urgent (Within a week)', 'Soon (Within 2-3 weeks)', 'Not urgent (just exploring)'].map((option) => (
                                    <label key={option} className="flex items-center gap-2">
                                        <Field type="radio" name="urgency" value={option} />
                                        {option}
                                    </label>
                                ))}{' '}
                                {/* {submitCount && errors.urgency && <p className="text-red-500 text-sm mt-1">{errors.urgency}</p>} */}
                            </div>
                        </div>

                        <div className="w-[98%] mb-6  flex justify-end">
                            <button
                                type="submit"
                                className="btn btn-success mt-4 "
                                onClick={() => {
                                    if (touched.hospitalName && !errors.hospitalName) {
                                        submitForm();
                                    }
                                }}
                            >
                                Submit Enquiry
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AddEnquiry;
