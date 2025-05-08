import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../common/ShowMessage';
import { enquiriesData } from '../../../data';

const formatDate = (dateStr: any) => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
};

const EditEnquiry = () => {
    const SubmittedForm = Yup.object().shape({
        hospitalName: Yup.string().required('Please fill the Field'),
        fullAddress: Yup.string().required('Please fill the Field'),
        city: Yup.string().required('Please fill the Field'),
        state: Yup.string().required('Please fill the Field'),
        pinCode: Yup.string().required('Please fill the Field'),
        contactPerson: Yup.string().required('Please fill the Field'),
        emailAddress: Yup.string().required('Please fill the Field'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Field'),
        designation: Yup.string().required('Please fill the Field'),
    });
    const submitForm = () => {
        showMessage('Form submitted successfully', 'success');
    };
    return (
        <>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark my-4">
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
                        Edit
                    </Link>
                </li>
            </ol>

            <Formik
                initialValues={{
                    hospitalName: enquiriesData[0].Hospitalname, // <-- corrected
                    fullAddress: enquiriesData[0].Fulladdress,
                    city: enquiriesData[0].City,
                    state: enquiriesData[0].State,
                    pinCode: enquiriesData[0].Pincode,
                    contactPerson: enquiriesData[0].Contactperson,
                    emailAddress: enquiriesData[0].Email,
                    phone: enquiriesData[0].Phone,
                    designation: enquiriesData[0].Designation,
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className={submitCount ? (errors.hospitalName ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="hospitalName">Hospital Name</label>
                                <Field name="hospitalName" type="text" id="name" placeholder="Enter Hospital Name" className="form-input" />
                                {submitCount ? errors.hospitalName ? <div className="text-danger mt-1">{errors.hospitalName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.fullAddress ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="fullAddress">Full Address </label>
                                <Field name="fullAddress" type="text" id="fullAddress" placeholder="Enter Full Address" className="form-input" />
                                {submitCount ? errors.fullAddress ? <div className="text-danger mt-1">{errors.fullAddress}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="city">City </label>
                                <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />
                                {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="state">State</label>
                                <Field name="state" type="text" id="state" placeholder="Enter State" className="form-input" />
                                {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.pinCode ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="pinCode">PIN Code</label>
                                <Field name="pinCode" type="text" id="pinCode" placeholder="Enter PIN Code" className="form-input" />
                                {submitCount ? errors.pinCode ? <div className="text-danger mt-1">{errors.pinCode}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.contactPerson ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="contactPerson">Contact Person</label>
                                <Field name="contactPerson" type="text" id="contactPerson" placeholder="Enter Contact Person" className="form-input" />
                                {submitCount ? errors.contactPerson ? <div className="text-danger mt-1">{errors.contactPerson}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.emailAddress ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="emailAddress">Email Address</label>
                                <Field name="emailAddress" type="text" id="emailAddress" placeholder="Enter Email Address" className="form-input" />
                                {submitCount ? errors.emailAddress ? <div className="text-danger mt-1">{errors.emailAddress}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.phone ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="phone">Contact Number</label>
                                <Field name="phone" type="text" id="phone" placeholder="Enter Phone" className="form-input" />
                                {submitCount ? errors.phone ? <div className="text-danger mt-1">{errors.phone}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.designation ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="designation">Designation</label>
                                <Field name="designation" type="text" id="designation" placeholder="Enter Designation" className="form-input" />
                                {submitCount ? errors.designation ? <div className="text-danger mt-1">{errors.designation}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary !mt-6"
                            onClick={() => {
                                if (touched.hospitalName && !errors.hospitalName) {
                                    submitForm();
                                }
                            }}
                        >
                            Submit Form
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default EditEnquiry;
