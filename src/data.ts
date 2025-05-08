export const citiesData = [
    {
        id: 1,
        cityName: 'Bangalore',
        stateName: 'Karnataka',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        cityName: 'Mysure',
        stateName: 'Karnataka',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const statesData = [
    {
        id: 1,
        stateName: 'Karnataka',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        stateName: 'Odisha',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const itemsData = [
    {
        id: 1,
        name: 'MRI',
        hsnCode: 'HA123',
        price: '10000',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        name: 'XYZ',
        hsnCode: 'HAL123',
        price: '15000',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const clientsData = [
    {
        id: 1,
        // cID:'c001',
        name: 'Client 1',
        email: 'client1@gmail.com',
        address: 'Hsr layout, Bangalore, Karnataka',
        phone: '9876576876',
        business: 'Business Name',
        gstNo: 'AX123',
    },
    {
        id: 2,
        name: 'Client 2',
        email: 'client2@gmail.com',
        address: 'Majestic, Bangalore, Karnataka',
        phone: '9877876876',
        business: 'Business Name',
        gstNo: 'AX223',
    },
];

export const institutedata = [
    {
        id: 1,
        eloraID: 'ELR001',
        instPassword: 'Pass@123',
        instEmail: 'info@greenfield.edu',
        instPhone: '+91-9876543210',
    },
]

export const rsodetails = [
    {
        rsoID: 'RSO001',
        rsoPassword: 'Rso@1234',
        rsoEmail: 'rso.northzone@example.com',
        rsoPhone: '+91-9876543210',
        rpID: 'RP1001',
        tldBadge: 'TLD-NZ-001',
        rsoValidity: '2025-12-31'
    },
]

export const equipmentDetails = [
    {
        machineType: 'CT SCAN',
        model: 'HISPEED LXI',
        make: 'GE',
        serialNo: 'YM0625',
        equipID: 'G-XR-213426',
        qaValidity: '21-04-2027',
        licenseValidity: '25-04-2030',
        status: 'working',
        rawaDataAttachment: 'ATTACHED',
        qaReportAttachment: 'ATTACHED',
        licenceAttachment: 'ATTACHED'
    },
    {
        machineType: 'MRI',
        model: 'Signa Explorer 1.5T',
        make: 'GE',
        serialNo: 'MR8934',
        equipID: 'G-MR-654321',
        qaValidity: '10-11-2026',
        licenseValidity: '15-12-2029',
        status: 'working',
        rawaDataAttachment: 'ATTACHED',
        qaReportAttachment: 'ATTACHED',
        licenceAttachment: 'ATTACHED'
    },
    {
        machineType: 'X-RAY',
        model: 'DRX-Revolution',
        make: 'Carestream',
        serialNo: 'XR4421',
        equipID: 'C-XR-889977',
        qaValidity: '05-08-2025',
        licenseValidity: '12-09-2028',
        status: 'under maintenance',
        rawaDataAttachment: 'ATTACHED',
        qaReportAttachment: 'PENDING',
        licenceAttachment: 'ATTACHED'
    }
];


export const engineersData = [
    {
        id: 1,
        name: 'Engineer 1',
        email: 'engineer1@gmail.com',
        phone: '6785436787',
        empId: 'ENG0001',
        role: 'TECHNICIAN',
        tools: ['tool1', 'tool2'],
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        name: 'Engineer 2',
        email: 'engineer2@gmail.com',
        phone: '7785436787',
        empId: 'ENG0002',
        role: 'TECHNICIAN',
        tools: ['tool10', 'tool2'],
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const toolsData = [
    {
        id: 1,
        nomenclature: 'Digital Multimeter',
        manufacturer: 'Fluke',
        model: '87V',
        srNo: 'FLK87V-001',
        calibrationCertificateNo: 'CAL2023-001',
        calibrationDate: '2023-01-15',
        calibrationValidTill: '2024-01-14',
        range: '0-1000V',
        toolID: 'T001',
    },
    {
        id: 2,
        nomenclature: 'Oscilloscope',
        manufacturer: 'Keysight',
        model: 'DSOX1204A',
        srNo: 'KEY1204-002',
        calibrationCertificateNo: 'CAL2023-002',
        calibrationDate: '2023-02-20',
        calibrationValidTill: '2024-02-19',
        range: '0-200MHz',
        toolID: 'T002',
    },
];
export const dealersAndManufacturers = [
    // {
    //     id: 1,
    //     customerName: 'Customer 1',
    //     city: 'Bangalore',
    //     type: 'Dealer',
    //     machineAndPrice: ['Xerox-8000', 'scanning-5500'],
    // },
    // {
    //     id: 2,
    //     customerName: 'Customer 2',
    //     city: 'Bangalore',
    //     type: 'Dealer',
    //     machineAndPrice: ['MRI-8000'],
    // },
    {
        id: 1,
        hospitalName: 'Apollo Hospitals',
        address: '123 Medical Street, Bangalore',
        contactPersonName: 'Dr. Ramesh Kumar',
        phone: '9876543210',
        email: 'ramesh.kumar@apollo.com',
        procurementNumber: 'PROC-2023-001',
        procurementExpiryDate: '2024-12-31',
        partyCode: 'APL-001',
        branch: 'Bangalore Central',
    },
    {
        id: 2,
        hospitalName: 'Fortis Healthcare',
        address: '456 Health Avenue, Mumbai',
        contactPersonName: 'Dr. Priya Sharma',
        phone: '8765432109',
        email: 'priya.sharma@fortis.com',
        procurementNumber: 'PROC-2023-002',
        procurementExpiryDate: '2025-06-30',
        partyCode: 'FTS-002',
        branch: 'Mumbai West',
    },
];
export const servicesData = [
    {
        id: 1,
        serviceType: 'Type 1',
        serviceName: 'Service Name',
        status: { tooltip: 'Active', color: 'success' },
    },
    {
        id: 2,
        serviceType: 'Type 2',
        serviceName: 'Service Name',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
];
export const courierCompanies = [
    {
        id: 1,
        companyName: 'XYZ',
        status: { tooltip: 'Deactive', color: 'danger' },
    },
    {
        id: 2,
        companyName: 'ABC',
        status: { tooltip: 'Active', color: 'success' },
    },
];
// export const enquiriesData = [
//     {
//         id: 1,
//         Hospitalname:"Apollo Hospital",
//         Fulladdress:'123 Medical Street, Health Lane',
//         City:"Bangalore",
//         State:"Karnataka",
//         Pincode:"560001",
//         Contactperson:"Dr. Ramesh Kumar",
//         Email:"ramesh.kumar@apollo.com",
//         Phone:"9876543210",
//         Designation:"Chief Medical Officer",
//         status: 'Accept' ,
//         // urgency: '',
//     },
//     {
//         id: 2,
//         Hospitalname: "Fortis Healthcare",
//         Fulladdress: "456 Wellness Road, Green Park",
//         City: "Delhi",
//         State: "Delhi",
//         Pincode: "110016",
//         Contactperson: "Dr. Anita Sharma",
//         Email: "anita.sharma@fortis.com",
//         Phone: "9123456780",
//         Designation: "Senior Surgeon",
//         status:  "Pending" ,
//     },
//     {
//         id: 3,
//         Hospitalname: "Manipal Hospital",
//         Fulladdress: "789 Recovery Ave, Whitefield",
//         City: "Bangalore",
//         State: "Karnataka",
//         Pincode: "560066",
//         Contactperson: "Dr. Praveen Rao",
//         Email: "praveen.rao@manipal.com",
//         Phone: "9012345678",
//         Designation: "Medical Director",
//         status:  "Rejected",
//     },
//     {
//         id: 4,
//         Hospitalname: "Max Super Specialty",
//         Fulladdress: "101 Health Blvd, Sector 19",
//         City: "Chandigarh",
//         State: "Punjab",
//         Pincode: "160019",
//         Contactperson: "Dr. Neha Verma",
//         Email: "neha.verma@maxhealth.com",
//         Phone: "9988776655",
//         Designation: "Radiologist",
//         status:  "Created",
//     },
// ];


export const enquiriesData = [
    {
        id: 1,
        hName: 'Apollo Hospital',
        fullAddress: '123 Medical Street, Health Lane',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        contactperson: 'Dr. Ramesh Kumar',
        email: 'ramesh.kumar@apollo.com',
        phone: '9876543210',
        designation: 'Chief Medical Officer',
        quotation:'approved',
        machineType:'A-arm',
        quantity:'2',
        work:['Service' , 'Decommissioning'],
        aditionalServices:[{'INSTITURE REGISTRATION':'service 1a'},{'LEAD SHEET':'service 1b'}],
        expires:'30 days from above date'
    },
    {
        id: 2,
        hName: 'Fortis Healthcare',
        fullAddress: '456 Wellness Road, Green Park',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110016',
        contactperson: 'Dr. Anita Sharma',
        email: 'anita.sharma@fortis.com',
        phone: '9123456780',
        designation: 'Senior Surgeon',
        quotation:'create'
    },
    {
        id: 3,
        hName: 'Manipal Hospital',
        fullAddress: '789 Recovery Ave, Whitefield',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560066',
        contactperson: 'Dr. Praveen Rao',
        email: 'praveen.rao@manipal.com',
        phone: '9012345678',
        designation: 'Medical Director',
        quotation:'created'
    },
    {
        id: 4,
        hName: 'Max Super Specialty',
        fullAddress: '101 Health Blvd, Sector 19',
        city: 'Chandigarh',
        state: 'Punjab',
        pincode: '160019',
        contactperson: 'Dr. Neha Verma',
        email: 'neha.verma@maxhealth.com',
        phone: '9988776655',
        designation: 'Radiologist',
        quotation:'create'
    },
];