import logoA from '../../../assets/quotationImg/NABLlogo.png';
import logoB from '../../../assets/quotationImg/images.jpg';
import signature from '../../../assets/quotationImg/signature.png';
import qrcode from '../../../assets/quotationImg/qrcode.png';
import { FaAngleRight } from 'react-icons/fa6';
import {enquiriesData} from '../../../data';

const ViewQuotation = () => {
    const aitems = [
        {
            type: '',
            id: 1,
            title: 'CT SCAN',
            services: 'QA + LICENSE + DECOMMISSIONING',
            quantity: '2',
            price: '100000',
            amount: '200000',
        },
    ];
    const bitems = [
        {
            type: '',
            id: 1,
            title: 'INSTITURE REGISTRATION',
            quantity: '',
            price: '',
            amount: '',
            total: '',
        },
        {
            type: '',
            id: 2,
            title: 'LEAD SHEET',
            quantity: "SIZE 7' X 4' FROM REMARKS 20 SQ FEET",
            price: '',
            amount: '',
            total: '',
        },
    ];
    const acolumns = [
        {
            key: 'type',
            label: 'A',
        },
        {
            key: 'id',
            label: 'S.NO',
        },
        {
            key: 'title',
            label: 'TYPE OF MACHINE',
        },
        {
            key: 'quantity',
            label: 'DISCREPTION OF SERVICES',
        },
        {
            key: 'price',
            label: 'QTY',
            class: 'ltr:text-right rtl:text-left',
        },
        {
            key: 'amount',
            label: 'RATE',
            class: 'ltr:text-right rtl:text-left',
        },
        {
            key: 'total',
            label: 'TOTAL',
            class: 'ltr:text-right rtl:text-left',
        },
    ];
    const bcolumns = [
        {
            key: 'type',
            label: 'B',
        },
        {
            key: 'id',
            label: 'S.NO',
        },
        {
            key: 'title',
            label: 'ADITIONAL SERVICES',
        },
        {
            key: 'quantity',
            label: '',
        },
        {
            key: 'price',
            label: '',
            class: 'ltr:text-right rtl:text-left',
        },
        {
            key: '',
            label: '',
            class: 'ltr:text-right rtl:text-left',
        },
        {
            key: '',
            label: '',
            class: 'ltr:text-right rtl:text-left',
        },
    ];
    const discount: number = 10; // 10%
    const travelCost: number = 0; // ₹0

    // Calculate totals
    const aitemsTotal: number = aitems.reduce((sum, item) => {
        const amount = parseFloat(item.amount) || 0;
        return sum + amount;
    }, 0);

    const bitemsTotal: number = bitems.reduce((sum, item) => {
        const amount = parseFloat(item.amount) || 0;
        return sum + amount;
    }, 0);

    const subtotal: number = aitemsTotal + bitemsTotal;
    const discountAmount: number = (subtotal * discount) / 100;
    const totalAmount: number = subtotal - discountAmount + travelCost;

    return (
        <div className="w-full min-h-screen bg-gray-50 p-8 absolute top-0 left-0 z-50 lg:px-[15%] ">
            <div className="max-w-6xl mx-auto rounded-lg p-6 bg-white w-[50rem] ">
                {/* Header */}
                <div className="flex justify-between items-start mb-4 ">
                    <div>
                        <img src={logoB} alt="Logo B" className="h-20 mb-2" />
                        <p className="text-sm font-bold text-[.5rem]">AERB Registration No. 14-AFSXE-2148</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-xl font-bold uppercase ">Quotation</h1>
                    </div>
                    <div className="text-right">
                        <img src={logoA} alt="Logo A" className="h-20 ml-auto mb-2" />
                        <p className="text-sm font-bold text-[.5rem]">NABL Accreditation No TC-9843</p>
                    </div>
                </div>

                {/* Company and Recipient Info */}
                <div className="flex w-full  justify-between mb-4">
                    <div>
                        <table
                            className="text-sm w-full "
                            style={{
                                lineHeight: '1.5rem',
                            }}
                        >
                            {/* <tbody> */}
                            <tr className="text-[.7rem]">
                                <td className="">Date:</td>
                                <td className=" pl-2">22-Nov-2024</td>
                            </tr>
                            <tr className="text-[.7rem]">
                                <td className=" font-bold pb-4">To:</td>
                                <td
                                    className=" pl-2"
                                    style={{
                                        lineHeight: '20px',
                                    }}
                                >
                                    <span className="font-bold">CIVIL HOSPITAL KOTLI</span>
                                    <br />
                                    KOTLI, MANDI, HIMACHAL PRADESH-175003
                                </td>
                            </tr>
                            {/* </tbody> */}
                        </table>
                    </div>
                    <div
                        className=""
                        style={{
                            lineHeight: '17px',
                        }}
                    >
                        <p className="font-bold text-black text-[.7rem]">ANTESO Biomedical (OPC) Pvt. Ltd.</p>
                        <p className="text-[.7rem]">Flat No. 290, 2nd Floor, Block D,</p>
                        <p className="text-[.7rem]">Pocket 7, Sector 6, Rohini,</p>
                        <p className="text-[.7rem]">New Delhi – 110 085, INDIA</p>
                        <p className="text-[.7rem]">Mobile: +91 8470909720 / 8951818690</p>
                        <p className="text-[.7rem]">Email: info@antesobiomedicalopc.com</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mb-4 bg-gray-50 p-2">
                    <table className="text-sm w-full ">
                        {/* <tbody> */}
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">Email:</td>
                            <td className=" pl-2">
                                {' '}
                                <a href="mailto:khalid020288@gmail.com" className="text-blue-600 hover:underline">
                                    khalid020288@gmail.com
                                </a>
                            </td>
                        </tr>
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">Contact:</td>
                            <td className=" pl-2">80917 50188</td>
                        </tr>
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">From:</td>
                            <td className=" pl-2"> Anjana Thakur </td>
                        </tr>
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">Phone</td>
                            <td className=" pl-2"> 9317509720</td>
                        </tr>
                        <tr className="h-5"></tr>
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">Quotation:</td>
                            <td className=" pl-2 font-bold">ANTESO2024110654_Quotation for QA Test and License Renewal of X-Ray Machine_CIVIL HOSPITAL KOTLI, MANDI</td>
                        </tr>
                        <tr className="text-[.7rem]">
                            <td className=" font-bold">Expires:</td>
                            <td className=" pl-2">30 days from above date</td>
                        </tr>
                        {/* </tbody> */}
                    </table>
                </div>

                {/* Items Table */}

                <div className="table-responsive mt-6">
                    <table className="text-[1px]  w-full">
                        <thead>
                            <tr>
                                {acolumns.map((column) => (
                                    <th key={column.key} className={`${column?.class}  bg-blue-300 text-gray-900 font-bold text-[.6rem]`}>
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {aitems.map((item) => (
                                <tr key={item.id} className="">
                                    <td className="px-2 py-1 text-[.6rem] ">{item.type}</td>
                                    <td className="px-2 py-1 text-[.6rem]">{item.id}</td>
                                    <td className="px-2 py-1 text-[.6rem]">{item.title}</td>
                                    <td className="px-2 py-1 text-[.6rem]">{item.services}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem]">{item.quantity}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem]">₹ {item.price}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem]">₹ {item.amount}</td>
                                </tr>
                            ))}
                        </tbody>

                        <thead>
                            <tr>
                                {bcolumns.map((column) => (
                                    <th key={column.key} className={`${column?.class} px-2 py-1  bg-blue-300 text-gray-900 font-bold text-[.6rem]`}>
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {bitems.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-2 py-1 text-[.6rem]">{item.type}</td>
                                    <td className="px-2 py-1 text-[.6rem]">{item.id}</td>
                                    <td className="px-2 py-1 text-[.6rem]">{item.title}</td>
                                    {/* <td className="px-2 py-1 text-[.6rem]">{item.quantity}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem]">{item.price}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem]">{item.amount}</td>
                                    <td className="ltr:text-right rtl:text-left px-2 py-1 text-[.6rem] ">{item.total}</td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-row-reverse  px-4 mt-6">
                    {/* <div></div> */}
                    <div className="w-52 space-y-2">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 text-gray-900 font-bold text-[.6rem]">DISCOUNT%</div>
                            <div className="w-[37%] text-[.7rem] font-bold text-right">{discount}%</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 text-gray-900 font-bold text-[.6rem]">TOTAL</div>
                            <div className="w-[37%] text-[.7rem] font-bold text-right">₹ {totalAmount} </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />

                <div className="mt-4">
                    <h4 className="ml-4 text-sm font-semibold text-gray-800 dark:text-gray-200">Terms & Conditions:</h4>
                    <ul
                        className="list-disc list-outside pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-[.65rem] leading-relaxed"
                        style={{
                            lineHeight: '10px',
                        }}
                    >
                        <li>In case of License renewal, eLora ID and Password need to be provided by you.</li>
                        <li>The quotation applies only to the equipment mentioned above. Charges for any additional parameters will be extra.</li>
                        <li>Repeated Q/A for failed equipment and repeated visits for the same machine will be charged extra.</li>
                        <li>QA reports will be submitted only after bank realization of 100% payment. In urgent cases, a minimum of 24 hours is required to share the QA report.</li>
                        <li>QA reports are valid for 2 years for X-Ray Machines and 5 years for Dental X-Rays.</li>
                        <li>Prices are valid only for the duration of this quotation and are subject to change thereafter.</li>
                        <li>Services will commence within a week of receiving a formal Purchase Order.</li>
                        <li>All payments must be made by DD, e-Transfer, or Cheque payable to “ANTESO Biomedical (OPC) Pvt. Ltd.”</li>
                        <li>Terms of payment: 100% advance payment.</li>
                        <li>Cheques must be couriered by the customer to our registered address.</li>
                        <li>QA tests will follow AERB guidelines. We are not responsible for any machine breakdowns during testing.</li>
                        <li>For institute or RSO registration, OTPs will be sent for verification. Please share them promptly.</li>
                        <li>Please ensure the accuracy of email IDs before sharing, as they will be used as-is and cannot be recovered later.</li>
                        <li className="text-green-600">
                            Share your GST number with the work order if applicable; otherwise, the order will be considered unregistered and no future claims will be entertained.
                        </li>
                    </ul>
                </div>

                <div className=" mt-4 flex justify-between items-end text-xs">
                    <div>
                        <img src={signature} alt="Signature" className="mb-2 h-24" />
                        <div
                            className="space-y-1 "
                            style={{
                                lineHeight: '10px',
                            }}
                        >
                            <p className="text-[.6rem]">
                                <span className="font-medium">A/C No.:</span> 50200007211263
                            </p>
                            <p className="text-[.6rem]">
                                <span className="font-medium">IFSC:</span> HDFC0000711
                            </p>
                            <p className="text-[.6rem]">HDFC BANK PUSHPANJALI ENCLAVE PITAMPURA</p>
                        </div>
                    </div>

                    <div
                        className="text-center"
                        style={{
                            lineHeight: '5px',
                        }}
                    >
                        <p className="font-bold text-[.6rem]">OUR ACCOUNT DETAILS</p>
                        <p className="pb-10 mt-2 font-bold text-[.6rem]">
                            <span className=" ">GST NO:</span> 07AAMCA8142J1ZE
                        </p>
                    </div>

                    <div className="text-right space-y-1">
                        <img src={qrcode} alt="QR Code" className="h-20 mx-auto mb-2" />
                        <table className="h-4 ">
                            <tr
                                style={{
                                    fontSize: '.4rem',
                                }}
                            >
                                <td className="pb-3 text-end">Merchant Name:</td>
                                <td className="w-[7rem] leading-none text-start pl-2">ANTESO BIOMEDICAL PRIVATE LIMITED</td>
                            </tr>
                            <tr
                                style={{
                                    fontSize: '.4rem',
                                }}
                            >
                                <td className="text-end">Mobile Number:</td>
                                <td className="text-start pl-2">8470909720</td>
                            </tr>
                        </table>
                        <div
                            className="text-center text-[.4rem]"
                            style={{
                                lineHeight: '8px',
                            }}
                        >
                            <p>Steps to PAy UPI QR Code </p>
                            <p className="flex justify-center items-center flex-wrap w-[10rem] ">
                                Oppen UPI app <FaAngleRight /> Select Type to Pay <FaAngleRight /> Scan QR Code <FaAngleRight /> Enter Amount
                            </p>
                        </div>

                        <hr className="bg-gray-700 h-[1.5px]" />
                        <div className="">
                            <div className=" w-[7rem] m-auto">
                                <p className="text-left text-[.6rem]">
                                    <span className="font-medium text-[.6rem] ">A/C No:</span> 344305001088
                                </p>
                                <p className="text-left text-[.6rem]">
                                    <span className="font-medium text-[.6rem] ">IFSC Code:</span> ICIC0003443
                                </p>
                                <p className="text-[.6rem] text-left">ICICI BANK ROHINI</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="overflow-x-auto mt-8 text-center"
                    style={{
                        lineHeight: '1rem',
                    }}
                >
                    <p className="text-[.6rem]">
                        For any enquiry contact us{' '}
                        <a href="#" className="text-blue-800">
                            info@antesobiomedicalopc.com or antesobiomedical@gmail.com
                        </a>{' '}
                    </p>
                    <p className="text-[.6rem]">Feel free to call us & Thank you for your enquiry</p>
                </div>
            </div>
        </div>
    );
};

export default ViewQuotation;
